import "./Dashboard.css"
import "./AttendanceSection.css"

export default function AttendanceSection() {
  const records = [
    { id: "1", student: "Alice Johnson", date: "Dec 20, 2024", status: "Present" },
    { id: "2", student: "Bob Wilson", date: "Dec 20, 2024", status: "Present" },
    { id: "3", student: "Carol Davis", date: "Dec 20, 2024", status: "Absent" },
    { id: "4", student: "David Brown", date: "Dec 20, 2024", status: "Late" },
  ]

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">Attendance</h2>
        <button className="btn btn--primary">+ Mark Attendance</button>
      </div>

      <div className="section__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.student}</td>
                <td>{record.date}</td>
                <td>
                  <span className={`badge badge--${record.status.toLowerCase()}`}>{record.status}</span>
                </td>
                <td>
                  <button className="btn btn--small btn--secondary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
