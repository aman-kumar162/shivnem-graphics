'use client';

import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Modern Design',
      excerpt: 'Explore the latest trends in design and how they shape modern branding.',
      category: 'Design',
      date: 'Dec 20, 2024',
      author: 'John Designer'
    },
    {
      id: 2,
      title: 'Printing Best Practices',
      excerpt: 'Learn how to get the best results from your printing projects.',
      category: 'Printing',
      date: 'Dec 15, 2024',
      author: 'Sarah Print'
    },
    {
      id: 3,
      title: 'Branding Strategy Guide',
      excerpt: 'A comprehensive guide to building a strong brand identity.',
      category: 'Branding',
      date: 'Dec 10, 2024',
      author: 'Mike Brand'
    },
    {
      id: 4,
      title: 'Color Psychology in Marketing',
      excerpt: 'Understanding how colors affect consumer behavior and perception.',
      category: 'Marketing',
      date: 'Dec 5, 2024',
      author: 'Lisa Color'
    },
  ];

  return (
    <main className="min-h-screen bg-navy-dark pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-300">
            Insights and tips on design, printing, and branding to help you succeed.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-navy-light border border-neon-cyan/10 hover:border-neon-cyan/40 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <span className="text-gray-400 text-sm">By {post.author}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-300 mb-6">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-neon-cyan hover:text-neon-cyan/80 transition-colors font-semibold group/link"
              >
                Read More
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10 border border-neon-cyan/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-300 mb-6">Get the latest design and printing tips delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-navy-accent border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan"
            />
            <button className="px-6 py-3 bg-neon-cyan text-navy-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
