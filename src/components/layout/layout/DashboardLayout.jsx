"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import Header from "@/components/layout/header/Header"
import MainContent from "@/components/layout/content/MainContent"
import "./DashboardLayout.css"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [user] = useState({
    name: "John Doe",
    role: "Administrator",
    avatar: "JD",
  })

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
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  )
}
