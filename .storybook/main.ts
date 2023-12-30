import type { StorybookConfig } from "@storybook/nextjs";

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: (config) => {
    config.resolve!.plugins = config.resolve!.plugins || [];
    config.resolve!.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );

    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
