'use client';

import { useState } from "react";
import { Search, Filter, TrendingUp, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Articles", count: 156 },
    { id: "machine-learning", name: "Machine Learning", count: 42 },
    { id: "nlp", name: "Natural Language Processing", count: 38 },
    { id: "computer-vision", name: "Computer Vision", count: 31 },
    { id: "deep-learning", name: "Deep Learning", count: 28 },
    { id: "ai-ethics", name: "AI Ethics", count: 17 },
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Large Language Models: Beyond GPT-4",
      excerpt: "Exploring the next generation of language models and their potential impact on AI research and applications.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min",
      category: "nlp",
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: "Building Robust AI Systems: A Comprehensive Guide",
      excerpt: "Learn the best practices for developing reliable and scalable AI systems in production environments.",
      author: "Alex Kumar",
      date: "Dec 14, 2024",
      readTime: "12 min",
      category: "machine-learning",
    },
    {
      id: 3,
      title: "Computer Vision Breakthroughs in 2024",
      excerpt: "A deep dive into the latest advances in computer vision and their real-world applications.",
      author: "Maria Rodriguez",
      date: "Dec 13, 2024",
      readTime: "10 min",
      category: "computer-vision",
      trending: true,
    },
    {
      id: 4,
      title: "Understanding Neural Network Architectures",
      excerpt: "From CNNs to Transformers: A complete guide to modern neural network architectures.",
      author: "James Wilson",
      date: "Dec 12, 2024",
      readTime: "15 min",
      category: "deep-learning",
    },
    {
      id: 5,
      title: "AI Ethics: Building Responsible AI Systems",
      excerpt: "Exploring the ethical considerations and best practices for developing responsible AI.",
      author: "Dr. Emily Zhang",
      date: "Dec 11, 2024",
      readTime: "7 min",
      category: "ai-ethics",
    },
    {
      id: 6,
      title: "Real-time Object Detection Systems",
      excerpt: "Building efficient object detection systems for real-time applications using modern frameworks.",
      author: "Michael Brown",
      date: "Dec 10, 2024",
      readTime: "9 min",
      category: "computer-vision",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI Insights & <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the frontiers of artificial intelligence through cutting-edge research, practical tutorials, and emerging technologies
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-border"
                />
              </div>
              <Button variant="outline" className="border-primary/20">
                <Filter className="h-5 w-5 mr-2" />
                Advanced Filter
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "gradient-primary" : "border-border hover:border-primary/50"}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          {filteredArticles.filter(a => a.featured)[0] && (
            <Card className="glass border-primary/20 mb-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Featured Article Image</span>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="gradient-primary">Featured</Badge>
                    <Badge variant="outline">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">
                    {filteredArticles.filter(a => a.featured)[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {filteredArticles.filter(a => a.featured)[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {filteredArticles.filter(a => a.featured)[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {filteredArticles.filter(a => a.featured)[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {filteredArticles.filter(a => a.featured)[0].readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${filteredArticles.filter(a => a.featured)[0].id}`}>
                    <Button className="gradient-primary hover:opacity-90">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(a => !a.featured).map((article) => (
              <Card key={article.id} className="glass border-border hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-muted-foreground">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      {categories.find(c => c.id === article.category)?.name}
                    </Badge>
                    {article.trending && (
                      <Badge variant="outline">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${article.id}`}>
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button variant="outline" size="sm" className="border-border">
              Previous
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className={page === 1 ? "gradient-primary" : "border-border hover:border-primary/50"}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="border-border">
              Next
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;