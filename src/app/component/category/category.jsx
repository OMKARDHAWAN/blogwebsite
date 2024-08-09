"use client";
import { usePosts } from "../../../../lib/Post/read";
import Link from "next/link";
import { useCategoryPost } from "../../../../lib/category/read";
import Loading from "../loading/loading";

export default function Category() {
    const { data, error, isLoading } = useCategoryPost();
  
  
    console.log(data);
   
    // Initialize `posts` as an empty array
  

    if (isLoading) return <p className="text-center text-lg"><Loading/></p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error.message}</p>;

    

    return (
        <main className="flex flex-col items-center px-4 py-8">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {data.map((post) => (
                    <div 
                        key={post.id} 
                        className="bg-white hover:border-blue-400 hover:border-3 rounded-lg shadow-lg overflow-hidden text-center  transition-transform transform  cursor-pointer"
                    >
                       
                        <div className="p-6">
                            <Link href={`/pages/categoryPost?id=${post}`}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
