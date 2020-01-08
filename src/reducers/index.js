const initialState = {
	showMenu: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, showMenu: !state.showMenu };

		default:
			return state;
	}
};

export default reducer;
