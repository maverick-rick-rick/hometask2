import React, { MouseEventHandler, useMemo } from "react";
import keyGenerator from "../../utils/keyGenerator";
import { valuesFromObject } from "../../utils/valuesFromObject";
import Button from "../Button";
import TableRow from "./TableRow";

type TableProps = {
	tableType?: string;
	tableContent: [];
	buttons?: boolean;
	popupToggle?: MouseEventHandler<HTMLButtonElement>;
};

const tableHeaders: { [key: string]: string[] } = {
	notesHeader: ["Name", "Created", "Category", "Content", "Deadlines"],
	summaryHeader: ["Note category", "Active", "Archived"],
};

export default function Table(props: TableProps) {
	// define header of table

	const tableHeaderContent = useMemo(() => {
		if (props.tableType === "notesTable") {
			return tableHeaders.notesHeader;
		}
		if (props.tableType === "archiveTable") {
			return tableHeaders.notesHeader;
		}
		if (props.tableType === "summaryTable") {
			return tableHeaders.summaryHeader;
		}
		return [];
	}, [props.tableType]);

	const tableContent = valuesFromObject(props.tableContent);

	const actions = (el: any) => {
		return [
			<Button
				className={"btn-edit"}
				icon={"pencil"}
				onClick={() => console.log(el)}
				key={keyGenerator()}
			/>,
			<Button
				className={"btn-archive"}
				icon={"archive"}
				onClick={() => console.log(el)}
				key={keyGenerator()}
			/>,
			<Button
				className={"btn-delete"}
				icon={"trash"}
				onClick={() => console.log(el)}
				key={keyGenerator()}
			/>,
		];
	};

	return (
		<div className="table">
			<TableRow
				className={"table_headline"}
				rowContent={tableHeaderContent}
				buttons={
					props.tableType === "notesTable"
						? [
								<Button
									className={"btn"}
									icon={"pencil"}
									onClick={props.popupToggle}
									key={keyGenerator()}
								/>,
						  ]
						: ""
				}
			/>
			{tableContent.map((el) => (
				<TableRow
					rowContent={el}
					buttons={props.buttons ? actions(el) : ""}
					key={keyGenerator()}
				/>
			))}
		</div>
	);
}
