import "./Dashboard.css"
import "./StudentsSection.css"

export default function StudentsSection({ data = [] }) {
  const students = data

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">Students</h2>
        <button className="btn btn--primary">+ Add Student</button>
      </div>

      <div className="section__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.user.name}</td>
                  <td>{student.user.email}</td>
                  <td>{student.grade}</td>
                  <td>
                    <span className="badge badge--active">Active</span>
                  </td>
                  <td>
                    <button className="btn btn--small btn--secondary">Edit</button>
                    <button className="btn btn--small btn--danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
