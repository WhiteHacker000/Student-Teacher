import "./page.css"
import StudentManagement from "@/features/students/StudentManagement"

export const metadata = {
  title: "Student Management | School System",
  description: "Manage students and their information",
}

export default function StudentsPage() {
  return <StudentManagement />
}
