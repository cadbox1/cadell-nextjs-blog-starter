import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export interface BasicPost {
	title: string;
	dateString: string;
	slug: string;
	content: string;
}

export function getPostBySlug(slug: string): BasicPost {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	// @ts-ignore
	return {
		...data,
		content,
		slug: realSlug,
		dateString: data.date,
	};
}

export function getPosts(): BasicPost[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		// sort posts by date in descending order
		.sort(
			(post1, post2) =>
				new Date(post1.dateString).getTime() -
				new Date(post2.dateString).getTime()
		);
	return posts;
}
