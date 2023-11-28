<script lang="ts">
	import Link from './Link.svelte';
	import articles from '$lib/articles.json';
</script>

<div class="mt-12">
	<h1 class="text-xl font-bold mb-6">書きもの+ブログ</h1>
	{#each articles as article}
		<li>
			<Link href={article.link} text={article.title} /> -
			<span class="text-slate-500">{article.date}</span>
		</li>
	{/each}
</div>
