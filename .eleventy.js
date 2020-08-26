const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const htmlmin = require('html-minifier');
const sassWatch = require('./_includes/sass-watch');
const filter = require('./_includes/filter');
const scAvatar = require('./_includes/shortcodes/avatar');
const scSocialSvg = require('./_includes/shortcodes/social-svg');
const scMeetupDetails = require('./_includes/shortcodes/meetup-details');
const scVideoPlayer = require('./_includes/shortcodes/video-player');

/**
 * Add date properties to collections.
 *
 * @param  {object}   posts   Collection to add date properties to.
 * @return {object}           Augmented posts collection.
 */
const addFileDates = (posts) => posts.map((post) => {
  if (!(post && post.inputPath)) return post;

  const stat = fs.statSync(post.inputPath) || {};
  const newPost = post;

  newPost.dateCreated = stat.birthtime;
  newPost.dateModified = stat.mtime;

  return newPost;
});

module.exports = (eleventyConfig) => {
  // Watch Sass directory for styling changes.
  // Works only in dev mode. Though it throws and error and then continues on.
  if (process.env.ELEVENTY_ENV === 'dev') {
    sassWatch('./_sass/_main.scss', './_site/assets/css/main.css');
  }

  // PASSTHRU: Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('CNAME');

  // COLLECTION: Create meetup collection.
  eleventyConfig.addCollection('meetups', (collection) => {
    const posts = collection.getFilteredByGlob('./_meetups/**');

    return addFileDates(posts);
  });

  // COLLECTION: Create post collection.
  eleventyConfig.addCollection('posts', (collection) => {
    const posts = collection.getFilteredByGlob(['./_meetups/**', './_posts/**']);

    return addFileDates(posts);
  });

  // FILTER: Reverse array without mutating original.
  eleventyConfig.addFilter('flip', filter.flip);

  // FILTER: Run content thru Markdown-it.
  eleventyConfig.addFilter('markdown', filter.markdown);

  // FILTER: Replace text with regex capabilities.
  eleventyConfig.addFilter('regexReplace', filter.regexReplace);

  // SHORTCODE: Format meeting details message block.
  eleventyConfig.addShortcode('meetupDetails', scMeetupDetails);

  // SHORTCODE: Embed video players for event replay.
  eleventyConfig.addShortcode('videoPlayer', scVideoPlayer);

  // SHORTCODE: Resize and cache images.
  eleventyConfig.addLiquidShortcode('avatar', scAvatar);

  // SHORTCODE: Add social icon SVG block.
  eleventyConfig.addLiquidShortcode('socialSvg', scSocialSvg);

  // PLUGIN: RSS feed
  eleventyConfig.addPlugin(pluginRss);

  // TRANSFORM: minify HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (typeof outputPath === 'string' && outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      return minified;
    }

    return content;
  });

  // BROWSERSYNC: add ability to see 404.html in dev mode
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready(err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          // Provides the 404 content without redirect.

          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: './',
      output: './_site',
      layouts: './_layouts',
    },
    templateFormats: [
      'liquid',
      'njk',
      'md',
      'html',
    ],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
  };
};
