import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Target, Code, Lock, Blocks, Terminal, Network, FileCode, Sparkles } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Locally Hosted & Private",
      description: "Your data stays on your machine — zero cloud, zero logs, zero tracking."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-secondary" />,
      title: "AI Optimized for Ethical Hacking",
      description: "Understands exploit logic, payload crafting, recon steps, API analysis, and real-world attack patterns."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Real-Time Interceptor",
      description: "Capture, edit, replay request/response cycles with a hacker-grade UI."
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Advanced Recon Engine",
      description: "Subdomain discovery, endpoint extraction, fingerprinting, headers analysis, WAF behavior checks."
    },
    {
      icon: <FileCode className="h-8 w-8 text-secondary" />,
      title: "Payload Studio",
      description: "Create, store, and test payloads for XSS, SQLi, SSTI, SSRF, IDOR, and more."
    },
    {
      icon: <Blocks className="h-8 w-8 text-accent" />,
      title: "Customizable & Extensible",
      description: "Integrate your scripts, Python tools, custom payload sets, JSON datasets, or local command execution."
    }
  ];

  const tools = [
    {
      icon: <Shield className="h-6 w-6" />,
      name: "Interceptor",
      description: "Real-time inspection, manipulation, and replay"
    },
    {
      icon: <Target className="h-6 w-6" />,
      name: "Recon Engine",
      description: "URL crawling, JavaScript parser, endpoint extraction"
    },
    {
      icon: <Code className="h-6 w-6" />,
      name: "Payload Studio",
      description: "Create and test various security payloads"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      name: "Automation Core",
      description: "Run automated recon chains and scanning flows"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  CYBERSECURITY + AI
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unleash Your <span className="gradient-text">Offline Cybersecurity</span> Intelligence Engine
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Drana-Infinity is a locally hosted, high-performance AI system designed for vulnerability analysis, 
                recon automation, exploit logic, API testing, and deep security research — all inside a secure, 
                private offline environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="cyber-glow text-base">
                  <Link to="/download">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 text-base">
                  <Link to="/docs">View Documentation</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Runs Locally
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  No Cloud
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  No Tracking
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-20 animate-pulse" />
                <div className="relative bg-card/50 backdrop-blur border border-primary/20 rounded-2xl p-8 cyber-glow">
                  <div className="space-y-4">
                    <div className="code-font text-sm text-primary">$ drana-infinity --mode recon</div>
                    <div className="code-font text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Initializing AI Core...
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        Loading vulnerability database...
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Recon engine ready
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Terminal className="h-3 w-3" />
                        System online. Ready for analysis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-primary/20 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            Designed for <span className="text-foreground font-semibold">ethical hackers</span>, 
            <span className="text-foreground font-semibold"> bug bounty hunters</span>, 
            <span className="text-foreground font-semibold"> red teams</span>, and 
            <span className="text-foreground font-semibold"> serious cybersecurity learners</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Drana-Infinity</span> Exists
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built from the ground up for serious security work, combining AI intelligence with 
              essential hacking tools in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cyber-glow">
                <CardContent className="p-6 space-y-4">
                  <div className="cyber-glow inline-block p-3 rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Install & Connect", desc: "Install via Ollama + Interceptor UI" },
              { step: "02", title: "Setup Your Target", desc: "Add target URLs, APIs, or labs" },
              { step: "03", title: "Analyze & Automate", desc: "Use AI + toolset for recon, payloads, chaining" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built-In <span className="gradient-text">Cyber Toolset</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:cyber-glow">
                <CardContent className="p-6 space-y-4">
                  <div className="cyber-glow inline-block p-3 rounded-lg bg-primary/10 text-primary">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary/50">
              <Link to="/tools">Explore All Tools →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-y border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Own <span className="gradient-text">Cyber-Intelligence Lab</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start exploring vulnerabilities with AI-powered tools designed for professionals
          </p>
          <Button asChild size="lg" className="cyber-glow text-base">
            <Link to="/download">Start with Drana-Infinity Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
