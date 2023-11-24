<script>
	import '../app.css';
	import Header from './components/Header.svelte';
</script>

<div class="mx-12">
	<Header />
</div>
<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-slate-200;
		@apply text-neutral-900;
	}
</style>
