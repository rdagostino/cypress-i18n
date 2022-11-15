const path = require('path');
const { i18n } = require('./next-i18next.config');

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

function cssLoaderOptions(modules) {
  const { ...others } = modules; // Need to delete getLocalIdent else localIdentName doesn't work
  return {
    ...others,
    localIdentName: '[hash:base64:6]',
    exportLocalsConvention: 'camelCaseOnly',
    mode: 'local',
  };
}

/** @type {import('next').NextConfig} */
(
  module.exports = {
    i18n,
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
      prependData: `@import "resources.scss";`,
    },
    webpack: (config) => {
      const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === 'object');

      if (oneOf) {
        // Find the module which targets *.scss|*.sass files
        const moduleSassRule = oneOf.oneOf.find((rule) =>
          regexEqual(rule.test, /\.module\.(scss|sass)$/)
        );

        if (moduleSassRule) {
          // Get the config object for css-loader plugin
          const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'));
          if (cssLoader) {
            cssLoader.options = {
              ...cssLoader.options,
              modules: cssLoaderOptions(cssLoader.options.modules),
            };
          }
        }
      }

      return config;
    },
  }
);
