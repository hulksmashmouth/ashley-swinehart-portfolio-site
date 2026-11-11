import BookingEmbed from '../components/BookingEmbed'
import Recommendations from '../components/Recommendations'
import { consulting } from '../data/consulting'
import styles from './Consulting.module.css'

function Consulting() {
  return (
    <div className={styles.page}>
      <img
        className={styles.banner}
        src="/brand/banner.jpg"
        alt="Ashley Swinehart, LLC — UX, web, design systems, product."
        width={1640}
        height={624}
      />

      <header className={styles.head}>
        <h1 className={styles.title}>Consulting</h1>
        {consulting.available && (
          <span className={styles.badge}>Available for hire</span>
        )}
      </header>

      <p className={styles.intro}>{consulting.intro}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <ul className={styles.services}>
          {consulting.services.map((s) => (
            <li key={s.title} className={styles.service}>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How engagements work</h2>
        <ul className={styles.engagements}>
          {consulting.engagements.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <Recommendations />

      {consulting.booking.calLink && (
        <section id="book" className={`${styles.section} ${styles.bookSection}`}>
          <h2 className={styles.sectionTitle}>Book a call</h2>
          <p className={styles.bookingIntro}>
            Pick a time that works for you. You&rsquo;ll get a calendar invite
            as soon as it&rsquo;s booked.
          </p>
          <div className={styles.booking}>
            <BookingEmbed calLink={consulting.booking.calLink} />
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Work together</h2>
        <p>
          {consulting.entity} is taking on new clients.{' '}
          {consulting.booking.calLink
            ? 'Book a call above, or send a message on '
            : 'The fastest way to start a conversation is a message on '}
          <a
            href={consulting.contact.href}
            target="_blank"
            rel="noreferrer"
            data-track="contact_click"
            data-track-label="linkedin"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default Consulting
