import type { StorybookConfig } from '@storybook/react-vite';
import dotenv from 'dotenv';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview'
  },
  viteFinal: (config) => mergeConfig(config, {
    plugins: [
      tsconfigPaths(),
      svgr({ include: '**/*.svg' })
    ],
    define: {
      __IS_DEV__: true,
      __WALLET_CONNECT_ID__: JSON.stringify(process.env.WALLET_CONNECT_ID),
      __LOCIZE_API_KEY__: JSON.stringify(process.env.LOCIZE_API_KEY),
      __LOCIZE_PROJECT_ID__: JSON.stringify(process.env.LOCIZE_PROJECT_ID),
      global: {},
      'process.env': {},
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "../src/app/styles/media.scss";'
        }
      }
    }
  })
};
export default config;
