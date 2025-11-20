import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Terminal, Settings, Wrench, ChevronRight } from "lucide-react";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const docContent: Record<string, { title: string; content: JSX.Element }> = {
    introduction: {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Welcome to Drana-Infinity</h2>
          <p className="text-muted-foreground">
            Drana-Infinity is your offline cybersecurity intelligence engine, designed for ethical hackers, 
            bug bounty hunters, red teams, and serious security learners.
          </p>
          <h3 className="text-xl font-semibold mt-6">What is Drana-Infinity?</h3>
          <p className="text-muted-foreground">
            A locally hosted, high-performance AI system optimized for vulnerability analysis, recon automation, 
            exploit logic understanding, API testing, and deep security research — all inside a secure, private offline environment.
          </p>
          <h3 className="text-xl font-semibold mt-6">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Locally hosted with complete privacy - no cloud, no logs, no tracking</li>
            <li>AI optimized specifically for ethical hacking and security testing</li>
            <li>Built-in Cyber Interceptor for traffic manipulation</li>
            <li>Advanced reconnaissance and automation capabilities</li>
            <li>Extensible and customizable for your workflow</li>
          </ul>
        </div>
      )
    },
    installation: {
      title: "Installation",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Complete Setup Guide</h2>
          <p className="text-muted-foreground">Follow these steps carefully to install Drana-Infinity on Linux:</p>
          
          <div className="space-y-6 mt-6">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">1️⃣ Clone the Project</h3>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">git clone https://github.com/IHA089/drana-infinity.git{'\n'}cd drana-infinity</code>
              </pre>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">2️⃣ Create Virtual Environment</h3>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">python3 -m venv venv{'\n'}source venv/bin/activate</code>
              </pre>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">3️⃣ Install Dependencies</h3>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">pip install -r requirements.txt</code>
              </pre>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">4️⃣ Install Ollama</h3>
              <p className="text-muted-foreground mb-2">Download and install Ollama from:</p>
              <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://ollama.ai
              </a>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">5️⃣ Pull the AI Model</h3>
              <p className="text-muted-foreground mb-2">Choose according to your hardware:</p>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">ollama run IHA089/drana-infinity-0.5b:0.5b  # Lightweight{'\n'}ollama run IHA089/drana-infinity-1.5b:1.5b  # Balanced{'\n'}ollama run IHA089/drana-infinity-3b:3b      # Recommended{'\n'}ollama run IHA089/drana-infinity-7b:7b      # Max Power</code>
              </pre>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">6️⃣ Start Ollama Backend</h3>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">ollama serve</code>
              </pre>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">7️⃣ Run Drana-Infinity</h3>
              <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">python3 drana_infinity.py</code>
              </pre>
            </div>
          </div>
        </div>
      )
    },
    "quick-start": {
      title: "Quick Start",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Get Started in Minutes</h2>
          <p className="text-muted-foreground">
            Once installed, here's how to start your first security testing session:
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Basic Usage</h3>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Launch Drana-Infinity server: <code className="bg-card/50 px-2 py-1 rounded">python3 drana_infinity.py</code></li>
            <li>Open the Interceptor UI in your browser</li>
            <li>Configure your target URL or API endpoint</li>
            <li>Start intercepting and analyzing traffic</li>
            <li>Use AI assistance for vulnerability identification</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6">Your First Test</h3>
          <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto mt-4">
            <code className="text-sm"># Example: Quick recon scan{'\n'}target = "https://example.com"{'\n'}drana.recon(target){'\n'}{'\n'}# AI-powered analysis{'\n'}drana.analyze("Check for common vulnerabilities")</code>
          </pre>
        </div>
      )
    },
    "system-requirements": {
      title: "System Requirements",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Hardware & Software Prerequisites</h2>
          
          <h3 className="text-xl font-semibold mt-6">Minimum Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>OS:</strong> Linux (Ubuntu 20.04+ recommended)</li>
            <li><strong>RAM:</strong> 4GB (8GB recommended)</li>
            <li><strong>Storage:</strong> 10GB free space</li>
            <li><strong>Python:</strong> 3.8 or higher</li>
            <li><strong>GPU:</strong> Optional but recommended for larger models</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Recommended Setup</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>RAM:</strong> 16GB+ for optimal performance</li>
            <li><strong>GPU:</strong> NVIDIA with 8GB+ VRAM for 7B model</li>
            <li><strong>CPU:</strong> Modern multi-core processor</li>
            <li><strong>Network:</strong> Stable internet for model downloads</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Model Size Guide</h3>
          <div className="grid gap-4 mt-4">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4">
                <p className="font-semibold">0.5B Model</p>
                <p className="text-sm text-muted-foreground">2GB RAM • Basic tasks • Laptops</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4">
                <p className="font-semibold">1.5B Model</p>
                <p className="text-sm text-muted-foreground">4GB RAM • Balanced performance • Standard usage</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4">
                <p className="font-semibold">3B Model</p>
                <p className="text-sm text-muted-foreground">8GB RAM • Advanced analysis • Recommended</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4">
                <p className="font-semibold">7B Model</p>
                <p className="text-sm text-muted-foreground">16GB RAM • Maximum capability • GPU required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    "ai-models": {
      title: "AI Models",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Understanding AI Models</h2>
          <p className="text-muted-foreground">
            Drana-Infinity offers four model sizes, each optimized for different use cases and hardware configurations.
          </p>

          <h3 className="text-xl font-semibold mt-6">Model Capabilities</h3>
          <p className="text-muted-foreground">
            All models are fine-tuned for cybersecurity tasks including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Vulnerability pattern recognition</li>
            <li>Exploit logic understanding</li>
            <li>Payload generation and analysis</li>
            <li>Security best practices recommendations</li>
            <li>Attack chain simulation</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Choosing Your Model</h3>
          <p className="text-muted-foreground mb-4">
            Select based on your hardware and use case:
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-4">
              <p className="font-semibold">0.5B - For Learning</p>
              <p className="text-sm text-muted-foreground">Perfect for students and beginners with limited resources</p>
            </div>
            <div className="border-l-2 border-secondary pl-4">
              <p className="font-semibold">1.5B - For Practice</p>
              <p className="text-sm text-muted-foreground">Good balance for practice labs and CTF challenges</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold">3B - For Production</p>
              <p className="text-sm text-muted-foreground">Recommended for bug bounty and real security testing</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <p className="font-semibold">7B - For Research</p>
              <p className="text-sm text-muted-foreground">Maximum capability for complex analysis and research</p>
            </div>
          </div>
        </div>
      )
    },
    interceptor: {
      title: "Interceptor",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Traffic Interception & Manipulation</h2>
          <p className="text-muted-foreground">
            The Cyber Interceptor is a powerful tool for capturing, analyzing, and modifying HTTP/HTTPS traffic in real-time.
          </p>

          <h3 className="text-xl font-semibold mt-6">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Real-time request/response capture</li>
            <li>Inline editing and replay functionality</li>
            <li>Header manipulation and injection</li>
            <li>WebSocket traffic analysis</li>
            <li>SSL/TLS certificate handling</li>
            <li>Auto-save and history tracking</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">How to Use</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Launch the Interceptor UI from Drana-Infinity</li>
            <li>Configure your browser proxy settings</li>
            <li>Navigate to your target application</li>
            <li>Intercept and modify requests before they're sent</li>
            <li>Analyze responses for vulnerabilities</li>
            <li>Replay modified requests for testing</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Testing authentication bypass techniques</li>
            <li>Identifying IDOR vulnerabilities</li>
            <li>Parameter manipulation and injection</li>
            <li>Rate limiting and WAF testing</li>
            <li>API endpoint discovery</li>
          </ul>
        </div>
      )
    },
    "recon-engine": {
      title: "Recon Engine",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Intelligence Gathering Workflows</h2>
          <p className="text-muted-foreground">
            Automated reconnaissance to discover attack surfaces, enumerate endpoints, and gather target intelligence.
          </p>

          <h3 className="text-xl font-semibold mt-6">Recon Capabilities</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Subdomain enumeration and discovery</li>
            <li>Endpoint and URL extraction</li>
            <li>Technology fingerprinting</li>
            <li>JavaScript file analysis</li>
            <li>Header and metadata gathering</li>
            <li>Directory and file discovery</li>
            <li>API endpoint mapping</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Workflow Example</h3>
          <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto mt-4">
            <code className="text-sm"># Basic reconnaissance{'\n'}target = "example.com"{'\n'}drana.recon.discover_subdomains(target){'\n'}drana.recon.enumerate_endpoints(target){'\n'}drana.recon.fingerprint_tech(target){'\n'}{'\n'}# Generate report{'\n'}drana.recon.generate_report()</code>
          </pre>
        </div>
      )
    },
    "payload-studio": {
      title: "Payload Studio",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Crafting Security Payloads</h2>
          <p className="text-muted-foreground">
            Design, test, and manage security payloads for various vulnerability types with AI assistance.
          </p>

          <h3 className="text-xl font-semibold mt-6">Supported Payload Types</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>XSS (Cross-Site Scripting)</li>
            <li>SQL Injection</li>
            <li>SSTI (Server-Side Template Injection)</li>
            <li>SSRF (Server-Side Request Forgery)</li>
            <li>IDOR (Insecure Direct Object Reference)</li>
            <li>Command Injection</li>
            <li>XXE (XML External Entity)</li>
            <li>Path Traversal</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AI-generated payload suggestions</li>
            <li>WAF bypass techniques</li>
            <li>Encoding and obfuscation</li>
            <li>Payload library management</li>
            <li>Context-aware recommendations</li>
            <li>Success rate tracking</li>
          </ul>
        </div>
      )
    },
    "ollama-setup": {
      title: "Ollama Configuration",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Configuring the AI Backend</h2>
          <p className="text-muted-foreground">
            Ollama powers the AI backend for Drana-Infinity. Proper configuration ensures optimal performance.
          </p>

          <h3 className="text-xl font-semibold mt-6">Installation</h3>
          <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm"># Install Ollama{'\n'}curl https://ollama.ai/install.sh | sh{'\n'}{'\n'}# Verify installation{'\n'}ollama --version</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">Model Management</h3>
          <pre className="bg-card/50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm"># Pull a model{'\n'}ollama run IHA089/drana-infinity-3b:3b{'\n'}{'\n'}# List installed models{'\n'}ollama list{'\n'}{'\n'}# Remove a model{'\n'}ollama rm drana-infinity-3b</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">Performance Tuning</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use GPU acceleration when available</li>
            <li>Adjust context length based on RAM</li>
            <li>Configure model parameters for speed vs quality</li>
            <li>Set appropriate timeout values</li>
          </ul>
        </div>
      )
    },
    faq: {
      title: "Frequently Asked Questions",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
          
          <div className="space-y-6 mt-6">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">Is Drana-Infinity completely offline?</h3>
              <p className="text-muted-foreground">
                Yes! All AI processing happens locally on your machine. No data is sent to external servers unless you explicitly use the optional web search mode.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">Which model should I choose?</h3>
              <p className="text-muted-foreground">
                For most users, the 3B model offers the best balance. If you have limited resources, start with 1.5B. For research and advanced work, use the 7B model.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">Does it work on Windows or macOS?</h3>
              <p className="text-muted-foreground">
                Currently, Drana-Infinity is optimized for Linux. Windows and macOS support is planned for future releases.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">Can I use it for bug bounties?</h3>
              <p className="text-muted-foreground">
                Absolutely! Drana-Infinity is designed for ethical hacking, bug bounties, and penetration testing. Always ensure you have proper authorization before testing.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">How do I report issues?</h3>
              <p className="text-muted-foreground">
                Found a bug or security issue? Report it to <a href="mailto:drana@iha089.org" className="text-primary hover:underline">drana@iha089.org</a>
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold mb-2">Is GPU required?</h3>
              <p className="text-muted-foreground">
                Not required for smaller models (0.5B-1.5B), but highly recommended for 3B and essential for 7B model for reasonable performance.
              </p>
            </div>
          </div>
        </div>
      )
    }
  };

  const sections = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Getting Started",
      items: [
        { id: "introduction", name: "Introduction" },
        { id: "installation", name: "Installation" },
        { id: "quick-start", name: "Quick Start" },
        { id: "system-requirements", name: "System Requirements" }
      ]
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Core Concepts",
      items: [
        { id: "ai-models", name: "AI Models" },
        { id: "interceptor", name: "Interceptor" },
        { id: "recon-engine", name: "Recon Engine" },
        { id: "payload-studio", name: "Payload Studio" }
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Configuration",
      items: [
        { id: "ollama-setup", name: "Ollama Setup" }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Help",
      items: [
        { id: "faq", name: "FAQ" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to master Drana-Infinity
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            {sections.map((section, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    {section.icon}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                        activeSection === item.id
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                      {item.name}
                    </button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </aside>

          {/* Main Content */}
          <main>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-8">
                {docContent[activeSection]?.content || (
                  <div className="text-center text-muted-foreground py-12">
                    <p>Content coming soon...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;
