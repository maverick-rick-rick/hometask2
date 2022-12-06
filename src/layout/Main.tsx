import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import NoteForm from "../components/NoteForm";
import PopupWindow from "../components/PopupWindow";
import Switch from "../components/Switch";
import Table from "../components/table/Table";
import Section from "./Section";

export default function Main() {
	const tableContent = useSelector((state: any) => state.notesReducer);
	const currentNotesTable = useSelector(
		(state: any) => state.tableSwitcherReducer
	);
	const statsTable = useSelector((state: any) => state.statsReducer);

	const dispatch = useDispatch();

	function toggleModal() {
		dispatch({ type: "TOGGLE_MODAL" });
	}

	const returnTableContent = () => {
		switch (currentNotesTable) {
			case "Visible":
				return tableContent.visibleNotes;
			case "Archived":
				return tableContent.archivedNotes;
			default:
				return false;
		}
	};

	const popupForm = () => {
		return (
			<NoteForm
				tableType={currentNotesTable}
				payload={{
					id: undefined,
					content: {
						noteName: "",
						noteCategory: "",
						noteContent: "",
					},
				}}
				formAction={"create"}
			/>
		);
	};

	const popupWithUpdateForm = (el: any) => {
		setPopupContent(
			<NoteForm
				tableType={currentNotesTable}
				payload={{
					id: el.id,
					content: {
						noteName: el.content.name,
						noteCategory: el.content.category,
						noteContent: el.content.content,
					},
				}}
				formAction={"update"}
			/>
		);
		toggleModal();
	};

	const [popupContent, setPopupContent] = useState(popupForm);

	const popupWithForm = () => {
		setPopupContent(popupForm);
		toggleModal();
	};

	return (
		<main className="main">
			<Section className={"note_list"}>
				<Switch switchItems={["Visible", "Archived"]} />
				<Table
					tableType={currentNotesTable}
					tableContent={returnTableContent()}
					buttons={true}
					popupWithUpdateForm={popupWithUpdateForm}
				/>
				<Button className={"btn accent"} onClick={popupWithForm}>
					create new note
				</Button>
			</Section>
			<Section className={"note_summary"}>
				<Table
					tableType={"summaryTable"}
					tableContent={statsTable}
					buttons={false}
					popupWithUpdateForm={popupWithUpdateForm}
				/>
			</Section>
			<PopupWindow>{popupContent}</PopupWindow>
		</main>
	);
}
