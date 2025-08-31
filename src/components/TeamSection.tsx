import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";
import ceoImage from "@/assets/shihas-profile-pic.jpg"; // if you have path alias "@"
import ctoImage from "@/assets/mouzmi-profile-pic.jpeg"; // if you have path alias "@"
import mouzam from "@/assets/mouzam-profile-pic.jpg"; // if you have path alias "@"

const team = [
  {
    name: "Mohamed Shihas",
    role: "Co-Founder & CEO",
    experience: "Former Director of Information Technology Technical Support ",
    image: ceoImage,
    linkedin:
      "https://www.linkedin.com/in/mohamed-shihas-chathamkulam-26bb37b6/",
    description:
      "10+ years in real estate technology and property management software.",
  },
  {
    name: "Mouzmi Sadiq",
    role: "Co-Founder & CTO",
    experience: "Senior Engineer at Qatar Government",
    image: ctoImage,
    linkedin: "https://www.linkedin.com/in/mouzamps/",
    // github: "#",
    description:
      "Full-stack developer specializing in scalable real estate platforms.",
  },
  {
    name: "Mouzam Sadiq",
    role: "Head of Development",
    experience: "15 years managing 200+ rental properties",
    image: mouzam,
    linkedin: "https://www.linkedin.com/in/mouzamps/",
    description:
      "Property management veteran who understands owner pain points firsthand.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're property owners and technology experts who've experienced
            these challenges firsthand. That's why we're building the solution
            we wish we'd had.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.experience}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                    {/* {member.github && (
                      <a
                        href={member.github}
                        className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Github className="h-4 w-4 text-primary" />
                      </a>
                    )} */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why We're Building This
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As property owners ourselves, we've felt the frustration of
              juggling spreadsheets, missing important dates, and spending
              weekends on administrative tasks instead of with our families. We
              believe technology should simplify property management, not
              complicate it. That's why we're creating a platform that actually
              works for real people with real properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
