// import { Box, IconButton, Popover, Portal, useDisclosure } from "@chakra-ui/react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
// import { IconMoodUnamused } from "@tabler/icons-react";
// import { getEmojiDataFromNative } from "emoji-mart";
// import { type FC, useEffect, useState } from "react";

// // import "./EmojiPicker.css";

// export interface IEmoji {
// 	id: string;
// 	keywords: string[];
// 	name: string;
// 	native: string;
// 	shortcodes: string;
// 	unified: string;
// }

// // const getEmojiById = (id: IEmoji["id"]): IEmoji | undefined => {
// // 	// @ts-expect-error
// // 	console.log("emo", data?.emojis);
// // 	const result = data?.emojis?.[id];

// // 	console.log("Emo result", result);

// // 	return result;
// // };

// console.log("@Emoji ", { data });

// interface IProps {
// 	initialEmoji?: IEmoji["native"];
// 	onChange?: (emoji: IEmoji) => void;
// 	onlyPreview?: boolean;
// }
// export const EmojiPicker: FC<IProps> = ({
// 	initialEmoji,
// 	onChange,
// 	onlyPreview = false,
// }) => {
// 	const [emoji, setEmoji] = useState<IEmoji | null>(null);
// 	const { open, onToggle } = useDisclosure();
// 	// const [search, setSearch] = useState("Hearth");

// 	const onEmojiSelect = (emoji: IEmoji) => {
// 		setEmoji(emoji);
// 		onChange?.(emoji);
// 	};

// 	useEffect(() => {
// 		const setupInitialEmoji = async () => {
// 			const emoji = (await getEmojiDataFromNative(initialEmoji)) as IEmoji;
// 			if (emoji) setEmoji(emoji);
// 		};
// 		if (initialEmoji) {
// 			setupInitialEmoji();
// 		}
// 	}, [initialEmoji]);

// 	console.log({ emoji });

// 	if (onlyPreview)
// 		return (
// 			<Box p={2} fontSize={"md"}>
// 				{emoji?.native || <IconMoodUnamused />}
// 			</Box>
// 		);

// 	return (
// 		<Popover.Root open={open} onOpenChange={onToggle} positioning={{ strategy: "fixed" }}>
// 			<Popover.Trigger asChild>
// 				<IconButton fontSize={"md"}>{emoji?.native || <IconMoodUnamused />}</IconButton>
// 			</Popover.Trigger>
// 			<Portal disabled>
// 				<Popover.Positioner>
// 					<Popover.Content zIndex={"999999999999999999"}>
// 						<Popover.Body asChild>
// 							<Picker data={data} onEmojiSelect={onEmojiSelect} autoFocus />
// 							{/* <Frimousse.Root onEmojiSelect={(e) => console.log(e.label)}>
// 								<Frimousse.Search autoFocus />

// 								<Frimousse.Viewport>
// 									<Frimousse.Loading>Loading…</Frimousse.Loading>
// 									<Frimousse.Empty>No emoji found.</Frimousse.Empty>
// 									<Frimousse.List
// 										components={{
// 											CategoryHeader: ({ category, ...props }) => <div {...props}>{category.label}</div>,
// 											Row: ({ children, ...props }) => <div {...props}>{children}</div>,
// 											Emoji: ({ emoji, ...props }) => <button {...props}>{emoji.emoji}</button>,
// 										}}
// 									/>
// 								</Frimousse.Viewport>
// 							</Frimousse.Root> */}
// 						</Popover.Body>
// 					</Popover.Content>
// 				</Popover.Positioner>
// 			</Portal>
// 		</Popover.Root>
// 	);
// };
