const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

/**
 * Parse Markdown content to HTML.
 *
 * @param   {string}  content   Incoming content (expecting Markdown).
 *
 * @return  {string}  Content rendered as HTML.
 */
module.exports = (content) => {
  if (content) {
    return md.render(content);
  }

  return content;
};
