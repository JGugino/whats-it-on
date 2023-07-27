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

{#if foundItems.length > 0}
	<ul>
		{#each foundItems as item}
			<li>
				<button
					on:click|preventDefault={() => {
						loadSearchResults(item);
					}}
				>
					<p class="title">{item.name}</p>
					<p>{item.year ? item.year : 'unknown'}</p>
				</button>
			</li>
		{/each}
	</ul>
{:else}
	<p style="text-align: center;">No results found...</p>
{/if}

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-height: 400px;
		overflow-y: auto;
		gap: 1rem;
	}

	ul > li {
		width: 600px;
	}

	li > button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		gap: 1rem;
		width: 100%;
	}

	li > button > p.title {
		font-weight: bold;
		font-size: 16px;
	}
</style>
