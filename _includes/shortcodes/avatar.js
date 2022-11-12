const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, className, outputFormat = 'jpeg') => {
  if (alt === undefined) {
    throw new Error(`Avatar: missing ALT attribute from: ${src}`);
  }

  const classAttr = className ? `class="${className}"` : '';

  try {
    let metadata = await Image(src, {
      cacheOptions: {
        // renew img cache every 12 weeks
        duration: '12w',
        // add img cache to version control so GitHub Pages doesn't lose people pics
        // from old links (e.g., twitter) that have long since expired
        directory: '_cache',
      },
      formats: [outputFormat],
      urlPath: '/assets/avatar/',
      outputDir: '_site/assets/avatar/',
      widths: [96],
    });

    let data = metadata.jpeg[metadata.jpeg.length - 1];

    return `<img ${classAttr} src="${data.url}" alt="${alt}" loading="lazy" decoding="async">`;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Avatar: eleventy-img:', err);

    // load empty img src (as placeholder)
    return `<img ${classAttr} src="" alt="${alt}">`;
  }
};
