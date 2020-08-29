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
    const sizes = '(max-width: 400px) 400px, (max-width: 800px) 800px, 100vw';
    const sourceBlock = Object.values(stats).map((imageFormat) => `<source type="image/${imageFormat[0].format}" srcset="${imageFormat.map((entry) => `${entry.url} ${entry.width}w`).join(', ')}" sizes="${sizes}">`).join('\n');

    return `<picture class="image">
      ${sourceBlock}
      <img src="${lowestSrc.url}" width="${lowestSrc.width}" height="${lowestSrc.height}" alt="${alt}" loading="lazy">`;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Responsive Image: eleventy-img error:', err);

    // load empty img src (as placeholder)
    return `<img src="" alt="${alt}" loading="lazy">`;
  }
};
