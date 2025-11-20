import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Terminal, Download as DownloadIcon } from "lucide-react";
import { useState } from "react";

const Download = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const models = [
    {
      name: "0.5B",
      parameters: "0.5 Billion",
      usage: "Laptops, low resource environments",
      command: "ollama run IHA089/drana-infinity-0.5b:0.5b"
    },
    {
      name: "1.5B",
      parameters: "1.5 Billion",
      usage: "Standard usage, balanced performance",
      command: "ollama run IHA089/drana-infinity-1.5b:1.5b"
    },
    {
      name: "3B",
      parameters: "3 Billion",
      usage: "Heavy recon & analysis",
      command: "ollama run IHA089/drana-infinity-3b:3b",
      recommended: true
    },
    {
      name: "7B",
      parameters: "7 Billion",
      usage: "GPU rigs, deep research",
      command: "ollama run IHA089/drana-infinity-7b:7b"
    }
  ];

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="gradient-text">Drana-Infinity</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your model size and follow the setup instructions below. All models run locally with Ollama.
          </p>
        </div>

        {/* Important Note */}
        <Card className="mb-12 border-accent/50 bg-accent/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Terminal className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2 text-accent">Linux Only</h3>
                <p className="text-sm text-muted-foreground">
                  Drana-Infinity currently supports Linux systems only. Windows and macOS support coming soon.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Selection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Model</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {models.map((model, index) => (
              <Card 
                key={index} 
                className={`relative bg-card/50 border-primary/20 hover:border-primary/40 transition-all ${
                  model.recommended ? 'border-primary cyber-glow' : ''
                }`}
              >
                {model.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    RECOMMENDED
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <CardDescription>{model.parameters} Parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{model.usage}</p>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground code-font">Command</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyCommand(model.command)}
                        className="h-8 w-8 p-0"
                      >
                        {copiedCommand === model.command ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <code className="text-xs text-primary code-font break-all">
                      {model.command}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interceptor UI Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Interceptor UI</h2>
          <Card className="bg-card/50 border-primary/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DownloadIcon className="h-5 w-5 text-primary" />
                Download Interceptor
              </CardTitle>
              <CardDescription>
                Real-time request/response inspection and manipulation tool
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Terminal className="h-8 w-8 text-primary" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Linux</h3>
                  <p className="text-sm text-muted-foreground">Available for Linux systems</p>
                </div>
                <Button variant="outline" asChild>
                  <a href="https://github.com/IHA089/drana-infinity" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complete Setup Guide */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Complete Setup Guide</h2>
          <Card className="bg-card/50 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">1</span>
                  Clone or Prepare the Project Folder
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">git clone https://github.com/IHA089/drana-infinity.git{'\n'}cd drana-infinity</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">2</span>
                  Create a Virtual Environment
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">python3 -m venv venv{'\n\n'}# Activate the environment{'\n'}source venv/bin/activate</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">3</span>
                  Install All Dependencies
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">pip install -r requirements.txt</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">4</span>
                  Install Ollama
                </h3>
                <p className="text-muted-foreground">
                  Download and install Ollama from the official website:
                </p>
                <Button variant="outline" asChild>
                  <a href="https://ollama.com" target="_blank" rel="noopener noreferrer">
                    Visit Ollama.com
                  </a>
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">5</span>
                  Pull the Custom Model
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">ollama run IHA089/drana-infinity-3b:3b</pre>
                </div>
                <p className="text-sm text-muted-foreground">Choose model size according to your hardware. Verify it's available:</p>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">ollama list</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">6</span>
                  Start the Ollama Backend
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">ollama serve</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary text-sm">7</span>
                  Run Drana-Infinity Server
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 code-font text-sm">
                  <pre className="text-primary">python3 drana_infinity.py</pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Minimum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span className="font-semibold">8GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage:</span>
                  <span className="font-semibold">10GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">OS:</span>
                  <span className="font-semibold">Linux</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Recommended</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span className="font-semibold">16GB+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPU:</span>
                  <span className="font-semibold">NVIDIA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage:</span>
                  <span className="font-semibold">20GB+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Software</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Python:</span>
                  <span className="font-semibold">3.8+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ollama:</span>
                  <span className="font-semibold">Latest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Git:</span>
                  <span className="font-semibold">Required</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Section */}
        <Card className="border-primary/50 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              If you found any issues during installation or setup, please report them to us
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:drana@iha089.org">Report Issue</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;
