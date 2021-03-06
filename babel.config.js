function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      '@loadable/babel-plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx'],
          alias: {
            '~': '.',
            '@src': './src',
            '@components': './src/components',
            '@pages': './src/pages',
            '@store': './src/store',
            '@reducers': './src/store/reducers',
            '@actions': './src/store/actions',
            '@util': './src/util',
            '@lib': './src/lib',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
