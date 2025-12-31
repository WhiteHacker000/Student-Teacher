
import "./SummaryCard.css"

export default function SummaryCard({ icon: Icon, label, value, subtext, color, trend }) {
  return (
    <div className="card summary-card" style={{ "--accent-color": color }}>
      <div className="card__header">
        <div className="card__icon-wrapper" style={{ backgroundColor: `${color}15`, color: color }}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        {trend && <span className="card__trend">{trend}</span>}
      </div>
      <div className="card__content">
        <p className="card__label">{label}</p>
        <h3 className="card__value">{value}</h3>
        <p className="card__subtext">{subtext}</p>
      </div>
    </div>
  )
}
