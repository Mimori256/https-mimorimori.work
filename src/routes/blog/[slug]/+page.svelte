<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let data;
	const source = data.content;
</script>

<div class="mt-20 ml-12">
	{#if !data.metadata}
		<h1 class="text-3xl">ページが存在しません！</h1>
	{:else}
		<article class="prose max-w-none">
			<SvelteMarkdown {source} />
		</article>
	{/if}
</div>
