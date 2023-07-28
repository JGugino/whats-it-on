<script>
	import { changeView } from '$lib/scripts/state_manager';

	import { searchForMovieOrShow, loadResult } from '$lib/scripts/search_utils';

	export let currentView = '';

	export let lookingFor = '';
	export let foundItems = [];
	export let selectedItem = null;
	export let selectedSources = [];

	async function loadSearchResults(item) {
		const results = await loadResult(item.id);

		selectedItem = results.searchResult;
		selectedSources = results.sourcesResult;

		currentView = changeView(2);
	}

	async function userInputSearch() {
		foundItems = [];
		foundItems = await searchForMovieOrShow(lookingFor);

		if (foundItems) {
			errorMsg = '';
		} else {
			errorMsg = 'Please enter the name of what your looking for';
		}
	}
</script>

<section class="results-section">
	<form class="search-form">
		<input
			type="text"
			name="movie-search-input"
			id="movie-search-input"
			placeholder="Looking for something else?"
			bind:value={lookingFor}
		/>
		<div class="submit-buttons">
			<button
				class="submit-button"
				on:click|preventDefault={async () => {
					userInputSearch();
				}}>Find it</button
			>
		</div>
	</form>

	{#if foundItems.length > 0}
		<ul class="results-list">
			{#each foundItems as item}
				<li class="result-item">
					<button
						on:click|preventDefault={() => {
							loadSearchResults(item);
						}}
					>
						<!-- <img class="" src={item.poster} alt={`${item.name} poster`} /> -->
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
		max-width: 800px;
	}

	.title {
		font-weight: 500;
	}

	.result-item > button {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 1rem 0.6rem;
		font-size: 14px;
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

	.search-form {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.search-form > input {
		padding: 0.8rem 0.4rem 0.8rem 0.8rem;
		width: 80%;
		max-width: 400px;
		font-size: 18px;
		border-radius: 6px;
		border: 1px solid #534b52;
	}

	.search-form > input:focus,
	.search-form > input:focus-within {
		border: 2px solid #2d232e;
		outline: none;
	}

	.submit-buttons {
		display: flex;
		gap: 1rem;
	}

	.submit-button {
		background: #474448;
		color: #f1f0ea;
		padding: 0.6rem 1rem;
		border-radius: 6px;
		border: 1px solid #474448;
		font-size: 18px;
		cursor: pointer;
	}

	.submit-button:hover {
		background: #2d232e;
	}
</style>
