import "./page.css"
import DashboardLayout from "@/components/layout/layout/DashboardLayout"
import { getSession } from "@/lib/session"
import { getAdminStats, getStudents, getTeachers, getCourses, getAttendance, getAssignments, getRecentActivity } from "@/actions/dashboard"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Student-Teacher Management System",
  description: "Manage students, teachers, courses, attendance, and assignments",
}

export default async function Home() {
  const session = await getSession()

  if (!session || !session.user) {
    redirect("/login")
  }

  const [stats, students, teachers, courses, attendance, assignments] = await Promise.all([
    getAdminStats(),
    getStudents(),
    getTeachers(),
    getCourses(),
    getAttendance(),
    getAssignments()
  ])

  return <DashboardLayout
    user={session.user}
    stats={stats}
    students={students}
    teachers={teachers}
    courses={courses}
    attendance={attendance}
    assignments={assignments}
  />
}
