"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Zap, Trophy, Flame } from "lucide-react"

export function RewardsSection() {
  const [userCoins, setUserCoins] = useState(0)
  const [unlockedBadges, setUnlockedBadges] = useState({
    helper: false,
    responder: false,
    hero: false,
    guardian: false,
  })

  const [streak, setStreak] = useState(0)

  const badges = [
    { id: "helper", label: "Helper", icon: "🟢", description: "First successful report" },
    { id: "responder", label: "Responder", icon: "🟡", description: "3 verified reports" },
    { id: "hero", label: "Hero", icon: "🔴", description: "1 confirmed life saved" },
    { id: "guardian", label: "Guardian", icon: "🟣", description: "30-day active streak" },
  ]

  const rewards = [
    { id: 1, title: "Fuel Discount Coupon", cost: 1000, icon: "⛽" },
    { id: 2, title: "Café Voucher", cost: 500, icon: "☕" },
    { id: 3, title: "Donate Coins for Ambulance Fuel", cost: 800, icon: "🚑" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-50 animate-pulse" />
              <Trophy className="w-16 h-16 text-yellow-500 relative" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">GoldenHour Rewards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Because Heroes Deserve More Than Thanks.</p>
          <p className="text-lg text-muted-foreground mt-4">
            Earn Golden Coins and exclusive badges every time you help save a life or promote road safety.
          </p>
        </div>

        {/* Reward Wallet */}
        <Card className="mb-12 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your Golden Coins Balance</p>
              <p className="text-5xl font-bold text-yellow-600">{userCoins} 💰</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Gift className="w-4 h-4 mr-2" />
                Redeem My Rewards
              </Button>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-foreground">Next Reward Level</p>
              <p className="text-sm text-muted-foreground">{userCoins} / 1000</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all"
                style={{ width: `${(userCoins / 1000) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Redemption Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🎁 Redemption Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card
                key={reward.id}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{reward.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{reward.title}</h4>
                <p className="text-yellow-600 font-semibold mb-4">{reward.cost} Coins</p>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                  disabled={userCoins < reward.cost}
                >
                  Redeem Now
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🔥 Bonus Impact Badges</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`p-6 text-center transition-all duration-300 ${
                  unlockedBadges[badge.id as keyof typeof unlockedBadges]
                    ? "bg-gradient-to-b from-yellow-100 to-yellow-50 border-yellow-400 border-2 shadow-lg"
                    : "bg-gray-50 border-gray-200 opacity-50"
                }`}
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h4 className="font-bold text-foreground mb-1">{badge.label}</h4>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
                {unlockedBadges[badge.id as keyof typeof unlockedBadges] && (
                  <div className="mt-3 inline-block">
                    <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                  </div>
                )}
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">Keep saving lives to unlock the next badge.</p>
        </div>

        {/* Daily Streak */}
        <Card className="p-8 bg-gradient-to-r from-red-50 to-red-100 border-red-200 mb-12">
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <Flame className="w-12 h-12 text-red-500 animate-bounce" />
            <div className="flex-1">
              {streak === 0 ? (
                <>
                  <p className="text-lg font-bold text-foreground mb-2">🔥 Start Your Streak Today</p>
                  <p className="text-foreground">
                    Make your first report to begin building a streak and earn bonus coins!
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold text-foreground mb-2">🔥 {streak}-Day Streak Active</p>
                  <p className="text-foreground">+100 Bonus Coins Unlocked!</p>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  i < streak
                    ? "bg-gradient-to-b from-yellow-400 to-yellow-600 text-white"
                    : "bg-white border-2 border-gray-200 text-gray-400"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </Card>

        {/* Motivational Tagline */}
        <div className="text-center py-8">
          <p className="text-xl font-semibold text-foreground italic">
            "Every tap brings hope. Every action creates impact."
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            GoldenHour AI — Because every second you save could save a life.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Made for Buildathon 2025 by Eswari.</p>
        </div>
      </div>
    </section>
  )
}
