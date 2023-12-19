<script lang="ts">
	export let href: string;
	export let text: string;
	export let description: string;
</script>

<a
	{href}
	class="hover:text-blue-600 transition-colors duration-500 dotted-underline"
	target="_blank"
	title={description}
	>{text}
</a>

<style lang="postcss">
	.dotted-underline {
		border-bottom: 1px dotted #000;
	}
</style>
