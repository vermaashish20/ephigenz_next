'use client';

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag, Heart, Share2, Bookmark } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { getArticleById } from "@/apis/blogApi";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const renderContent = (content) => {
    return content.map(block => {
      if (block.type === 'paragraph') {
        return `<p>${block.children.map(child => child.text).join('')}</p>`;
      }
      return '';
    }).join('');
  };

  useEffect(() => {
    getArticleById(id).then(article => {
      if (article) {
        setBlogData({
          id: article.id,
          title: article.title,
          subtitle: article.description,
          author: {
            name: article.author?.name || 'to be filled',
            avatar: article.author?.avatar?.url || 'to be filled',
            bio: 'to be filled',
          },
          publishedDate: article.publishedDate,
          readTime: `${article.readTime} min`,
          category: article.category?.name || 'to be filled',
          tags: article.category ? [article.category.slug] : ['to be filled'],
          coverImage: article.cover?.url || 'to be filled',
          content: renderContent(article.articleContent),
          relatedPosts: [],
        });
      }
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center">
          <p>Article not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section with Cover Image */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={blogData.coverImage}
            alt={blogData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 mx-56 my-2">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blogData.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl mb-4">{blogData.subtitle}</p>
              <Badge className="bg-white/20 text-white border-white/30">{blogData.category}</Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 lg:ml-8">
              {/* Author Info */}
              <Card className="p-6 mb-8 glass border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <img src={blogData.author.avatar} alt={blogData.author.name} />
                    </Avatar>
                    <div>
                      <p className="font-semibold">{blogData.author.name}</p>
                      <p className="text-sm text-muted-foreground">{blogData.author.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {blogData.publishedDate}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {blogData.readTime}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Table of Contents - Mobile Only */}
              <Card className="p-6 mb-8 glass border-border lg:hidden">
                <h3 className="font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Introduction
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Understanding Neural Network Architecture
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Types of Neural Networks
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Real-World Applications
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Best Practices for Implementation
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    The Future of Neural Networks
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Conclusion
                  </a>
                </nav>
              </Card>

              {/* Article Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  {blogData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Actions */}
              <Card className="mt-8 p-6 glass border-border">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">Enjoyed this article?</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents - Desktop Only */}
                <Card className="hidden lg:block p-4 glass border-border">
                  <h3 className="font-semibold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Introduction
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Understanding Neural Network Architecture
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Types of Neural Networks
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Real-World Applications
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Best Practices for Implementation
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      The Future of Neural Networks
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Conclusion
                    </a>
                  </nav>
                </Card>

                {/* Related Posts */}
                <Card className="p-4 glass border-border">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogData.relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block group"
                      >
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {post.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{post.category}</p>
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Newsletter */}
                <Card className="p-4 glass border-border">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest AI insights delivered to your inbox.
                  </p>
                  <Button className="w-full gradient-primary">
                    Subscribe to Newsletter
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;

