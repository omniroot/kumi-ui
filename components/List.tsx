// import { chakra } from "@chakra-ui/react";

// /* =========================
//  * MdList Root
//  * ========================= */

// const MdListRoot = chakra("div", {
// 	base: {
// 		display: "flex",
// 		flexDirection: "column",
// 		gap: "sm",
// 		transition: "gap 0.15s ease",

// 		// уменьшаем gap при нажатии на любой item
// 		// "&:has([data-md-list-item]:active)": {
// 		// 	gap: "1px",
// 		// },
// 		"& > *": {
// 			borderRadius: "0px !important",
// 		},

// 		"&:has(:active)": {
// 			gap: "0.5",
// 		},

// 		"& > *:first-child": {
// 			borderTopLeftRadius: "14px !important",
// 			borderTopRightRadius: "14px !important",
// 			// borderBottomLeftRadius: "0px !important",
// 			// borderBottomRightRadius: "0px !important",
// 		},

// 		"& > *:last-child": {
// 			// borderTopLeftRadius: "0px !important",
// 			// borderTopRightRadius: "0px !important",
// 			borderBottomLeftRadius: "14px !important",
// 			borderBottomRightRadius: "14px !important",
// 		},
// 	},
// });

// /* =========================
//  * MdList Item (surface)
//  * ========================= */

// const MdListItemRoot = chakra("div", {
// 	base: {
// 		bg: "surface-container",
// 		borderRadius: "14px",
// 		cursor: "pointer",
// 		userSelect: "none",
// 		position: "relative",
// 		transition: "background-color 200ms",

// 		_hover: {
// 			bg: "surface-container-high",
// 		},

// 		_active: {
// 			bg: "surface-container-highest",
// 		},

// 		_focusVisible: {
// 			outline: "2px solid",
// 			outlineColor: "primary",
// 			outlineOffset: "2px",
// 		},
// 	},
// });

// /* =========================
//  * MdList Item Content
//  * ========================= */

// const MdListItemContent = chakra("div", {
// 	base: {
// 		display: "flex",
// 		alignItems: "center",
// 		gap: "16px",
// 		padding: "12px 16px",
// 		minHeight: "48px", // MD3 minimum touch target
// 		width: "100%",
// 		"& > *": {
// 			borderRadius: "0px",
// 		},
// 	},
// });

// /* =========================
//  * Compound exports
//  * ========================= */

// // export const MdList = Object.assign(MdListRoot, {
// //   Item: Object.assign(
// //     React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MdListItemRoot>>(
// //       (props, ref) => (
// //         <MdListItemRoot
// //           ref={ref}
// //           data-md-list-item
// //           {...props}
// //         />
// //       )
// //     ),
// //     {
// //       Content: MdListItemContent,
// //     }
// //   ),
// // })

// export const List = {
// 	Root: MdListRoot,
// 	Item: MdListItemRoot,
// 	Content: MdListItemContent,
// };
