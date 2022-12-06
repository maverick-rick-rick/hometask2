import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "./Button";
import SvgIcon from "./SvgIcon";

type PopupProps = {
	children?: React.ReactNode | string;
	active?: boolean;
};

export default function PopupWindow({ children }: PopupProps) {
	const dispatch = useDispatch();
	const active = useSelector((state: any) => state.popupReducer);

	function toggleModal() {
		dispatch({ type: "TOGGLE_MODAL" });
	}
	return (
		<div className={active ? "popup active" : "popup"}>
			<div className="popup_content">
				{children}
				<Button className={"popup_close"} onClick={toggleModal}>
					<SvgIcon icon={"cross"} />
				</Button>
			</div>
		</div>
	);
}
