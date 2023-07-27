import { getRandomNumber } from './misc_utils';

export async function pickRandomMovieOrShow() {
	//Get all pages and select one randomly
	const randomSearchURL = `https://api.watchmode.com/v1/list-titles/?apiKey=${
		import.meta.env.VITE_API_KEY
	}&type=movie&sort_by=relevance_desc`;

	const randomSearchResults = await fetch(randomSearchURL).then(async (res) => await res.json());
	const foundList = randomSearchResults;

	const pickedPage = getRandomNumber(1, foundList.total_pages);

	const pickedPageURL = `https://api.watchmode.com/v1/list-titles/?apiKey=${
		import.meta.env.VITE_API_KEY
	}&type=movie&sort_by=relevance_desc&page=${pickedPage}`;

	const pickedPageResults = await fetch(pickedPageURL).then(async (res) => await res.json());
	const pageResult = pickedPageResults;

	//Take the picked page and pick a random id then load the results page

	const pickedID = getRandomNumber(1, 150);

	const selectedTitle = pageResult.titles[pickedID].id;

	return selectedTitle;
}

export async function searchForMovieOrShow(lookingFor) {
	if (!lookingFor || lookingFor == '') {
		console.error('No movie or show provided.');
		return;
	}

	const nameSearchURL = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${
		import.meta.env.VITE_API_KEY
	}&search_value=${encodeURIComponent(lookingFor)}&search_type=2`;

	const nameSearchResults = await fetch(nameSearchURL).then(async (res) => await res.json());
	return nameSearchResults.results;
}

export async function loadResult(id) {
	if (!id) {
		console.error('No movie or show provided.');
		return;
	}

	const searchURL = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${
		import.meta.env.VITE_API_KEY
	}`;

	const searchResult = await fetch(searchURL).then(async (res) => await res.json());

	const sourcesURL = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${
		import.meta.env.VITE_API_KEY
	}`;

	const sourcesResult = await fetch(sourcesURL).then(async (res) => await res.json());

	return { searchResult, sourcesResult };
}
