import React from "react";

type IconSVGProps = {
	icon: string | React.ReactNode;
};

export default function SvgIcon(props: IconSVGProps) {
	let icon;

	if (typeof props.icon === "string") {
		const x = " ";
		icon = props.icon.replace(x, "_").toLowerCase();
	}

	return (
		<svg>
			<use href={`./images/dist/sprite.svg#svg-${icon}`}></use>
		</svg>
	);
}
