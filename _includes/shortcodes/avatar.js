const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, className, outputFormat = 'jpeg') => {
  if (alt === undefined) {
    throw new Error(`Avatar: missing ALT attribute from: ${src}`);
  }

  const classAttr = className ? `class="${className}"` : '';

  try {
    const stats = await Image(src, {
      cacheOptions: {
        // renew img cache every 12 weeks
        duration: '12w',
        // version control the img cache so GitHub Pages doesn't start from scratch
        directory: '_cache',
      },
      formats: [outputFormat],
      urlPath: '/assets/avatar/',
      outputDir: '_site/assets/avatar/',
      widths: [96],
    });

    const props = stats[outputFormat].pop();

    return `<img ${classAttr} src="${props.url}" alt="${alt}" loading="lazy">`;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Avatar: eleventy-img error:', err);

    // load empty img src (as placeholder)
    return `<img ${classAttr} src="" alt="${alt}" loading="lazy">`;
  }
};
