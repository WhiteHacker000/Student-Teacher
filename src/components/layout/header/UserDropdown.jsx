"use client"
import { logoutAction } from "@/actions/auth"
import "./UserDropdown.css"

export default function UserDropdown({ onClose }) {
    return (
        <div className="header__dropdown">
            <button className="header__dropdown-item" onClick={() => alert("Profile clicked")}>
                Profile Settings
            </button>
            <button className="header__dropdown-item" onClick={() => alert("Preferences clicked")}>
                Preferences
            </button>
            <hr className="header__dropdown-divider" />
            <button
                className="header__dropdown-item header__dropdown-item--logout"
                onClick={() => {
                    logoutAction()
                    onClose()
                }}
            >
                Logout
            </button>
        </div>
    )
}
