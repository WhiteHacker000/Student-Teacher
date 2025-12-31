import "./Dashboard.css"
import "./CoursesSection.css"

export default function CoursesSection() {
  const courses = [
    { id: "1", name: "Mathematics 101", instructor: "Mr. Smith", students: 45, status: "Active" },
    { id: "2", name: "English Literature", instructor: "Mrs. Johnson", students: 32, status: "Active" },
    { id: "3", name: "Physics 102", instructor: "Dr. Wilson", students: 38, status: "Completed" },
  ]

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">Courses</h2>
        <button className="btn btn--primary">+ Add Course</button>
      </div>

      <div className="section__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Students Enrolled</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>{course.students}</td>
                <td>
                  <span className={`badge badge--${course.status.toLowerCase()}`}>{course.status}</span>
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
