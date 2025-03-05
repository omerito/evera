"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import blogData from "@/components/Blog/blogData";
import { Blog } from "@/types/blog";
import { Calendar, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BlogDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const currentBlog = blogData.find((blog) => blog.id.toString() === id);
    if (currentBlog) {
      setBlog(currentBlog);
      
      // Find related posts based on tags
      const related = blogData
        .filter(post => 
          post.id.toString() !== id && 
          post.tags.some(tag => currentBlog.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-orange-600 border-b-orange-600 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog Details"
        description={blog.title}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 lg:py-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to blogs link */}
            <div className="mb-8">
              <button 
                onClick={() => router.push('/blog')}
                className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all blogs
              </button>
            </div>
            
            {/* Blog header */}
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {blog.author.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {blog.author.designation}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-1 text-orange-600" />
                  {blog.publishDate}
                </div>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="mb-10 overflow-hidden rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={675}
                priority
                className="object-cover w-full h-auto"
              />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Blog content */}
            <article className="prose prose-lg whitespace-pre-line max-w-none dark:prose-invert prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-a:text-orange-600 prose-a:dark:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
              {blog.content || ""}
            </article>
            
            {/* Share section */}
            <div className="flex items-center justify-between py-8 mt-12 border-t border-b border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Share this post:
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-600">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Related Posts</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {relatedPosts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                      <div className="overflow-hidden transition-all bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <div className="h-48 overflow-hidden">
                          <Image 
                            src={post.image} 
                            alt={post.title} 
                            width={400}
                            height={240}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2 dark:text-white">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
                            {post.paragraph}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;