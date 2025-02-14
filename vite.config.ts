/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), styleX(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/testing/vitest-setup.ts'],
    // スナップショットの保存先を設定
    resolveSnapshotPath: (path, extension) => {
      return path.replace('/src/', '/__snapshots__/') + extension;
    },
  },
});
