import React, {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
} from "react";
import keyGenerator from "../../utils/keyGenerator";
import TableRowItem from "./TableRowItem";

type StateItemType = {
	[key: string]: string;
};

type TableRowProps = {
	className?: string;
	id?: number;
	rowContent: StateItemType | string[];
	buttons?:
		| string
		| number
		| true
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment;
};




export default function TableRow(props: TableRowProps) {
	const { rowContent, buttons, className } = props;
    const rowData = Object.values(rowContent);
    
	return (
		<div className={`table_row ${className ? className : ""}`}>
			{rowData.map(el => (
				<TableRowItem content={el} key={keyGenerator()} />
			))}
			<TableRowItem content={buttons} />
		</div>
	);
}
