import { Drawer as BaseDrawer, type DrawerRootProps, ScrollArea } from "@base-ui/react";
import type { ReactNode } from "react";
import { Typo } from "@/kumi-ui/components/Typo/Typo.tsx";
import { VStack } from "@/kumi-ui/components/VStack/VStack.tsx";
import { kumi } from "@/kumi-ui/kumi.ts";
import styles from "./Drawer.module.css";

type Props = {
	children?: ReactNode;
	title?: string;
	description?: string;
} & DrawerRootProps;
export const Drawer: React.FC<Props> = ({ children, title, description, ...rest }) => {
	return (
		<BaseDrawer.Root {...rest}>
			<BaseDrawer.Trigger className={styles.Button}>Open mobile menu</BaseDrawer.Trigger>
			<BaseDrawer.Portal>
				<BaseDrawer.Backdrop className={styles.Backdrop} />
				<BaseDrawer.Viewport className={styles.Viewport}>
					<ScrollArea.Root
						style={{ position: undefined }}
						className={styles.ScrollAreaRoot}
					>
						<ScrollArea.Viewport className={styles.ScrollAreaViewport}>
							<ScrollArea.Content className={styles.ScrollContent}>
								<BaseDrawer.Popup className={styles.Popup}>
									<nav
										aria-label="Navigation"
										className={kumi({
											display: "flex",
											flexDirection: "column",
											backgroundColor: "surface",
											borderRadius: "21px",
											padding: "12px",
											gap: "8px",
											paddingTop: "12px",
										})}
									>
										<div
											className={kumi({
												width: "50px",
												height: "5px",
												position: "absolute",
												left: "50%",
												// top: "4%",
												translate: "-50%",
												backgroundColor: "surface-high",
												borderRadius: "21px",
											})}
										/>
										<VStack
											w="100%"
											justify="space-between"
											className={kumi({ marginTop: "12px" })}
										>
											<Typo variant="title">{title}</Typo>
											<Typo>{description}</Typo>
										</VStack>

										<BaseDrawer.Content
											className={kumi({
												width: "100%",
												display: "flex",
												flexDirection: "column",
												gap: "8px",
											})}
										>
											{children}
										</BaseDrawer.Content>
									</nav>
								</BaseDrawer.Popup>
							</ScrollArea.Content>
						</ScrollArea.Viewport>
						<ScrollArea.Scrollbar className={styles.Scrollbar}>
							<ScrollArea.Thumb className={styles.ScrollbarThumb} />
						</ScrollArea.Scrollbar>
					</ScrollArea.Root>
				</BaseDrawer.Viewport>
			</BaseDrawer.Portal>
		</BaseDrawer.Root>
	);
};
