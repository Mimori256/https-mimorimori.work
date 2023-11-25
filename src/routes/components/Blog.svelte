<script lang="ts">
	import Link from './Link.svelte';
	import type ArticleMetadata from '../types/ArticleMetadata';
	export let metadataList: ArticleMetadata[];
</script>

<div class="mt-12">
	<h1 class="text-xl font-bold mb-6">書きもの</h1>
	<ul>
		{#each metadataList as metadata}
			<li class="list-disc mb-1">
				<Link href={'blog/' + metadata.slug} text={metadata.title} /> - {metadata.date}
			</li>
		{/each}
	</ul>
</div>
