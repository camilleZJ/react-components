module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
      // presets: [require.resolve('babel-preset-react-app')]
    },
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
