import { type NextRequest, NextResponse } from "next/server"

// Mock database of users
const users: Record<string, any> = {}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    // Check if user exists
    const user = Object.values(users).find((u) => u.email === email)

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Generate a simple token
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          userType: user.userType,
        },
        token,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
