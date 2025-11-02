"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { AlertCircle, Hospital, Building2, Flame } from "lucide-react"
import { useState } from "react"

type OrganizationType = "hospital" | "police" | "fire" | null

export default function PartnersPage() {
  const [formStep, setFormStep] = useState(1)
  const [orgType, setOrgType] = useState<OrganizationType>(null)
  const [formData, setFormData] = useState({
    organizationName: "",
    registrationNumber: "",
    licenseNumber: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    numberOfUnits: "",
    averageResponseTime: "",
    password: "",
    confirmPassword: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const orgTypes = [
    { id: "hospital", name: "Hospital", icon: Hospital, description: "Medical emergency response" },
    { id: "police", name: "Police Station", icon: Building2, description: "Law enforcement support" },
    { id: "fire", name: "Fire Station", icon: Flame, description: "Fire and rescue services" },
  ]

  const handleOrgTypeSelect = (type: OrganizationType) => {
    setOrgType(type)
    setFormStep(2)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.organizationName) newErrors.organizationName = "Organization name is required"
    if (!formData.registrationNumber) newErrors.registrationNumber = "Registration number is required"
    if (!formData.contactPerson) newErrors.contactPerson = "Contact person name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (!formData.address) newErrors.address = "Address is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("[v0] Partner registration submitted:", { orgType, ...formData })
      setSubmitted(true)
      setTimeout(() => {
        setFormStep(1)
        setOrgType(null)
        setFormData({
          organizationName: "",
          registrationNumber: "",
          licenseNumber: "",
          contactPerson: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          numberOfUnits: "",
          averageResponseTime: "",
          password: "",
          confirmPassword: "",
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Partner With Us</h1>
          <p className="text-xl text-foreground/70">
            Join GoldenHour AI and save lives through faster emergency response
          </p>
        </div>

        {formStep === 1 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {orgTypes.map((org) => {
              const IconComponent = org.icon
              return (
                <Card
                  key={org.id}
                  className={`p-8 cursor-pointer hover:shadow-lg transition-all animate-slide-up ${
                    orgType === org.id ? "border-2 border-primary" : "border border-border"
                  }`}
                  onClick={() => handleOrgTypeSelect(org.id as OrganizationType)}
                >
                  <IconComponent className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
                  <p className="text-foreground/70 mb-4">{org.description}</p>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition">
                    Register
                  </button>
                </Card>
              )
            })}
          </div>
        )}

        {formStep === 2 && orgType && (
          <Card className="p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold">
                  Register your{" "}
                  {orgType === "hospital" ? "Hospital" : orgType === "police" ? "Police Station" : "Fire Station"}
                </h2>
              </div>
              <p className="text-foreground/70">All information will be verified before activation</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Registration submitted! Check your email for verification.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Organization Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization Name *</label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.organizationName ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Enter organization name"
                    />
                    {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Registration Number *</label>
                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.registrationNumber ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Official registration number"
                    />
                    {errors.registrationNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">License Number</label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Operating license number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Units</label>
                    <input
                      type="number"
                      name="numberOfUnits"
                      value={formData.numberOfUnits}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 5"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.contactPerson ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Full name"
                    />
                    {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-border"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? "border-red-500" : "border-border"
                      }`}
                      placeholder="+91 XXXXXXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Average Response Time</label>
                    <input
                      type="text"
                      name="averageResponseTime"
                      value={formData.averageResponseTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 5 minutes"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.address ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Street address"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.city ? "border-red-500" : "border-border"
                        }`}
                        placeholder="City"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.state ? "border-red-500" : "border-border"
                        }`}
                        placeholder="State"
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Zip code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Account Security</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.password ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Min. 8 characters"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.confirmPassword ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormStep(1)
                    setOrgType(null)
                  }}
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-3 rounded-lg transition"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition"
                >
                  {submitted ? "Registering..." : "Register Organization"}
                </button>
              </div>
            </form>
          </Card>
        )}
      </div>

      <Footer />
    </main>
  )
}
