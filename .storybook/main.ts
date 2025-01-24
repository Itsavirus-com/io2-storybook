import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      }
    },
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: { skipPropsWithoutDoc: true },
    },
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      // Update CSS handling
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, '../node_modules'),
                  path.resolve(__dirname, '../stories/assets/sass')
                ],
              },
            },
          },
        ],
      });

      // Add TypeScript handling
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      });

      // Add font handling
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      });
    }

    // Ensure TypeScript paths are resolved
    if (config.resolve) {
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
    }
    return config;
  },
  staticDirs: ['../stories/assets'],
  docs: {
    autodocs: "tag",
  },
};

export default config;