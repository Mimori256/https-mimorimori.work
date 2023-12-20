<script lang="ts">
	export let href: string;
	export let text: string;
	export let description: string;
</script>

{#if description}
	<a
		{href}
		class="hover:text-blue-600 transition-colors duration-500 dotted-underline"
		target="_blank"
		title={description}
		>{text}
	</a>
{:else}
	<a {href} class="hover:text-blue-600 transition-colors duration-500 dotted-underline">{text} </a>
{/if}

<style lang="postcss">
	.dotted-underline {
		border-bottom: 1px dotted #000;
	}
</style>
