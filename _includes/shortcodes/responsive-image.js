const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, outputFormat = 'jpeg') => {
  if (alt === undefined) {
    throw new Error(`Responsive Image: missing ALT attribute from: ${src}`);
  }

  try {
    const stats = await Image(src, {
      formats: [outputFormat],
      urlPath: '/assets/img/',
      outputDir: '_site/assets/img/',
      widths: [400, 800, null],
    });

    const lowestSrc = stats[outputFormat][0];
    const srcset = Object.values(stats).map((imageFormat) => `${imageFormat.map((entry) => `${entry.url} ${entry.width}w`).join(', ')}`).join('\n');

    return `<img src="${lowestSrc.url}" srcset="${srcset}" width="${lowestSrc.width}" height="${lowestSrc.height}" alt="${alt}" loading="lazy">`;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Responsive Image: eleventy-img error:', err);

    // load empty img src (as placeholder)
    return `<img src="" alt="${alt}" loading="lazy">`;
  }
};
