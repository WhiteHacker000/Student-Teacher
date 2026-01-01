"use client"

import { useState } from "react"
import UserDropdown from "./UserDropdown"
import "./UserMenu.css"

export default function UserMenu({ user, onLogout }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    const getInitials = (name) => {
        if (!name) return "U"
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <div className="header__user">
            <button
                className="header__user-btn"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
                aria-label="User menu"
            >
                <div className="header__avatar">{getInitials(user.name)}</div>
                <div className="header__user-info">
                    <p className="header__user-name">{user.name}</p>
                    <p className="header__user-role">{user.role}</p>
                </div>
                <span className="header__dropdown-icon">▼</span>
            </button>

            {dropdownOpen && <UserDropdown onClose={() => setDropdownOpen(false)} />}
        </div>
    )
}
