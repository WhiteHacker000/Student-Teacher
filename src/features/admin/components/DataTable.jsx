"use client"

import { useState } from "react"
import "./DataTable.css"

export default function DataTable({ columns, data, actions }) {
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
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ "--col-width": col.width }}
                onClick={() => handleSort(col.key)}
                className={`table-header ${sortConfig?.key === col.key ? "sorted" : ""}`}
              >
                <div className="header-content">
                  {col.label}
                  {sortConfig?.key === col.key && (
                    <span className="sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
            ))}
            {actions && <th className="actions-column">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={`${row.id}-${col.key}`}>{row[col.key]}</td>
                ))}
                {actions && <td className="actions-cell">{actions(row)}</td>}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="empty-state">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
