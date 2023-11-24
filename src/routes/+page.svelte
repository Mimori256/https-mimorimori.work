<script lang="ts">
	import About from './components/About.svelte';
	import SocialSection from './components/SocialSection.svelte';
	import Works from './components/Works.svelte';
	import Blog from './components/Blog.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Mimori's Sandbox"
	description="Mimori's Sandbox"
	openGraph={{
		title: "Mimori's Sandbox",
		description: 'Just a sandbox.'
	}}
	twitter={{
		cardType: 'summary',
		title: "Mimori's Sandbox",
		description: 'Just a sandbox.',
		image: 'https://avatars.githubusercontent.com/u/80367947?v=4'
	}}
/>
<div class="mx-20 grid sm:grid-cols-2">
	<About />
	<SocialSection />
	<Works />
	<Blog />
</div>
