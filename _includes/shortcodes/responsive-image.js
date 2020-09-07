const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, outputFormats = 'jpeg') => {
  if (alt === undefined) {
    throw new Error(`Responsive Image: missing ALT attribute from: ${src}`);
  }

  const sizes = '(max-width: 400px) 400px, (max-width: 800px) 800px, 100vw';
  const formats = outputFormats.split(',');

  try {
    const stats = await Image(src, {
      formats,
      urlPath: '/assets/img/',
      outputDir: '_site/assets/img/',
      widths: [400, 800, null],
    });

    const defaultSrc = stats[formats.slice(-1)][0];
    const sourceBlock = Object.values(stats).map((imageFormat) => `<source
      type="image/${imageFormat[0].format}"
      srcset="${imageFormat.map((entry) => `${entry.url} ${entry.width}w`).join(', ')}"
      sizes="${sizes}">`)
      .join('\n');
    const imgBlock = `<img
      src="${defaultSrc.url}"
      width="${defaultSrc.width}"
      height="${defaultSrc.height}"
      alt="${alt}"
      loading="lazy">`;

    return `<picture class="image">
        ${sourceBlock}
        ${imgBlock}
      </picture>`;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Responsive Image: eleventy-img error:', err);

    // load empty img src (as placeholder)
    return `<img src="" alt="${alt}" loading="lazy">`;
  }
};
