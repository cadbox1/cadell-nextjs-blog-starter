/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
					{posts.map(({ slug, title, dateString }) => (
						<div sx={{ mb: 6 }}>
							<Styled.h2 sx={{ mb: 2 }}>
								<Link href={`/blog/${slug}`} passHref>
									<Styled.a sx={{ color: "text" }}>{title}</Styled.a>
								</Link>
							</Styled.h2>
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
