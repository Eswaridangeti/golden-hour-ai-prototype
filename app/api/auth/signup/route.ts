import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, userType } = await request.json()

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    const { data: newUser, error } = await supabase
      .from("users")
      .insert([
        {
          full_name: fullName,
          email,
          password,
          user_type: userType || "individual",
          rewards: 0,
          lives_saved: 0,
        },
      ])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          fullName: newUser.full_name,
          userType: newUser.user_type,
        },
        token,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
