import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import PopupWindow from "../components/PopupWindow";
import Table from "../components/table/Table";
import Section from "./Section";

export default function Main() {
	let tableContent = useSelector((state: any) => state);
	const [modalActive, setModalActive] = useState(false);

	return (
		<main className="main">
			<Section className={"note_list"}>
				<Table
					tableType={"notesTable"}
					tableContent={tableContent.visibleNotes}
				/>
				<Button
					className={"btn accent"}
					callback={setModalActive}
					callbackParameter={true}
				>
					create new note
				</Button>
			</Section>
			<Section className={"note_summary"}>
				{/* <Table tableType={"summaryTable"} tableContent={} /> */}
			</Section>
			<PopupWindow
				active={modalActive}
				setActive={setModalActive}
			></PopupWindow>
		</main>
	);
}
