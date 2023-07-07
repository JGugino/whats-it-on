<script>
	import Header from '$lib/components/Header.svelte';

	const possibleViews = ['results', 'listing'];
	let currentView = possibleViews[0];

	let foundItems = [];
	let selectedItem = null;
	let selectedSources = [];

	function changeView(id) {
		if (id > possibleViews.length) return;

		currentView = possibleViews[id];
	}

	async function searchForMovieOrShow(e) {
		const lookingFor = new FormData(e.target).get('movie-search-input');

		if (!lookingFor) {
			console.error('No movie or show provided.');
			return;
		}

		const nameSearchURL = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${
			import.meta.env.VITE_API_KEY
		}&search_value=${encodeURIComponent(lookingFor)}&search_type=2`;

		const nameSearchResults = await fetch(nameSearchURL).then(async (res) => await res.json());
		foundItems = nameSearchResults.results;
	}

	async function loadResult(id) {
		if (!id) {
			console.error('No movie or show provided.');
			return;
		}

		const searchURL = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${
			import.meta.env.VITE_API_KEY
		}`;

		const searchResult = await fetch(searchURL).then(async (res) => await res.json());
		selectedItem = searchResult;

		const sourcesURL = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${
			import.meta.env.VITE_API_KEY
		}`;

		const sourcesResult = await fetch(sourcesURL).then(async (res) => await res.json());
		selectedSources = sourcesResult;

		changeView(1);
	}

	function goBackToSearch() {
		foundItems = [];
		selectedItem = null;
		changeView(0);
	}
</script>

<svelte:head>
	<title>What's it on? - Find what service a show/movie is on</title>
</svelte:head>

<Header />

<main>
	{#if currentView == possibleViews[0]}
		<form class="search-form" on:submit|preventDefault={searchForMovieOrShow}>
			<input
				type="text"
				name="movie-search-input"
				id="movie-search-input"
				placeholder="What are you looking for?"
				required
			/>
		</form>

		{#if foundItems.length <= 0}
			<h3 style="text-align: center;">Your search results will show here...</h3>
		{:else}
			<ul>
				{#each foundItems as item}
					<li>
						<button
							on:click|preventDefault={() => {
								loadResult(item.id);
							}}
						>
							<p class="title">{item.name}</p>
							<p>{item.year ? item.year : 'unknown'}</p>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	{:else if currentView == possibleViews[1]}
		<section class="result-info">
			<div class="info-container">
				{#if selectedItem.poster}
					<div class="poster-container">
						<img src={selectedItem.poster} alt={`${selectedItem.title} poster`} />
						{#if selectedItem.trailer}
							<a href={selectedItem.trailer}>Trailer</a>
						{:else}
							<p>No trailer available</p>
						{/if}
					</div>
				{:else}
					<p>No poster found</p>
				{/if}
				<div class="extended-info">
					<div class="header-info">
						<h2>{selectedItem.title}</h2>
						<p>{selectedItem.us_rating ? selectedItem.us_rating : ''}</p>
					</div>

					<div class="sources">
						{#each selectedSources as source}
							<div class="source">
								<p>{source.name}</p>
								<p>{source.type}</p>
								<p>{source.price}</p>
								<p>{source.format}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<button on:click={goBackToSearch}>Go Back</button>
		</section>
	{/if}
</main>

<footer>
	created by gugino - api provided by <a href="https://watchmode.com">watchmode.com</a>
</footer>

<style>
	.search-form {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-form > input {
		padding: 0.8rem 0.4rem 0.8rem 0.8rem;
		min-width: 400px;
		font-size: 18px;
		border-radius: 6px;
		border: 1px solid #1e1e1e;
	}

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

	.result-info {
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
	}

	.info-container {
		display: flex;
		gap: 4rem;
	}

	.poster-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.poster-container > img {
		border-radius: 6px;
	}

	.poster-container > a {
		text-decoration: none;
		background: rgb(255, 0, 0);
		color: #1e1e1e;
		border-radius: 6px;
		font-weight: 500;
		padding: 0.6rem 2rem;
		font-size: 18px;
	}

	.extended-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.header-info {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.sources {
		min-width: 400px;
		height: 200px;
		overflow-y: auto;
	}

	.source {
		display: flex;
		gap: 1rem;
	}

	footer {
		text-align: center;
		margin-top: 2rem;
	}
</style>
