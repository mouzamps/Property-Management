import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Property management dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent-green/80 dark:from-primary/95 dark:to-accent-green/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Property Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-green-light">
                Made Simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              The all-in-one platform that transforms how real estate owners
              manage their properties. No more missed payments, forgotten
              maintenance, or vacancy surprises.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-lg font-medium">
                🚀 Coming Soon - Get Early Access
              </p>
            </div>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  required
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="shrink-0"
                >
                  Notify Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center space-x-3 text-accent-green-light">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-medium">
                  Thank you! We'll keep you updated.
                </span>
              </div>
            )}

            <p className="text-sm opacity-70">
              Join 500+ property owners already on our waitlist
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
