"use client"

import { useState, useEffect } from "react"
import "./StudentModal.css"

const CLASS_OPTIONS = ["9A", "9B", "10A", "10B", "11A", "11B", "12A", "12B"]

export default function StudentModal({ isOpen, onClose, onSubmit, student }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    rollNumber: "",
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        class: student.class,
        rollNumber: student.rollNumber,
      })
    } else {
      setFormData({
        name: "",
        email: "",
        class: "",
        rollNumber: "",
      })
    }
    setErrors({})
  }, [student, isOpen])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.class) {
      newErrors.class = "Class is required"
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required"
    } else if (!/^\d+$/.test(formData.rollNumber)) {
      newErrors.rollNumber = "Roll number must be numeric"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      setFormData({ name, email: "", class: "", rollNumber: "" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <h2>{student ? "Edit Student" : "Add Student"}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., John Doe"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="class">Class</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className={errors.class ? "input-error" : ""}
              >
                <option value="">Select Class</option>
                {CLASS_OPTIONS.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              {errors.class && <span className="error-message">{errors.class}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                placeholder="e.g., 001"
                className={errors.rollNumber ? "input-error" : ""}
              />
              {errors.rollNumber && <span className="error-message">{errors.rollNumber}</span>}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn--secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              {student ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
