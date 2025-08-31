import { AlertTriangle, Calendar, DollarSign, Wrench } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Missed Rental Payments",
    description:
      "Tenants forget due dates, payments get lost in the mail, and you're left chasing money instead of growing your business.",
  },
  {
    icon: Wrench,
    title: "Maintenance Chaos",
    description:
      "Repair requests pile up, contractor schedules conflict, and small issues become expensive problems when ignored.",
  },
  {
    icon: Calendar,
    title: "Vacancy Surprises",
    description:
      "Leases expire without warning, units sit empty for weeks, and you lose thousands in potential rental income.",
  },
  {
    icon: AlertTriangle,
    title: "Scattered Information",
    description:
      "Important documents are everywhere, tenant details are hard to find, and you feel like you're always behind.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Reality of Property Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day, property owners face the same frustrating challenges that
            drain time, money, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What if there was a better way?
            </h3>
            <p className="text-lg text-muted-foreground">
              Imagine having complete control over your properties with
              automated reminders, centralized maintenance tracking, and
              insights that help you maximize your investment returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
