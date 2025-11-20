import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Research = () => {
  const scenarios = [
    {
      title: "SSRF to RCE Chain",
      category: "WEB",
      description: "Complete walkthrough of chaining Server-Side Request Forgery to achieve Remote Code Execution through internal service exploitation.",
      tags: ["SSRF", "RCE", "Cloud", "Advanced"]
    },
    {
      title: "API Abuse Walkthrough",
      category: "API",
      description: "Identifying and exploiting API vulnerabilities including IDOR, rate limiting bypass, and mass assignment flaws.",
      tags: ["API", "IDOR", "Rate Limiting", "Intermediate"]
    },
    {
      title: "WAF Bypass Logic",
      category: "WEB",
      description: "Advanced techniques for bypassing Web Application Firewalls using encoding, obfuscation, and parser differentials.",
      tags: ["WAF", "Bypass", "XSS", "Advanced"]
    },
    {
      title: "Business Logic Flaws",
      category: "LAB",
      description: "Understanding and exploiting business logic vulnerabilities in e-commerce and financial applications.",
      tags: ["Logic", "Business", "OWASP", "Intermediate"]
    },
    {
      title: "Authentication Bypass Techniques",
      category: "WEB",
      description: "Common authentication vulnerabilities and bypass methods including JWT attacks and session manipulation.",
      tags: ["Auth", "JWT", "Session", "Intermediate"]
    },
    {
      title: "SQL Injection Deep Dive",
      category: "LAB",
      description: "Advanced SQL injection techniques including blind SQLi, time-based attacks, and database extraction methods.",
      tags: ["SQLi", "Database", "Blind", "Advanced"]
    }
  ];

  const tutorials = [
    {
      title: "Getting Started with Drana-Infinity",
      description: "Complete beginner's guide to setting up and using Drana-Infinity for security testing",
      duration: "30 min"
    },
    {
      title: "Building Custom Recon Workflows",
      description: "Learn to create automated reconnaissance workflows tailored to your targets",
      duration: "45 min"
    },
    {
      title: "Advanced Payload Crafting",
      description: "Master the art of creating effective security payloads for various vulnerability types",
      duration: "1 hour"
    },
    {
      title: "Integrating External Tools",
      description: "Connect your favorite security tools with Drana-Infinity's ecosystem",
      duration: "40 min"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "WEB":
        return "bg-primary/20 text-primary border-primary/50";
      case "API":
        return "bg-secondary/20 text-secondary border-secondary/50";
      case "LAB":
        return "bg-accent/20 text-accent border-accent/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Research</span> & Learning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Attack simulations, deep-dive research, and comprehensive tutorials to master security testing with Drana-Infinity
          </p>
        </div>

        {/* Latest Scenarios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Attack Simulations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(scenario.category)}>
                      {scenario.category}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {scenario.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tutorials</h2>
          <div className="space-y-4">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-muted-foreground">{tutorial.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="whitespace-nowrap">
                        {tutorial.duration}
                      </Badge>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <Card className="border-primary/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">More Content Coming Soon</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new attack simulations, research papers, and tutorials. 
              Check back regularly or star the project on GitHub to stay updated.
            </p>
            <a 
              href="https://github.com/IHA089/drana-infinity" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cyber-glow"
            >
              View on GitHub
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Research;
