import path from "node:path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {
              },
            },
          ],
        }, {
          test: /\.s[ac]ss$/,
          sideEffects: true,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {
                importLoaders: 2,
              },
            },
            require.resolve("resolve-url-loader"),
            {
              loader: require.resolve("sass-loader"),
              options: {
                // Want to add more Sass options?
                // Read more here: https://webpack.js.org/loaders/sass-loader/#options
                implementation: require.resolve("sass"),
                sourceMap: true,
                sassOptions: {},
              },
            },
          ],
        }],
      },
    }),
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (conf) => {
    return {
      ...conf,
      resolve: {
        ...conf.resolve,
        alias: {
          "~": path.resolve(__dirname, "../src/"),
        },
      },
    };
  },

  docs: {},

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
