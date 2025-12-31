
"use client"

export default function StatsOverview({ averageAttendance, courseCount, pendingCount, overdueCount }) {
    const statItems = [
        {
            label: "Attendance",
            value: `${averageAttendance}%`,
            icon: "📊",
            bgColor: "#e0e7ff",
            iconColor: "#667eea",
        },
        {
            label: "Courses",
            value: courseCount,
            icon: "📚",
            bgColor: "#fef3c7",
            iconColor: "#f59e0b",
        },
        {
            label: "Pending",
            value: pendingCount,
            icon: "📝",
            bgColor: "#dcfce7",
            iconColor: "#10b981",
        },
        {
            label: "Overdue",
            value: overdueCount,
            icon: "⚠️",
            bgColor: "#fee2e2",
            iconColor: "#ef4444",
        },
    ];

    return (
        <div className="student-dashboard__stats">
            {statItems.map((item, index) => (
                <div key={index} className="student-dashboard__stat-box">
                    <div
                        className="student-dashboard__stat-icon"
                        style={{ "--bg-color": item.bgColor, "--icon-color": item.iconColor }}
                    >
                        {item.icon}
                    </div>
                    <div className="student-dashboard__stat-content">
                        <p className="student-dashboard__stat-label">{item.label}</p>
                        <p className="student-dashboard__stat-value">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
