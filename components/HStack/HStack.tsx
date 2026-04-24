import { Box, type BoxProps } from "@/kumi-ui/components/Box/Box.tsx";

interface HStackProps extends BoxProps {}
export const HStack: React.FC<HStackProps> = ({ id = "hstack", ...rest }) => {
	return <Box id={id} display="flex" flexDirection="row" {...rest} />;
};
