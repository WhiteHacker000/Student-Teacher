import {
  LayoutDashboard,
  Users,
  UserRound,
  BookOpen,
  ClipboardCheck,
  FileText
} from "lucide-react"
import "./Sidebar.css"

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, colorVar: "var(--color-student)" },
  { id: "students", label: "Students", icon: Users, colorVar: "var(--color-warning)" },
  { id: "teachers", label: "Teachers", icon: UserRound, colorVar: "var(--color-teacher)" },
  { id: "courses", label: "Courses", icon: BookOpen, colorVar: "var(--color-success)" },
  { id: "attendance", label: "Attendance", icon: ClipboardCheck, colorVar: "var(--color-attendance)" },
  { id: "assignments", label: "Assignments", icon: FileText, colorVar: "var(--color-assignments)" },
]

export default function Sidebar({ activeSection, onSectionChange, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  className={`sidebar__item ${isActive ? "sidebar__item--active" : ""}`}
                  onClick={() => onSectionChange(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  style={{ "--item-color": item.colorVar }}
                >
                  <span className="sidebar__icon" style={{ color: item.colorVar }}>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </span>
                  <span className="sidebar__label">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <p className="sidebar__footer-text">© 2025 Newtu</p>
      </div>
    </aside>
  )
}
