import StatCard from "@/components/ui/stat-card/StatCard"
import "./DashboardSection.css"
import "./Dashboard.css"

export default function DashboardSection() {
  const stats = [
    { label: "Total Students", value: "1,245", color: "#3b82f6" },
    { label: "Total Teachers", value: "87", color: "#10b981" },
    { label: "Active Courses", value: "32", color: "#f59e0b" },
    { label: "Attendance Rate", value: "94.5%", color: "#8b5cf6" },
  ]

  return (
    <div className="section">
      <h2 className="section__title">Dashboard</h2>
      <p className="section__subtitle">Welcome back! Here's your overview.</p>

      <div className="section__stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} color={stat.color} />
        ))}
      </div>

      <div className="recent-activity">
        <h3 className="section__subsection-title">Recent Activity</h3>
        <ul className="recent-activity__list">
          <li className="recent-activity__item">
            <span className="recent-activity__time">10:30 AM</span>
            <p className="recent-activity__text">New student enrollment: Jane Smith</p>
          </li>
          <li className="recent-activity__item">
            <span className="recent-activity__time">09:15 AM</span>
            <p className="recent-activity__text">Assignment submission: Math Homework</p>
          </li>
          <li className="recent-activity__item">
            <span className="recent-activity__time">08:45 AM</span>
            <p className="recent-activity__text">Attendance recorded for Grade 10-A</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
