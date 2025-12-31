"use client"
import "./SidebarToggle.css"

export default function SidebarToggle({ onToggleSidebar, sidebarOpen }) {
    return (
        <button
            className="header__toggle"
            onClick={onToggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
            ☰
        </button>
    )
}
