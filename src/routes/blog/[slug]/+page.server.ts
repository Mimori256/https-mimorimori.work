import fs from 'fs';
import matter from 'gray-matter';

export async function load(params) {
	const slug = params.params.slug;
	const markdownPath = `posts/${slug}.md`;

	try {
		const markdown = fs.readFileSync(markdownPath).toString();
		const parsedMarkdown = matter(markdown);

		return {
			metadata: parsedMarkdown.data,
			content: parsedMarkdown.content
		};
	} catch (e) {
		// Return null data if the file doesn't exist
		return { metadeta: {}, content: '' };
	}
}
