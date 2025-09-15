import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Image, 
  FileText, 
  Brain, 
  BarChart3, 
  Code,
  Sparkles,
  Zap
} from "lucide-react";

const FeaturedTools = () => {
  const tools = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "Advanced conversational AI for writing, coding, analysis, and creative tasks",
      category: "Text AI Assistant",
      icon: MessageSquare,
      rating: 4.8,
      reviews: 12500,
      gradient: "from-purple-500 to-blue-500",
    },
    {
      id: "midjourney",
      name: "Midjourney",
      description: "AI-powered image generator for creating stunning visuals and artwork",
      category: "Image Generation",
      icon: Image,
      rating: 4.9,
      reviews: 8900,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with intelligent suggestions",
      category: "Code Assistant",
      icon: Code,
      rating: 4.7,
      reviews: 6700,
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: "jasper",
      name: "Jasper",
      description: "AI content creation platform for marketing copy, blogs, and social media",
      category: "Content Writing",
      icon: FileText,
      rating: 4.6,
      reviews: 5400,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-radial opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Featured AI Tools
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Powerful <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of AI tools to enhance your workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.id}
                className="group glass border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Tool Header */}
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-full w-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  
                  <Badge variant="secondary" className="mb-3">
                    {tool.category}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(tool.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{tool.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({tool.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  
                  {/* Action Button */}
                  <Link href={`/tools/${tool.id}`}>
                    <Button className="w-full glass border border-primary/20 hover:bg-primary/10 transition-all">
                      Try Now
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/tools">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
              Explore All AI Tools
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;