import "./Dashboard.css"
import "./AssignmentsSection.css"

export default function AssignmentsSection({ data = [] }) {
  const assignments = data

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">Assignments</h2>
        <button className="btn btn--primary">+ Create Assignment</button>
      </div>

      <div className="section__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Assignment Title</th>
              <th>Course</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.title}</td>
                  <td>{assignment.course?.name || "N/A"}</td>
                  <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                  <td>0/0</td> {/* Placeholder until we have submission relations */}
                  <td>
                    <button className="btn btn--small btn--secondary">View</button>
                    <button className="btn btn--small btn--danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
