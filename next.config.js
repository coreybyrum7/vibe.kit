const path = require('path')
const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
const withReactSvg = require('next-react-svg');

module.exports = withSass(withFonts(withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  cssModules: true,
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        enforce: 'pre',
        test: /.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/sass/global.scss'],
        },
      }
    );
    return config;
  },
})));
