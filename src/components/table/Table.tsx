import React from "react";
import { valuesFromObject } from "../../utils/valuesFromObject";
import TableRow from "./TableRow";

type TableProps = {
	tableType?: string;
	tableContent: [];
};

const tableHeaders: any = {
	notesHeader: ["Name", "Created", "Category", "Content", "Deadlines"],
	summaryHeader: ["Note category", "Active", "Archived"],
};

export default function Table(props: TableProps) {
	// define header of table

	let tableHeaderContent;
	if (props.tableType === "notesTable") {
		tableHeaderContent = tableHeaders.notesHeader;
	}
	if (props.tableType === "summaryTable") {
		tableHeaderContent = tableHeaders.summaryHeader;
	}
	let tableContent = valuesFromObject(props.tableContent);

	return (
		<div className="table">
			<TableRow
				className={"table_headline"}
				rowContent={tableHeaderContent}
				buttons={["archive"]}
			/>
			{tableContent.map((el) => (
				<TableRow
					rowContent={el}
					buttons={["edit", "archive", "delete"]}
				/>
			))}
		</div>
	);
}
