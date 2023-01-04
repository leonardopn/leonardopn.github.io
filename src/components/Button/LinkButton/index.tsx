import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Color from "color";
import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

interface LinkButtonProps extends ChakraLinkProps {
	icon?: string;
	isMain?: boolean;
	children?: ReactNode;
	routerProps?: LinkProps;
	isExternal?: boolean;
}

export function LinkButton({
	icon,
	isMain,
	children,
	routerProps,
	isExternal = false,
	...rest
}: LinkButtonProps) {
	const theme = useTheme();

	return (
		<ChakraLink
			as={isExternal ? ChakraLink : Link}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			colorScheme="Background"
			rel="noopener"
			_hover={{
				background: isMain
					? Color(theme.colors.Primary).alpha(0.3).toString()
					: "Background",
			}}
			background={isMain ? "Primary" : Color(theme.colors.Background).alpha(0.3).toString()}
			minW={50}
			minH={50}
			borderRadius={10}
			{...routerProps}
			{...rest}>
			{icon && (
				<Icon
					icon={icon}
					width={30}
					height={30}
					style={{ marginRight: children ? 10 : 0 }}
				/>
			)}

			{children}
		</ChakraLink>
	);
}
