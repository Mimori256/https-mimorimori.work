<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { MetaTags } from 'svelte-meta-tags';
	export let data;
	const source = data.content;
</script>

<MetaTags
	title={data.metadata.title}
	description={data.metadata.description}
	openGraph={{
		title: data.metadata.title,
		description: data.metadata.description
	}}
	twitter={{
		cardType: 'summary',
		title: data.metadata.title,
		description: data.metadata.description,
		image: 'https://avatars.githubusercontent.com/u/80367947?v=4'
	}}
/>

<div class="mt-20 ml-12">
	{#if !data.metadata}
		<h1 class="text-3xl">ページが存在しません！</h1>
	{:else}
		<h1 class="text-3xl">{data.metadata.title}</h1>
		<p class="text-slate-500 mb-10">{data.metadata.date}</p>
		<article class="prose max-w-none">
			<SvelteMarkdown {source} />
		</article>
	{/if}
</div>
