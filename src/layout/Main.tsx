import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import DefaultPopupContent from "../components/DefaultPopupContent";
import NoteForm from "../components/NoteForm";
import PopupWindow from "../components/PopupWindow";
import Table from "../components/table/Table";
import Section from "./Section";

export default function Main() {
	const tableContent = useSelector((state: any) => state);
	const [modalActive, setModalActive] = useState(false);

	const popupToggle = () => setModalActive(!modalActive);

	const popupDefault = () => {
		return [<DefaultPopupContent />];
	};

	const popupArchive = () => {
		return [
			<Table
				tableType={"archiveTable"}
				tableContent={tableContent.archivedNotes}
				buttons={true}
			/>,
		];
	};

	const popupForm = () => {
		return [<NoteForm />];
	};

	const [popupContent, setPopupContent] = useState(popupDefault);

	const popupWithArchive = () => {
		setPopupContent(popupArchive);
		popupToggle();
	};

	const popupWithForm = () => {
		setPopupContent(popupForm);
		popupToggle();
	};

	return (
		<main className="main">
			<Section className={"note_list"}>
				<Table
					tableType={"notesTable"}
					tableContent={tableContent.visibleNotes}
					buttons={true}
					popupToggle={popupWithArchive}
				/>
				<Button className={"btn accent"} onClick={popupWithForm}>
					create new note
				</Button>
			</Section>
			<Section className={"note_summary"}>
				{/* <Table
					tableType={"summaryTable"}
					tableContent={}
				/> */}
			</Section>
			<PopupWindow active={modalActive} setActive={popupToggle}>
				{popupContent}
			</PopupWindow>
		</main>
	);
}
