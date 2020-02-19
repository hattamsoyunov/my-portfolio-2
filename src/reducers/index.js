const initialState = {
	pageIsLoaded: false,
	is404Page: false,
	showMenu: false,
	sectIndicators: null,
	projects: [],
	projectsReady: false,
	loading: true,
	error: null,
	limit: 6,
	step: 4
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PAGE_IS_LOADED':
			return { ...state, pageIsLoaded: true };

		case 'IS_404_PAGE':
			return { ...state, is404Page: true };

		case 'TOGGLE_MENU':
			return { ...state, showMenu: !state.showMenu };

		case 'SET_SECT_INDICATORS':
			return { ...state, sectIndicators: action.payload };

		case 'SET_MAIN_SECTIONS':
			return { ...state, mainSections: action.payload };

		case 'FETCH_PROJECTS_REQUEST':
			return {
				...state,
				projects: [],
				loading: true,
				projectsReady: false,
				error: null
			};

		case 'FETCH_PROJECTS_SUCCESS':
			return {
				...state,
				projects: action.payload,
				loading: false,
				projectsReady: true,
				error: null
			};

		case 'FETCH_PROJECTS_FAILURE':
			return {
				...state,
				projects: [],
				loading: false,
				projectsReady: false,
				error: action.payload
			};

		case 'PROJECTS_LOAD_MORE':
			return {
				...state,
				limit: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
