<script>
	import { searchForMovieOrShow } from '$lib/scripts/search_utils';

	export let showSearch = false;
	export let lookingFor = '';

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

<header class={showSearch ? 'shown' : 'hidden'}>
	<h1>What's it on?</h1>
	{#if showSearch}
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
	{/if}
</header>

<style>
	.shown {
		display: flex;
		padding: 2rem 1rem;
		width: 100%;
		font-size: 28px;
		user-select: none;
		color: #2d232e;
		gap: 4rem;
	}

	.hidden {
		text-align: center;
		padding: 2rem 0;
		font-size: 28px;
		user-select: none;
		color: #2d232e;
		margin: 0 0 2rem 0;
	}

	.search-form {
		display: flex;
		margin: 1rem 0;
		flex-wrap: wrap;
		gap: 1rem;
		width: 60%;
	}

	.search-form > input {
		padding: 0.8rem 0.4rem 0.8rem 0.8rem;
		width: 80%;
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
</style>
