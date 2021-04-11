/** @jsxRuntime classic /
/** @jsx jsx */
import React from "react";
import { jsx, Themed, ThemeProvider } from "theme-ui";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { Layout } from "../../components/Layout";
import { DateFormatter } from "../../components/DateFormatter";
import { BasicPost, getPostBySlug, getPosts } from "../../lib/api";
import { CMS_NAME } from "..";
import { MdxRemote } from "next-mdx-remote/types";

interface PostProps {
	post: BasicPost;
	source: MdxRemote.Source;
}

export default function Post({ post, source }: PostProps) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const { title, dateString } = post;

	const content = hydrate(source);

	return (
		<>
			<Head>
				<title>
					{title} | {CMS_NAME}
				</title>
			</Head>
			<Layout>
				<article>
					<Themed.h1 sx={{ mb: 4 }}>{title}</Themed.h1>
					<DateFormatter dateString={dateString} />
					<div>{content}</div>
				</article>
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
	const post = getPostBySlug(params.slug);

	const mdxSource = await renderToString(post.content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: undefined,
	});

	return {
		props: {
			post,
			source: mdxSource,
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
