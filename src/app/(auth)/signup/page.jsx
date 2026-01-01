"use client"

import { useActionState, useState } from "react"
import Link from "next/link"
import { signup } from "@/actions/auth"
import "./page.css"

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, {})
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Client-side validation for password match (optional enhancement)
  const isPasswordMismatch = password && confirmPassword && password !== confirmPassword

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h1>Create Account</h1>
        <p>Join our learning management system to get started</p>
      </div>

      <form action={formAction} noValidate>
        {/* Full Name Field */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            disabled={isPending}
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            disabled={isPending}
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            minLength={8}
            disabled={isPending}
          />
          <span
            className={`success-message ${password && /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8 ? "show" : "hide"}`}
          >
            ✓ Password is strong
          </span>
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword" // Not used by server, but good for browser managers
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
            disabled={isPending}
          />
          {isPasswordMismatch && <span className="error-message show">Passwords do not match</span>}
        </div>

        {/* Role Selection */}
        <div className="form-group">
          <label htmlFor="role">Select Your Role</label>
          <select
            id="role"
            name="role"
            defaultValue="STUDENT"
            disabled={isPending}
          >
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
            <option value="ADMIN">Administrator</option>
          </select>
        </div>

        {/* Server Error Message */}
        {state?.error && (
          <div className="error-message show">{state.error}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn--primary" disabled={isPending || isPasswordMismatch}>
          {isPending ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {/* Footer Link */}
      <div className="auth-footer">
        <p>
          Already have an account? <Link href="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  )
}
