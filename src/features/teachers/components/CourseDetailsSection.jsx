import StudentListTable from "./StudentListTable"
import { mockStudentsByCourse } from "@/lib/mockData"

export default function CourseDetailsSection({ course, onMarkAttendance }) {
    if (!course) return null

    return (
        <section className="teacher-dashboard__section">
            <div key={course.id}>
                <div className="teacher-dashboard__details-header">
                    <h3 className="teacher-dashboard__details-title">{course.title}</h3>
                    <button className="btn btn--gradient" onClick={() => onMarkAttendance(course)}>
                        Mark Attendance
                    </button>
                </div>
                <StudentListTable
                    students={mockStudentsByCourse[course.id] || []}
                    courseTitle={`${course.title} (${course.code})`}
                />
            </div>
        </section>
    )
}
