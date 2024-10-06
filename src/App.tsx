import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';

const App: React.FC = () => {
  const blogPosts = [
    {
      title: "Getting Started with React",
      content: "React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.",
      author: "Jane Doe",
      date: "March 15, 2024"
    },
    {
      title: "The Power of Hooks in React",
      content: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This makes it easier to reuse stateful logic between components.",
      author: "John Smith",
      date: "March 18, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </main>
    </div>
  );
};

export default App;