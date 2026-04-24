import {
	Button as ButtonBase,
	type ButtonProps as ButtonBaseProps,
} from "@base-ui/react";
import clsx from "clsx";
import type { FC } from "react";
import { kumi } from "@/kumi-ui/kumi.ts";

export interface IconButton extends ButtonBaseProps {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
}

export const IconButton: FC<IconButton> = ({
	children,
	variant = "primary",
	size = "md",
	className,
	...rest
}) => {
	const _size = clsx({
		"30px": size === "sm",
		"38px": size === "md",
		"46px": size === "lg",
	});
	const _iconSize = clsx({
		"18px": size === "sm",
		"22px": size === "md",
		"26px": size === "lg",
	});

	const _radius = clsx({
		"12px": size === "sm",
		"14px": size === "md",
		"18px": size === "lg",
	});

	const _hover = clsx({
		"primary-hover": variant === "primary",
		"secondary-hover": variant === "secondary",
		"ghost-hover": variant === "ghost",
	});
	const styles = kumi(
		{
			width: _size,
			height: _size,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: `on-${variant}`,
			backgroundColor: variant,
			border: "none",
			borderRadius: _radius,
			transition: "transform 150ms, background-color 200ms",
			":active": {
				transform: "scale(98%)",
			},
			'@media (hover:"hover")': {
				":hover": {
					backgroundColor: _hover,
				},
			},

			"& > svg": {
				width: _iconSize,
				height: _iconSize,
			},
		},
		className,
	);
	return (
		<ButtonBase {...rest} data-variant={variant} data-size={size} className={styles}>
			{children}
		</ButtonBase>
	);
};

IconButton.displayName = "KumiButton";
