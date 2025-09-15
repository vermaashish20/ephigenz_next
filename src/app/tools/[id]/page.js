'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Zap, Star, Users, Clock, Code, Play, Settings, Info, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const ToolDetail = () => {
  const { id } = useParams();

  // Mock data - in production, this would come from an API
  const toolData = {
    id: id,
    name: "AI Text Summarizer",
    tagline: "Transform lengthy content into concise summaries instantly",
    description: "Our advanced AI-powered text summarizer uses state-of-the-art natural language processing to extract key information from any text. Perfect for students, researchers, and professionals who need to quickly understand large volumes of content.",
    category: "Text & Writing",
    icon: "📝",
    gradient: "from-blue-500 to-purple-500",
    stats: {
      users: "10,234",
      rating: 4.8,
      reviews: 342,
      summariesGenerated: "1.2M+",
    },
    features: [
      "Supports multiple languages",
      "Adjustable summary length",
      "Key points extraction",
      "Sentiment analysis",
      "Export to multiple formats",
      "API access available",
    ],
    useCases: [
      {
        title: "Academic Research",
        description: "Quickly review research papers and extract key findings",
      },
      {
        title: "News Digestion",
        description: "Get the gist of multiple news articles in seconds",
      },
      {
        title: "Business Reports",
        description: "Summarize lengthy reports for executive briefings",
      },
      {
        title: "Content Curation",
        description: "Review and curate content efficiently for your audience",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Input Your Text",
        description: "Paste or upload the text you want to summarize",
      },
      {
        step: 2,
        title: "Choose Settings",
        description: "Select summary length and extraction preferences",
      },
      {
        step: 3,
        title: "AI Processing",
        description: "Our AI analyzes and extracts key information",
      },
      {
        step: 4,
        title: "Get Your Summary",
        description: "Receive a concise, accurate summary instantly",
      },
    ],
    pricing: {
      free: {
        name: "Free",
        price: "$0",
        features: ["100 summaries/month", "Basic features", "Standard processing"],
      },
      pro: {
        name: "Pro",
        price: "$9.99",
        features: ["Unlimited summaries", "Advanced features", "Priority processing", "API access"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["Custom limits", "Dedicated support", "SLA", "Custom integration"],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <Link href="/tools">
            <Button variant="ghost" className="mb-8 hover:bg-muted/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tools
            </Button>
          </Link>

          {/* Tool Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${toolData.gradient} flex items-center justify-center text-3xl`}>
                  {toolData.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold">{toolData.name}</h1>
                  <Badge className="mt-2">{toolData.category}</Badge>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{toolData.tagline}</p>
              <p className="text-muted-foreground mb-8">{toolData.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="p-4 glass border-border">
                  <Users className="h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl font-bold">{toolData.stats.users}</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </Card>
                <Card className="p-4 glass border-border">
                  <Star className="h-5 w-5 text-yellow-500 mb-2" />
                  <p className="text-2xl font-bold">{toolData.stats.rating}</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </Card>
                <Card className="p-4 glass border-border">
                  <Zap className="h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl font-bold">{toolData.stats.summariesGenerated}</p>
                  <p className="text-sm text-muted-foreground">Summaries</p>
                </Card>
                <Card className="p-4 glass border-border">
                  <Clock className="h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl font-bold">2s</p>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                </Card>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="gradient-primary hover:opacity-90">
                  <Play className="mr-2 h-5 w-5" />
                  Try Now - It's Free
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/50">
                  <Code className="mr-2 h-5 w-5" />
                  View API Docs
                </Button>
              </div>
            </div>

            {/* Demo Section */}
            <Card className="glass border-border p-6">
              <Tabs defaultValue="demo" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="demo">Live Demo</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="demo" className="space-y-4">
                  <div>
                    <Label htmlFor="input-text">Input Text</Label>
                    <Textarea
                      id="input-text"
                      placeholder="Paste your text here to summarize..."
                      className="min-h-[200px] bg-background/50 border-border"
                    />
                  </div>
                  <Button className="w-full gradient-primary">
                    Generate Summary
                  </Button>
                  <div>
                    <Label>Summary Output</Label>
                    <Card className="p-4 bg-muted/20 border-border min-h-[150px]">
                      <p className="text-muted-foreground">
                        Your summary will appear here...
                      </p>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <div>
                    <Label>Summary Length</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-muted-foreground">Short</span>
                      <Progress value={50} className="flex-1" />
                      <span className="text-sm text-muted-foreground">Long</span>
                    </div>
                  </div>
                  <div>
                    <Label>Language</Label>
                    <select className="w-full mt-2 p-2 rounded-md bg-background border border-border">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <Label>Output Format</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <Button variant="outline" size="sm">Bullets</Button>
                      <Button variant="outline" size="sm">Paragraph</Button>
                      <Button variant="outline" size="sm">Key Points</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass border-border p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {toolData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="glass border-border p-6">
              <h3 className="text-xl font-bold mb-4">Use Cases</h3>
              <div className="space-y-4">
                {toolData.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1">{useCase.title}</h4>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass border-border p-6">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                {toolData.howItWorks.map((step) => (
                  <div key={step.step} className="flex gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${toolData.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Object.entries(toolData.pricing).map(([key, plan]) => (
                <Card key={key} className={`glass p-6 ${key === 'pro' ? 'border-primary' : 'border-border'}`}>
                  {key === 'pro' && (
                    <Badge className="gradient-primary mb-4">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">
                    {plan.price}
                    {key !== 'enterprise' && <span className="text-sm text-muted-foreground">/month</span>}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={key === 'pro' ? 'w-full gradient-primary' : 'w-full'}
                    variant={key === 'pro' ? 'default' : 'outline'}
                  >
                    {key === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Tools */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {['Grammar Checker', 'Content Generator', 'Paraphrase Tool', 'Translation AI'].map((tool) => (
                <Card key={tool} className="glass border-border p-4 hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold mb-2">{tool}</h4>
                  <p className="text-sm text-muted-foreground mb-3">Enhance your writing workflow</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Explore
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetail;