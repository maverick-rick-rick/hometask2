import { createStore } from "redux";

let defaultState = {
	visibleNotes: [
		{
			name: "Shopping list",
			created: "September 14, 2022",
			category: "Task",
			content: "Peanut, butter",
			deadlines: "",
		},
		{
			name: "Climb a tree",
			created: "September 22, 2022",
			category: "Random thought",
			content: "My neighbor have a bonsai tree...",
			deadlines: "Start: 12.03.2022 \n End: 12.10.2022",
		},
		{
			name: "Take a shower",
			created: "September 17, 2022",
			category: "Idea",
			content: "Or not...",
			deadlines: "",
		},
		{
			name: "Winter is coming",
			created: "September 14, 2022",
			category: "Quote",
			content: "Eddard Stark",
			deadlines: "",
		},
		{
			name: "To do",
			created: "February 14, 2022",
			category: "Random thought",
			content: "Ya bado bado",
			deadlines: "",
		},
		{
			name: "Buy a island",
			created: "April 22, 2022",
			category: "Idea",
			content: "On the Caribbean",
			deadlines: "",
		},
		{
			name: "It`s awesome",
			created: "August 12, 2022",
			category: "Quote",
			content: "Cartman",
			deadlines: "",
		},
	],
	archivedNotes: [
		{
			name: "Shopping list",
			created: "September 14, 2022",
			category: "Task",
			content: "Peanut, butter",
			deadlines: "",
		},
		{
			name: "Climb a tree",
			created: "September 22, 2022",
			category: "Random thought",
			content: "My neighbor have a bonsai tree...",
			deadlines: "Start: 22.05.2022\nEnd: 13.10.2022",
		},
		{
			name: "Take a shower",
			created: "September 17, 2022",
			category: "Idea",
			content: "Or not...",
			deadlines: "",
		},
		{
			name: "Winter is coming",
			created: "September 14, 2022",
			category: "Quote",
			content: "Eddard Stark",
			deadlines: "",
		},
	],
};

const reducer = (
	state = defaultState,
	action: { type: "string"; payload?: [] }
) => {
	switch (action) {
		default:
			return state;
	}
};

export const store = createStore(reducer);
