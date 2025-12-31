import "./Dashboard.css"
import "./AssignmentsSection.css"

export default function AssignmentsSection() {
  const assignments = [
    { id: "1", title: "Algebra Problem Set", course: "Mathematics 101", dueDate: "Dec 25, 2024", submissions: "38/45" },
    {
      id: "2",
      title: "Essay: Shakespeare",
      course: "English Literature",
      dueDate: "Dec 23, 2024",
      submissions: "28/32",
    },
    { id: "3", title: "Lab Report", course: "Physics 102", dueDate: "Dec 30, 2024", submissions: "35/38" },
  ]

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
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.course}</td>
                <td>{assignment.dueDate}</td>
                <td>{assignment.submissions}</td>
                <td>
                  <button className="btn btn--small btn--secondary">View</button>
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
