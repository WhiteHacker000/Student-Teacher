
"use client"

export default function ManagementHeader({ title, subtitle, onAddClick }) {
    return (
        <div className="student-management__header">
            <div>
                <h1 className="student-management__title">{title}</h1>
                <p className="student-management__subtitle">{subtitle}</p>
            </div>
            <button className="btn btn--gradient" onClick={onAddClick}>
                + Add {title.split(" ")[0]}
            </button>
        </div>
    );
}
