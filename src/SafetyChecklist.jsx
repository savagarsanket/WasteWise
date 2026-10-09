
import { useState } from 'react'

const safetySteps = [
  {
    title: 'Protect your personal data',
    text: 'Back up important files and erase personal data before donating or recycling phones and computers.',
  },
  {
    title: 'Check the item for damage',
    text: 'Do not use damaged electronics if they may be unsafe. Avoid handling swollen, leaking, or damaged batteries unnecessarily.',
  },
  {
    title: 'Keep e-waste out of household bins',
    text: 'Use an appropriate authorised e-waste or battery collection service.',
  },
  {
    title: 'Prepare it for handover',
    text: 'Follow the collection service instructions for packing, transport, and accepted items.',
  },
]

export default function SafetyChecklist() {
  const [checkedSteps, setCheckedSteps] = useState([])

  function toggleStep(index) {
    setCheckedSteps((previous) =>
      previous.includes(index)
        ? previous.filter((step) => step !== index)
        : [...previous, index]
    )
  }

  return (
    <section className="safety-checklist" id="safety-checklist">
      <p className="section-eyebrow">BEFORE YOU DISPOSE</p>
      <h2>Your safe e-waste checklist</h2>
      <p className="safety-intro">
        Complete these practical checks before handing over an electronic item.
      </p>

      <div className="safety-steps">
        {safetySteps.map((step, index) => (
          <label className="safety-step" key={step.title}>
            <input
              type="checkbox"
              checked={checkedSteps.includes(index)}
              onChange={() => toggleStep(index)}
            />
            <span className="safety-step-content">
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </span>
          </label>
        ))}
      </div>

   
<p className="safety-progress">
  {checkedSteps.length} of {safetySteps.length} checks completed
</p>

{checkedSteps.length === safetySteps.length && (
  <div className="safety-complete" role="status">
    <strong>✓ Safety check completed!</strong>
    <p>
      You've reviewed all four steps. Follow the collection provider's
      instructions before handing over your electronic item.
    </p>
  </div>
)}

<button
  type="button"
  className="safety-reset"
  onClick={() => setCheckedSteps([])}
>
  Reset checklist
</button>


    </section>
  )
}
