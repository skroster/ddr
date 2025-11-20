import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Sparkles, Target, Network, FileCode, Blocks, Terminal, Zap, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Locally Hosted & Fully Private",
      description: "Your data stays on your machine — zero cloud, zero logs, zero tracking. Complete control over your security operations.",
      details: [
        "No external servers or API calls",
        "Complete data sovereignty",
        "Works offline without internet",
        "Your findings stay private"
      ]
    },
    {
      icon: <Sparkles className="h-10 w-10 text-secondary" />,
      title: "AI Optimized for Ethical Hacking",
      description: "Understands exploit logic, payload crafting, recon steps, API analysis, and real-world attack patterns.",
      details: [
        "Trained on security patterns",
        "Understands vulnerability contexts",
        "Suggests exploitation techniques",
        "Payload generation assistance"
      ]
    },
    {
      icon: <Target className="h-10 w-10 text-accent" />,
      title: "Built-in Cyber Interceptor",
      description: "Capture, edit, replay request/response cycles with a hacker-grade UI. Full control over HTTP/HTTPS traffic.",
      details: [
        "Real-time traffic inspection",
        "Request/response manipulation",
        "Replay and fuzzing capabilities",
        "Custom header injection"
      ]
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: "Advanced Recon & Automation",
      description: "Subdomain discovery, endpoint extraction, fingerprinting, headers analysis, WAF behavior checks, and more.",
      details: [
        "Automated subdomain enumeration",
        "JavaScript endpoint extraction",
        "Technology fingerprinting",
        "WAF detection and analysis"
      ]
    },
    {
      icon: <Terminal className="h-10 w-10 text-secondary" />,
      title: "Works Like a Real Hacker",
      description: "Simulates attacker workflows, supports chaining predictions, helps identify weak points in logic.",
      details: [
        "Attack chain simulation",
        "Logic flaw identification",
        "Privilege escalation paths",
        "Business logic testing"
      ]
    },
    {
      icon: <Blocks className="h-10 w-10 text-accent" />,
      title: "Customizable & Extensible",
      description: "Integrate your scripts, Python tools, custom payload sets, JSON datasets, or local command execution modes.",
      details: [
        "Custom script integration",
        "Plugin architecture",
        "Custom payload libraries",
        "API for tool integration"
      ]
    },
    {
      icon: <FileCode className="h-10 w-10 text-primary" />,
      title: "Payload Studio",
      description: "Create, store, and test payloads for XSS, SQLi, SSTI, SSRF, IDOR, and more vulnerability types.",
      details: [
        "Pre-built payload templates",
        "Custom payload crafting",
        "Encoding/decoding utilities",
        "Payload effectiveness tracking"
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "Automation Core",
      description: "Run automated recon chains, scanning flows, and logic-based attack sequences efficiently.",
      details: [
        "Workflow automation",
        "Multi-stage attack chains",
        "Scheduled scanning",
        "Parallel processing"
      ]
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "AI Search Mode",
      description: "Hybrid mode that uses local intelligence plus external web search only when required for enhanced analysis.",
      details: [
        "Context-aware searching",
        "CVE and exploit lookup",
        "Latest vulnerability research",
        "Privacy-focused external queries"
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Terminal Executor",
      description: "Let Drana-Infinity suggest commands and execute them locally with your explicit permission.",
      details: [
        "Command suggestion engine",
        "Safe execution environment",
        "Command history tracking",
        "User approval required"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for professional security testing, vulnerability research, and ethical hacking
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow">
              <CardContent className="p-8 space-y-6">
                <div className="cyber-glow inline-block p-4 rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-primary/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download Drana-Infinity today and start your journey into professional cybersecurity testing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cyber-glow"
                >
                  Get Started
                </a>
                <a 
                  href="/docs" 
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
