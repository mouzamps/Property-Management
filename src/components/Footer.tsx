import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background dark:bg-background dark:text-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">PropManager</h3>
              <p className="text-muted-foreground leading-relaxed">
                The future of property management is here. Simple, smart, and
                designed for modern property owners.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>mzmjuly9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (974) 5014-2666</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Get the latest updates on our progress and be the first to know
              when we launch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                variant="success"
                size="sm"
                className="w-full"
              >
                Subscribe to Updates
              </Button>
            </form>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Launch Timeline</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Q1 2024</p>
                  <p className="text-muted-foreground text-sm">
                    Beta testing with select users
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Q2 2025</p>
                  <p className="text-muted-foreground text-sm">
                    Public launch & mobile apps
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Q3 2025</p>
                  <p className="text-muted-foreground text-sm">
                    Advanced analytics & integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 PropManager. All rights reserved for property owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
