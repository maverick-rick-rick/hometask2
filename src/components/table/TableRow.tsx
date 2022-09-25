import React from "react";
import receiveTableButtons from "../../utils/receiveTableButtons";
import TableRowItem from "./TableRowItem";

type TableRowProps = {
	className?: string;
	rowContent: Array<string>;
	buttons?: string[];
};

export default function TableRow(props: TableRowProps) {
	let propsClasses: string = "";
	if (props.className) {
		propsClasses = props.className;
	}
	let buttonsArray: React.ReactNode[] | undefined;
	if (props.buttons) {
		buttonsArray = receiveTableButtons(props.buttons);
	}

	return (
		<div className={"table_row" + " " + propsClasses}>
			{props.rowContent.map((el) => (
				<TableRowItem content={el} key={el} />
			))}
			<TableRowItem content={buttonsArray} />
		</div>
	);
}
