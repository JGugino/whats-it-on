<script>
	import { getIconOfSource } from '$lib/scripts/source_icons';

	export let selectedItem = null;
	export let selectedSources = [];
</script>

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
						<p>{@html getIconOfSource(source.name) || source.name}</p>
						<p>{source.type}</p>
						<p>{source.price ? '$' + source.price : ''}</p>
						<p>{source.format}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<button class="back-button" on:click>Go Back</button>
</section>

<style>
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

	.back-button {
		background: #474448;
		color: #f1f0ea;
		padding: 0.6rem 1rem;
		border-radius: 6px;
		border: 1px solid #474448;
		font-size: 18px;
		cursor: pointer;
	}

	.back-button:hover {
		background: #2d232e;
	}
</style>
