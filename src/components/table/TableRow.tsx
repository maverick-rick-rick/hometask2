import React, {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
} from "react";
import keyGenerator from "../../utils/keyGenerator";
import TableRowItem from "./TableRowItem";

type TableRowProps = {
	className?: string;
	rowContent: Array<string>;
	buttons?:
		| string
		| number
		| true
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment;
};

export default function TableRow(props: TableRowProps) {
	const { rowContent, buttons, className } = props;

	return (
		<div className={`table_row ${className ? className : ""}`}>
			{rowContent.map((el) => (
				<TableRowItem content={el} key={keyGenerator()} />
			))}
			<TableRowItem content={buttons} />
		</div>
	);
}
