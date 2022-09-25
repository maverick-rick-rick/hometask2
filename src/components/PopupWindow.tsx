import React from "react";
import Button from "./Button";

type PopupProps = {
	children?: React.ReactNode | string;
	active?: boolean;
	setActive?: Function;
};

export default function PopupWindow(props: PopupProps) {
	return (
		<div className={props.active ? "popup active" : "popup"}>
			<div className="popup_content">
				{props.children}
				<Button
					className={"popup_close"}
					icon={"cross"}
					callback={props.setActive}
					callbackParameter={false}
				></Button>
			</div>
		</div>
	);
}
