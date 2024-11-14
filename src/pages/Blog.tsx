import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { contentfulClient } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    subtitle: string;
    content: any;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: {
      fields: {
        name: string;
        avatar: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt',
        });
        setPosts(response.items as BlogPost[]);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF0099]"></div>
      </div>
    );
  }

  const filteredPosts = posts.filter(post => 
    post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.fields.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights & Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the latest trends, strategies, and insights in AI-powered marketing
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0099]"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.sys.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden 
                       transition-all duration-500 hover:bg-gray-800/50 border border-gray-700/50 
                       hover:border-[#FF0099]/30"
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.fields.featuredImage.fields.file.url}
                  alt={post.fields.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {format(new Date(post.sys.createdAt), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.fields.author.fields.name}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF0099] 
                             transition-colors line-clamp-2">
                  {post.fields.title}
                </h2>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.fields.subtitle}
                </p>

                <Link
                  to={`/blog/${post.fields.slug}`}
                  className="inline-flex items-center text-white group-hover:text-[#FF0099] transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}