"use client"

import { AlertCircle, Zap, Bell, Users } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: AlertCircle,
      title: "Capture",
      description: "Upload accident photo or record voice",
    },
    {
      icon: Zap,
      title: "Detect",
      description: "AI analyzes with multi-modal verification",
    },
    {
      icon: Bell,
      title: "Alert",
      description: "Emergency services notified instantly",
    },
    {
      icon: Users,
      title: "Respond",
      description: "Ambulances dispatched to location",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="border-2 border-secondary rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-foreground">{step.title}</h3>
                <p className="text-center text-muted-foreground text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
