/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui";
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
						mt: 8,
					}}
				>
					<Styled.h1 sx={{ fontSize: 6, mb: 4 }}>
						I build awesome teams that build awesome products.
					</Styled.h1>
					<Styled.p sx={{ fontSize: 3 }}>
						I'm a developer that takes customer problems from product
						requirements and technical design, through development and
						deployment, all the way to validation and customer support.
					</Styled.p>
				</div>
			</Layout>
		</>
	);
}
