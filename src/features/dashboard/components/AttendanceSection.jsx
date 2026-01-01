import "./Dashboard.css"
import "./AttendanceSection.css"

export default function AttendanceSection({ data = [] }) {
  const records = data

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
            {records.length > 0 ? (
              records.map((record) => (
                <tr key={record.id}>
                  <td>{record.student?.user?.name || "Unknown"}</td>
                  <td>{new Date(record.date).toLocaleDateString()}</td>
                  <td>
                    <span className={`badge badge--${record.status.toLowerCase()}`}>{record.status}</span>
                  </td>
                  <td>
                    <button className="btn btn--small btn--secondary">Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
