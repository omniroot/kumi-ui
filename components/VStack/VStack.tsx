import { Box, type BoxProps } from "@/kumi-ui/components/Box/Box.tsx";

interface VStackProps extends BoxProps {}
export const VStack: React.FC<VStackProps> = ({ id = "vstack", ...rest }) => {
	return <Box id={id} display="flex" flexDirection="column" {...rest} />;
};
