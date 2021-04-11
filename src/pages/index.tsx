/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Layout } from "../components/Layout";
import Head from "next/head";

export const CMS_NAME = "Basic.dev";

export default function Index() {
	return (
		<>
			<Head>
				<title>All Posts | {CMS_NAME}</title>
			</Head>
			<Layout>
				<div
					sx={{
						maxWidth: "container",
						mx: "auto",
						mt: 7,
					}}
				>
					<Styled.h1 sx={{ fontSize: 6, mb: 4 }}>
						This is my cool website.
					</Styled.h1>
					<Styled.p sx={{ fontSize: 3 }}>
						My cool website has a dark mode and a blog and uses Nextjs.
					</Styled.p>
				</div>
			</Layout>
		</>
	);
}
