"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/demo" className="hover:text-accent transition">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-accent transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-accent transition">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="hover:text-accent transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <p className="text-white/80">goldenhourai.support@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>{currentYear} GoldenHour AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
