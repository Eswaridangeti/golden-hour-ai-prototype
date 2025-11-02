"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/70">Last Updated: November 2025</p>
        </div>

        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Collection & Privacy</h2>
            <p>GoldenHour AI collects limited data to function effectively:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Accident photos/videos (blurred automatically where possible)</li>
              <li>GPS coordinates & timestamps</li>
              <li>Device metadata (for validation)</li>
              <li>Optional voice notes or short messages</li>
            </ul>
            <p className="mt-4">
              We do not collect or share any personally identifying information unless required by law or emergency
              service protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Image Processing & Storage</h2>
            <p>All images are:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Temporarily stored in encrypted form</li>
              <li>Automatically blurred to remove faces and license plates</li>
              <li>Deleted after processing or once the incident is verified</li>
            </ul>
            <p className="mt-4">We strictly adhere to privacy-by-design principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Consent & Permissions</h2>
            <p>By uploading a photo, video, or voice note, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You voluntarily provide this information to assist in emergency response</li>
              <li>You consent to GoldenHour AI sharing verified accident data with authorized emergency services</li>
              <li>
                You understand that the media will not be made public or shared with third parties outside this scope
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Security & Misuse Prevention</h2>
            <p>
              We take reasonable measures to protect your data through encryption and secure protocols. However, no
              system is entirely immune from risk. Users are advised not to upload sensitive or personal information
              unrelated to accidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Legal Compliance</h2>
            <p>GoldenHour AI complies with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>India's Information Technology (IT) Act, 2000</li>
              <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
              <li>Applicable local and international data protection laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p>
              For questions or concerns, please contact:{" "}
              <a href="mailto:goldenhourai.support@gmail.com" className="text-primary hover:underline">
                goldenhourai.support@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
