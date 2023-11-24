<script lang="ts">
	import Link from './Link.svelte';
	import works from '$lib/works.json';
	import type Work from '../types/Work';
	let workList: Work[] = works;
</script>

<div class="mt-12">
	<h1 class="text-xl font-bold mb-6">作ったもの</h1>
	<ul>
		{#each works as work}
			<li>
				<Link href={work.url} text={work.title} /> -
				<span class="text-slate-500">{work.description}</span>
			</li>
		{/each}
	</ul>
</div>
