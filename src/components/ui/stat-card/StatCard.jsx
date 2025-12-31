import "./StatCard.css"

export default function StatCard({ label, value, color }) {
  return (
    <div
      className="stat-card"
      style={{ "--accent-color": color }}
    >
      <h3 className="stat-card__label">{label}</h3>
      <p className="stat-card__value">{value}</p>
    </div>
  )
}
