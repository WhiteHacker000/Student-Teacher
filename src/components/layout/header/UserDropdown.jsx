"use client"
import "./UserDropdown.css"

export default function UserDropdown({ onLogout, onClose }) {
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
                    onLogout()
                    onClose()
                }}
            >
                Logout
            </button>
        </div>
    )
}
