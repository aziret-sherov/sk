import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  build: {
    target: 'esnext', // Set build target to modern browsers
    outDir: 'dist', // Directory to output built files
    assetsDir: 'assets', // Directory within outDir to nest generated assets
    sourcemap: false, // Set to true if you need sourcemaps for debugging
    minify: 'esbuild', // Use 'esbuild' for faster minification
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})
