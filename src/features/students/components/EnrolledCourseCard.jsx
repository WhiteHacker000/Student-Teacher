"use client"
import "./EnrolledCourseCard.css"

export default function EnrolledCourseCard({
  id,
  title,
  code,
  instructor,
  attendancePercentage,
  color,
}) {
  return (
    <div className="enrolled-course-card" style={{ "--accent-color": color }}>
      <div className="enrolled-course-header">
        <h3 className="course-title">{title}</h3>
        <span className="course-code">{code}</span>
      </div>
      <p className="instructor-name">Instructor: {instructor}</p>
      <div className="attendance-info">
        <div className="attendance-label-group">
          <span className="attendance-label">Attendance</span>
          <span className="attendance-value">{attendancePercentage}%</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{
              width: `${attendancePercentage}%`,
              "--progress-color": color,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
