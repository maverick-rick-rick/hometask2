import React from "react";

type SectionProps = {
	children?: React.ReactNode;
	className?: string;
};

export default function Section(props: SectionProps) {
	return (
		<section {...props} className={"section" + " " + props.className}>
			<div className="container">{props.children}</div>
		</section>
	);
}
