<script lang="ts">
	import Link from './Link.svelte';
</script>

<div class="mb-10 sm:mb-0" role="region" aria-label="私のプロフィール">
	<img src="/pfp.svg" width="128px" height="128px" alt="私のアイコン" />
	<ul class="mt-3" role="list">
		<li class="list-disc mb-1">
			<Link
				href="https://www.mast.tsukuba.ac.jp/"
				text="筑波大学 情報メディア創成学類 B3"
				description="学類のページ"
			/>
		</li>
		<li class="list-disc mb-1">
			<Link
				href="https://twitter.com/chesscr"
				text="筑波大学 チェスサークル"
				description="サークルの公式Twitter"
			/>
		</li>
		<li class="list-disc mb-1">
			<p>謎のメディア企業(バイト)</p>
		</li>
	</ul>
	<p class="mt-5" role="note">言語とWebが好き。</p>
</div>

<style lang="postcss">
</style>
