import React, { ButtonHTMLAttributes } from "react";
import SvgIcon from "./SvgIcon";

type ButtonProps = {
	children?: React.ReactNode | string;
	icon?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
	const { className, id, children, icon, ...buttonProps } = props;

	return (
		<button className={`btn ${className}`} id={id} {...buttonProps}>
			{icon && <SvgIcon icon={icon}></SvgIcon>}
			{children}
		</button>
	);
}
