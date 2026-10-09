
import { useState } from 'react'
import ImpactDashboard from './ImpactDashboard'
import './App.css'
import SafetyChecklist from './SafetyChecklist'


const items = [
  'Mobile phone',
  'Laptop',
  'Charger or cable',
  'Battery',
  'Television',
  'Other electronic item',
]

const benefits = [
  { icon: '🍃', title: 'Save resources', text: 'Keep valuable materials in use for longer.', color: 'mint' },
  { icon: '♻️', title: 'Reduce e-waste', text: 'Help prevent electronics from reaching landfills.', color: 'blue' },
  { icon: '🌱', title: 'Protect nature', text: 'Make more responsible choices for our planet.', color: 'yellow' },
  { icon: '💚', title: 'Make a difference', text: 'Small actions can create a big impact.', color: 'purple' },
]

function App() {
  const [item, setItem] = useState('')
  const [result, setResult] = useState(null)
  const [condition, setCondition] = useState('working')

  function getRecommendation() {
    if (!item) {
      setResult({ title: 'Choose an item first', text: 'Select an electronic item above so we can recommend a responsible next step.', action: 'Select an item to continue' })
      return
    }

    const recommendations = {
      'Mobile phone': {
        title: 'Give your phone a second life',
        text: 'If it works, consider reusing or donating it. If it is damaged, check repair options before recycling.',
        action: 'Repair or reuse; otherwise use an authorised e-waste collection point.',
      },
      Laptop: {
        title: 'Keep useful tech in use',
        text: 'A slow laptop may benefit from repair or an upgrade. Wipe your personal data before donating or recycling it.',
        action: 'Repair, donate, or recycle through an authorised e-waste facility.',
      },
      'Charger or cable': {
        title: 'Choose responsible recycling',
        text: 'Keep usable chargers as spares or pass them on. Damaged cables should not go into regular household waste.',
        action: 'Reuse if safe; otherwise take them to an authorised e-waste collector.',
      },
      Battery: {
        title: 'Handle batteries with care',
        text: 'Do not put batteries in household bins. Keep damaged, swollen, or leaking batteries away from heat and avoid handling them unnecessarily.',
        action: 'Use a suitable battery collection point and follow its safety instructions.',
      },
      Television: {
        title: 'Consider repair first',
        text: 'A repair may extend your TV’s life. Old televisions contain materials that need proper handling.',
        action: 'Repair if practical, or arrange collection by an authorised e-waste recycler.',
      },
      'Other electronic item': {
        title: 'Find the right next step',
        text: 'Check whether the item still works and whether a repair or reuse option is available.',
        action: 'If it is no longer usable, contact an authorised e-waste collection service.',
      },
    }

const recommendation = recommendations[item]

if (condition === 'damaged') {
  setResult({
    title: 'Handle this item with care',
    text: `${recommendation.text} Since the item is damaged, avoid using it if it may be unsafe.`,
    action: recommendation.action,
  })
} else if (condition === 'not-working') {
  setResult({
    title: 'Explore repair or responsible recycling',
    text: `${recommendation.text} Since it is not working, check whether repair is practical before choosing reuse or recycling.`,
    action: recommendation.action,
  })
} else {
  setResult(recommendation)
}


 
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">♻</span>
          <span>
            <strong>Waste<span>Wise</span></strong>
            <small>Smart E-Waste Action Assistant</small>
          </span>
        </a>
        <nav>
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how-it-works">How it works</a>
          <a href="#impact">Impact</a>
        </nav>
        <div className="nav-pill"><span>✦</span> Small actions. Big impact.</div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> A SMARTER WAY TO DISPOSE</div>
            <h1>Give your old electronics <span>a better next life.</span></h1>
            <p className="hero-description">
              Not sure what to do with your old tech? Discover whether to repair,
              reuse, donate, or recycle it responsibly.
            </p>

            <div className="waste-card" id="how-it-works">
              <div className="card-heading">
                <span className="device-icon">▣</span>
                <div>
                  <h2>What electronic item do you have?</h2>
                  <p>Choose an item to get your next-step guide.</p>
                </div>
              </div>
              <label htmlFor="item-select">YOUR ELECTRONIC ITEM</label>
              <select
                id="item-select"
                value={item}
                onChange={(event) => {
                  setItem(event.target.value)
                  setResult(null)
                }}
              >
                <option value="">Select an electronic item</option>
                {items.map((name) => <option key={name} value={name}>{name}</option>)}
              </select>


<label htmlFor="condition">What condition is it in?</label>
<select
  id="condition"
  value={condition}
  onChange={(e) => setCondition(e.target.value)}
>
  <option value="working">Working</option>
  <option value="damaged">Damaged</option>
  <option value="not-working">Not working</option>
</select>


              <button className="primary-button" onClick={getRecommendation}>
                Get my recommendation <span>→</span>
              </button>
              {result && (
                <div className="result-panel" aria-live="polite">
                  <span className="result-label">YOUR WASTEWISE GUIDE</span>
                  <h3>{result.title}</h3>
                  <p>{result.text}</p>
                  <strong>{result.action}</strong>
                </div>
              )}
              <div className="privacy-note"><span>✓</span> Simple guidance for a more responsible choice</div>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of electronics being recycled">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="sun-glow"></div>
            <span className="floating-leaf leaf-one">✦</span>
            <span className="floating-leaf leaf-two">✿</span>
            <div className="planet"><span>🌎</span></div>
            <div className="device laptop-device"><div className="laptop-screen">✳</div><div className="laptop-base"></div></div>
            <div className="device phone-device"><span></span></div>
            <div className="device tablet-device"><span>◉</span></div>
            <div className="recycle-bin">
              <div className="bin-rim"></div>
              <div className="bin-symbol">♻</div>
              <div className="bin-base"></div>
            </div>
            <div className="art-caption"><span>✳</span><div><strong>Better choices,</strong><br />brighter future.</div></div>
            <div className="floating-tag">Reduce · Reuse · Recycle</div>
          </div>
        </section>

        <section className="benefits" id="about">
          {benefits.map((benefit) => (
            <article className="benefit" key={benefit.title}>
              <div className={`benefit-icon ${benefit.color}`}>{benefit.icon}</div>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </article>
          ))}
        </section>

        <section className="bottom-cta" id="impact">
          <div><span className="cta-kicker">THE FUTURE IS IN OUR HANDS</span><h2>One small choice can make a world of difference.</h2></div>
          <a href="#home">Make a better choice <span>↑</span></a>
        </section>
      </main>

<ImpactDashboard />
<SafetyChecklist />

      <footer className="footer">
        <a className="footer-brand" href="#home">♻ WasteWise</a>
        <span>Small actions. Less e-waste. A better planet. 🌱</span>
        <span>Built for a greener tomorrow.</span>
      </footer>
    </div>
  )
}

export default App