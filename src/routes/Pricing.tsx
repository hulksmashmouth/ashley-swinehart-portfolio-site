import { Link } from 'react-router-dom'
import { pricing, type Plan } from '../data/pricing'
import styles from './Pricing.module.css'

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <li className={plan.featured ? `${styles.plan} ${styles.featured}` : styles.plan}>
      {plan.kicker && <p className={styles.kicker}>{plan.kicker}</p>}
      <h3 className={styles.planName}>{plan.name}</h3>
      <p className={styles.price}>
        {plan.price}
        {plan.per && <span className={styles.per}> {plan.per}</span>}
      </p>
      {plan.meta && <p className={styles.meta}>{plan.meta}</p>}
      {plan.bestFor && <p className={styles.bestFor}>{plan.bestFor}</p>}
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </li>
  )
}

function Pricing() {
  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>For small businesses</p>
        <h1 className={styles.title}>
          Small business <em className={styles.neonWord}>website</em> pricing
        </h1>
        <p className={styles.intro}>{pricing.intro}</p>
        <div className={styles.ctas}>
          <Link
            to="/questionnaire"
            className={styles.ctaPrimary}
            data-track="cta_click"
            data-track-label="pricing_book_call_top"
          >
            Book a free call
          </Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Included with every website</h2>
        <ul className={styles.included}>
          {pricing.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Website packages</h2>
        <p className={styles.note}>{pricing.packagesNote}</p>
        <ul className={styles.packages}>
          {pricing.packages.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </ul>
        <div className={styles.fine}>
          {pricing.discounts.map((d) => (
            <p key={d.label}>
              <strong>{d.label}</strong> {d.text}
            </p>
          ))}
        </div>
      </section>

      <div className={styles.split}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Add-ons</h2>
          <p className={styles.note}>Add any of these to a package.</p>
          <dl className={styles.addOns}>
            {pricing.addOns.map((a) => (
              <div key={a.name} className={styles.addOn}>
                <dt>{a.name}</dt>
                <dd>{a.price}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.hourly}>
            <div>
              <p className={styles.hourlyName}>{pricing.hourly.name}</p>
              <p className={styles.hourlyDesc}>{pricing.hourly.description}</p>
            </div>
            <p className={styles.hourlyPrice}>
              {pricing.hourly.price}
              <span className={styles.per}>{pricing.hourly.per}</span>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.note}>{pricing.stepsNote}</p>
          <ol className={styles.steps}>
            {pricing.steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong> {s.description}
              </li>
            ))}
          </ol>
          <p className={styles.provide}>
            <strong>What you provide:</strong> {pricing.provide}
          </p>
        </section>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Monthly care plans</h2>
        <p className={styles.note}>{pricing.carePlansNote}</p>
        <ul className={`${styles.packages} ${styles.carePlans}`}>
          {pricing.carePlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </ul>
        <div className={styles.fine}>
          {pricing.carePlanTerms.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </section>

      <section className={styles.corporate}>
        <h2 className={styles.sectionTitle}>{pricing.corporate.title}</h2>
        <p>{pricing.corporate.text}</p>
        <p>
          <Link
            to="/consulting"
            data-track="cta_click"
            data-track-label="pricing_corporate_consulting"
          >
            See consulting services
          </Link>
        </p>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Let&rsquo;s build <em className={styles.neonWord}>yours.</em>
        </h2>
        <p>Fill out a short questionnaire, then pick a time for a free 30-minute call and a fixed-price quote.</p>
        <div className={styles.ctas}>
          <Link
            to="/questionnaire"
            className={styles.ctaPrimary}
            data-track="cta_click"
            data-track-label="pricing_book_call_bottom"
          >
            Book a free call
          </Link>
          <a
            className={styles.ctaSecondary}
            href={`mailto:${pricing.email}`}
            data-track="contact_click"
            data-track-label="pricing_email"
          >
            {pricing.email}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Pricing
