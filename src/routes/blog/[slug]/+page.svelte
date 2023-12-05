<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { MetaTags } from 'svelte-meta-tags';
	import ShareButton from './component/ShareButton.svelte';

	import addHeader from './addHeader';
	import addFootnote from './addFootnote';

	export let data;
	let url: string;
	let textContent: string;
	let parsedContent: string;

	onMount(() => {
		url = `https://mimorimori.work/blog/${data.metadata.slug}`;
		parsedContent = addHeader(data.content);
		parsedContent = addFootnote(parsedContent);
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

<div class="mt-20 mx-6 pb-3 sm:ml-12 sm:mr-32">
	{#if data.content === ''}
		<h1 class="text-3xl mb-4">ブログ記事が存在しません！</h1>
		<p><a href="/" class="text-slate-400 hover:text-blue-400">トップに戻る</a></p>
	{:else}
		<hr />
		<h1 class="text-3xl">{data.metadata.title}</h1>
		<p class="text-slate-500 mb-4">{data.metadata.date}</p>
		<div class="mb-8">
			<ShareButton {url} {textContent} />
		</div>
		<article class="prose max-w-none">
			<SvelteMarkdown source={parsedContent} />
		</article>
	{/if}
</div>
