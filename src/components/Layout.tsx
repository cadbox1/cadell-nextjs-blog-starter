/** @jsx jsx */
import { jsx } from "theme-ui";
import { Header } from "./Header";

export interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div sx={{ maxWidth: "container", mx: "auto", px: 3, py: 3 }}>
			<Header />
			<main>{children}</main>
		</div>
	);
}
