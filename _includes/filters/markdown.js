const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

module.exports = (content) => {
  if (content) {
    return md.render(content);
  }

  return content;
};
