import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const dynamicParams = false;

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postid: post.id,
    }));
}

export async function generateMetadata({ params }) {
    const { postid } = await params; 
    const decodedId = decodeURIComponent(postid);
    console.log("Resolved params:", params);

    const posts = getSortedPostsData();
    // console.log("Posts:", posts); // Reduce noise

    const post = posts.find((post) => post.id === decodedId);

    if (!post) {
        console.error(`Post not found for postId: ${postid}`);
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
    };
}

export default async function Post({ params }) {
    const { postid } = await params; 
    const decodedId = decodeURIComponent(postid);
    console.log("Post ID:", decodedId);

    const posts = getSortedPostsData();

    const post = posts.find((post) => post.id === decodedId);
    if (!post) {
        console.error(`Post not found for postId: ${decodedId}`);
        notFound();
    }

    const { title, date, contentHtml } = await getPostData(decodedId);

    const pubDate = getFormattedDate(date);

    return (
        <div className="">
            
        <Navbar></Navbar>
            
        <main className="prose prose-sm lg:prose-2xl prose-slate dark:prose-invert m-auto mt-40 p-4">

            <article className="">
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
                <Footer></Footer>


        </div>
    );
}
