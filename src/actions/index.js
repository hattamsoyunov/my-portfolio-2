const pageIsLoaded = () => ({
	type: 'PAGE_IS_LOADED'
});

const is404Page = () => ({
	type: 'IS_404_PAGE'
});

const toggleMenu = () => ({
	type: 'TOGGLE_MENU'
});

const setSectIndicators = indicators => ({
	type: 'SET_SECT_INDICATORS',
	payload: indicators
});

const setMainSections = sections => ({
	type: 'SET_MAIN_SECTIONS',
	payload: sections
});

const projectsRequested = () => ({
	type: 'FETCH_PROJECTS_REQUEST'
});

const projectsLoaded = projects => ({
	type: 'FETCH_PROJECTS_SUCCESS',
	payload: projects
});

const projectsError = error => ({
	type: 'FETCH_PROJECTS_FAILURE',
	payload: error
});

const projectsLoadMore = limit => ({
	type: 'PROJECTS_LOAD_MORE',
	payload: limit
});

export {
	pageIsLoaded,
	is404Page,
	toggleMenu,
	setSectIndicators,
	setMainSections,
	projectsRequested,
	projectsLoaded,
	projectsError,
	projectsLoadMore
};
