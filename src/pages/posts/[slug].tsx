import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { Container } from "../../cadell-nextjs-blog-core/components/Container";
import { Layout } from "../../cadell-nextjs-blog-core/components/Layout";
import { DateFormatter } from "../../cadell-nextjs-blog-core/components/DateFormatter";
import {
	BasicPost,
	getPostBySlug,
	getPosts,
} from "../../cadell-nextjs-blog-core/api";
import markdownToHtml from "../../cadell-nextjs-blog-core/markdownToHtml";
import { CMS_NAME } from "..";

interface PostProps {
	post: BasicPost;
	htmlContent: string;
}

export default function Post({ post, htmlContent }: PostProps) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const { title, dateString } = post;

	return (
		<>
			<Head>
				<title>
					{title} | {CMS_NAME}
				</title>
			</Head>
			<Layout>
				<Container>
					<article className="mb-32">
						<>
							<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
								{title}
							</h1>
							<div className="max-w-2xl mx-auto">
								<div className="mb-6 text-lg">
									<DateFormatter dateString={dateString} />
								</div>
							</div>
						</>
						<div className="max-w-2xl mx-auto">
							<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
						</div>
					</article>
				</Container>
			</Layout>
		</>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post: any = getPostBySlug(params.slug);
	const htmlContent = await markdownToHtml(post.content || "");

	return {
		props: {
			post,
			htmlContent,
		},
	};
}

export async function getStaticPaths() {
	const posts = getPosts();

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
