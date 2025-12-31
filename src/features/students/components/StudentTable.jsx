"use client"
import { useState } from "react"
import "./StudentTable.css"

export default function StudentTable({ data, onEdit, onDelete }) {
  const [sortConfig, setSortConfig] = useState(null)

  const handleSort = (key) => {
    let direction = "asc"
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
    return 0
  })

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")} className={`sortable ${sortConfig?.key === "name" ? "sorted" : ""}`}>
              <div className="header-content">
                Name
                {sortConfig?.key === "name" && (
                  <span className="sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                )}
              </div>
            </th>
            <th
              onClick={() => handleSort("email")}
              className={`sortable ${sortConfig?.key === "email" ? "sorted" : ""}`}
            >
              <div className="header-content">
                Email
                {sortConfig?.key === "email" && (
                  <span className="sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                )}
              </div>
            </th>
            <th
              onClick={() => handleSort("class")}
              className={`sortable ${sortConfig?.key === "class" ? "sorted" : ""}`}
            >
              <div className="header-content">
                Class
                {sortConfig?.key === "class" && (
                  <span className="sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                )}
              </div>
            </th>
            <th
              onClick={() => handleSort("rollNumber")}
              className={`sortable ${sortConfig?.key === "rollNumber" ? "sorted" : ""}`}
            >
              <div className="header-content">
                Roll Number
                {sortConfig?.key === "rollNumber" && (
                  <span className="sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                )}
              </div>
            </th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-name">
                    <div className="avatar">{student.name.charAt(0)}</div>
                    <span>{student.name}</span>
                  </div>
                </td>
                <td>{student.email}</td>
                <td>{student.class}</td>
                <td>{student.rollNumber}</td>
                <td className="actions-cell">
                  <button
                    className="action-btn edit-btn"
                    onClick={() => onEdit?.(student)}
                    title="Edit"
                    aria-label="Edit student"
                  >
                    ✎
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => onDelete?.(student)}
                    title="Delete"
                    aria-label="Delete student"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="empty-state">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
