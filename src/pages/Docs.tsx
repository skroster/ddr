import { Card, CardContent } from "@/components/ui/card";
import { Book, Terminal, Settings, Shield, Code, Wrench } from "lucide-react";

const Docs = () => {
  const sections = [
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Getting Started",
      items: [
        { name: "Introduction", desc: "Overview of Drana-Infinity and its capabilities" },
        { name: "Installation", desc: "Step-by-step installation guide for Linux" },
        { name: "Quick Start", desc: "Get up and running in minutes" },
        { name: "System Requirements", desc: "Hardware and software prerequisites" }
      ]
    },
    {
      icon: <Terminal className="h-8 w-8 text-secondary" />,
      title: "Core Concepts",
      items: [
        { name: "AI Models", desc: "Understanding model sizes and capabilities" },
        { name: "Interceptor", desc: "Traffic inspection and manipulation" },
        { name: "Recon Engine", desc: "Intelligence gathering workflows" },
        { name: "Payload Studio", desc: "Crafting effective security payloads" }
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Configuration",
      items: [
        { name: "Ollama Setup", desc: "Configuring the AI backend" },
        { name: "Environment Variables", desc: "Customizing behavior" },
        { name: "Tool Integration", desc: "Connecting external tools" },
        { name: "Custom Scripts", desc: "Extending functionality" }
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security Testing",
      items: [
        { name: "Web Applications", desc: "Testing web app security" },
        { name: "API Security", desc: "API vulnerability assessment" },
        { name: "Authentication", desc: "Testing auth mechanisms" },
        { name: "Business Logic", desc: "Logic flaw identification" }
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-secondary" />,
      title: "Advanced Usage",
      items: [
        { name: "Automation Workflows", desc: "Building complex test chains" },
        { name: "Custom Payloads", desc: "Creating specialized payloads" },
        { name: "AI Search Mode", desc: "Leveraging hybrid intelligence" },
        { name: "Command Execution", desc: "Safe local command execution" }
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Troubleshooting",
      items: [
        { name: "Common Issues", desc: "Solving frequent problems" },
        { name: "Error Messages", desc: "Understanding error codes" },
        { name: "Performance", desc: "Optimizing for your system" },
        { name: "FAQ", desc: "Frequently asked questions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to master Drana-Infinity, from basic setup to advanced security testing
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href="https://github.com/IHA089/drana-infinity" target="_blank" rel="noopener noreferrer">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow h-full cursor-pointer">
              <CardContent className="p-6 text-center">
                <Terminal className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Installation Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Complete setup instructions for Linux
                </p>
              </CardContent>
            </Card>
          </a>

          <a href="https://github.com/IHA089/drana-infinity" target="_blank" rel="noopener noreferrer">
            <Card className="bg-card/50 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:cyber-glow-purple h-full cursor-pointer">
              <CardContent className="p-6 text-center">
                <Book className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                <p className="text-sm text-muted-foreground">
                  Get started in 5 minutes
                </p>
              </CardContent>
            </Card>
          </a>

          <a href="https://github.com/IHA089/drana-infinity" target="_blank" rel="noopener noreferrer">
            <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:cyber-glow-violet h-full cursor-pointer">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Developer documentation
                </p>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-card/50 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="cyber-glow inline-block p-3 rounded-lg bg-primary/10">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <a 
                      key={idx}
                      href="https://github.com/IHA089/drana-infinity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-lg border border-border hover:border-primary/40 transition-all hover:bg-primary/5"
                    >
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-12 border-primary/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Check out the GitHub repository for detailed documentation, 
              or reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/IHA089/drana-infinity" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cyber-glow"
              >
                View on GitHub
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Docs;
