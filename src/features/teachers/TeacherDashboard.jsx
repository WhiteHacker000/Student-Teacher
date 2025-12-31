"use client"

import { useState } from "react"
import {
  teacherMockCourses as mockCourses,
  teacherMockAssignments as initAssignments,
  mockStudentsByCourse
} from "@/lib/mockData"
import DashboardStats from "./components/DashboardStats"
import AssignmentsList from "./components/AssignmentsList"
import CourseCard from "./components/CourseCard"
import CourseDetailsSection from "./components/CourseDetailsSection"
import AttendanceModal from "./components/AttendanceModal"
import AssignmentForm from "./components/AssignmentForm"
import "./TeacherDashboard.css"

export default function TeacherDashboard() {
  const [assignments, setAssignments] = useState(initAssignments)
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false)
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [expandedCourse, setExpandedCourse] = useState(null)

  const handleMarkAttendance = (course) => {
    setSelectedCourse(course)
    setIsAttendanceOpen(true)
  }

  const handleAttendanceSubmit = (attendance) => {
    alert(`Attendance marked for ${selectedCourse?.title}`)
  }

  const handleCreateAssignment = (data) => {
    const newAssignment = {
      id: (assignments.length + 1).toString(),
      ...data,
      createdDate: new Date().toISOString().split("T")[0],
    }
    setAssignments((prev) => [newAssignment, ...prev])
    alert("Assignment created successfully!")
  }

  const toggleCourseDetails = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  const totalStudents = mockCourses.reduce((sum, c) => sum + c.students, 0)

  return (
    <div className="teacher-dashboard">
      <div className="teacher-dashboard__header">
        <div>
          <h1 className="teacher-dashboard__page-title">Teacher Dashboard</h1>
          <p className="teacher-dashboard__page-subtitle">Manage your courses, assignments, and student progress</p>
        </div>
        <button className="btn btn--gradient" onClick={() => setIsAssignmentOpen(true)}>
          + Create Assignment
        </button>
      </div>

      <DashboardStats courseCount={mockCourses.length} studentCount={totalStudents} />

      {/* Courses Section */}
      <section className="teacher-dashboard__section">
        <h2 className="teacher-dashboard__section-title">Assigned Courses</h2>
        <div className="teacher-dashboard__courses-grid">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} {...course} onClick={() => toggleCourseDetails(course.id)} />
          ))}
        </div>
      </section>

      {/* Course Details & Students */}
      {expandedCourse && (
        <CourseDetailsSection
          course={mockCourses.find((c) => c.id === expandedCourse)}
          onMarkAttendance={handleMarkAttendance}
        />
      )}

      {/* Recent Assignments */}
      <section className="teacher-dashboard__section">
        <h2 className="teacher-dashboard__section-title">Recent Assignments</h2>
        <AssignmentsList assignments={assignments} />
      </section>

      {/* Modals */}
      <AttendanceModal
        isOpen={isAttendanceOpen}
        onClose={() => setIsAttendanceOpen(false)}
        course={selectedCourse?.title || ""}
        students={selectedCourse ? mockStudentsByCourse[selectedCourse.id] || [] : []}
        onSubmit={handleAttendanceSubmit}
      />

      <AssignmentForm
        isOpen={isAssignmentOpen}
        onClose={() => setIsAssignmentOpen(false)}
        courses={mockCourses.map((c) => `${c.code} - ${c.title}`)}
        onSubmit={handleCreateAssignment}
      />
    </div>
  )
}
