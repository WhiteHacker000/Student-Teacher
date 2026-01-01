"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import Header from "@/components/layout/header/Header"
import MainContent from "@/components/layout/content/MainContent"
import "./DashboardLayout.css"

export default function DashboardLayout({ user, stats, students, teachers }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const initialSection = user.role === "ADMIN" ? "dashboard" :
    user.role === "TEACHER" ? "dashboard" :
      "dashboard" // Default everyone to dashboard for now, or specific view
  const [activeSection, setActiveSection] = useState("dashboard")

  const handleLogout = () => {
    alert("User logged out successfully!")
  }

  return (
    <div className="dashboard">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} isOpen={sidebarOpen} />
      <div className="dashboard__content">
        <Header
          user={user}
          onLogout={handleLogout}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        <MainContent
          activeSection={activeSection}
          role={user.role}
          stats={stats}
          students={students}
          teachers={teachers}
        />
      </div>
    </div>
  )
}
