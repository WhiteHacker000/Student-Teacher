"use client"

import { useState } from "react"
import "./AssignmentForm.css"

export default function AssignmentForm({ isOpen, onClose, courses, onSubmit }) {
  const [formData, setFormData] = useState({
    course,
    title: "",
    description: "",
    dueDate: "",
  })
  const [errors, setErrors] = useState>({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.course) newErrors.course = "Course is required"
    if (!formData.title.trim()) newErrors.title = "Assignment title is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.dueDate) newErrors.dueDate = "Due date is required"

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
      setFormData({ course: "", title: "", description: "", dueDate: "" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="assignment-modal">
        <div className="modal-header">
          <h2>Create New Assignment</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="assignment-form">
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={errors.course ? "input-error" : ""}>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="title">Assignment Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Chapter 5 Exercise Problems"
              className={errors.title ? "input-error" : ""}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter assignment details and instructions..."
              rows={4}
              className={errors.description ? "input-error" : ""}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={errors.dueDate ? "input-error" : ""}
            />
            {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn--secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
