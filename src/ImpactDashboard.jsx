
const stats = [
  { icon: '♻️', value: '12', label: 'Items diverted', note: 'From general waste', color: 'green' },
  { icon: '🌱', value: '8.4 kg', label: 'E-waste tracked', note: 'Illustrative demo total', color: 'mint' },
  { icon: '🔋', value: '6', label: 'Safe choices', note: 'Actions recorded in demo', color: 'yellow' },
]

export default function ImpactDashboard() {
  return (
    <section className="impact-dashboard" aria-labelledby="impact-title">
      <div className="dashboard-heading">
        <div>
          <span className="dashboard-kicker">YOUR PLANET-POSITIVE JOURNEY</span>
          <h2 id="impact-title">Small steps. <span>Real change.</span></h2>
          <p>A snapshot of the difference responsible e-waste choices can make.</p>
        </div>
        <span className="demo-badge">DEMO PREVIEW</span>
      </div>

      <div className="impact-stats">
        {stats.map((stat) => (
          <article className="impact-stat" key={stat.label}>
            <div className={`impact-stat-icon ${stat.color}`}>{stat.icon}</div>
            <div className="impact-stat-value">{stat.value}</div>
            <h3>{stat.label}</h3>
            <p>{stat.note}</p>
          </article>
        ))}
      </div>

      <div className="dashboard-message">
        <div className="message-icon">🌍</div>
        <div>
          <h3>Every device has another possibility.</h3>
          <p>Repair what you can, pass on what still works, and recycle the rest responsibly.</p>
        </div>
      </div>
    </section>
  )
}