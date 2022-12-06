const popupState = false;

export const popupReducer = (state = popupState, action: { type: string }) => {
	switch (action.type) {
		case "TOGGLE_MODAL":
			return (state = !state);
		default:
			return state;
	}
};
