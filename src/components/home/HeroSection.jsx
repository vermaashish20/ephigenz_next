import { ArrowRight, Brain, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-dark"></div>
      <div className="absolute inset-0 gradient-radial"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(240_10%_20%_/_0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(240_10%_20%_/_0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_20%,black)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Brain className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <Cpu className="h-10 w-10 text-accent/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "4s" }}>
        <Sparkles className="h-6 w-6 text-secondary/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI Platform of the Future</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where AI Knowledge
            <br />
            <span className="text-gradient">Meets Innovation</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Cutting-edge insights, tutorials, and tools for the AI revolution. Join thousands of innovators at the forefront of artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/tools">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity group">
                Explore AI Tools
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                Browse Articles
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "AI Tools", value: "25+" },
              { label: "Tutorials", value: "150+" },
              { label: "Active Users", value: "10K+" },
              { label: "Articles", value: "500+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;