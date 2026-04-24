import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { type KumiStyles, kumi, type SpacingToken } from "@/kumi-ui/kumi.ts"; // Проверь путь

export type Size =
	| "fit-content"
	| "auto"
	| "min-content"
	| "max-content"
	| "100%"
	| (string & {});

// Расширяем стандартные HTML-атрибуты, исключая те, что мы переопределяем
export interface BoxProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "color" | "display"> {
	w?: Size;
	h?: Size;
	display?: "block" | "inline-block" | "flex" | "inline-flex" | "grid";
	flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
	justify?:
		| "space-around"
		| "space-between"
		| "space-evenly"
		| "center"
		| "flex-start"
		| "flex-end"
		| "start"
		| "end";
	align?: "stretch" | "center" | "flex-start" | "flex-end" | "start" | "end" | "baseline";
	radius?: "sm" | "md" | "lg";
	gap?: SpacingToken | (string & {}) | number;
	p?: SpacingToken | (string & {}) | number;
	color?: KumiStyles["color"];
	bg?: KumiStyles["backgroundColor"];
	asChild?: boolean;
	render?: (
		props: React.HTMLAttributes<HTMLElement> & { ref: React.Ref<any> },
	) => React.ReactElement;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
	(
		{
			w,
			h,
			display,
			flexDirection,
			justify,
			align,
			radius,
			gap,
			p,
			color,
			bg,
			className,
			style,
			id = "box",
			children,
			asChild = false,
			render,
			...rest
		},
		ref,
	) => {
		const Component = asChild ? Slot : "div";
		const styles = kumi(
			{
				width: w,
				height: h,
				display: display,
				flexDirection: flexDirection,
				justifyContent: justify,
				alignItems: align,
				borderRadius: radius,
				gap: gap,
				padding: p,
				color: color,
				backgroundColor: bg,
			},
			className,
		);

		const sharedProps = {
			...rest,
			id,
			style,
			className: styles,
			children,
			ref: ref as React.Ref<any>,
		};

		if (render) {
			return render(sharedProps);
		}

		return <Component {...sharedProps}>{children}</Component>;
	},
);

Box.displayName = "Box";
