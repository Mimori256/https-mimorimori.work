<script lang="ts">
	export let url: string;
	export let textContent: string;

	const openTwitter = () => {
		url = url.replace('.md', '');
		const twitterUrl = `https://twitter.com/intent/tweet?text=${textContent}&url=${url}`;
		window.open(twitterUrl, '_blank');
	};
</script>

<button title="X/Twitter で共有" on:click={openTwitter}>
	<img src="/x-logo-black.png" alt="Share on X/Twitter" height="24px" width="24px" />
</button>
