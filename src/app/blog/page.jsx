import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/markdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Blog() {
    const posts = getSortedPostsData();

    if (!posts || posts.length === 0) {
        console.error("No posts found");
        return <p className="text-center text-xl">No blogs available at the moment.</p>;
    }

    return (
        <div className="bg-white">
            <Navbar />

            <section className="max-w-7xl mx-auto px-4 py-20 space-y-12 text-base-content">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mb-4 text-center lg:text-left">
                        Check Out Our Informative Articles About Glass Care Tips and Tricks
                    </h1>
                    <p className="text-lg">
                        Welcome to GlassGo’s blog, your go-to resource for all things glass care! Whether you’re a homeowner, business owner, or car enthusiast, maintaining your glass surfaces is essential for longevity, safety, and aesthetics. That’s why we’ve curated a collection of <strong>informative articles</strong> packed with practical tips, expert advice, and innovative tricks to help you care for your glass like a pro.
                    </p>
                </div>

                <hr />

                <div>
                    <h2 className="text-2xl font-semibold mb-2">What You’ll Learn</h2>
                    <p>
                        From <strong>cleaning hacks</strong> that leave your windows streak-free to <strong>preventative measures</strong> that protect against cracks and damage, our blogs cover it all. Learn how to handle common issues like foggy windows, scratched glass, or hard water stains with ease. We also share insights on <strong>energy-efficient glass solutions</strong>, <strong>smart glass technology</strong>, and <strong>seasonal maintenance tips</strong> to keep your glass in top condition year-round.
                    </p>
                </div>

                <hr />

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Why Trust GlassGo?</h2>
                    <p>
                        Our team of certified glass experts at GlassGo has years of experience in the industry, and we’re passionate about sharing our knowledge with you. Whether you’re looking for <strong>DIY repair tips</strong> or want to understand when it’s time to call in the professionals, our articles provide the answers you need.
                    </p>
                </div>

                <hr />

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Explore Our Blog</h2>
                    <p className="mb-2">
                        Ready to dive in? Explore our blog to discover:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Step-by-step guides</strong> for glass maintenance and repair.</li>
                        <li><strong>Innovative solutions</strong> to extend the life of your glass surfaces.</li>
                        <li><strong>Expert recommendations</strong> for choosing the right glass products.</li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Start Your Glass Care Journey Today</h2>
                    <p>
                        At GlassGo, we believe that well-maintained glass not only enhances the beauty of your space but also ensures safety and functionality. So, grab a cup of coffee, browse our articles, and start mastering the art of glass care today!
                    </p>
                </div>
            </section>

            <section className="max-w-7xl flex items-center flex-col justify-center mx-auto px-4">
                <h3 className="text-4xl lg:text-5xl uppercase text-center lg:text-left font-bold mb-16">
                    All Blogs
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image
                                    src={post.image || "/assets/tehran.jpg"}
                                    alt={post.title || "blog post image"}
                                    width={400}
                                    height={250}
                                    layout="responsive"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-semibold">{post.title || "Untitled Post"}</h2>
                                <p className="text-sm text-gray-600">{post.description || "No description available."}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" href={`/blog/${post.id}`}>
                                        Read
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="container m-auto mt-40 p-4">
                <Footer />
            </div>
        </div>
    );
}
