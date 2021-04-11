/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { DateFormatter } from "../../components/DateFormatter";
import { BasicPost, getPosts } from "../../lib/api";
import { CMS_NAME } from "..";

export interface IndexProps {
	posts: BasicPost[];
}

export default function Index({ posts }: IndexProps) {
	return (
		<>
			<Head>
				<title>Blog | {CMS_NAME}</title>
			</Head>
			<Layout>
				<section>
					{[...posts]
						.sort(
							(a, b) =>
								new Date(b.dateString).getTime() -
								new Date(a.dateString).getTime()
						)
						.map(({ slug, title, dateString }) => (
							<div sx={{ mb: 6 }}>
								<Themed.h2 sx={{ mb: 2 }}>
									<Link href={`/blog/${slug}`} passHref>
										<Themed.a sx={{ color: "text" }}>{title}</Themed.a>
									</Link>
								</Themed.h2>
								<span>
									<DateFormatter dateString={dateString} />
								</span>
							</div>
						))}
				</section>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const posts = getPosts();

	return {
		props: { posts },
	};
}
