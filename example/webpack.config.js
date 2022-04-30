const path = require('path');
const fs = require('fs');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const { resolver } = require('./metro.config');

const node_modules = path.resolve(__dirname, '../', 'node_modules');
const packages = path.resolve(__dirname, '../', 'packages');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.context = path.resolve(__dirname, '../');

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    include: /(packages|example)\/.+/,
    exclude: /node_modules/,
    use: 'babel-loader',
  });

  config.resolve.plugins = config.resolve.plugins.filter(
    (p) => !(p instanceof ModuleScopePlugin)
  );

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native': path.join(node_modules, 'react-native-web'),
    'react-native-web': path.join(node_modules, 'react-native-web'),
  });

  fs.readdirSync(packages)
    .filter((name) => !name.startsWith('.'))
    .forEach((name) => {
      config.resolve.alias[`@monorepo-ui/${name}`] = path.resolve(
        packages,
        name,
        require(`../packages/${name}/package.json`).source
      );
    });

  return config;
};
