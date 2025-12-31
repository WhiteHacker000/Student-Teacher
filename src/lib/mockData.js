
// Admin Dashboard Data
export const mockUsers = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.johnson@school.edu",
        role: "Student",
        status: "Active",
        joinDate: "2024-01-15",
    },
    {
        id: 2,
        name: "Michael Chen",
        email: "m.chen@school.edu",
        role: "Teacher",
        status: "Active",
        joinDate: "2023-08-22",
    },
    {
        id: 3,
        name: "Emma Davis",
        email: "emma.davis@school.edu",
        role: "Student",
        status: "Active",
        joinDate: "2024-02-10",
    },
    {
        id: 4,
        name: "James Wilson",
        email: "j.wilson@school.edu",
        role: "Teacher",
        status: "Inactive",
        joinDate: "2023-05-18",
    },
    {
        id: 5,
        name: "Lisa Anderson",
        email: "l.anderson@school.edu",
        role: "Student",
        status: "Active",
        joinDate: "2024-03-05",
    },
    {
        id: 6,
        name: "Robert Martinez",
        email: "r.martinez@school.edu",
        role: "Teacher",
        status: "Active",
        joinDate: "2023-09-11",
    },
    {
        id: 7,
        name: "Jennifer Taylor",
        email: "j.taylor@school.edu",
        role: "Student",
        status: "Active",
        joinDate: "2024-01-28",
    },
    {
        id: 8,
        name: "David Lee",
        email: "d.lee@school.edu",
        role: "Admin",
        status: "Active",
        joinDate: "2023-04-01",
    },
];

// Student Dashboard Data
export const studentMockCourses = [
    {
        id: "1",
        title: "Mathematics - Calculus",
        code: "MATH101",
        instructor: "Dr. Rajesh Kumar",
        attendancePercentage: 92,
        color: "#667eea",
    },
    {
        id: "2",
        title: "Physics - Mechanics",
        code: "PHY101",
        instructor: "Prof. Sneha Patel",
        attendancePercentage: 85,
        color: "#764ba2",
    },
    {
        id: "3",
        title: "Chemistry - Organic",
        code: "CHE101",
        instructor: "Dr. Vikram Singh",
        attendancePercentage: 88,
        color: "#f59e0b",
    },
    {
        id: "4",
        title: "English - Literature",
        code: "ENG101",
        instructor: "Ms. Priya Sharma",
        attendancePercentage: 95,
        color: "#10b981",
    },
];

export const studentMockAssignments = [
    {
        id: "a1",
        title: "Calculus Problem Set 5",
        course: "MATH101",
        description: "Solve differential equations and integration problems from chapters 5-7.",
        dueDate: "Dec 28, 2025",
        status: "pending",
    },
    {
        id: "a2",
        title: "Physics Lab Report",
        course: "PHY101",
        description: "Write a comprehensive lab report on projectile motion experiment.",
        dueDate: "Dec 25, 2025",
        status: "pending",
    },
    {
        id: "a3",
        title: "Organic Synthesis Essay",
        course: "CHE101",
        description: "Essay on reaction mechanisms and synthetic pathways of alkenes.",
        dueDate: "Dec 20, 2025",
        status: "overdue",
    },
    {
        id: "a4",
        title: "Shakespeare Analysis",
        course: "ENG101",
        description: "Literary analysis of Hamlet - character study and themes.",
        dueDate: "Dec 30, 2025",
        status: "submitted",
    },
    {
        id: "a5",
        title: "Vector Calculus Assignment",
        course: "MATH101",
        description: "Problems on gradient, divergence, and curl operations.",
        dueDate: "Jan 5, 2026",
        status: "pending",
    },
];

// Teacher Dashboard Data
export const teacherMockCourses = [
    {
        id: "1",
        title: "Mathematics - Algebra",
        code: "MATH101",
        students: 32,
        time: "9:00 AM",
        room: "A-101",
        color: "#667eea",
    },
    {
        id: "2",
        title: "Physics - Mechanics",
        code: "PHY201",
        students: 28,
        time: "11:00 AM",
        room: "B-202",
        color: "#764ba2",
    },
    {
        id: "3",
        title: "Chemistry - Organic",
        code: "CHEM301",
        students: 25,
        time: "2:00 PM",
        room: "C-303",
        color: "#f093fb",
    },
    {
        id: "4",
        title: "English - Literature",
        code: "ENG401",
        students: 35,
        time: "3:30 PM",
        room: "A-205",
        color: "#4facfe",
    },
];

export const teacherMockAssignments = [
    {
        id: "1",
        title: "Linear Equations Problem Set",
        course: "MATH101",
        dueDate: "2025-01-10",
        description: "Solve 20 problems from Chapter 5",
        createdDate: "2025-01-02",
    },
    {
        id: "2",
        title: "Newton's Laws Analysis",
        course: "PHY201",
        dueDate: "2025-01-12",
        description: "Analyze real-world applications of Newton's laws",
        createdDate: "2025-01-03",
    },
];

export const mockStudentsByCourse = {
    "1": [
        { id: "s1", name: "Aarav Singh", rollNumber: "M001", email: "aarav@school.edu", attendance: 92 },
        { id: "s2", name: "Divya Sharma", rollNumber: "M002", email: "divya@school.edu", attendance: 88 },
        { id: "s3", name: "Rohan Verma", rollNumber: "M003", email: "rohan@school.edu", attendance: 95 },
        { id: "s4", name: "Priya Patel", rollNumber: "M004", email: "priya@school.edu", attendance: 85 },
    ],
    "2": [
        { id: "s5", name: "Arjun Nair", rollNumber: "P001", email: "arjun@school.edu", attendance: 90 },
        { id: "s6", name: "Meera Das", rollNumber: "P002", email: "meera@school.edu", attendance: 87 },
        { id: "s7", name: "Vikram Reddy", rollNumber: "P003", email: "vikram@school.edu", attendance: 93 },
    ],
};

// Student Management Data
export const mockStudents = [
    { id: 1, name: "Aarav Singh", email: "aarav.singh@school.edu", class: "9A", rollNumber: "001" },
    { id: 2, name: "Divya Sharma", email: "divya.sharma@school.edu", class: "9B", rollNumber: "002" },
    { id: 3, name: "Rohan Verma", email: "rohan.verma@school.edu", class: "10A", rollNumber: "003" },
    { id: 4, name: "Priya Patel", email: "priya.patel@school.edu", class: "10B", rollNumber: "004" },
    { id: 5, name: "Arjun Nair", email: "arjun.nair@school.edu", class: "11A", rollNumber: "005" },
    { id: 6, name: "Meera Das", email: "meera.das@school.edu", class: "11B", rollNumber: "006" },
    { id: 7, name: "Vikram Reddy", email: "vikram.reddy@school.edu", class: "12A", rollNumber: "007" },
    { id: 8, name: "Anjali Gupta", email: "anjali.gupta@school.edu", class: "12B", rollNumber: "008" },
    { id: 9, name: "Rahul Kumar", email: "rahul.kumar@school.edu", class: "9A", rollNumber: "009" },
    { id: 10, name: "Neha Singh", email: "neha.singh@school.edu", class: "10A", rollNumber: "10" },
    { id: 11, name: "Amit Patel", email: "amit.patel@school.edu", class: "11A", rollNumber: "011" },
    { id: 12, name: "Shreya Verma", email: "shreya.verma@school.edu", class: "12B", rollNumber: "012" },
];
