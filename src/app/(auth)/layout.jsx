

import "../auth.css"

export const metadata = {
  title: "Authentication - Student-Teacher Management System",
  description: "Login or sign up to manage students, teachers, and courses",
}

export default function AuthLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <main className="auth-container">{children}</main>
      </body>
    </html>
  )
}
