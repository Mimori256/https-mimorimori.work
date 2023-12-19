<script lang="ts">
	import Link from './Link.svelte';
	import articles from '$lib/articles.json';
	import { MAX_ONE_PAGE_ARTICLES } from '../consts/consts';

	let articleList = articles.slice(0, MAX_ONE_PAGE_ARTICLES).reverse();
</script>

<div class="mt-11 mb-6 sm:mb-0" role="region">
	<h1 class="text-xl font-bold mb-6">書きもの+ブログ</h1>
	<ul role="list" aria-label="記事一覧">
		{#each articleList as article}
			<li class="list-disc mt-1">
				<Link href={article.link} text={article.title} description="" /> -
				<span class="text-slate-700">{article.date}</span>
			</li>
		{/each}
	</ul>
</div>
