import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Content: [
      { name: "Blog", href: "/blog" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Research", href: "/research" },
      { name: "Case Studies", href: "/case-studies" },
    ],
    Tools: [
      { name: "AI Tools", href: "/tools" },
      { name: "Frameworks", href: "/frameworks" },
      { name: "Datasets", href: "/datasets" },
      { name: "APIs", href: "/apis" },
    ],
    Community: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy", href: "/privacy" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="glass rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-radial opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with AI Trends</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest AI insights, tools, and tutorials delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-background/50 border-border"
              />
              <Button className="gradient-primary hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ AI enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 no-underline">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="logo">
                ephigenz<span className="text-gradient">.ai</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering the next generation of AI innovators with cutting-edge knowledge, tools, and community.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-base font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex justify-center items-center">
          <p className="text-base text-muted-foreground text-center">
            © 2024 Ephigenz.ai. All rights reserved. Built with ❤️ for the AI community. <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link> | <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link> | <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;