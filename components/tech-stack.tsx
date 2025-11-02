"use client"

export function TechStack() {
  const technologies = ["YOLOv8", "GPT-4o", "Whisper", "Google Maps", "Twilio"]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Powered By Advanced Technology</h2>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12">
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20"
              >
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
