import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';

import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true
	}
});
