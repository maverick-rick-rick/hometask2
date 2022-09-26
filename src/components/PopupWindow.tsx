import React from "react";
import Button from "./Button";
import SvgIcon from "./SvgIcon";

type PopupProps = {
	children?: React.ReactNode | string;
	active?: boolean;
	setActive?: () => void;
};

export default function PopupWindow({
	active,
	children,
	setActive,
}: PopupProps) {
	return (
		<div className={active ? "popup active" : "popup"}>
			<div className="popup_content">
				{children}
				<Button className={"popup_close"} onClick={setActive}>
					<SvgIcon icon={"cross"} />
				</Button>
			</div>
		</div>
	);
}
