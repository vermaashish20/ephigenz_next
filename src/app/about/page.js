import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Target, Rocket, Brain, Code, Award, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "AI Tools", value: "25+", icon: Code },
    { label: "Articles Published", value: "500+", icon: Brain },
    { label: "Community Members", value: "50K+", icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Democratizing AI knowledge and making advanced technology accessible to everyone.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Constantly pushing boundaries and exploring cutting-edge AI technologies.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building a collaborative ecosystem where AI enthusiasts can learn and grow together.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality content, tools, and educational resources.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "AI researcher with 10+ years in machine learning",
    },
    {
      name: "Alex Kumar",
      role: "CTO",
      bio: "Former Google engineer, deep learning expert",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Content",
      bio: "AI educator and technical writer",
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in AI applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              About Ephigenz
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering the <span className="text-gradient">AI Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize artificial intelligence by providing cutting-edge knowledge,
              practical tools, and a thriving community for AI enthusiasts worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:opacity-90">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                Our Mission
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="glass border-border text-center p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                From Vision to <span className="text-gradient">Reality</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Ephigenz was born from a simple observation: while AI was revolutionizing every industry,
                quality educational resources and practical tools remained scattered and inaccessible to many.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded in 2023 by a team of AI researchers and engineers, we set out to create a
                comprehensive platform that bridges the gap between cutting-edge AI research and practical application.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of developers, researchers, students, and AI enthusiasts
                worldwide, providing them with the knowledge and tools they need to innovate and create.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Sparkles className="h-32 w-32 text-primary/50" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-primary opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full gradient-accent opacity-20 blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              What Drives <span className="text-gradient">Us Forward</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="glass border-border p-6 hover:border-primary/50 transition-all">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Innovators</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of AI experts, engineers, and educators working together to shape the future of AI education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="glass border-border p-6 text-center hover:border-primary/50 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4"></div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <Card className="glass border-primary/20 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-radial opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Join the <span className="text-gradient">AI Revolution?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your AI journey today with our comprehensive resources, tools, and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary hover:opacity-90">
                  Get Started Free
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;