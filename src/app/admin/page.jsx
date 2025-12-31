import "./page.css"
import AdminDashboard from "@/features/admin/AdminDashboard"

export const metadata = {
  title: "Admin Dashboard | Student-Teacher Management System",
  description: "Manage users, courses, and system data",
}

export default function AdminPage() {
  return <AdminDashboard />
}
