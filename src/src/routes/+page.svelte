<script>
	import Header from '$lib/components/Header.svelte';
	import SearchView from '$lib/views/SearchView.svelte';
	import ResultsView from '$lib/views/ResultsView.svelte';
	import InfoView from '$lib/views/InfoView.svelte';

	import { changeView, getCurrentView } from '$lib/scripts/state_manager';

	let foundItems = [];
	let selectedItem = null;
	let selectedSources = [];

	let lookingFor = '';

	let currentView = getCurrentView();

	//TODO:
	//Speed up random finding and only pick titles with streaming available
	//Move search results to own page or find some way to make it look nicer.

	function goBack() {
		foundItems = [];
		selectedItem = null;
		selectedSources = [];
		lookingFor = '';
		currentView = changeView(0);
	}
</script>

<svelte:head>
	<title>What's it on? - Find what service a show/movie is on</title>
	<link rel="stylesheet" href="/app.css" />
</svelte:head>

<Header />

<main>
	{#if currentView == 'search'}
		<SearchView
			bind:lookingFor
			bind:foundItems
			bind:selectedSources
			bind:selectedItem
			bind:currentView
		/>
	{:else if currentView == 'results'}
		<ResultsView
			bind:lookingFor
			bind:foundItems
			bind:selectedSources
			bind:selectedItem
			bind:currentView
		/>
	{:else if currentView == 'listing'}
		<InfoView bind:selectedSources bind:selectedItem on:click={goBack} />
	{/if}
</main>

<footer>
	created by gugino - api provided by <a href="https://api.watchmode.com" target="_blank"
		>watchmode</a
	>
</footer>

<style>
	footer {
		text-align: center;
		margin-top: 2rem;
		color: #2d232e;
	}
</style>
