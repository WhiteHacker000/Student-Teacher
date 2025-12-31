"use client"
import { useState, useEffect } from "react"
import "./AttendanceModal.css"

export default function AttendanceModal({ isOpen, onClose, course, students, onSubmit }) {
  const [attendance, setAttendance] = useState({})

  useEffect(() => {
    if (students) {
      const initialAttendance = {}
      students.forEach((student) => {
        initialAttendance[student.id] = student.present ?? true
      })
      setAttendance(initialAttendance)
    }
  }, [students, isOpen])

  const handleToggle = (studentId) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }))
  }

  const handleSubmit = () => {
    onSubmit(attendance)
    onClose()
  }

  if (!isOpen) return null

  const presentCount = Object.values(attendance).filter(Boolean).length

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="attendance-modal">
        <div className="modal-header">
          <h2>Mark Attendance - {course}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="attendance-stats">
          <span className="stat">
            Total: {students?.length || 0}
          </span>
          <span className="stat">
            Present: {presentCount}
          </span>
          <span className="stat">
            Absent: {(students?.length || 0) - presentCount}
          </span>
        </div>

        <div className="student-list">
          {students?.map((student) => (
            <div key={student.id} className="attendance-item">
              <div className="student-info">
                <span className="roll-number">{student.rollNumber}</span>
                <span className="student-name">{student.name}</span>
              </div>
              <button
                className={`attendance-toggle ${attendance[student.id] ? "present" : "absent"}`}
                onClick={() => handleToggle(student.id)}
                aria-label={`Mark ${student.name} as ${attendance[student.id] ? "absent" : "present"}`}
              >
                {attendance[student.id] ? "✓ Present" : "✗ Absent"}
              </button>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn btn--secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={handleSubmit}>
            Save Attendance
          </button>
        </div>
      </div>
    </>
  )
}
