/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";

// based on: https://github.com/vercel/next.js/blob/master/examples/active-class-name/components/ActiveLink.js
// I think this should be a reusable package.

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
			<a sx={{ ...linkSx, ...addedSx }}>{children}</a>
		</Link>
	);
}
