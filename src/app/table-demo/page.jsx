"use client"
import "./page.css"

import { useState, useMemo } from "react"
import GenericTable from "@/components/ui/data-table/GenericTable"
import ReusableSearch from "@/components/ui/data-table/ReusableSearch"
import ReusablePagination from "@/components/ui/data-table/ReusablePagination"
import TableActions from "@/components/ui/data-table/TableActions"
import "./page.css"

const mockProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999, stock: 15, status: "Active" },
  { id: 2, name: "Mouse", category: "Accessories", price: 25, stock: 50, status: "Active" },
  { id: 3, name: "Keyboard", category: "Accessories", price: 75, stock: 30, status: "Active" },
  { id: 4, name: "Monitor", category: "Electronics", price: 299, stock: 10, status: "Inactive" },
  { id: 5, name: "Headphones", category: "Accessories", price: 150, stock: 25, status: "Active" },
  { id: 6, name: "Desk", category: "Furniture", price: 500, stock: 8, status: "Active" },
  { id: 7, name: "Chair", category: "Furniture", price: 350, stock: 12, status: "Active" },
  { id: 8, name: "Webcam", category: "Electronics", price: 85, stock: 20, status: "Active" },
  { id: 9, name: "Microphone", category: "Accessories", price: 120, stock: 18, status: "Inactive" },
  { id: 10, name: "Stand", category: "Furniture", price: 45, stock: 40, status: "Active" },
  { id: 11, name: "Cable", category: "Accessories", price: 15, stock: 100, status: "Active" },
  { id: 12, name: "Adapter", category: "Accessories", price: 30, stock: 55, status: "Active" },
]

export default function TableDemo() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const columns = [
    { key: "name", label: "Product Name", width: "25%", sortable: true },
    { key: "category", label: "Category", width: "20%", sortable: true },
    {
      key: "price",
      label: "Price",
      width: "15%",
      sortable: true,
      render: (value) => `$${value.toFixed(2)}`,
    },
    {
      key: "stock",
      label: "Stock",
      width: "15%",
      sortable: true,
      render: (value) => (
        <span className={value > 20 ? "stock-high" : "stock-low"}>{value}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      width: "15%",
      sortable: true,
      render: (value) => <span className={`status-badge status-${value.toLowerCase()}`}>{value}</span>,
    },
  ]

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) =>
      Object.values(product).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [searchQuery])

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProducts, currentPage])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEdit = (product) => {
    alert(`Edit: ${product.name}`)
  }

  const handleDelete = (product) => {
    alert(`Delete: ${product.name}`)
  }

  return (
    <div className="table-demo-container">
      <div className="demo-header">
        <div>
          <h1>Generic Table Component Demo</h1>
          <p>Reusable, configurable table with search, pagination, and sorting</p>
        </div>
        <button className="btn btn--primary">+ Add Product</button>
      </div>

      <div className="demo-controls">
        <ReusableSearch placeholder="Search by name, category, or status..." onSearch={handleSearch} />
        <div className="control-actions">
          <button className="filter-btn">Filter</button>
          <button className="filter-btn">Export</button>
        </div>
      </div>

      <GenericTable
        columns={columns}
        data={paginatedProducts}
        actions={(row) => (
          <TableActions
            onView={() => handleEdit(row)}
            onEdit={() => handleEdit(row)}
            onDelete={() => handleDelete(row)}
          />
        )}
        emptyMessage="No products match your search"
        striped
        hover
        sortable
      />

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        showResultsInfo
      />
    </div>
  )
}
