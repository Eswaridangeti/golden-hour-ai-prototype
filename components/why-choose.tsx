"use client"

export function WhyChoose() {
  const features = [
    {
      title: "Multi-modal detection",
      description: "Multi-modal detection catches real accidents while rejecting false alarms",
    },
    {
      title: "Seconds matter",
      description: "Our system dispatches help instantly to save lives",
    },
    {
      title: "GPS verification",
      description: "GPS verification ensures ambulances reach the correct accident location",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Choose GoldenHour</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
