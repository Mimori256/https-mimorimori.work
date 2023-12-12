import fs from 'fs';
import matter from 'gray-matter';
import addHeader from './addHeader';
import addFootnote from './addFootnote';

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
	try {
		const response = await fetch(url);
		const markdown = await response.text();
		const parsedMarkdown = matter(markdown);

		if (parsedMarkdown.content === '404: Not Found') {
			return { metadata: {}, content: '' };
		}
		let content = addHeader(parsedMarkdown.content);
		content = addFootnote(content);
		return { metadata: parsedMarkdown.data, content: content };
	} catch (e) {
		return { metadata: {}, content: '' };
	}
}
