const possibleViews = ['search', 'results', 'listing'];
let currentView = possibleViews[0];

export function changeView(id) {
	if (id > possibleViews.length) return;

	currentView = possibleViews[id];

	return currentView;
}

export const getCurrentView = () => currentView;
