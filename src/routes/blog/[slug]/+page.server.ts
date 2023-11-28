import fs from 'fs';
import matter from 'gray-matter';

async function getLocalMarkdown(slug: string) {
	const markdownPath = `blog/${slug}.md`;

	try {
		const markdown = fs.readFileSync(markdownPath, 'utf8');
		const parsedMarkdown = matter(markdown);

		return {
			metadata: parsedMarkdown.data,
			content: parsedMarkdown.content
		};
	} catch (e) {
		return { metadata: {}, content: '' };
	}
}

export async function load(params) {
	const slug = params.params.slug;

	if (slug.startsWith('test-')) {
		return getLocalMarkdown(slug.replace('test-', ''));
	}
	const url = `https://raw.githubusercontent.com/Mimori256/https-mimorimori.work/main/blog/${slug}.md`;
	// fetch markdown content from url
	const response = await fetch(url);
	const markdown = await response.text();
	const parsedMarkdown = matter(markdown);
	return { metadata: parsedMarkdown.data, content: parsedMarkdown.content };
}
