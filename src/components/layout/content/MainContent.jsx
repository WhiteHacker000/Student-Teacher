import DashboardSection from "@/features/dashboard/components/DashboardSection"
import StudentsSection from "@/features/dashboard/components/StudentsSection"
import TeachersSection from "@/features/dashboard/components/TeachersSection"
import CoursesSection from "@/features/dashboard/components/CoursesSection"
import AttendanceSection from "@/features/dashboard/components/AttendanceSection"
import AssignmentsSection from "@/features/dashboard/components/AssignmentsSection"
import "./MainContent.css"

export default function MainContent({ activeSection }) {
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardSection />
      case "students":
        return <StudentsSection />
      case "teachers":
        return <TeachersSection />
      case "courses":
        return <CoursesSection />
      case "attendance":
        return <AttendanceSection />
      case "assignments":
        return <AssignmentsSection />
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
