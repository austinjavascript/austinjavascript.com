const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, className, outputFormat = 'jpeg') => {
  const stats = await Image(src, {
    cacheDuration: '12w',
    formats: [outputFormat],
    outputDir: '_site/assets/avatar/',
    widths: [96],
  });

  const classAttr = className ? `class="${className}"` : '';

  const props = stats[outputFormat].pop();

  if (alt === undefined) {
    throw new Error(`Missing ALT attribute from: ${src}`);
  }

  return `<img ${classAttr} src="${props.outputPath.replace('_site', '')}" alt="${alt}" loading="lazy">`;
};
