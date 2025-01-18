import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <article className="relative isolate flex flex-col gap-6 lg:flex-row lg:gap-8">
      {/* Image Container */}
      <a
        href="#"
        className="relative overflow-hidden rounded-xl bg-gray-50 lg:w-64 lg:flex-shrink-0 aspect-[4/3]"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </a>

      {/* Blog Content */}
      <div>
        <div className="flex items-center gap-x-4 text-xs text-gray-500">
          <time dateTime={new Date(blog.date).toISOString().split("T")[0]}>
            {blog.date}
          </time>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <a href="#" key={tag} className="bg-gray-100 rounded-full px-2 py-1">
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {blog.title}
            </a>
          </h3>
          <p className="mt-4 text-sm text-gray-600">{blog.text}</p>
        </div>

        {/* Author Section */}
        <footer className="mt-6 flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={blog.author.image}
            alt={blog.author.name}
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{blog.author.name}</p>
            <p className="text-gray-600">{blog.author.role}</p>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogCard;
