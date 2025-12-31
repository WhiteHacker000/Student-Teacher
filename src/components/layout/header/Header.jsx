import SidebarToggle from "./SidebarToggle"
import HeaderLogo from "./HeaderLogo"
import UserMenu from "./UserMenu"
import ThemeToggle from "@/components/ui/ThemeToggle"
import "./Header.css"

export default function Header({ user, onLogout, onToggleSidebar, sidebarOpen }) {
  return (
    <header className="header">
      <div className="header__left">
        <SidebarToggle onToggleSidebar={onToggleSidebar} sidebarOpen={sidebarOpen} />
        <HeaderLogo />
      </div>

      <div className="header__right">
        <ThemeToggle />
        <UserMenu user={user} onLogout={onLogout} />
      </div>
    </header>
  )
}
