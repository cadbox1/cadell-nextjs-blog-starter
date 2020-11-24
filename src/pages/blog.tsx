import Head from "next/head";
import Link from "next/link";
import { Container } from "../cadell-nextjs-blog-core/components/Container";
import { Layout } from "../cadell-nextjs-blog-core/components/Layout";
import { DateFormatter } from "../cadell-nextjs-blog-core/components/DateFormatter";
import { BasicPost, getPosts } from "../cadell-nextjs-blog-core/api";
import { CMS_NAME } from ".";

export interface IndexProps {
	posts: BasicPost[];
}

export default function Index({ posts }: IndexProps) {
	return (
		<>
			<Layout>
				<Head>
					<title>All Posts | {CMS_NAME}</title>
				</Head>
				<Container>
					<section>
						<h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
							Posts
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
							{posts.map(({ slug, title, dateString }) => (
								<div>
									<h3 className="text-3xl mb-3 leading-snug">
										<Link as={`/posts/${slug}`} href="/posts/[slug]">
											<a className="hover:underline">{title}</a>
										</Link>
									</h3>
									<div className="text-lg mb-4">
										<DateFormatter dateString={dateString} />
									</div>
								</div>
							))}
						</div>
					</section>
				</Container>
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
