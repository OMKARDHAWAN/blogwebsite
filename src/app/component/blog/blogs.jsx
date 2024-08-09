"use client";
import { usePosts } from "../../../../lib/Post/read";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading/loading";
import "./blogs.css"
export default function Blogs() {
    const { data, error, isLoading } = usePosts();
    if (isLoading) return <p className="text-center text-lg"><Loading/></p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error.message}</p>;
console.log(data);
    return (
        <main className="flex flex-col items-center px-4 py-8">
            <section className=" section  flex flex-wrap  w-full">
                {data.map((post) => (
                    <div 
                        key={post.id} 
                        className="blogcard bg-white p-3 my-3 hover:bg-zinc-200 overflow-hidden transition-transform transform w-[auto] h-[auto] ml-14 cursor-pointer"
                    >
                    <Link href={`/pages/blogpost?id=${post?.id}`}>
                        {post.image && (
                            <Image 
                                src={post.image} 
                                alt={`Image for ${post.title}`} 
                                width={700} 
                                height={400} 
                                className="w-72 h-24 object-fit "
                            />
                        )}
                        <div className="p-6">
                                               <h2 className="text-xl font-semibold text-gray-800 ">{post.title}</h2>
                            <p className="text-md text-gray-600 ">{post.author}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </section>
        </main>
    );
}