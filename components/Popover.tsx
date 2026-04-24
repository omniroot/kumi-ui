import { Popover as BasePopover } from "@base-ui/react";
import { IconBell, IconChevronDown } from "@tabler/icons-react";

export const Popover = () => {
	return (
		<BasePopover.Root>
			<BasePopover.Trigger>
				<IconBell aria-label="Notifications" />
			</BasePopover.Trigger>
			<BasePopover.Portal>
				<BasePopover.Positioner sideOffset={8}>
					<BasePopover.Popup>
						<BasePopover.Arrow>
							<IconChevronDown />
						</BasePopover.Arrow>
						<BasePopover.Title>Notifications</BasePopover.Title>
						<BasePopover.Description>
							You are all caught up. Good job!
						</BasePopover.Description>
					</BasePopover.Popup>
				</BasePopover.Positioner>
			</BasePopover.Portal>
		</BasePopover.Root>
	);
};
