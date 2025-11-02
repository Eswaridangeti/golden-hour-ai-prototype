"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChoose } from "@/components/why-choose"
import { TechStack } from "@/components/tech-stack"
import { RewardsSection } from "@/components/rewards-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyChoose />
      <RewardsSection />
      <TechStack />
      <Footer />
    </main>
  )
}
