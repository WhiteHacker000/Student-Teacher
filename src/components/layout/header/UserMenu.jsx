"use client"

import { useState } from "react"
import UserDropdown from "./UserDropdown"
import "./UserMenu.css"

export default function UserMenu({ user, onLogout }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    return (
        <div className="header__user">
            <button
                className="header__user-btn"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
                aria-label="User menu"
            >
                <div className="header__avatar">{user.avatar}</div>
                <div className="header__user-info">
                    <p className="header__user-name">{user.name}</p>
                    <p className="header__user-role">{user.role}</p>
                </div>
                <span className="header__dropdown-icon">▼</span>
            </button>

            {dropdownOpen && <UserDropdown onLogout={onLogout} onClose={() => setDropdownOpen(false)} />}
        </div>
    )
}
