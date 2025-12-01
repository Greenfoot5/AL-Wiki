import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";
import rehypeSkeleton from "rehype-skeletontypography";

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],
			layout: {
				_: join(__dirname, '/src/routes/updates/post.svelte'),
			},
			smartypants: {
				ellipses: false,
				dashes: false,
			},
            rehypePlugins: [rehypeSkeleton]
		}),
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	}
};

export default config;
