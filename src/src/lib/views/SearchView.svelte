<script>
	import { changeView } from '$lib/scripts/state_manager';

	import {
		searchForMovieOrShow,
		pickRandomMovieOrShow,
		loadResult
	} from '$lib/scripts/search_utils';

	export let currentView = '';

	export let lookingFor;
	export let foundItems = [];
	export let selectedItem = null;
	export let selectedSources = [];

	let errorMsg = '';
	let pickingRandom = false;

	async function userInputSearch() {
		foundItems = [];
		foundItems = await searchForMovieOrShow(lookingFor);

		if (foundItems) {
			errorMsg = '';
			currentView = changeView(1);
		} else {
			errorMsg = 'Please enter the name of what your looking for';
		}

		lookingFor = '';
	}

	async function randomInputSearch() {
		pickingRandom = true;
		errorMsg = '';

		const randomTitle = await pickRandomMovieOrShow();

		const results = await loadResult(randomTitle);

		selectedItem = results.searchResult;
		selectedSources = results.sourcesResult;

		currentView = changeView(2);
		pickingRandom = false;
	}
</script>

<form class="search-form">
	{#if errorMsg != ''}
		<p class="error">{errorMsg}</p>
	{/if}
	<input
		type="text"
		name="movie-search-input"
		id="movie-search-input"
		placeholder="What are we watching today?"
		bind:value={lookingFor}
	/>

	<div class="submit-buttons">
		{#if !pickingRandom}
			<button
				class="submit-button"
				on:click|preventDefault={async () => {
					await userInputSearch();
				}}>Find it</button
			>
			<button
				class="submit-button"
				on:click|preventDefault={async () => {
					await randomInputSearch();
				}}>Give me something</button
			>
		{:else}
			<p>Finding you a random movie or show...</p>
		{/if}
	</div>

	<p class="disclamer">
		(note: this app utilizes a free teir of the watchmode API, so some requests may take a minute)
	</p>
</form>

<style>
	.search-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.6rem;
	}

	.search-form > input {
		padding: 0.8rem 0.4rem 0.8rem 0.8rem;
		width: 90%;
		max-width: 600px;
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

	.disclamer {
		font-size: 12px;
		opacity: 60%;
		user-select: none;
		text-align: center;
	}

	.error {
		color: rgb(198, 0, 0);
		font-size: 18px;
		font-weight: 600;
		user-select: none;
	}
</style>
