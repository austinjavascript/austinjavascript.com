const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const scMeetupDetails = require('./_includes/shortcodes/meetup-details');
const filterFullDate = require('./_includes/filters/full-date');

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

  // NUNJUCKS SHORTCODE: Format meeting details message block.
  eleventyConfig.addShortcode('meetupDetails', scMeetupDetails);

  // TRANSFORM: Add appropriate TARGET and REL to external links.
  eleventyConfig.addTransform('external-link-rel', (content) => {
    const desired = {
      target: 'target="_blank"',
      rel: 'rel="nofollow noopener noreferrer"',
    };
    // Find all external links--lazily we'll assume those start with https.
    const reLinkMatch = /<a .*href="https?:\/\/[^"]+".*?>/g;
    // Find target and rel attributes.
    const reTarget = /.*target="([^"]+)".*/;
    const reRel = /.*rel="([^"]+)".*/;

    return content.replace(reLinkMatch, (linkMatch) => {
      const hasTarget = reTarget.test(linkMatch);

      if (hasTarget && reRel.test(linkMatch)) {
        return linkMatch;
      } if (hasTarget) {
        return linkMatch.replace('>', ` ${desired.rel}>`);
      }

      return linkMatch.replace('>', ` ${desired.target} ${desired.rel}>`);
    });
  });

  // FILTER: Convert dates to MMMM D, YYYY format.
  eleventyConfig.addFilter('fullDate', filterFullDate);

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
