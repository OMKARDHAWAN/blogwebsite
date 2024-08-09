"use client"
import { useSearchParams } from "next/navigation";
import { usePostForm } from "../../../../contextApi/Postcategory";
import { useEffect } from "react";
import DOMPurify from 'dompurify';
import Link from "next/link";
import "./blogpost.css"
import Head from "next/head";
export default function Post() {
    const [searchParams] = useSearchParams();
    // Check if searchParams has 'get' method
    if (typeof searchParams.get !== 'function') {
        console.error('searchParams.get is not a function');
        return null;
    }
    const PostId = searchParams.get('id');
    const { 
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleCreate,
        handleUpdate,
        fetchData
    } = usePostForm();

    useEffect(() => { 
        if (PostId) {
            fetchData(PostId);
        }
    }, [PostId, fetchData]);

    const sanitizedContent = DOMPurify.sanitize(data?.content || '');

    // Extract a snippet for the meta description (up to 160 characters)
    const getDescriptionSnippet = (content) => {
        const textContent = DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
        return textContent.slice(0, 160) + (textContent.length > 160 ? '...' : '');
    };

    const title = data?.title ? `${data.title} - My Blog` : 'Blog Post - My Blog';
    const description = data?.content ? getDescriptionSnippet(data.content) : 'Read our latest blog post and explore insightful content.';

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <main className="bg-gray-100 min-h-screen flex justify-center py-10 px-4 main">
                <div className='relative right-24'>
                    <ul>
                        <Link href="/" className='text-black-400 cursor-pointer hover:text-blue-500 text-xl Link'>Home</Link>
                    </ul>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[900px] blog">
                    <header className="p-6 border-b border-gray-200">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                            {data?.title}
                        </h1>
                        <div className="border-t-4 border-blue-500 mb-4"></div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-1">
                            {data?.category}
                        </h2>
                        <h3 className="text-md text-gray-600">
                            by {data?.author}
                        </h3>
                    </header>
                    <section className="p-5">
                        <div 
                            className="prose lg:prose-xl text-black"
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}