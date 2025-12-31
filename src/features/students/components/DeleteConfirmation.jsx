"use client"

import "./DeleteConfirmation.css"

export default function DeleteConfirmation({ isOpen, studentName, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <>
      <div className="dialog-overlay" onClick={onCancel}></div>
      <div className="confirmation-dialog">
        <div className="dialog-icon">⚠️</div>
        <h2 className="dialog-title">Delete Student</h2>
        <p className="dialog-message">
          Are you sure you want to delete <strong>{studentName}</strong>? This action cannot be undone.
        </p>
        <div className="dialog-actions">
          <button className="btn btn--secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn--danger" onClick={onConfirm}>
            Delete Student
          </button>
        </div>
      </div>
    </>
  )
}
