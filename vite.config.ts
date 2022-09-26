import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const hmr: any = () => ({
  name: 'hmr',
  enforce: 'post',
  // HMR
  handleHotUpdate({ file, server }: any) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      console.log('reloading json file...');

      server.ws.send({
        type: 'full-reload',
        path: '*',
      });
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2020',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  plugins: [react({ fastRefresh: true }), hmr()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@client': path.resolve(__dirname, './src/client'),
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@constance': path.resolve(__dirname, './src/constance'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});
