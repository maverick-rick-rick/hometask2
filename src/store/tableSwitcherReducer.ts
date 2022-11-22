let tableSwitcherState: string = "Visible";

export const tableSwitcherReducer = (
	state = tableSwitcherState,
	action: { type: string; payload: string }
) => {
	switch (action.type) {
		case "SWITCH_TABLE": 
		console.log(state);
			return state = action.payload;
		default:
			return state;
	}
};
