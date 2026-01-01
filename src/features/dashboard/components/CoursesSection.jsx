import "./Dashboard.css"
import "./CoursesSection.css"

export default function CoursesSection({ data = [] }) {
  const courses = data

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
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.teacher?.user?.name || "N/A"}</td>
                  <td>{course._count?.students || 0}</td>
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
                  No courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
