import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import keyGenerator from "../utils/keyGenerator";

type PayloadType = {
	noteName: string;
	noteCategory: string;
	noteContent: string;
};
type StoreItemType = {
	formAction: string;
	tableType: any;
	payload: {
		id: number | undefined;
		content: PayloadType;
	};
};

export default function NoteForm(props: StoreItemType) {
	const { formAction, payload, tableType } = props;

	const dispatch = useDispatch();

	function toggleModal() {
		dispatch({ type: "TOGGLE_MODAL" });
	}

	const [formState, setFormState] = useState<PayloadType>({
		noteName: "",
		noteCategory: "",
		noteContent: "",
	});

	const initialState = {
		noteName: payload.content.noteName,
		noteCategory:
			payload.content.noteCategory === ""
				? "Task"
				: payload.content.noteCategory,
		noteContent: payload.content.noteContent,
	};

	useEffect(() => {
		setFormState(initialState);
	}, [payload]);

	const noteCategories: string[] = [
		"Task",
		"Random thought",
		"Idea",
		"Quote",
	];

	const newNoteElement = {
		id: payload.id !== undefined ? payload.id : parseInt(keyGenerator()),
		content: {
			name: "",
			created: "",
			category: "",
			content: "",
			deadlines: "",
		},
	};

	function getCurrentDate() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.toLocaleString("en", { month: "long" });
		let day = date.getDate();
		let fullDate = [];
		fullDate.push(month, " ", day, ", ", year);
		let string = fullDate.join("");

		return string;
	}

	function processDateField(): string {
		const string = formState.noteContent;
		const regexp = /(\d{1,4}([./-])\d{1,2}([./-])\d{1,4})/g;
		const tempArray = string.match(regexp);
		if (tempArray === null) {
			return "";
		}
		if (tempArray.length === 0 || tempArray === null) {
			return "";
		}
		if (tempArray.length > 2) {
			tempArray.splice(1, tempArray.length - 2);
		}
		if (tempArray.length < 2) {
			tempArray.push("No deadline");
		}

		const regexp2 = /([./-])/gi;

		tempArray.forEach((el, index) => {
			el = el.replaceAll(regexp2, ".");
			tempArray[index] = el;
		});

		tempArray[0] = "Start: " + tempArray[0];
		tempArray[1] = "End: " + tempArray[1];
		const result: string = tempArray.join("\n");

		return result;
	}

	const compileObject = () => {
		newNoteElement.content.name = formState.noteName;
		newNoteElement.content.created = getCurrentDate();
		newNoteElement.content.category = formState.noteCategory;
		newNoteElement.content.content = formState.noteContent;
		newNoteElement.content.deadlines = processDateField();
		return newNoteElement;
	};

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = compileObject();
		switch (formAction) {
			case "create":
				dispatch({
					type: "ADD_NOTE",
					payload: { item: { ...result } },
				});
				break;
			case "update":
				dispatch({
					type: "UPDATE_NOTE",
					payload: {
						id: result.id,
						item: { ...result },
						value: tableType,
					},
				});
				break;
			default:
				break;
		}

		setFormState({ noteName: "", noteCategory: "", noteContent: "" });

		const successLabel = document.querySelector(".attention");
		successLabel?.classList.remove("hidden");
		setTimeout(() => {
			successLabel?.classList.add("hidden");
			toggleModal();
		}, 1250);
	};

	return (
		<form
			id={"create_note_form"}
			action={"#"}
			className={"create_note"}
			onSubmit={(e) => submit(e)}>
			<label htmlFor={"create_note_name"}>Enter your note name</label>
			<input
				type={"text"}
				id={"create_note_name"}
				placeholder={"Type here..."}
				required
				value={formState.noteName}
				onChange={(e) =>
					setFormState({ ...formState, noteName: e.target.value })
				}
			/>
			<label htmlFor={"create_note_category"}>
				Choose a category of your note
			</label>
			<select
				name={"create_note_category"}
				id={"create_note_category"}
				value={formState.noteCategory}
				onChange={(e) =>
					setFormState({
						...formState,
						noteCategory: e.target.value,
					})
				}>
				{noteCategories.map((el) => {
					return (
						<option value={el} key={keyGenerator()}>
							{el}
						</option>
					);
				})}
			</select>
			<label htmlFor={"create_note_content"}>
				Enter your note content here...
			</label>
			<input
				type={"textarea"}
				id={"create_note_content"}
				placeholder={"Type here..."}
				required
				value={formState.noteContent}
				onChange={(e) =>
					setFormState({
						...formState,
						noteContent: e.target.value,
					})
				}
			/>
			<label htmlFor={"create_note_submit"}>
				If it`s all right, press submit button below
			</label>
			<input
				type={"submit"}
				id={"create_note_submit"}
				placeholder={""}
				value={"Create a note"}
			/>
			{<div className={"attention hidden"}>Success !</div>}
		</form>
	);
}
