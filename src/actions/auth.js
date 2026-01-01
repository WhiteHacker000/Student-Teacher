"use server"

import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import db from "@/lib/db"
import { encrypt, logout } from "@/lib/session"
import { cookies } from "next/headers"

export async function signup(prevState, formData) {
    // 1. Extract and Validate Input
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const role = formData.get("role") || "STUDENT" // Default to Student

    if (!name || !email || !password) {
        return { error: "Missing required fields" }
    }

    // 2. Check if user already exists
    const existingUser = await db.user.findUnique({
        where: { email },
    })

    if (existingUser) {
        return { error: "User already exists with this email" }
    }

    // 3. Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 4. Create User in Database
    try {
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                // Create the profile based on role
                ...(role === "STUDENT" && {
                    studentProfile: {
                        create: {
                            grade: "10th",
                        }
                    }
                }),
                ...(role === "TEACHER" && {
                    teacherProfile: {
                        create: {
                            department: "General",
                        }
                    }
                })
            },
        })

        // 5. Create Session (Auto-login after signup)
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
        const session = await encrypt({ user: { id: user.id, email: user.email, role: user.role, name: user.name }, expires })

        const cookieStore = await cookies();
        cookieStore.set("session", session, { expires, httpOnly: true });

    } catch (error) {
        console.error("Signup Error:", error)
        return { error: "Failed to create account" }
    }

    // 6. Redirect to Dashboard
    redirect("/?signedUp=true")
}

export async function login(prevState, formData) {
    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
        return { error: "Missing required fields" }
    }

    try {
        // 1. Find User
        const user = await db.user.findUnique({
            where: { email },
        })

        if (!user) {
            return { error: "Invalid credentials" }
        }

        // 2. Compare Password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return { error: "Invalid credentials" }
        }

        // 3. Create Session
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
        const session = await encrypt({ user: { id: user.id, email: user.email, role: user.role, name: user.name }, expires })

        const cookieStore = await cookies();
        cookieStore.set("session", session, { expires, httpOnly: true });

    } catch (error) {
        console.error("Login Error:", error)
        return { error: "Something went wrong" }
    }

    redirect("/")
}
export async function logoutAction() {
    await logout()
    redirect("/login")
}
