import "./Dashboard.css"
import "./StudentsSection.css"

export default function StudentsSection() {
  const students = [
    { id: "1", name: "Alice Johnson", email: "alice@school.com", grade: "10-A", status: "Active" },
    { id: "2", name: "Bob Wilson", email: "bob@school.com", grade: "10-B", status: "Active" },
    { id: "3", name: "Carol Davis", email: "carol@school.com", grade: "11-A", status: "Active" },
    { id: "4", name: "David Brown", email: "david@school.com", grade: "9-A", status: "Inactive" },
  ]

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
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.grade}</td>
                <td>
                  <span className={`badge badge--${student.status.toLowerCase()}`}>{student.status}</span>
                </td>
                <td>
                  <button className="btn btn--small btn--secondary">Edit</button>
                  <button className="btn btn--small btn--danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
