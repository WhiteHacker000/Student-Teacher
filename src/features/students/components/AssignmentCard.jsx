"use client"
import "./AssignmentCard.css"

export default function AssignmentCard({
  id,
  title,
  course,
  description,
  dueDate,
  status,
  onSubmit,
}) {
  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "#fbbf24"
      case "submitted":
        return "#10b981"
      case "overdue":
        return "#ef4444"
      default:
        return "#667eea"
    }
  }

  const getStatusLabel = () => {
    switch (status) {
      case "pending":
        return "Pending"
      case "submitted":
        return "Submitted"
      case "overdue":
        return "Overdue"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="assignment-card">
      <div className="assignment-header">
        <div className="assignment-title-section">
          <h3 className="assignment-title">{title}</h3>
          <span className="assignment-course-badge">{course}</span>
        </div>
        <span
          className="assignment-status"
          style={{ "--status-color": getStatusColor() }}
        >
          {getStatusLabel()}
        </span>
      </div>

      <p className="assignment-description">{description}</p>

      <div className="assignment-footer">
        <div className="due-date-section">
          <span className="due-date-label">Due Date</span>
          <span className="due-date-value">{dueDate}</span>
        </div>
        {status !== "submitted" && (
          <button className="submit-btn" onClick={() => onSubmit(id)}>
            Submit Assignment
          </button>
        )}
      </div>
    </div>
  )
}
