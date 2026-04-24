import { Input as BaseInput, type InputProps as BaseInputProps } from "@base-ui/react";
import type { FC } from "react";
import { kumi } from "@/kumi-ui/kumi.ts";
export interface InputProps extends BaseInputProps {}

export const Input: FC<InputProps> = ({ className, ...rest }) => {
	const style = kumi(
		{
			backgroundColor: "surface-high",
			borderRadius: "12px",
			border: "none",
			fontSize: "inherit",
			color: "text",
			"::placeholder": {
				color: "text-low",
			},
			padding: " 12px 8px",
			"&:focus-visible": {
				outline: "none",
			},
		},
		className as string,
	);
	return <BaseInput {...rest} className={style} />;
};
