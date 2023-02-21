/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'react-quick-modal',
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'react',
					'react-dom': 'ReactDOM',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [react(), dts(), cssInjectedByJsPlugin()],
	test: {
		globals: true,
		environment: 'jsdom',
		reporters: 'verbose',
		setupFiles: './setupTests.ts',
	},
});
