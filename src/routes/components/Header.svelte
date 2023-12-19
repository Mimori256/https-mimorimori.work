<span class="flex justify-between items-center mb-9">
	<span class="flex flex-col">
		<a href="/"
			><p class="text-4xl mt-4 relative inline-block underline-effect">mimorimori.work</p></a
		>
		<p class="text-slate-700 text-sm">Mimori's Sandbox</p>
	</span>
</span>

<style lang="postcss">
	.underline-effect {
		position: relative;
		display: inline-block;
	}

	.underline-effect::before,
	.underline-effect::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: #006c9e;
		transition: width 0.3s;
	}

	.underline-effect::before {
		left: 50%;
	}

	.underline-effect::after {
		right: 50%;
	}

	.underline-effect:hover::before {
		width: 50%;
		left: 0;
	}

	.underline-effect:hover::after {
		width: 50%;
		right: 0;
	}
</style>
