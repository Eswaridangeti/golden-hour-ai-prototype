"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-foreground/70">Last Updated: November 2025</p>
          <p className="text-foreground/70">Made for Buildathon 2025 by Eswari</p>
        </div>

        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
            <p>
              GoldenHour AI is an emergency-assist application designed to detect and report road accidents using
              Artificial Intelligence (AI), geolocation, and automated alert systems. By using this app or website, you
              agree to these Terms & Conditions and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Purpose of the App</h2>
            <p>GoldenHour AI is intended to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Help bystanders quickly report suspected road accidents</li>
              <li>Assist in notifying nearby emergency services</li>
              <li>Reduce response times through AI-powered detection and routing</li>
            </ul>
            <p className="mt-4 font-semibold text-red-600">
              Important: GoldenHour AI is a supportive tool, not a replacement for emergency calls or professional
              medical judgment. Users should always contact local emergency numbers directly when possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
            <p>By using this app, you agree that you will:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Upload only authentic, recent, and relevant accident photos/videos</li>
              <li>Avoid uploading fake, old, staged, or misleading media</li>
              <li>Not misuse the app to prank, harass, or falsely alarm emergency services</li>
              <li>Respect the privacy and dignity of accident victims</li>
              <li>Use the app responsibly and lawfully within your region</li>
            </ul>
            <p className="mt-4">
              Violation of these conditions may lead to suspension, reporting to authorities, or legal action under
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. AI Limitations & Liability Disclaimer</h2>
            <p>
              GoldenHour AI uses machine learning to detect and confirm accidents. However, the AI may sometimes make
              errors (false positives or false negatives).
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The app does not guarantee 100% accuracy in detecting accidents</li>
              <li>
                The developers and partners are not liable for missed alerts, delayed responses, or any consequences
                arising from system errors
              </li>
              <li>
                All emergency dispatches are subject to final confirmation by local authorities or partnered agencies
              </li>
              <li>Use of this app is at your own discretion and risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Emergency Service Integration</h2>
            <p>
              GoldenHour AI connects with third-party APIs and registered emergency response networks. While every
              effort is made to ensure accurate routing and notifications, GoldenHour AI does not control these
              third-party services and cannot be held responsible for their errors, delays, or unavailability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p>
              All app designs, AI models, logos, and content are the property of GoldenHour AI (Buildathon 2025 project)
              and may not be copied or redistributed without written permission. Users retain ownership of any media
              they upload but grant GoldenHour AI a temporary, limited license to process and transmit the data solely
              for emergency purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications to Terms</h2>
            <p>
              GoldenHour AI reserves the right to update these Terms and its Privacy Policy at any time. Changes will be
              posted on this website with a new "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
            <p>For questions, partnership requests, or concerns, please contact:</p>
            <p className="mt-3">
              📩{" "}
              <a href="mailto:goldenhourai.support@gmail.com" className="text-primary hover:underline">
                goldenhourai.support@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm">GoldenHour AI — Built with Empathy, Safety, and Responsibility</p>
            <p className="text-sm">"Because every second you save could save a life."</p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
