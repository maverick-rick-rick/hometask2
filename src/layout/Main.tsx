import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import NoteForm from "../components/NoteForm";
import PopupWindow from "../components/PopupWindow";
import Switch from "../components/Switch";
import Table from "../components/table/Table";
import Section from "./Section";

export default function Main() {
	const tableContent = useSelector((state: any) => state.notesReducer);
	const currentNotesTable = useSelector((state: any)=> state.tableSwitcherReducer);

	const returnTableContent = () => {
		switch (currentNotesTable) {
			case 'Visible':
				return tableContent.visibleNotes;
			case 'Archived':
				return tableContent.archivedNotes;
			default:
				return false;
		}
	};

	const [modalActive, setModalActive] = useState(false);

	const popupToggle = () => {
		setModalActive(!modalActive);
	};

	const popupForm = () => {
		return (
			<NoteForm
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
		popupToggle();
	};

	const [popupContent, setPopupContent] = useState(popupForm);


	const popupWithForm = () => {
		setPopupContent(popupForm);
		popupToggle();
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
			{/* <Section className={"note_summary"}>
				<Table
					tableType={"summaryTable"}
					tableContent={}
				/>
			</Section> */}
			<PopupWindow active={modalActive} setActive={popupToggle}>
				{popupContent}
			</PopupWindow>
		</main>
	);
}
