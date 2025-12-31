"use client"

import "./TableActions.css"

export default function TableActions({ onEdit, onDelete, onView, customActions }) {
  return (
    <div className="table-actions">
      {onView && (
        <button className="action-btn view-btn" onClick={onView} title="View" aria-label="View details">
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
      {customActions?.map((action, index) => (
        <button
          key={index}
          className={`action-btn custom-btn ${action.className || ""}`}
          onClick={action.onClick}
          title={action.label}
          aria-label={action.label}
        >
          {action.icon}
        </button>
      ))}
    </div>
  )
}
