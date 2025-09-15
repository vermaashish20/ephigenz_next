'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag, Heart, Share2, Bookmark } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";

const BlogDetail = () => {
  const { id } = useParams();

  // Mock data - in production, this would come from an API/CMS
  const blogData = {
    id: id,
    title: "Building Intelligent Systems with Advanced Neural Networks",
    subtitle: "A deep dive into modern AI architectures and their real-world applications",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "AI Research Lead at Ephigenz Labs",
    },
    publishedDate: "December 15, 2024",
    readTime: "12 min read",
    category: "Machine Learning",
    tags: ["Neural Networks", "Deep Learning", "AI Architecture", "Production Systems"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: `
      <h2>Introduction</h2>
      <p>The landscape of artificial intelligence has evolved dramatically over the past decade. What was once considered science fiction is now powering everyday applications that millions of people use. In this comprehensive guide, we'll explore the fundamental concepts behind modern neural networks and how they're being applied to solve real-world problems.</p>

      <h2>Understanding Neural Network Architecture</h2>
      <p>Neural networks are computational models inspired by the human brain's structure and function. They consist of interconnected nodes (neurons) organized in layers:</p>

      <ul>
        <li><strong>Input Layer:</strong> Receives raw data and passes it to the network</li>
        <li><strong>Hidden Layers:</strong> Process information through weighted connections</li>
        <li><strong>Output Layer:</strong> Produces the final prediction or classification</li>
      </ul>

      <p>Each connection between neurons has an associated weight that determines the strength of the signal. During training, these weights are adjusted through a process called backpropagation, allowing the network to learn patterns from data.</p>

      <h2>Types of Neural Networks</h2>

      <h3>1. Convolutional Neural Networks (CNNs)</h3>
      <p>CNNs excel at processing grid-like data, particularly images. They use convolutional layers to automatically detect features like edges, shapes, and textures. Applications include:</p>
      <ul>
        <li>Image classification and object detection</li>
        <li>Medical image analysis</li>
        <li>Autonomous vehicle vision systems</li>
      </ul>

      <h3>2. Recurrent Neural Networks (RNNs)</h3>
      <p>RNNs are designed for sequential data processing, making them ideal for time-series analysis and natural language processing. They maintain a "memory" of previous inputs, allowing them to understand context and temporal dependencies.</p>

      <h3>3. Transformer Networks</h3>
      <p>Transformers have revolutionized NLP with their attention mechanism, enabling models to process entire sequences simultaneously. This architecture powers modern language models like GPT and BERT.</p>

      <h2>Real-World Applications</h2>

      <h3>Healthcare</h3>
      <p>AI systems are now assisting doctors in diagnosing diseases, predicting patient outcomes, and personalizing treatment plans. Deep learning models can analyze medical images with accuracy comparable to experienced radiologists.</p>

      <h3>Finance</h3>
      <p>Neural networks power fraud detection systems, algorithmic trading, and credit risk assessment. They can identify complex patterns in financial data that traditional methods might miss.</p>

      <h3>Creative Industries</h3>
      <p>From generating art and music to writing code and creating content, AI is becoming a creative partner for professionals across industries.</p>

      <h2>Best Practices for Implementation</h2>

      <p>When implementing neural networks in production environments, consider these key factors:</p>

      <ol>
        <li><strong>Data Quality:</strong> High-quality, diverse training data is crucial for model performance</li>
        <li><strong>Model Selection:</strong> Choose architectures appropriate for your specific use case</li>
        <li><strong>Regularization:</strong> Implement techniques like dropout and batch normalization to prevent overfitting</li>
        <li><strong>Monitoring:</strong> Continuously monitor model performance and retrain as needed</li>
        <li><strong>Interpretability:</strong> Use explainable AI techniques to understand model decisions</li>
      </ol>

      <h2>The Future of Neural Networks</h2>

      <p>As we look ahead, several exciting developments are on the horizon:</p>

      <ul>
        <li><strong>Neuromorphic Computing:</strong> Hardware designed to mimic brain architecture</li>
        <li><strong>Quantum Neural Networks:</strong> Leveraging quantum computing for exponential speedups</li>
        <li><strong>Federated Learning:</strong> Training models on distributed data while preserving privacy</li>
        <li><strong>Multimodal AI:</strong> Systems that can process and understand multiple types of data simultaneously</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Neural networks have transformed from academic curiosities to essential tools driving innovation across industries. As these technologies continue to evolve, they promise to unlock new possibilities and solve increasingly complex challenges. The key to success lies in understanding their capabilities, limitations, and responsible implementation.</p>

      <p>Whether you're a developer, researcher, or business leader, staying informed about these advances will be crucial for navigating the AI-powered future. The journey has just begun, and the potential is limitless.</p>
    `,
    relatedPosts: [
      { id: "2", title: "Transformer Architecture Explained", category: "Deep Learning" },
      { id: "3", title: "Building Production-Ready ML Pipelines", category: "MLOps" },
      { id: "4", title: "Ethics in AI Development", category: "AI Ethics" },
    ],
  };

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
