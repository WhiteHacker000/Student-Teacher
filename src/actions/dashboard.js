"use server"

import db from "@/lib/db"

export async function getAdminStats() {
    try {
        const [
            usersCount,
            studentsCount,
            teachersCount,
            coursesCount
        ] = await Promise.all([
            db.user.count(),
            db.student.count(),
            db.teacher.count(),
            db.course.count()
        ])

        return {
            usersCount,
            studentsCount,
            teachersCount,
            coursesCount
        }
    } catch (error) {
        console.error("Failed to fetch admin stats:", error)
        return {
            usersCount: 0,
            studentsCount: 0,
            teachersCount: 0,
            coursesCount: 0
        }
    }
}

export async function getStudents() {
    try {
        const students = await db.student.findMany({
            include: {
                user: {
                    select: { name: true, email: true, id: true }
                }
            }
        })
        return students
    } catch (error) {
        console.error("Failed to fetch students:", error)
        return []
    }
}

export async function getTeachers() {
    try {
        const teachers = await db.teacher.findMany({
            include: {
                user: {
                    select: { name: true, email: true, id: true }
                },
                _count: {
                    select: { courses: true }
                }
            }
        })
        return teachers
    } catch (error) {
        console.error("Failed to fetch teachers:", error)
        return []
    }
}

export async function getCourses() {
    try {
        const courses = await db.course.findMany({
            include: {
                teacher: {
                    include: {
                        user: { select: { name: true } }
                    }
                },
                _count: {
                    select: { enrollments: true }
                }
            }
        })
        return courses
    } catch (error) {
        console.error("Failed to fetch courses:", error)
        return []
    }
}

export async function getAttendance() {
    try {
        const attendance = await db.attendanceRecord.findMany({
            take: 20, // Limit to recent 20
            orderBy: { session: { date: 'desc' } },
            include: {
                session: {
                    select: { date: true }
                },
                student: {
                    include: {
                        user: { select: { name: true } }
                    }
                }
            }
        })
        return attendance
    } catch (error) {
        // Attendance table might not exist or be empty
        console.error("Failed to fetch attendance:", error)
        return []
    }
}


export async function getAssignments() {
    try {
        const assignments = await db.assignment.findMany({
            include: {
                course: { select: { name: true } }
            },
            take: 20,
            orderBy: { dueDate: 'asc' }
        })
        // Note: 'submissions' count would hypothetically be another relation, 
        // but let's stick to basic fields first or mock the count if relation doesn't exist
        return assignments
    } catch (error) {
        console.error("Failed to fetch assignments:", error)
        return []
    }
}
