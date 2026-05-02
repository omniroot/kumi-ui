import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import type { FC } from "react";

interface IProps {
	value?: boolean;
	onChange?: (state: boolean) => void;
	className?: string;
}
export const Checkbox: FC<IProps> = ({ value, onChange, className }) => {
	return (
		<ChakraCheckbox.Root checked={value} onCheckedChange={(v) => onChange?.(!!v.checked)}>
			<ChakraCheckbox.Control
				w={"30px"}
				h={"30px"}
				border={"2px solid {colors.primary}"}
				color={"on-primary"}
				borderRadius={"12px"}
				transition={"background 200ms"}
				_icon={{
					w: "18px",
					color: "on-primary",
					h: "18px",
				}}
				_checked={{
					bg: "primary",
				}}
			/>
			<ChakraCheckbox.HiddenInput />
		</ChakraCheckbox.Root>
	);
};
