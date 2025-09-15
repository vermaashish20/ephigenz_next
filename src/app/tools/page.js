'use client';

import { useState } from "react";
import { Search, Filter, Sparkles, Zap, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  MessageSquare,
  Image,
  FileText,
  Brain,
  BarChart3,
  Code,
  Music,
  Video,
  Shield,
  Palette,
} from "lucide-react";

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Tools", icon: Sparkles },
    { id: "text", name: "Text & Writing", icon: FileText },
    { id: "image", name: "Image & Visual", icon: Image },
    { id: "code", name: "Code & Development", icon: Code },
    { id: "data", name: "Data & Analytics", icon: BarChart3 },
    { id: "productivity", name: "Productivity", icon: Zap },
  ];

  const tools = [
    // Text & Writing
    {
      id: "ai-text-summarizer",
      name: "AI Text Summarizer",
      description: "Instantly summarize long articles, documents, and text content using advanced AI algorithms.",
      category: "text",
      icon: FileText,
      gradient: "from-blue-500 to-purple-500",
      popularity: "Beginner",
      featured: true,
    },
    {
      id: "grammar-checker",
      name: "Grammar Checker",
      description: "Fix grammar, spelling, and style issues in your text with advanced AI assistance.",
      category: "text",
      icon: MessageSquare,
      gradient: "from-green-500 to-blue-500",
      popularity: "Popular",
    },
    {
      id: "content-generator",
      name: "Content Generator",
      description: "Generate blog posts, articles, and marketing copy with AI assistance.",
      category: "text",
      icon: FileText,
      gradient: "from-purple-500 to-pink-500",
      popularity: "Intermediate",
    },
    // Image & Visual
    {
      id: "ai-image-generator",
      name: "AI Image Generator",
      description: "Create stunning images from text descriptions using state-of-the-art diffusion models.",
      category: "image",
      icon: Image,
      gradient: "from-pink-500 to-orange-500",
      popularity: "Popular",
      featured: true,
    },
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove backgrounds from images automatically using advanced AI technology.",
      category: "image",
      icon: Palette,
      gradient: "from-cyan-500 to-blue-500",
      popularity: "Beginner",
    },
    {
      id: "image-upscaler",
      name: "Image Upscaler",
      description: "Enhance and upscale images while preserving quality and details.",
      category: "image",
      icon: Image,
      gradient: "from-orange-500 to-red-500",
      popularity: "Intermediate",
    },
    // Code & Development
    {
      id: "code-assistant",
      name: "AI Code Assistant",
      description: "Get intelligent code suggestions and completions in multiple programming languages.",
      category: "code",
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      popularity: "Advanced",
    },
    {
      id: "bug-detector",
      name: "Bug Detector",
      description: "Automatically detect and fix bugs in your code with AI-powered analysis.",
      category: "code",
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      popularity: "Intermediate",
    },
    // Data & Analytics
    {
      id: "data-analyzer",
      name: "Smart Data Analyzer",
      description: "Upload your data and get instant insights, visualizations, and AI-powered analysis.",
      category: "data",
      icon: BarChart3,
      gradient: "from-blue-500 to-indigo-500",
      popularity: "Advanced",
      featured: true,
    },
    {
      id: "csv-analyzer",
      name: "CSV Analyzer",
      description: "Analyze and visualize CSV data with intelligent insights and patterns.",
      category: "data",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-500",
      popularity: "Intermediate",
    },
    // Productivity
    {
      id: "ai-scheduler",
      name: "AI Scheduler",
      description: "Optimize your schedule with AI-powered time management and task prioritization.",
      category: "productivity",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      popularity: "Popular",
    },
    {
      id: "smart-notes",
      name: "Smart Notes",
      description: "Take intelligent notes with AI-powered organization and search capabilities.",
      category: "productivity",
      icon: Brain,
      gradient: "from-teal-500 to-green-500",
      popularity: "Beginner",
    },
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
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
              AI-Powered Tools for <span className="text-gradient">Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of intelligent tools designed to boost your productivity and creativity.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-background/50 border-border glass"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 gradient-primary">
                Search
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "gradient-primary" : "border-border hover:border-primary/50"}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Featured Tools */}
          {filteredTools.some(t => t.featured) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredTools.filter(t => t.featured).map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Card key={tool.id} className="glass border-primary/20 overflow-hidden group">
                      <div className={`h-2 bg-gradient-to-r ${tool.gradient}`}></div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} p-3`}>
                            <Icon className="h-full w-full text-white" />
                          </div>
                          <Badge className="gradient-primary">Featured</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                        <p className="text-muted-foreground mb-4">{tool.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{tool.popularity}</Badge>
                          <Link href={`/tools/${tool.id}`}>
                            <Button className="gradient-primary hover:opacity-90">
                              Try Now
                              <Zap className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Tools Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {selectedCategory === "all" ? "All Tools" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.filter(t => !t.featured).map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card key={tool.id} className="glass border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-full w-full text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{tool.popularity}</Badge>
                        <Link href={`/tools/${tool.id}`}>
                          <Button variant="ghost" size="sm" className="hover:text-primary">
                            Try Now
                            <Sparkles className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="glass border-primary/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0 gradient-radial opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Don't see what you're looking for?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're constantly adding new AI tools. Submit a suggestion and we'll build it for you!
                </p>
                <Button size="lg" className="gradient-primary hover:opacity-90">
                  Submit a Suggestion
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;