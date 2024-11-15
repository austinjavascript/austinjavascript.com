const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');

/**
 * Generate and save CSS.
 *
 * @param {string} _scssPath Path to SCSS src file.
 * @param {string} _cssPath  Path to CSS dist files.
 */
const generateCss = (_scssPath, _cssPath) => {
  // Encapsulate rendered css from _scssPath into renderedCss variable
  const renderedCss = sass.renderSync({ file: _scssPath });

  // Then write result css string to _cssPath file
  fs.writeFile(_cssPath, renderedCss.css.toString(), (writeErr) => {
    if (writeErr) throw writeErr;

    // eslint-disable-next-line no-console
    console.log(`CSS file saved: ${_cssPath}`);
  });
};

module.exports = (scssPath, cssPath) => {
  // If cssPath directory doesn't exist...
  if (!fs.existsSync(path.dirname(cssPath))) {
    // eslint-disable-next-line no-console
    console.log(`Creating new CSS directory: ${path.dirname(cssPath)}/`);

    // Create cssPath directory recursively
    fs.mkdir(path.dirname(cssPath), { recursive: true }, (mkdirErr) => {
      if (mkdirErr) throw mkdirErr;

      // eslint-disable-next-line no-console
      console.log('CSS directory created.');

      generateCss(scssPath, cssPath);
    });
  }

  // Compile CSS on startup
  generateCss(scssPath, cssPath);

  // Watch for changes to scssPath directory...
  fs.watch(path.dirname(scssPath), (evType, filename) => {
    // eslint-disable-next-line no-console
    console.log(`SCSS file changed: ${path.dirname(scssPath)}/${filename}`);

    generateCss(scssPath, cssPath);
  });
};
