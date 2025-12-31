import "./page.css"
import DashboardLayout from "@/components/layout/layout/DashboardLayout"

export const metadata = {
  title: "Student-Teacher Management System",
  description: "Manage students, teachers, courses, attendance, and assignments",
}

export default function Home() {
  return <DashboardLayout />
}
