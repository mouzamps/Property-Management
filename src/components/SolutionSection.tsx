import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  BarChart3,
  Shield,
  Smartphone,
  Users,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Never miss a payment or lease renewal again with intelligent alerts",
    badge: "Automated",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description:
      "Track income, expenses, and ROI with beautiful, actionable reports",
    badge: "Analytics",
  },
  {
    icon: Shield,
    title: "Tenant Screening",
    description:
      "Built-in background checks and credit reports for peace of mind",
    badge: "Secure",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Manage your properties on-the-go with our intuitive mobile app",
    badge: "Mobile",
  },
  {
    icon: Users,
    title: "Tenant Portal",
    description:
      "Self-service portal for rent payments, maintenance requests, and communication",
    badge: "Self-Service",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Centralized storage for leases, receipts, and important property documents",
    badge: "Organized",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Complete Solution for Modern
            <span className="text-primary"> Property Owners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the platform that brings everything together in one
            place, so you can focus on what matters most - growing your real
            estate portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent-green/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Coming Q2 2025
            </h3>
            <p className="text-muted-foreground mb-6">
              We're in the final stages of development and conducting beta
              testing with select property owners.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="text-muted-foreground">Web Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="text-muted-foreground">Mobile Apps</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="text-muted-foreground">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
