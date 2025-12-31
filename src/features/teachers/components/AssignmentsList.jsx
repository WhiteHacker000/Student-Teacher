
"use client"

export default function AssignmentsList({ assignments }) {
    return (
        <div className="teacher-dashboard__assignments-list">
            {assignments.length > 0 ? (
                assignments.map((assignment) => (
                    <div key={assignment.id} className="teacher-dashboard__assignment">
                        <div className="teacher-dashboard__assignment-info">
                            <h4 className="teacher-dashboard__assignment-title">{assignment.title}</h4>
                            <p className="teacher-dashboard__assignment-course">{assignment.course}</p>
                            <p className="teacher-dashboard__assignment-description">{assignment.description}</p>
                        </div>
                        <div className="teacher-dashboard__assignment-meta">
                            <div className="teacher-dashboard__meta-item">
                                <span className="teacher-dashboard__meta-label">Due Date</span>
                                <span className="teacher-dashboard__meta-value">
                                    {new Date(assignment.dueDate).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="teacher-dashboard__meta-item">
                                <span className="teacher-dashboard__meta-label">Created</span>
                                <span className="teacher-dashboard__meta-value">
                                    {new Date(assignment.createdDate).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="teacher-dashboard__empty-message">No assignments created yet.</p>
            )}
        </div>
    );
}
