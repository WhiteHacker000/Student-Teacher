"use client"

import "./ActionButtons.css"

export default function ActionButtons({ onEdit, onDelete, onView }) {
  return (
    <div className="action-buttons">
      {onView && (
        <button className="action-btn view-btn" onClick={onView} title="View details" aria-label="View details">
          👁️
        </button>
      )}
      {onEdit && (
        <button className="action-btn edit-btn" onClick={onEdit} title="Edit" aria-label="Edit">
          ✎
        </button>
      )}
      {onDelete && (
        <button className="action-btn delete-btn" onClick={onDelete} title="Delete" aria-label="Delete">
          🗑️
        </button>
      )}
    </div>
  )
}
