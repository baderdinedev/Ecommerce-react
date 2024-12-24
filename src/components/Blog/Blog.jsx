import React from 'react';

const Blog = ({ blogs }) => {
  return (
   <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
      {blogs.map((blog, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="bg-white dark:bg-gray-900 aos-init aos-animate"
        >
          <div className="overflow-hidden rounded-2xl mb-2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-gray-500">{blog.date} by {blog.author}</p>
            <p className="font-bold line-clamp-1">{blog.title}</p>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {blog.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Blog;
