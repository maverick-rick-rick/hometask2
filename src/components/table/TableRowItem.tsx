import React from "react";
import SvgIcon from "../SvgIcon";

type TableRowItemProps = {
	content?: string | React.ReactNode;
	icon?: string | boolean;
};

export default function TableRowItem(props: TableRowItemProps) {
	return (
		<div className="table_row-item">
			{props.icon ? (
				<div className={"rounded_icon"}>
					<SvgIcon icon={props.icon} />
				</div>
			) : (
				false
			)}
			{props.content}
		</div>
	);
}
