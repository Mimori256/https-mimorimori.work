<script lang="ts">
	import Social from './Social.svelte';
</script>

<div role="region">
	<h1 class="text-xl mb-8 font-bold">連絡先+外部リンク</h1>
	<div role="list">
		<Social
			href="https://github.com/Mimori256"
			text="GitHub"
			icon="/github.svg"
			iconAlt="GitHubへのリンク"
		/>
		<Social
			href="https://twitter.com/mimorimori256"
			text="Twitter"
			icon="/twitter.svg"
			iconAlt="Twitterへのリンク"
		/>
	</div>
	<p class="mt-9" role="note">スパムしないでください。</p>
</div>
