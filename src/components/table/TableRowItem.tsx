import React from "react";

type TableRowItemProps = {
	content?: string | React.ReactNode;
};

export default function TableRowItem(props: TableRowItemProps) {
	return <div className="table_row-item">{props.content}</div>;
}
