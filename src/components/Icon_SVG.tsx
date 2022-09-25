import React from "react";

type IconSVGProps = {
	icon: string;
};

export default function Icon_SVG(props: IconSVGProps) {
	return (
		<svg>
			<use href={`./images/dist/sprite.svg#svg-${props.icon}`}></use>
		</svg>
	);
}
