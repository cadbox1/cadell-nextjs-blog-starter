/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ThemeUiLink, ThemeUICSSObject } from "theme-ui";

// based on: https://github.com/vercel/next.js/blob/master/examples/active-class-name/components/ActiveLink.js
// this probably should be part of core

export interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	linkSx: ThemeUICSSObject;
	activeSx?: ThemeUICSSObject;
}

export function NavLink({ href, children, linkSx, activeSx }: NavLinkProps) {
	const { asPath } = useRouter();

	const addedSx = asPath === href ? activeSx : {};

	return (
		<Link href={href} passHref>
			<ThemeUiLink sx={{ ...linkSx, ...addedSx }}>{children}</ThemeUiLink>
		</Link>
	);
}
