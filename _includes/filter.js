module.exports = {
  /**
   * Reverse array without mutating the original.
   * (The 'reverse' filter in LiquidJS v6 mutates the original array.)
   *
   * @param   {Array}  collection   Array to be reversed.
   *
   * @return  {Array}  Reversed array.
   */
  flip: (collection) => {
    if (!Array.isArray(collection)) return collection;

    return [...collection].reverse();
  },

  /**
   * Parse Markdown content to HTML.
   *
   * @param   {string}  content   Incoming content (expecting Markdown).
   *
   * @return  {string}  Content rendered as HTML.
   */
  markdown: (content) => {
    const md = require('markdown-it')({
      html: true,
      linkify: true,
      typographer: true,
    });

    if (content) {
      return md.render(content);
    }

    return '';
  },

  /**
   * Allow regex in replace filter. Global flag set by default,
   *
   * @param {string}  content     Content to search/replace.
   * @param {string}  rePattern   RegExp patter to use.
   * @param {string}  replacement Replacement text.
   * @return {string}             Replaced content.
   *
   */
  regexReplace: (content, rePattern, replacement) => {
    if (replacement === undefined || rePattern === undefined) return content;

    const re = new RegExp(rePattern, 'g');


    return content.replace(re, replacement);
  },
};
