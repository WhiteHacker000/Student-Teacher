"use client"

import { useState, useMemo } from "react"

import { mockUsers } from "@/lib/mockData"
import StatsOverview from "./components/StatsOverview"
import SummaryCard from "./components/SummaryCard"
import SearchBar from "./components/SearchBar"
import DataTable from "./components/DataTable"
import Pagination from "./components/Pagination"
import ActionButtons from "./components/ActionButtons"
import "./AdminDashboard.css"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter data based on search
  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) =>
      Object.values(user).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [searchQuery])

  // Paginate filtered data
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredUsers.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredUsers, currentPage])

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page on search
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`)
  }

  const handleDelete = (user) => {
    alert(`Delete user: ${user.name}`)
  }

  const handleView = (user) => {
    alert(`View details for: ${user.name}`)
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h1 className="admin-dashboard__title">Admin Dashboard</h1>
        <p className="admin-dashboard__subtitle">Manage students, teachers, and system data</p>
      </div>

      {/* Summary Cards */}
      <StatsOverview />

      {/* User Management Section */}
      <div className="section user-management-section">
        <div className="section__header">
          <div>
            <h2 className="section__title">User Management</h2>
            <p className="section__subtitle">Create, edit, and manage all users</p>
          </div>
          <button className="btn btn--gradient">+ Create User</button>
        </div>

        {/* Search and Actions */}
        <div className="admin-dashboard__filters">
          <SearchBar placeholder="Search by name, email, or role..." onSearch={handleSearch} />
          <div className="admin-dashboard__filter-group">
            <button className="admin-dashboard__filter-btn">Filter</button>
            <button className="admin-dashboard__filter-btn">Export</button>
          </div>
        </div>

        {/* Data Table */}
        <DataTable
          columns={[
            { key: "name", label: "Name", width: "25%" },
            { key: "email", label: "Email", width: "30%" },
            { key: "role", label: "Role", width: "15%" },
            { key: "status", label: "Status", width: "15%" },
            { key: "joinDate", label: "Join Date", width: "15%" },
          ]}
          data={paginatedUsers.map((user) => ({
            ...user,
            status: <span className={`badge badge--${user.status.toLowerCase()}`}>{user.status}</span>,
          }))}
          actions={(row) => (
            <ActionButtons
              onView={() => handleView(row)}
              onEdit={() => handleEdit(row)}
              onDelete={() => handleDelete(row)}
            />
          )}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={filteredUsers.length}
        />
      </div>
    </div>
  )
}
