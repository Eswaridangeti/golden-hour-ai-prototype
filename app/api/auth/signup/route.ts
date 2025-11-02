import { type NextRequest, NextResponse } from "next/server"

// Mock database of users
const users: Record<string, any> = {}

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, userType } = await request.json()

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Check if user already exists
    const userExists = Object.values(users).find((u) => u.email === email)

    if (userExists) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    // Create new user
    const userId = Date.now().toString()
    const newUser = {
      id: userId,
      fullName,
      email,
      password,
      userType: userType || "individual",
      createdAt: new Date(),
      rewards: 0,
      lives_saved: 0,
    }

    users[userId] = newUser

    // Generate a simple token
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          fullName: newUser.fullName,
          userType: newUser.userType,
        },
        token,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
