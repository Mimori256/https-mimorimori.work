<script lang="ts">
	export let href: string;
	export let text: string;
	export let icon: string;
	export let iconAlt: string;
</script>

<div role="listitem">
	<a
		class="flex items-center p-2 hover:bg-slate-300 transition-colors duration-500 w-48"
		{href}
		target="_blank"
		><img class="mr-10" src={icon} alt={iconAlt} height="56px" width="56px" /><span
			class="whitespace-nowrap text-xl">{text}</span
		>
	</a>
</div>
