import React, {
	MouseEventHandler,
	useMemo,
} from "react";
import { useDispatch } from "react-redux";
import keyGenerator from "../../utils/keyGenerator";
import Button from "../Button";
import TableRow from "./TableRow";

type TableProps = {
	tableType?: string;
	tableContent: [];
	buttons?: boolean;
	popupToggle?: MouseEventHandler<HTMLButtonElement>;
	popupWithUpdateForm : (el:any) => void;
};

type StateItemType = {
	[key: string]: string;
};
type StateType = {
	id: number;
	content: StateItemType;
};

const tableHeaders: { [key: string]: string[] } = {
	notesHeader: ["Name", "Created", "Category", "Content", "Deadlines"],
	summaryHeader: ["Note category", "Active", "Archived"],
};

export default function Table(props: TableProps) {
	const { tableContent, tableType, popupWithUpdateForm } = props;

	const tableData: StateType[] = tableContent;

	// define header of table

	const tableHeaderContent = () => {
		if (tableType === "Visible" || tableType === "Archived") {
			return tableHeaders.notesHeader;
		}
		if (tableType === "summaryTable") {
			return tableHeaders.summaryHeader;
		}
		else return [];
	};

	const dispatch = useDispatch();

	const defineStoreElement = (type: any) => {
		switch (type) {
			case "Visible":
				return "visibleNotes";
			case "Archived":
				return "archivedNotes";
			default:
				return "";
		}
	};

	const deleteNote = (el: any, type: string | undefined) => {
		dispatch({
			type: "DELETE_NOTE",
			payload: { id: el.id, value: defineStoreElement(type) },
		});
	};

	const changeNoteDestination = (el: any, type: string | undefined) => {
		dispatch({
			type: "CHANGE_DESTINATION",
			payload: { id: el.id, value: defineStoreElement(type) },
		});
	};

	const updateNote = (el:any) => {
	popupWithUpdateForm(el)
	}

	

	const buttons = (el: any) => {
		return [
			<Button
				className={"btn-edit"}
				icon={"pencil"}
				onClick={() => updateNote(el)}
				key={keyGenerator()}
			/>,
			<Button
				className={"btn-archive"}
				icon={"archive"}
				onClick={() => changeNoteDestination(el, tableType)}
				key={keyGenerator()}
			/>,
			<Button
				className={"btn-delete"}
				icon={"trash"}
				onClick={() => deleteNote(el, tableType)}
				key={keyGenerator()}
			/>,
		];
	};

	return (
		<div className="table">
			<TableRow
				className={"table_headline"}
				rowContent={tableHeaderContent()}
				
			/>
			{tableData.map((el) => (
				<TableRow
					rowContent={el.content}
					buttons={props.buttons ? buttons(el) : ""}
					key={keyGenerator()}
				/>
			))}
		</div>
	);
}
