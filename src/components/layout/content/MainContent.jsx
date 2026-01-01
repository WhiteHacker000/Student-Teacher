import DashboardSection from "@/features/dashboard/components/DashboardSection"
import StudentsSection from "@/features/dashboard/components/StudentsSection"
import TeachersSection from "@/features/dashboard/components/TeachersSection"
import CoursesSection from "@/features/dashboard/components/CoursesSection"
import AttendanceSection from "@/features/dashboard/components/AttendanceSection"
import AssignmentsSection from "@/features/dashboard/components/AssignmentsSection"
import "./MainContent.css"

export default function MainContent({ activeSection, role, stats, students, teachers, courses, attendance, assignments, recentActivity }) {
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardSection stats={stats} recentActivity={recentActivity} />
      case "students":
        return <StudentsSection data={students} />
      case "teachers":
        return <TeachersSection data={teachers} />
      case "courses":
        return <CoursesSection data={courses} />
      case "attendance":
        return <AttendanceSection data={attendance} />
      case "assignments":
        return <AssignmentsSection data={assignments} />
      default:
        return <DashboardSection />
    }
  }

  return (
    <main className="main-content">
      <div className="main-content__inner">{renderSection()}</div>
    </main>
  )
}
