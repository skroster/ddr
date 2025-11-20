import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Github, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", type: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, found a bug, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
                <CardDescription>
                  For bug reports, security issues, or general inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:drana@iha089.org" 
                  className="text-primary hover:underline font-medium"
                >
                  drana@iha089.org
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  GitHub
                </CardTitle>
                <CardDescription>
                  Contribute, report issues, or browse the source code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://github.com/IHA089/drana-infinity" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  github.com/IHA089/drana-infinity
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Report Issues
                </CardTitle>
                <CardDescription>
                  Found a security vulnerability or technical issue?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We take security seriously. If you've discovered any issues during installation, 
                  setup, or usage, please report them directly to:
                </p>
                <a 
                  href="mailto:drana@iha089.org" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  drana@iha089.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-accent/50 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-accent">Community Guidelines</h3>
                <p className="text-sm text-muted-foreground">
                  Drana-Infinity is built for ethical security research. Please use this tool responsibly 
                  and only on systems you have permission to test.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">
                    Message Type
                  </label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="collab">Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full cyber-glow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
