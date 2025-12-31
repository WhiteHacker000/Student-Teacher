import { Users, UserRound, GraduationCap, BarChart3 } from "lucide-react"
import SummaryCard from "./SummaryCard"

export default function StatsOverview() {
    return (
        <div className="admin-dashboard__stats">
            <SummaryCard
                icon={Users}
                label="Total Students"
                value="548"
                subtext="Active this month"
                color="var(--color-student)"
                trend="+12%"
            />
            <SummaryCard
                icon={UserRound}
                label="Total Teachers"
                value="42"
                subtext="Currently active"
                color="var(--color-teacher)"
                trend="+3%"
            />
            <SummaryCard
                icon={GraduationCap}
                label="Active Courses"
                value="18"
                subtext="3 new this semester"
                color="var(--color-success)"
                trend="+8%"
            />
            <SummaryCard
                icon={BarChart3}
                label="Attendance Rate"
                value="98.2%"
                subtext="System average"
                color="var(--color-attendance)"
            />
        </div>
    );
}
