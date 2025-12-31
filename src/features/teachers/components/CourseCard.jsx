"use client"
import "./CourseCard.css"

export default function CourseCard({ id, title, code, students, time, room, color, onClick }) {
  return (
    <div className="course-card" style={{ "--accent-color": color }} onClick={onClick}>
      <div className="course-card__header">
        <h3 className="course-card__title">{title}</h3>
        <span className="course-card__code">{code}</span>
      </div>
      <div className="course-card__body">
        <div className="course-card__info">
          <span className="course-card__icon">👥</span>
          <span className="course-card__text">{students} Students</span>
        </div>
        <div className="course-card__info">
          <span className="course-card__icon">🕒</span>
          <span className="course-card__text">{time}</span>
        </div>
        <div className="course-card__info">
          <span className="course-card__icon">📍</span>
          <span className="course-card__text">{room}</span>
        </div>
      </div>
    </div>
  )
}
