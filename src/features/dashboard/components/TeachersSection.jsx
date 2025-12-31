import "./Dashboard.css"
import "./TeachersSection.css"

export default function TeachersSection() {
  const teachers = [
    { id: "1", name: "Mr. Smith", email: "smith@school.com", department: "Mathematics", courses: 3 },
    { id: "2", name: "Mrs. Johnson", email: "johnson@school.com", department: "English", courses: 2 },
    { id: "3", name: "Dr. Wilson", email: "wilson@school.com", department: "Science", courses: 4 },
  ]

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
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.department}</td>
                <td>{teacher.courses}</td>
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
