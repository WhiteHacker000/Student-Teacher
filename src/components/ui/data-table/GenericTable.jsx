"use client"

import { useState, useMemo } from "react"
import "./GenericTable.css"

export default function GenericTable({
  columns,
  data,
  actions,
  emptyMessage = "No data found",
  striped = true,
  hover = true,
  sortable = true,
  onRowClick,
}) {
  const [sortConfig, setSortConfig] = useState(null)

  const handleSort = (key) => {
    const column = columns.find((col) => col.key === key)
    if (!column || column.sortable === false || !sortable) return

    let direction = "asc"
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const sortedData = useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue === undefined || bValue === undefined) return 0
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
      return 0
    })
  }, [data, sortConfig])

  const isSortable = (column) => {
    return sortable && column.sortable !== false
  }

  return (
    <div className="generic-table-wrapper">
      <table
        className={`generic-table ${striped ? "generic-table--striped" : ""} ${hover ? "generic-table--hoverable" : ""}`}
      >
        <thead className="generic-table__thead">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className={`generic-table__th ${isSortable(col) ? "generic-table__th--sortable" : ""}`}
              >
                <div className="generic-table__header-content">
                  {col.label}
                  {sortConfig?.key === col.key && isSortable(col) && (
                    <span className="generic-table__sort-icon">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
            ))}
            {actions && <th className="generic-table__th generic-table__actions-column">Actions</th>}
          </tr>
        </thead>
        <tbody className="generic-table__tbody">
          {sortedData.length > 0 ? (
            sortedData.map((row) => (
              <tr
                key={row.id}
                onClick={() => onRowClick?.(row)}
                className={`generic-table__row ${onRowClick ? "generic-table__row--clickable" : ""}`}
              >
                {columns.map((col) => (
                  <td key={`${row.id}-${col.key}`} className="generic-table__td">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {actions && <td className="generic-table__td generic-table__actions-cell">{actions(row)}</td>}
              </tr>
            ))
          ) : (
            <tr className="generic-table__row">
              <td colSpan={columns.length + (actions ? 1 : 0)} className="generic-table__td generic-table__empty">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
