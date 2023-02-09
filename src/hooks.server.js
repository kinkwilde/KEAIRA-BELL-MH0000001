import { minify } from 'html-minifier-terser';

const minificationOptions = {
	collapseInlineTagWhitespace: true,
	collapseWhitespace: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeComments: false,
	sortAttributes: true,
	sortClassName: true
};

export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => minify(html, minificationOptions)
	});

	return response;
}
