"use client"

import { useState } from "react"
import Link from "next/link"
import "./page.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const validateForm = () => {
    const newErrors = {}

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage("")

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSuccessMessage("Login successful! Redirecting to dashboard...")
      console.log("Login submitted:", { email, password })
      setIsSubmitting(false)

      // Simulate redirect
      setTimeout(() => {
        // window.location.href = '/dashboard'
      }, 1500)
    }, 1000)
  }

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h1>Welcome Back</h1>
        <p>Sign in to your account to continue managing your classes</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Email Field */}
        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (errors.email) {
                setErrors({ ...errors, email: "" })
              }
            }}
            placeholder="you@example.com"
            disabled={isSubmitting}
          />
          {errors.email && <span className="error-message show">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div className={`form-group ${errors.password ? "error" : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) {
                setErrors({ ...errors, password: "" })
              }
            }}
            placeholder="••••••••"
            disabled={isSubmitting}
          />
          {errors.password && <span className="error-message show">{errors.password}</span>}
        </div>

        {/* Form Error Message */}
        {errors.form && (
          <div className="error-message show">{errors.form}</div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="success-message show">{successMessage}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Footer Link */}
      <div className="auth-footer">
        <p>
          Don't have an account? <Link href="/signup">Create one here</Link>
        </p>
      </div>
    </div>
  )
}
