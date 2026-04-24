import type { ReactNode } from "react";
import { HStack } from "@/kumi-ui/components/HStack/HStack.tsx";
import { Typo } from "@/kumi-ui/components/Typo/Typo.tsx";
import { VStack } from "@/kumi-ui/components/VStack/VStack.tsx";

interface Props {
	title: string;
	actions?: ReactNode;
	children?: ReactNode;
}
export const Section: React.FC<Props> = ({ title, actions, children }) => {
	return (
		<VStack w="100%" gap={"8px"}>
			<HStack w="100%" justify="space-between">
				<HStack align="center">
					<Typo variant="title" size="lg">
						{title}
					</Typo>
				</HStack>
				<HStack justify="end" align="center">
					{actions}
				</HStack>
			</HStack>
			{children}
		</VStack>
	);
};
