const path=require('path')

module.exports = {
   webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {}
          /*
          modules: {
              //exportOnlyLocals: true,
            },
          },*/
            //modules:{
            //  mode:'global',
            //},
            //localIdentName:"[name]__hello_[local]__[hash:base64:5]"
        },
        {
          loader:'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                //path.resolve(__dirname, '../node_modules'), // Already default
                path.resolve(__dirname, '../src')
              ]
            }
          }
        }
    ],
      include: path.resolve(__dirname, '../..')
    });

    // Return the altered config
    return config;
  },

  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
     {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    },
    'storybook-addon-themes'
  ],
  reactOptions: {
    fastRefresh: true,
  }
}
