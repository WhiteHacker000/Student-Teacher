"use client"

import { useState } from "react"
import { studentMockCourses as mockCourses, studentMockAssignments as initAssignments } from "@/lib/mockData"
import StatsOverview from "./components/StatsOverview"
import EnrolledCourseCard from "./components/EnrolledCourseCard"
import AssignmentCard from "./components/AssignmentCard"
import "./StudentDashboard.css"

export default function StudentDashboard() {
  const [assignments, setAssignments] = useState(initAssignments)

  const handleSubmitAssignment = (id) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id ? { ...assignment, status: "submitted" } : assignment,
      ),
    )
  }

  const averageAttendance = Math.round(
    mockCourses.reduce((sum, course) => sum + course.attendancePercentage, 0) / mockCourses.length,
  )

  const pendingAssignments = assignments.filter((a) => a.status === "pending").length
  const overdueAssignments = assignments.filter((a) => a.status === "overdue").length

  return (
    <div className="student-dashboard">
      <div className="student-dashboard__header">
        <div>
          <h1 className="student-dashboard__title">Student Dashboard</h1>
          <p className="student-dashboard__subtitle">Welcome back! Here's your academic overview</p>
        </div>
      </div>

      {/* Quick Stats Section */}
      <StatsOverview
        averageAttendance={averageAttendance}
        courseCount={mockCourses.length}
        pendingCount={pendingAssignments}
        overdueCount={overdueAssignments}
      />

      {/* Courses Section */}
      <div className="student-dashboard__section">
        <div className="student-dashboard__section-header">
          <h2 className="student-dashboard__section-title">Your Courses</h2>
          <p className="student-dashboard__section-subtitle">Track your progress and attendance per course</p>
        </div>
        <div className="student-dashboard__courses-grid">
          {mockCourses.map((course) => (
            <EnrolledCourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Assignments Section */}
      <div className="student-dashboard__section">
        <div className="student-dashboard__section-header">
          <h2 className="student-dashboard__section-title">Your Assignments</h2>
          <p className="student-dashboard__section-subtitle">Complete your assignments before the due date</p>
        </div>
        <div className="student-dashboard__assignments">
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <AssignmentCard key={assignment.id} {...assignment} onSubmit={handleSubmitAssignment} />
            ))
          ) : (
            <div className="student-dashboard__empty">
              <p>No assignments yet. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
