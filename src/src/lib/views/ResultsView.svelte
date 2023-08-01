<script>
	import { changeView } from '$lib/scripts/state_manager';

	import { loadResult } from '$lib/scripts/search_utils';

	export let currentView = '';

	export let foundItems = [];
	export let selectedItem = null;
	export let selectedSources = [];

	async function loadSearchResults(item) {
		const results = await loadResult(item.id);

		selectedItem = results.searchResult;
		selectedSources = results.sourcesResult;

		currentView = changeView(2);
	}
</script>

<section class="results-section">
	{#if foundItems.length > 0}
		<ul class="results-list">
			{#each foundItems as item}
				<li class="result-item">
					<button
						on:click|preventDefault={() => {
							loadSearchResults(item);
						}}
					>
						<img class="result-image" src={item.image_url} alt={`${item.name} poster`} />
						<p class="title">{item.name}</p>
						<p>{item.year ? item.year : 'unknown'}</p>
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<p style="text-align: center;">No results found...</p>
	{/if}
</section>

<style>
	.results-section {
		width: 100%;
	}

	.results-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style: none;
		gap: 1rem;
	}

	.result-item {
		width: 90%;
		max-width: 1000px;
	}

	.title {
		font-weight: 500;
	}

	.result-item > button {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		font-size: 24px;
		border-radius: 6px;
		background: #474448;
		color: #f1f0ea;
		border: 1px solid #474448;
		cursor: pointer;
		text-align: start;
	}

	.result-item > button:hover {
		background: #2d232e;
	}

	.result-image{
		width: 120px;
		height: 180px;
	}
</style>
