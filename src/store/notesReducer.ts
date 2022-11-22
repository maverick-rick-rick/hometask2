import keyGenerator from "../utils/keyGenerator";

let defaultState = {
	visibleNotes: [
		{
			id: 0,
			content: {
				name: "Shopping list",
				created: "September 14, 2022",
				category: "Task",
				content: "Peanut, butter",
				deadlines: "",
			},
		},
		{
			id: 1,
			content: {
				name: "Climb a tree",
				created: "September 22, 2022",
				category: "Random thought",
				content: "My neighbor have a bonsai tree...",
				deadlines: "Start: 12.03.2022 \n End: 12.10.2022",
			},
		},
		{
			id: 2,
			content: {
				name: "Take a shower",
				created: "September 17, 2022",
				category: "Idea",
				content: "Or not...",
				deadlines: "",
			},
		},
		{
			id: 3,
			content: {
				name: "Winter is coming",
				created: "September 14, 2022",
				category: "Quote",
				content: "Eddard Stark",
				deadlines: "",
			},
		},
		{
			id: 4,
			content: {
				name: "To do",
				created: "February 14, 2022",
				category: "Random thought",
				content: "Ya bado bado",
				deadlines: "",
			},
		},
		{
			id: 5,
			content: {
				name: "Buy a island",
				created: "April 22, 2022",
				category: "Idea",
				content: "On the Caribbean",
				deadlines: "",
			},
		},
		{
			id: 6,
			content: {
				name: "It`s awesome",
				created: "August 12, 2022",
				category: "Quote",
				content: "Cartman",
				deadlines: "",
			},
		},
	],
	archivedNotes: [
		{
			id: 0,
			content: {
				name: "Shopping list ARCH",
				created: "September 14, 2022",
				category: "Task",
				content: "Peanut, butter",
				deadlines: "",
			},
		},
		{
			id: 1,
			content: {
				name: "Climb a tree ARCH",
				created: "September 22, 2022",
				category: "Random thought",
				content: "My neighbor have a bonsai tree...",
				deadlines: "Start: 22.05.2022\nEnd: 13.10.2022",
			},
		},
		{
			id: 2,
			content: {
				name: "Take a shower ARCH",
				created: "September 17, 2022",
				category: "Idea",
				content: "Or not...",
				deadlines: "",
			},
		},
		{
			id: 3,
			content: {
				name: "Winter is coming ARCH",
				created: "September 14, 2022",
				category: "Quote",
				content: "Eddard Stark",
				deadlines: "",
			},
		},
	],
};

type StoreElementType = {
	id: number;
	content: { [key: string]: string };
}[];
type StoreItemType = {
	id: number;
	content: { [key: string]: string };
};

type PayloadType = {
	id?: number;
	value?: string;
	item?: {
		id: number;
		content: {
			name: string;
			created: string;
			category: string;
			content: string;
			deadlines: string;
		};
	};
};

export const notesReducer = (
	state = defaultState,
	action: { type: string; payload: PayloadType }
) => {
	const defineTargetedStateElement = (
		val: string | number | StoreItemType | undefined,
		reverse?: boolean
	) => {
		switch (val) {
			case "visibleNotes":
				if (reverse) {
					return defaultState.archivedNotes;
				}
				return defaultState.visibleNotes;
			case "archivedNotes":
				if (reverse) {
					return defaultState.visibleNotes;
				}
				return defaultState.archivedNotes;
			default:
				return defaultState.visibleNotes;
		}
	};
	const getIndex = (target: StoreElementType) => {
		const element: any = target.find(
			(obj: any) => obj.id === action.payload.id
		);
		return target.indexOf(element);
	};

	switch (action.type) {
		case "DELETE_NOTE": {
			const target = defineTargetedStateElement(action.payload.value);
			return { ...state, target: target.splice(getIndex(target), 1) };
		}

		case "CHANGE_DESTINATION": {
			const target = defineTargetedStateElement(action.payload.value);
			const targetReverse = defineTargetedStateElement(
				action.payload.value,
				true
			);
			const thisElement = () => {
				const thisElement = Object.assign(
					{},
					target.slice(getIndex(target), getIndex(target) + 1)[0]
				);
				thisElement.id = parseInt(keyGenerator(), 10);

				return thisElement;
			};

			return {
				...state,
				targetReverse: targetReverse.push(thisElement()),
				target: target.splice(getIndex(target), 1),
			};
		}
		case "ADD_NOTE": {
			const target = state.visibleNotes;

			const element = Object.assign({}, action.payload.item);

			return { ...state, target: target.push(element) };
		}
		case "UPDATE_NOTE": {
			const target = defaultState.visibleNotes;
			// console.log(defaultState.visibleNotes[x]);
			// const payloadElement = action.payload

			console.log(action.payload);

			return state;
		}
		default:
			return state;
	}
};
