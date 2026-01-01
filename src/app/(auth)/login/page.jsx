"use client"

import { useActionState } from "react"
import Link from "next/link"
import { login } from "@/actions/auth"
import "./page.css"

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, {})

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>
      </div>

      <form action={formAction} noValidate>
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
            placeholder="••••••••"
            required
            disabled={isPending}
          />
        </div>

        {/* Server Error Message */}
        {state?.error && (
          <div className="error-message show">{state.error}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn--primary" disabled={isPending}>
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Footer Link */}
      <div className="auth-footer">
        <p>
          Don't have an account? <Link href="/signup">Create account</Link>
        </p>
      </div>
    </div>
  )
}
