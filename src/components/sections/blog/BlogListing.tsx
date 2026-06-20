"use client";

import { useState, useMemo } from "react";
import { Calendar, Clock, User, Tag, Search, ChevronRight } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
  slug?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "IIT-JEE Advanced: Cracking the Physics Section in 60 Days",
    excerpt:
      "Master the essential physics concepts and problem-solving strategies that helped our students achieve AIR rankings in IIT-JEE Advanced.",
    category: "IIT-JEE",
    author: "Dr. Rajesh Kumar",
    date: "Dec 15, 2024",
    readTime: 8,
    image: "/blog-physics.png",
    featured: true,
  },
  {
    id: "2",
    title: "NEET Biology: Complete Guide to Genetics and Evolution",
    excerpt:
      "Understand the most important biology concepts for NEET with our comprehensive guide covering genetics, evolution, and ecosystem topics.",
    category: "NEET",
    author: "Dr. Priya Sharma",
    date: "Dec 12, 2024",
    readTime: 10,
    image: "/blog-biology.png",
    featured: true,
  },
  {
    id: "3",
    title: "Top 10 Time Management Tips for JEE Aspirants",
    excerpt:
      "Learn how to optimize your study schedule and manage time effectively during your JEE preparation journey.",
    category: "Study Tips",
    author: "Vikram Singh",
    date: "Dec 10, 2024",
    readTime: 6,
    image: "/blog-time.png",
  },
  {
    id: "4",
    title: "Success Story: From 100 AIR to AIR 12 in IIT-JEE",
    excerpt:
      "Read the inspiring journey of Aditya who improved from 100 AIR to AIR 12 in his second attempt with focused preparation.",
    category: "Success Stories",
    author: "Kota Academy Team",
    date: "Dec 8, 2024",
    readTime: 7,
    image: "/blog-success.png",
  },
  {
    id: "5",
    title: "Chemistry Mastery: Organic Chemistry Concepts Explained",
    excerpt:
      "Demystify organic chemistry with clear explanations and solved examples for IIT-JEE and NEET preparation.",
    category: "IIT-JEE",
    author: "Prof. Arjun Patel",
    date: "Dec 5, 2024",
    readTime: 9,
    image: "/blog-chemistry.png",
  },
  {
    id: "6",
    title: "Mental Health During Board and Competitive Exams",
    excerpt:
      "Strategies to manage stress, anxiety, and maintain mental wellness while preparing for competitive exams.",
    category: "Wellness",
    author: "Dr. Meera Desai",
    date: "Dec 1, 2024",
    readTime: 7,
    image: "/blog-wellness.png",
  },
  {
    id: "7",
    title: "Mathematics: Calculus Integration Tricks and Shortcuts",
    excerpt:
      "Master integration techniques and learn professional shortcuts used by top rankers to solve calculus problems faster.",
    category: "IIT-JEE",
    author: "Prof. Anil Singh",
    date: "Nov 28, 2024",
    readTime: 10,
    image: "/blog-maths.png",
  },
  {
    id: "8",
    title: "NEET Preparation: Last 30 Days Strategy and Revision Plan",
    excerpt:
      "Comprehensive revision strategy and study plan for the final month before your NEET exam to maximize your score.",
    category: "NEET",
    author: "Dr. Sunita Verma",
    date: "Nov 25, 2024",
    readTime: 8,
    image: "/blog-neet.png",
  },
];

const CATEGORIES = [
  "All Articles",
  "IIT-JEE",
  "NEET",
  "Study Tips",
  "Success Stories",
  "Wellness",
];

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const categoryMatch =
        selectedCategory === "All Articles" || post.category === selectedCategory;
      const searchMatch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="ka-section-dark relative px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-fg" />
            <input
              type="text"
              placeholder="Search articles, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border-subtle bg-elevated/50 py-3 pl-12 pr-4 text-base text-primary placeholder-muted-fg transition-[border-color,background-color] focus:border-brand focus:bg-elevated focus:outline-none"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-[background-color,border-color] duration-300 ${
                  selectedCategory === category
                    ? "bg-brand text-brand-ink shadow-[0_8px_24px_-8px_rgb(198_246_36/0.4)]"
                    : "border border-border-subtle bg-elevated/30 text-primary hover:border-brand hover:bg-elevated/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-white">Featured Articles</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <FeaturedCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="mb-8 text-2xl font-bold text-white">
              {featuredPosts.length > 0 ? "Recent Articles" : "All Articles"}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="rounded-lg border border-border-subtle bg-elevated/20 py-16 text-center">
            <p className="text-lg text-muted-fg">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-ink transition-[transform,box-shadow] hover:-translate-y-0.5"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div
          id="newsletter"
          className="mt-20 rounded-xl border border-border-subtle bg-gradient-to-br from-brand/10 to-accent/5 p-8 sm:p-12 lg:p-16"
        >
          <div className="max-w-2xl">
            <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
              Never Miss an Article
            </h3>
            <p className="mb-6 text-muted-fg">
              Subscribe to our newsletter to get expert insights, study tips, and success stories
              delivered to your inbox every week.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border-subtle bg-elevated/50 px-4 py-3 text-base text-primary placeholder-muted-fg focus:border-brand focus:outline-none"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-brand-ink transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgb(198_246_36/0.4)]"
              >
                Subscribe
                <ChevronRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border-subtle bg-gradient-to-br from-elevated/40 to-elevated/20 transition-[border-color,box-shadow] hover:border-brand hover:shadow-[0_16px_48px_-12px_rgb(198_246_36/0.2)]">
      {/* Image placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-subtle">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-2 text-4xl">📰</div>
            <p className="text-sm text-muted-fg">{post.title.substring(0, 30)}...</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-accent">
            {post.category}
          </span>
          <span className="text-xs text-muted-fg">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-accent sm:text-2xl">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-6 line-clamp-2 text-muted-fg">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border-subtle pt-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
              {post.author.charAt(0)}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-primary">{post.author}</span>
              <span className="flex items-center gap-1 text-xs text-muted-fg">
                <Clock className="size-3" />
                {post.readTime} min read
              </span>
            </div>
          </div>
          <ChevronRight className="size-5 text-brand transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border-subtle bg-gradient-to-br from-elevated/30 to-elevated/10 transition-[border-color,box-shadow] hover:border-brand hover:shadow-[0_12px_32px_-8px_rgb(198_246_36/0.15)]">
      {/* Image placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-subtle">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl">📖</div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Meta */}
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-fg">
            <Clock className="size-3" />
            {post.readTime}m
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-base font-bold text-white transition-colors group-hover:text-accent sm:text-lg">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-xs text-muted-fg sm:text-sm">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border-subtle pt-3">
          <div className="flex items-center gap-1.5">
            <div className="size-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-medium text-primary">{post.author.split(" ")[0]}</span>
          </div>
          <span className="text-xs text-muted-fg">{post.date.split(",")[0]}</span>
        </div>
      </div>
    </article>
  );
}
