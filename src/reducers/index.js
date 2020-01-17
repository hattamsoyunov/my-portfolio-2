const initialState = {
	showMenu: false,
	sectIndicators: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, showMenu: !state.showMenu };

		case 'SET_SECT_INDICATORS':
			return { ...state, sectIndicators: action.payload };

		case 'SET_MAIN_SECTIONS':
			return { ...state, mainSections: action.payload };

		default:
			return state;
	}
};

export default reducer;
