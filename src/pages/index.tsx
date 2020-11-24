import { Layout } from "../cadell-nextjs-blog-core/components/Layout";
import { Container } from "../cadell-nextjs-blog-core/components/Container";
import Head from "next/head";

export const CMS_NAME = "Cadell's Nextjs Blog Starter";

export default function Index() {
	return (
		<>
			<Layout>
				<Head>
					<title>All Posts | {CMS_NAME}</title>
				</Head>
				<Container>
					Welcome to my blog.
				</Container>
			</Layout>
		</>
	);
}
