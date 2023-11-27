<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	export let data;
	const languages: string[] = Object.keys(data.langData);
	const langData: number[] = Object.values(data.langData);

	// Convert to KB
	langData.forEach((d, i) => {
		langData[i] = Math.round(d / 1000);
	});

	onMount(() => {
		const margin = { top: 20, right: 30, bottom: 40, left: 90 };
		const width = 460 - margin.left - margin.right;
		const height = 400 - margin.top - margin.bottom;
		const tooltip = d3.select('#chart').append('div').attr('class', 'tooltip');
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		const x = d3.scaleLinear().domain([0, 1000]).range([0, width]);
		svg
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('transform', 'translate(-10,0)rotate(-45)')
			.style('text-anchor', 'end');

		const y = d3.scaleBand().range([0, height]).domain(languages).padding(0.1);
		svg.append('g').call(d3.axisLeft(y));

		svg
			.selectAll('rect')
			.data(langData)
			.enter()
			.append('rect')
			.attr('x', 0)
			.attr('y', (d, i) => y(languages[i]) || 0)
			.attr('width', (d) => x(d))
			.attr('height', y.bandwidth())
			.attr('fill', '#69b3a2')
			.attr('class', 'bar')
			.on('mouseover', (d, i) => {
				// i is the value of kilobytes
				let language = languages[langData.indexOf(i)];
				tooltip.style('visibility', 'visible').html(`${language}: ${i}KB`);
			})
			.on('mousemove', function (event) {
				tooltip.style('top', event.pageY + 10 + 'px').style('left', event.pageX + 10 + 'px');
			})
			.on('mouseout', function () {
				tooltip.style('visibility', 'hidden');
			});
	});
</script>

<div class="ml-12">
	<h1>GitHubの活動記録</h1>
	<img
		src="https://raw.githubusercontent.com/Mimori256/Mimori256/main/profile-summary-card-output/calm/3-stats.svg"
		alt="GitHub Stats Card"
	/>
	<p class="mt-8">各言語の総コミット量(KB)</p>
	<div id="chart"></div>
</div>

<style>
	.tooltip {
		text-align: center;
		width: auto;
		height: auto;
		padding: 5px;
		font: 12px;
		background: white;
		-webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
		-moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
		visibility: hidden;
	}
</style>
