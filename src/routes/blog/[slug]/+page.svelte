<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { MetaTags } from 'svelte-meta-tags';
	import ShareButton from './component/ShareButton.svelte';
	export let data;
	let url: string;
	let textContent: string;
	const source = data.content;

	onMount(() => {
		url = `https://mimorimori.work/blog/${data.metadata.slug}`;
		textContent = `${data.metadata.title} - Mimori's Sandbox`;
	});
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
		<hr />
		<h1 class="text-3xl">{data.metadata.title}</h1>
		<p class="text-slate-500 mb-4">{data.metadata.date}</p>
		<div class="mb-8">
			<ShareButton {url} {textContent} />
		</div>
		<article class="prose max-w-none">
			<SvelteMarkdown {source} />
		</article>
	{/if}
</div>
