import StatCard from "@/components/ui/stat-card/StatCard"
import "./DashboardSection.css"
import "./Dashboard.css"

export default function DashboardSection({ stats, recentActivity = [] }) {
  const displayStats = [
    { label: "Total Students", value: stats?.studentsCount?.toString() || "0", color: "#3b82f6" },
    { label: "Total Teachers", value: stats?.teachersCount?.toString() || "0", color: "#10b981" },
    { label: "Active Courses", value: stats?.coursesCount?.toString() || "0", color: "#f59e0b" },
    { label: "Attendance Rate", value: "0%", color: "#8b5cf6" }, // Not calculated yet
  ]

  return (
    <div className="section">
      <h2 className="section__title">Dashboard</h2>
      <p className="section__subtitle">Welcome back! Here's your overview.</p>

      <div className="section__stats-grid">
        {displayStats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} color={stat.color} />
        ))}
      </div>

      <div className="recent-activity">
        <h3 className="section__subsection-title">Recent Activity</h3>
        <ul className="recent-activity__list">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <li className="recent-activity__item" key={activity.id}>
                <span className="recent-activity__time">
                  {new Date(activity.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <p className="recent-activity__text">{activity.text}</p>
              </li>
            ))
          ) : (
            <li className="recent-activity__item">
              <span className="recent-activity__time">--:--</span>
              <p className="recent-activity__text">No recent activity found.</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
