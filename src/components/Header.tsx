/** @jsx jsx */
import { jsx, Theme } from "theme-ui";
import Link from "next/link";
import { useColorMode, Link as ThemedLink } from "theme-ui";
import { CMS_NAME } from "../pages";

const navItemStyles = {
	mx: 12,
	fontWeight: 600,
	fontSize: 22,
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
				maxWidth: `container`,
				mx: `auto`,
				px: 3,
				py: 2,
				mb: 6,
			}}
		>
			<div sx={{ mx: -12 }}>
				<Link href="/" passHref>
					<ThemedLink sx={navItemStyles}>{CMS_NAME}</ThemedLink>
				</Link>
				<Link href="/blog" passHref>
					<ThemedLink sx={navItemStyles}>Blog</ThemedLink>
				</Link>
			</div>

			<div sx={{ ml: "auto" }}>
				<button
					onClick={toggleColorMode}
					sx={{
						fontWeight: "bold",
						fontSize: 16,
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
