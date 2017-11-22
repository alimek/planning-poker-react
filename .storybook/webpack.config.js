/*const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
  });
  config.resolve.extensions.push('.md');

  return config;
};*/

/*const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
}
*/

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
}
