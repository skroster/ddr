import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Code, Zap, Terminal, Search } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      name: "Interceptor",
      tagline: "Real-time Traffic Analysis",
      description: "Capture, inspect, modify, and replay HTTP/HTTPS requests and responses with a professional-grade interface.",
      features: [
        "Real-time request/response inspection",
        "Traffic manipulation and replay",
        "Custom header injection",
        "SSL/TLS support",
        "Request history and search",
        "Automated fuzzing capabilities"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-secondary" />,
      name: "Recon Engine",
      tagline: "Intelligence Gathering",
      description: "Comprehensive reconnaissance toolkit for discovering attack surfaces and gathering intelligence.",
      features: [
        "Subdomain enumeration",
        "URL crawling and mapping",
        "JavaScript endpoint extraction",
        "Technology fingerprinting",
        "Header analysis",
        "WAF detection and bypass suggestions"
      ]
    },
    {
      icon: <Code className="h-12 w-12 text-accent" />,
      name: "Payload Studio",
      tagline: "Exploit Crafting Workshop",
      description: "Create, test, and manage security payloads for various vulnerability types.",
      features: [
        "Pre-built payload templates",
        "Custom payload creation",
        "Encoding/decoding utilities",
        "XSS, SQLi, SSTI, SSRF support",
        "Payload effectiveness tracking",
        "Context-aware suggestions"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      name: "Automation Core",
      tagline: "Workflow Orchestration",
      description: "Automate complex security testing workflows with chained operations and intelligent sequencing.",
      features: [
        "Multi-stage attack chains",
        "Automated recon flows",
        "Scheduled scanning",
        "Parallel task execution",
        "Result correlation",
        "Custom workflow scripts"
      ]
    },
    {
      icon: <Terminal className="h-12 w-12 text-secondary" />,
      name: "AI Command Executor",
      tagline: "Intelligent Automation",
      description: "AI-powered command suggestions and safe execution environment for security operations.",
      features: [
        "Context-aware command suggestions",
        "Safe execution sandbox",
        "Command history and tracking",
        "User approval workflow",
        "Output parsing and analysis",
        "Integration with local tools"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-accent" />,
      name: "AI Search Mode",
      tagline: "Hybrid Intelligence",
      description: "Combines local AI intelligence with external web search for comprehensive security research.",
      features: [
        "CVE and exploit database lookup",
        "Latest vulnerability research",
        "Privacy-focused queries",
        "Context preservation",
        "Source credibility scoring",
        "Offline-first operation"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber <span className="gradient-text">Toolset</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drana-Infinity ships with a modular toolset built for serious security work. Each tool is designed 
            to work independently or as part of an integrated workflow.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="space-y-8">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="cyber-glow inline-block p-4 rounded-lg bg-primary/10 flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                    <CardDescription className="text-base">{tool.tagline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{tool.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Note */}
        <Card className="mt-12 border-primary/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Integrated Workflow</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
              All tools work seamlessly together, sharing context and intelligence. Use the Recon Engine to discover 
              targets, craft payloads in Payload Studio, test them with the Interceptor, and automate everything 
              with the Automation Core — all guided by AI-powered suggestions.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/download" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cyber-glow"
              >
                Get Started
              </a>
              <a 
                href="/docs" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors"
              >
                Read Documentation
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tools;
