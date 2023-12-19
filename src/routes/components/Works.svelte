<script lang="ts">
	import Link from './Link.svelte';
	import works from '$lib/works.json';
</script>

<div class="mt-11 mb-6" role="region">
	<h1 class="text-xl font-bold mb-6">作ったもの</h1>
	<ul>
		{#each works as work}
			<li class="list-disc mt-1" aria-label={work.description}>
				<Link href={work.url} text={work.title} description={work.description} />
			</li>
		{/each}
	</ul>
</div>
