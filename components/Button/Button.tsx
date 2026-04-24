import {
	Button as ButtonBase,
	type ButtonProps as ButtonBaseProps,
} from "@base-ui/react";
import clsx from "clsx";
import type { FC } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonBaseProps {
	variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
}

export const Button: FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	className,
	...rest
}) => {
	return (
		<ButtonBase
			{...rest}
			data-variant={variant}
			data-size={size}
			className={clsx(styles.button, className)}
		>
			{children}
		</ButtonBase>
	);
};

Button.displayName = "KumiButton";
