import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, author, date }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">By {author} on {date}</p>
      <p className="text-gray-800">{content}</p>
    </article>
  );
};

export default BlogPost;