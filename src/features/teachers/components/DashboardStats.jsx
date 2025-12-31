import { GraduationCap, Users, FileText, BarChart3 } from "lucide-react"
import SummaryCard from "@/features/admin/components/SummaryCard"

export default function DashboardStats({ courseCount, studentCount }) {
    return (
        <div className="admin-dashboard__stats">
            <SummaryCard
                icon={GraduationCap}
                label="Total Courses"
                value={courseCount}
                subtext="Assigned this semester"
                color="var(--color-student)"
            />
            <SummaryCard
                icon={Users}
                label="Total Students"
                value={studentCount}
                subtext="Across all courses"
                color="var(--color-teacher)"
            />
            <SummaryCard
                icon={FileText}
                label="Assignments"
                value="12"
                subtext="Active assignments"
                color="var(--color-assignments)"
            />
            <SummaryCard
                icon={BarChart3}
                label="Avg. Attendance"
                value="91%"
                subtext="Class average"
                color="var(--color-attendance)"
            />
        </div>
    );
}
