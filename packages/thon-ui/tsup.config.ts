import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react'],
});
