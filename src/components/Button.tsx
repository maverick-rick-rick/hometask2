import React from "react";
import Icon_SVG from "./Icon_SVG";

type ButtonProps = {
	children?: React.ReactNode | string;
	className?: string | object;
	icon?: string;
	callback?: Function;
	callbackParameter?: boolean;
};

export default function Button(props: ButtonProps) {
	let icon: React.ReactNode;
	let resultContent: React.ReactNode[] = [];

	function iconElement(str: string): React.ReactNode {
		return <Icon_SVG icon={str} />;
	}

	if (props.icon) {
		icon = iconElement(props.icon);
	}
	let callBack: Function;
	if (props.callback) {
		callBack = props.callback;
	}

	resultContent.push(icon, props.children);

	return (
		<button
			className={"btn" + " " + props.className}
			onClick={() => callBack(props.callbackParameter)}
		>
			{resultContent}
		</button>
	);
}
