
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [
      react(), 
      tsconfigPaths(), 
      svgr({
        exportAsDefault: true
      }),
      // allowedHostsPlugin({
      //   hosts: ['vbalance.lc', 'dev-front.vbalance.net', 'preprod.vbalance.net']
      // })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/app/styles/media.scss";'
        }
      }
    },
    build: {
      outDir: "build",
      sourcemap: false,
    },
    server: {
      port: 3000,
    },
    define: {
      __IS_DEV__: JSON.stringify(isDev),
      __LOCIZE_API_KEY__: JSON.stringify(process.env.LOCIZE_API_KEY),
      __LOCIZE_PROJECT_ID__: JSON.stringify(process.env.LOCIZE_PROJECT_ID),
      __WALLET_CONNECT_ID__: JSON.stringify(process.env.WALLET_CONNECT_ID),
      __API_URL__: JSON.stringify(process.env.API_URL),
      __WEB3_NETWORK__: JSON.stringify(process.env.WEB3_NETWORK),
      __PRICE_TICKET__: JSON.stringify(process.env.PRICE_TICKET),
      __CODE_AUTH_TEST__: JSON.stringify(process.env.CODE_AUTH_TEST), 
      'process.env': JSON.stringify(process.env)
    }
  }
});