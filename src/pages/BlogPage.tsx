import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, ArrowLeftIcon, SearchIcon } from 'lucide-react';
import { useBlogPosts } from '../lib/api';
export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { data: posts, isLoading } = useBlogPosts();
  const categories = [
  'All',
  'Chronic Disease Management',
  'Medication Adherence',
  'AI in Healthcare',
  'Pharmacy Integration',
  'Digital Health',
  'Care Coordination'];

  // Find featured post
  const featuredPost = posts?.find((p) => p.featured);
  // Filter remaining posts
  const filteredPosts =
  posts?.filter((post) => {
    if (post.featured && activeCategory === 'All' && !searchQuery)
    return false; // Skip featured in main list if showing all
    const matchesCategory =
    activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-700 transition-colors mb-8">
            
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
          </Link>
          <AnimatedSection>
            <span className="inline-block text-accent-500 uppercase tracking-widest text-sm font-bold mb-4">
              PILLAXIA BLOG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Insights on chronic care, digital health, and innovation — from
              the Pillaxia team and collaborators.
            </p>

            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none shadow-sm bg-white" />
              
            </div>
          </AnimatedSection>
        </div>

        {/* Featured Article */}
        {!isLoading &&
        featuredPost &&
        activeCategory === 'All' &&
        !searchQuery &&
        <AnimatedSection className="mb-16">
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-accent-500 bg-accent-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      FEATURED
                    </span>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-3xl leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="font-medium text-brand-900">
                        {featuredPost.author}
                      </span>
                      <span>·</span>
                      <span>{featuredPost.date}</span>
                      <span>·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="flex items-center gap-2 w-full sm:w-auto">
                      Read Article <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
        }

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-accent-500 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-accent-500 hover:text-accent-500'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Grid */}
        {isLoading ?
        <div className="text-center py-20 text-slate-500">
            Loading articles...
          </div> :
        filteredPosts.length > 0 ?
        <AnimatedSection
          stagger
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
            {filteredPosts.map((post) =>
          <AnimatedItem key={post.id}>
                <article className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    {post.imageUrl &&
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                }
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-accent-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500 flex flex-col gap-1">
                        <span className="font-medium text-brand-900">
                          {post.author}
                        </span>
                        <span>
                          {post.date} · {post.readTime}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedItem>
          )}
          </AnimatedSection> :

        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <p className="text-slate-500">
              No articles found matching your criteria.
            </p>
          </div>
        }
      </div>
    </main>);

}