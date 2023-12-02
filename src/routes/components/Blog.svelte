<script lang="ts">
	import Link from './Link.svelte';
	import articles from '$lib/articles.json';
	import { MAX_ONE_PAGE_ARTICLES } from '../consts/consts';

	let articleList = articles.slice(0, MAX_ONE_PAGE_ARTICLES);
</script>

<div class="mt-12 mb-6 sm:mb-0">
	<h1 class="text-xl font-bold mb-6">書きもの+ブログ</h1>
	{#each articleList as article}
		<li>
			<Link href={article.link} text={article.title} /> -
			<span class="text-slate-500">{article.date}</span>
		</li>
	{/each}
</div>
