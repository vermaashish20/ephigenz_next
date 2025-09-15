import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding GPT-4's Transformer Architecture",
      excerpt: "A comprehensive analysis of GPT-4's architecture, detailing mechanisms, training processes, and real-world implementation strategies.",
      category: "Deep Learning",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: true,
    },
    {
      id: 2,
      title: "Building Your First CNN with PyTorch",
      excerpt: "Step-by-step guide to creating and training a convolutional neural network for image classification.",
      category: "Computer Vision",
      author: "Alex Kumar",
      date: "Dec 14, 2024",
      readTime: "12 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "The Future of AI Governance and Regulation",
      excerpt: "Exploring the evolving landscape of AI regulation, ethical considerations, and the road ahead for responsible AI development.",
      category: "AI Ethics",
      author: "Maria Rodriguez",
      date: "Dec 13, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Latest Articles
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">AI Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover cutting-edge research, practical tutorials, and expert perspectives on artificial intelligence
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className={`group glass border-border hover:border-primary/50 transition-all duration-300 overflow-hidden ${
                article.featured ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Article Image</span>
                </div>
                {article.featured && (
                  <Badge className="absolute top-4 left-4 gradient-primary">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>

                <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${
                  article.featured ? "text-2xl" : "text-xl"
                }`}>
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-primary/20 hover:border-primary/50 transition-all duration-300">
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;