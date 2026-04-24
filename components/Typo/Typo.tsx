import clsx from "clsx";
import type { FC } from "react";
import { Box, type BoxProps } from "@/kumi-ui/components/Box/Box.tsx";
import styles from "./Typo.module.css";

// import styles from "./Typo.module.css";

interface TypoProps extends BoxProps {
	variant?: "display" | "title" | "text" | "subtext";
	size?: "lg" | "md" | "sm";
}

export const Typo: FC<TypoProps> = ({
	className,
	children,
	id,
	variant = "text",
	size = "md",
	...rest
}) => {
	return (
		<Box
			{...rest}
			id={clsx("typo", id)}
			className={clsx(styles.typo, className)}
			data-variant={variant}
			data-size={size}
			asChild
		>
			<span>{children}</span>
		</Box>
	);
};
