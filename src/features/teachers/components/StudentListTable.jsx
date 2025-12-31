"use client"
import "./StudentListTable.css"

export default function StudentListTable({ students, courseTitle }) {
  return (
    <div className="student-list-table">
      <div className="table-header-section">
        <h3 className="table-title">{courseTitle} - Enrolled Students</h3>
        <span className="student-count">{students.length} Students</span>
      </div>

      <div className="table-wrapper">
        <table className="students-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td className="roll-number">{student.rollNumber}</td>
                  <td className="student-name">{student.name}</td>
                  <td className="student-email">{student.email}</td>
                  <td className="attendance-col">
                    <div className="attendance-bar">
                      <div
                        className="attendance-fill"
                        style={{ "--attendance-width": `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="attendance-value">{student.attendance}%</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-state">
                  No students enrolled in this course
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
