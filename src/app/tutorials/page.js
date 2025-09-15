'use client';

import { useState } from "react";
import { Search, Filter, BookOpen, Code, Zap, Clock, ChevronRight, PlayCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const tutorials = [
    // Beginner Tutorials
    {
      id: "1",
      title: "Getting Started with Machine Learning",
      description: "Learn the fundamentals of machine learning with hands-on Python examples",
      level: "beginner",
      duration: "45 min",
      modules: 8,
      category: "Machine Learning",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      featured: true,
      completedBy: 1234,
    },
    {
      id: "2",
      title: "Introduction to Neural Networks",
      description: "Build your first neural network from scratch using TensorFlow",
      level: "beginner",
      duration: "60 min",
      modules: 10,
      category: "Deep Learning",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      completedBy: 987,
    },
    {
      id: "3",
      title: "Python for AI Development",
      description: "Master Python programming essentials for artificial intelligence",
      level: "beginner",
      duration: "90 min",
      modules: 12,
      category: "Programming",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      completedBy: 2156,
    },
    // Intermediate Tutorials
    {
      id: "4",
      title: "Building CNN for Image Classification",
      description: "Create a convolutional neural network to classify images with high accuracy",
      level: "intermediate",
      duration: "120 min",
      modules: 15,
      category: "Computer Vision",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      featured: true,
      completedBy: 654,
    },
    {
      id: "5",
      title: "Natural Language Processing with Transformers",
      description: "Implement state-of-the-art NLP models using Hugging Face Transformers",
      level: "intermediate",
      duration: "150 min",
      modules: 18,
      category: "NLP",
      thumbnail: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=250&fit=crop",
      completedBy: 432,
    },
    {
      id: "6",
      title: "Reinforcement Learning Fundamentals",
      description: "Train AI agents to make decisions using reinforcement learning algorithms",
      level: "intermediate",
      duration: "180 min",
      modules: 20,
      category: "Reinforcement Learning",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      completedBy: 321,
    },
    // Advanced Tutorials
    {
      id: "7",
      title: "Generative AI: Building Your Own GPT",
      description: "Create and train your own large language model from scratch",
      level: "advanced",
      duration: "240 min",
      modules: 25,
      category: "Generative AI",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      featured: true,
      completedBy: 189,
    },
    {
      id: "8",
      title: "Advanced Computer Vision with YOLO",
      description: "Implement real-time object detection systems for production environments",
      level: "advanced",
      duration: "210 min",
      modules: 22,
      category: "Computer Vision",
      thumbnail: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=250&fit=crop",
      completedBy: 145,
    },
    {
      id: "9",
      title: "MLOps: Deploying AI at Scale",
      description: "Learn to deploy, monitor, and maintain ML models in production",
      level: "advanced",
      duration: "300 min",
      modules: 30,
      category: "MLOps",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      completedBy: 234,
    },
  ];

  const levels = [
    { id: "all", name: "All Levels", color: "from-purple-500 to-pink-500" },
    { id: "beginner", name: "Beginner", color: "from-green-500 to-teal-500" },
    { id: "intermediate", name: "Intermediate", color: "from-blue-500 to-indigo-500" },
    { id: "advanced", name: "Advanced", color: "from-orange-500 to-red-500" },
  ];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesLevel = selectedLevel === "all" || tutorial.level === selectedLevel;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutorial.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const getLevelColor = (level) => {
    switch(level) {
      case "beginner": return "from-green-500 to-teal-500";
      case "intermediate": return "from-blue-500 to-indigo-500";
      case "advanced": return "from-orange-500 to-red-500";
      default: return "from-purple-500 to-pink-500";
    }
  };

  const getLevelBadgeVariant = (level) => {
    switch(level) {
      case "beginner": return "outline";
      case "intermediate": return "secondary";
      case "advanced": return "destructive";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Learn AI with <span className="text-gradient">Hands-On Tutorials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step guides to master artificial intelligence, from basics to advanced implementations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-background/50 border-border glass"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 gradient-primary">
                Search
              </Button>
            </div>
          </div>

          {/* Level Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={selectedLevel === level.id ? "default" : "outline"}
                onClick={() => setSelectedLevel(level.id)}
                className={selectedLevel === level.id ? "gradient-primary" : "border-border hover:border-primary/50"}
              >
                {level.name}
              </Button>
            ))}
          </div>

          {/* Featured Tutorials */}
          {filteredTutorials.some(t => t.featured) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Tutorials</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredTutorials.filter(t => t.featured).map((tutorial) => (
                  <Card key={tutorial.id} className="glass border-primary/20 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="gradient-primary">Featured</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <PlayCircle className="h-8 w-8 text-white/80" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={getLevelBadgeVariant(tutorial.level)}>
                          {tutorial.level}
                        </Badge>
                        <Badge variant="outline">{tutorial.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="mr-1 h-4 w-4" />
                          {tutorial.modules} modules
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {tutorial.completedBy} completed
                        </span>
                        <Link href={`/tutorials/${tutorial.id}`}>
                          <Button className="gradient-primary hover:opacity-90">
                            Start Learning
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Tutorials Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {selectedLevel === "all" ? "All Tutorials" : `${levels.find(l => l.id === selectedLevel)?.name} Tutorials`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.filter(t => !t.featured).map((tutorial) => (
                <Card key={tutorial.id} className="glass border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={getLevelBadgeVariant(tutorial.level)}>
                        {tutorial.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {tutorial.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="mr-1 h-3 w-3" />
                        {tutorial.modules} modules
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {tutorial.completedBy} students
                      </span>
                      <Link href={`/tutorials/${tutorial.id}`}>
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                          Start
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="mt-20">
            <Card className="glass border-primary/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0 gradient-radial opacity-30"></div>
              <div className="relative z-10 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Master AI?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Follow our structured learning path to go from beginner to AI expert. Get personalized recommendations based on your progress.
                </p>
                <Button size="lg" className="gradient-primary hover:opacity-90">
                  Start Your AI Journey
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

export default Tutorials;