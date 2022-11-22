import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

type SwitchType = {
	switchItems: string[];
};

export default function Switch(props: SwitchType) {
	const switchItems = props.switchItems;

	const switchState = useSelector((state: any) => state.tableSwitcherReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const marker = document.querySelector(".radio_switch-marker");
		const checked = document.querySelector(
			".radio_switch-item > .radio_switch-input:checked"
		);
		const parent = checked?.closest(
			".radio_switch-item"
		) as HTMLElement | null;
		marker?.setAttribute(
			"style",
			`transform: translateX(${parent?.offsetLeft}px)`
		);
	});

	function moveMarker(event: any) {
		const offset = event.target.closest(".radio_switch-item").offsetLeft;
		const marker = document.querySelector(".radio_switch-marker");
		marker?.setAttribute("style", `transform: translateX(${offset}px)`);
	}

	function setState(event: any){
		const value = event.target.value
		dispatch({ type: "SWITCH_TABLE", payload: value});
		
	}

	return (
		<div className="radio_switch">
			<>
				{switchItems.map((item, index) => {
					return (
						<div className="radio_switch-item" key={index}>
							<input
								type="radio"
								className="radio_switch-input"
								id={`radio_${index}`}
								name="radioSwitch"
								value={item}
								defaultChecked={
									switchState === `${item}`
										? true
										: false
								}
								onChange={setState}
							/>
							<label
								htmlFor={`radio_${index}`}
								className="radio_switch-label"
								onClick={moveMarker}
							>
								{`${item}`}
							</label>
						</div>
					);
				})}
				<div className="radio_switch-marker" aria-hidden="true"></div>
			</>
		</div>
	);
}
