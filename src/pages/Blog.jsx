import React from "react";
import { blogData, blogHeader } from "../data";
import BlogCard from "../components/BlogCard"

const Blog = () => {
  return (
    <div className="container min-h-screen mt-4">
      <div className="mx-auto px-8 lg:max-w-5xl lg:px-12">
        <header className="mb-8 lg:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2 sm:text-4xl">
            {blogHeader.title}
          </h2>
          <p className="text-lg leading-8 text-gray-600">{blogHeader.subtitle}</p>
        </header>

        <div className="flex flex-col gap-24">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;