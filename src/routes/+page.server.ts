import fs from 'fs';
import matter from 'gray-matter';
import type ArticleMetadata from './types/ArticleMetadata';

async function fetchArticlesMetadata(files: string[]): Promise<ArticleMetadata[]> {
	const metadataList = files.map((file) => {
		const markdown = fs.readFileSync(`./posts/${file}`).toString();
		const parsedMarkdown = matter(markdown);
		return parsedMarkdown.data as ArticleMetadata;
	});
	return metadataList;
}

const sortMetadataByDate = (metadataList: ArticleMetadata[]) => {
	const sortedList = metadataList.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateA.getTime() - dateB.getTime();
	});

	return sortedList.reverse();
};

export async function load() {
	// Fetch all the files in the articles directory
	const files = fs.readdirSync('./posts/');
	const slugs = files.map((file) => file.replace(/\.md$/, ''));
	const metadataList: ArticleMetadata[] = await fetchArticlesMetadata(files);
	const sortedList = sortMetadataByDate(metadataList);
	return {
		metadataList: sortedList
	};
}
