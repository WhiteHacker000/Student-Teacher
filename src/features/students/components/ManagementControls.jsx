import StudentSearch from "./StudentSearch"

export default function ManagementControls({ onSearch }) {
    return (
        <div className="student-management__controls">
            <StudentSearch onSearch={onSearch} />
            <div className="student-management__actions">
                <button className="student-management__filter-btn">Filter</button>
                <button className="student-management__filter-btn">Export</button>
            </div>
        </div>
    )
}
