/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { CMS_NAME } from "../../pages";

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
				<Link href="/">{CMS_NAME}</Link>
				<Link href={`/blog`} sx={navItemStyles}>
					Blog
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
