import "./Dashboard.css"
import "./TeachersSection.css"

export default function TeachersSection({ data = [] }) {
  const teachers = data

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">Teachers</h2>
        <button className="btn btn--primary">+ Add Teacher</button>
      </div>

      <div className="section__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.user.name}</td>
                  <td>{teacher.user.email}</td>
                  <td>{teacher.department}</td>
                  <td>{teacher._count?.courses || 0}</td>
                  <td>
                    <button className="btn btn--small btn--secondary">Edit</button>
                    <button className="btn btn--small btn--danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
