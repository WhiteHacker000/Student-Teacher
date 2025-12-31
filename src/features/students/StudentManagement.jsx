"use client"

import { useState, useMemo } from "react"
import { mockStudents as initStudents } from "@/lib/mockData"
import ManagementHeader from "./components/ManagementHeader"
import ManagementControls from "./components/ManagementControls"
import StudentTable from "./components/StudentTable"
import StudentPagination from "./components/StudentPagination"
import StudentModal from "./components/StudentModal"
import DeleteConfirmation from "./components/DeleteConfirmation"
import "./StudentManagement.css"

export default function StudentManagement() {
  const [students, setStudents] = useState(initStudents)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState()
  const [deleteConfirm, setDeleteConfirm] = useState({
    isOpen: false,
    student: null,
  })

  const itemsPerPage = 5

  // Filter students based on search
  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      Object.values(student).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [students, searchQuery])

  // Paginate filtered students
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredStudents.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredStudents, currentPage])

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleAddStudent = () => {
    setSelectedStudent(undefined)
    setIsModalOpen(true)
  }

  const handleEditStudent = (student) => {
    setSelectedStudent(student)
    setIsModalOpen(true)
  }

  const handleDeleteClick = (student) => {
    setDeleteConfirm({ isOpen: true, student })
  }

  const handleConfirmDelete = () => {
    if (deleteConfirm.student) {
      setStudents((prev) => prev.filter((s) => s.id !== deleteConfirm.student.id))
      setDeleteConfirm({ isOpen: false, student: null })
      if (paginatedStudents.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  const handleSubmitStudent = (formData) => {
    if (selectedStudent) {
      // Edit mode
      setStudents((prev) => prev.map((s) => (s.id === selectedStudent.id ? { ...s, ...formData } : s)))
    } else {
      // Add mode
      const newStudent = {
        id: Math.max(...students.map((s) => s.id), 0) + 1,
        ...formData,
      }
      setStudents((prev) => [...prev, newStudent])
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="student-management">
      <ManagementHeader
        title="Student Management"
        subtitle="Manage student records and information"
        onAddClick={handleAddStudent}
      />

      <ManagementControls onSearch={handleSearch} />

      <StudentTable data={paginatedStudents} onEdit={handleEditStudent} onDelete={handleDeleteClick} />

      <StudentPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={filteredStudents.length}
      />

      <StudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitStudent}
        student={selectedStudent}
      />

      <DeleteConfirmation
        isOpen={deleteConfirm.isOpen}
        studentName={deleteConfirm.student?.name || ""}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirm({ isOpen: false, student: null })}
      />
    </div>
  )
}
