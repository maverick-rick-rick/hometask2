import React, {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
} from "react";
import keyGenerator from "../../utils/keyGenerator";
import TableRowItem from "./TableRowItem";

type TableRowProps = {
	className?: string;
	id?: number;
	rowContent: any;
	buttons?:
		| string
		| number
		| boolean
		| true
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment;
	categoryIcon: boolean;
};

export default function TableRow(props: TableRowProps) {
	const { rowContent, buttons, className, categoryIcon } = props;

	const rowData: string[] = Object.values(rowContent);

	function getIcon(index: number) {
		if (categoryIcon === true && index === 0) {
			return rowContent.category;
		}

		return false;
	}

	return (
		<div className={`table_row ${className ? className : ""}`}>
			{rowData.map((el, index) => (
				<TableRowItem
					content={el}
					icon={getIcon(index)}
					key={keyGenerator()}
				/>
			))}
			{buttons ? <TableRowItem content={buttons} /> : null}
		</div>
	);
}
