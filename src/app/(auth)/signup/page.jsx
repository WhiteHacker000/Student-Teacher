"use client"

import { useState } from "react"
import Link from "next/link"
import "./page.css"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("student")
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
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain an uppercase letter"
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain a number"
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    // Role validation
    if (!role) {
      newErrors.role = "Please select your role"
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
      setSuccessMessage("Account created successfully! Redirecting to dashboard...")
      console.log("Signup submitted:", { email, password, role })
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
        <h1>Create Account</h1>
        <p>Join our learning management system to get started</p>
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
          <span
            className={`success-message ${password && /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8 ? "show" : "hide"}`}
          >
            ✓ Password is strong
          </span>
        </div>

        {/* Confirm Password Field */}
        <div className={`form-group ${errors.confirmPassword ? "error" : ""}`}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              if (errors.confirmPassword) {
                setErrors({ ...errors, confirmPassword: "" })
              }
            }}
            placeholder="••••••••"
            disabled={isSubmitting}
          />
          {errors.confirmPassword && <span className="error-message show">{errors.confirmPassword}</span>}
        </div>

        {/* Role Selection */}
        <div className={`form-group ${errors.role ? "error" : ""}`}>
          <label htmlFor="role">Select Your Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value)
              if (errors.role) {
                setErrors({ ...errors, role: "" })
              }
            }}
            disabled={isSubmitting}
          >
            <option value="">-- Choose a role --</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Administrator</option>
          </select>
          {errors.role && <span className="error-message show">{errors.role}</span>}
        </div>

        {/* Form Error Message */}
        {errors.form && (
          <div className="error-message show">{errors.form}</div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="success-message show">{errors.form}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
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
