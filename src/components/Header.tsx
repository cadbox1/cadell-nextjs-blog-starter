/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useColorMode, Link as ThemedLink } from "theme-ui";
import { CMS_NAME } from "../pages";
import { NavLink } from "./NavLink";

const navItemStyles = {
	mx: 3,
	fontWeight: 600,
	fontSize: 2,
	textDecoration: "none",
	color: "text",
};

const navItemActiveStyles = {
	textDecoration: "underline",
	cursor: "default",
};

export function Header() {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = () => {
		setColorMode(isDark ? `light` : `dark`);
	};

	return (
		<nav
			sx={{
				display: "flex",
				alignItems: "center",
				mb: 6,
			}}
		>
			<div sx={{ mx: -navItemStyles.mx }}>
				<NavLink href="/" linkSx={navItemStyles} activeSx={navItemActiveStyles}>
					{CMS_NAME}
				</NavLink>
				<NavLink
					href="/blog"
					linkSx={navItemStyles}
					activeSx={navItemActiveStyles}
				>
					Blog
				</NavLink>
			</div>

			<div sx={{ ml: "auto" }}>
				<button
					onClick={toggleColorMode}
					sx={{
						fontWeight: "bold",
						fontSize: 1,
						backgroundColor: "muted",
						py: 3,
						px: 4,
						color: "text",
						border: "none",
						cursor: "pointer",
					}}
				>
					{isDark ? "Dark" : "Light"}
				</button>
			</div>
		</nav>
	);
}
