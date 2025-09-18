'use client';

import { useState, useEffect } from "react";
import { Search, Filter, TrendingUp, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getAllArticles } from "@/apis/blogApi";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then(articles => {
        const mappedArticles = articles.map(article => ({
          id: article.id,
          slug: article.slug,
          title: article.title,
          excerpt: article.description,
          author: article.author?.name || 'to be filled',
          date: article.publishedDate,
          readTime: `${article.readTime} min`,
          category: article.category?.name || 'to be filled',
          categorySlug: article.category?.slug || '',
          coverImage: article.cover?.url || '',
          featured: false,
          trending: false,
        }));

        // Compute categories with counts
        const categoryMap = new Map();
        mappedArticles.forEach(article => {
          const catName = article.category;
          const catSlug = article.categorySlug;
          if (catName && catName !== 'to be filled') {
            if (categoryMap.has(catSlug)) {
              categoryMap.get(catSlug).count += 1;
            } else {
              categoryMap.set(catSlug, { id: catSlug, name: catName, count: 1 });
            }
          }
        });

        const realCategories = Array.from(categoryMap.values()).sort((a, b) => b.count - a.count);
        const allCategories = [
          { id: "all", name: "All Articles", count: mappedArticles.length },
          ...realCategories
        ];

        setCategories(allCategories);
        setArticles(mappedArticles);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.categorySlug === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-screen-2xl mx-auto px-2">
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
                {filteredArticles.filter(a => a.featured)[0].coverImage ? (
                  <img
                    src={filteredArticles.filter(a => a.featured)[0].coverImage}
                    alt={filteredArticles.filter(a => a.featured)[0].title}
                    className="w-full h-full object-cover aspect-video rounded-lg"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg">
                    <span className="text-muted-foreground">Featured Article Image</span>
                  </div>
                )}
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
                  <Link href={`/blog/${filteredArticles.filter(a => a.featured)[0].slug}`}>
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
                {article.coverImage ? (
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-t-lg">
                    <span className="text-muted-foreground">Article Image</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      {article.category}
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
                  <Link href={`/blog/${article.slug}`}>
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