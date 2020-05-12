const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const sassWatch = require('./_includes/sass-watch');
const scMeetupDetails = require('./_includes/shortcodes/meetup-details');
const scVideoPlayer = require('./_includes/shortcodes/video-player');
const filterFullDate = require('./_includes/filters/full-date');
const filterRegexReplace = require('./_includes/filters/regex-replace');

/**
 * Add date properties to collections.
 *
 * @param  {object}   posts   Collection to add date properties to.
 * @return {object}           Augmented posts collection.
 */
const addData = (posts) => posts.map((post) => {
  const stat = fs.statSync(post.inputPath) || {};

  post.dateCreated = stat.birthtime;
  post.dateModified = stat.mtime;

  return post;
});

module.exports = (eleventyConfig) => {
  // Watch Sass directory for styling changes.
  // Works only in dev mode. Though it throws and error and then continues on.
  if (process.env.ELEVENTY_ENV === 'dev') {
    sassWatch('./_sass/_main.scss', './_site/assets/css/main.css');
  }

  // PLUGIN: RSS feed
  eleventyConfig.addPlugin(pluginRss);

  // PASSTHRU: Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('assets');

  // COLLECTION: Create meetup collection.
  eleventyConfig.addCollection('meetups', (collection) => {
    const posts = collection.getFilteredByGlob('./_meetups/**');

    return addData(posts);
  });

  // COLLECTION: Create post collection.
  eleventyConfig.addCollection('posts', (collection) => {
    const posts = collection.getFilteredByGlob('./_posts/**');

    return addData(posts);
  });

  // SHORTCODE: Format meeting details message block.
  eleventyConfig.addShortcode('meetupDetails', scMeetupDetails);

  // SHORTCODE: Embed video players for event replay.
  eleventyConfig.addShortcode('videoPlayer', scVideoPlayer);

  // FILTER: Convert dates to MMMM D, YYYY format.
  eleventyConfig.addFilter('fullDate', filterFullDate);

  // FILTER: Replace text with regex capabilities.
  eleventyConfig.addFilter('regexReplace', filterRegexReplace);

  // FILTER: Limit array length (https://gist.github.com/jbmoelker/9693778)
  eleventyConfig.addFilter('limitTo', (input, limit) => {
    if (typeof limit !== 'number') {
      return input;
    }

    if (typeof input === 'string') {
      if (limit >= 0) {
        return input.substring(0, limit);
      }

      return input.substring(limit);
    }
    if (Array.isArray(input)) {
      const minLimit = Math.min(limit, input.length);

      if (minLimit >= 0) {
        return input.slice(0, minLimit);
      }

      return input.slice(input.length + minLimit, input.length);
    }

    return input;
  });

  // BROWSERSYNBC: add ability to see 404.html in dev mode
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
      'njk',
      'liquid',
      'md',
      'html',
    ],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
