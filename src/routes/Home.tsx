import { Link } from 'react-router-dom'
import { SparkleDivider } from '../components/Sparkle'
import { resume } from '../data/resume'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.photo}
        src="/headshot.webp"
        alt="Ash Swinehart"
        width={600}
        height={750}
      />

      <div className={styles.heading}>
        <p className={styles.greeting}>Hi, I&rsquo;m Ash.</p>
        <h1 className={styles.title}>I make complicated things make sense.</h1>
        <SparkleDivider className={styles.divider} />
        <ul className={styles.disciplines}>
          <li>UX Strategy</li>
          <li>Design Systems</li>
          <li>Product Strategy</li>
          <li>UX Engineering</li>
        </ul>

        <div className={styles.ctas}>
          <Link to="/projects" className={styles.ctaPrimary}>
            View my work
          </Link>
          <Link to="/consulting" className={styles.ctaSecondary}>
            Get in touch
          </Link>
          <a className={styles.ctaSecondary} href={`/${resume.pdf}`} download>
            Download résumé
          </a>
        </div>
      </div>

      <div className={styles.body}>
        <p>
          I&rsquo;m a UX strategist, product thinker, designer, and front-end
          engineer who has spent 13+ years figuring out how humans and software
          can get along better.
        </p>
        <p>
          I&rsquo;ve built interfaces, led engineering teams, shaped design
          systems, untangled gnarly product problems, and occasionally looked at
          something everyone agreed was &ldquo;working&rdquo; and asked,{' '}
          <strong>&ldquo;Okay, but should it work like this?&rdquo;</strong>
        </p>
        <p>
          I&rsquo;m at my best in the weird middle ground between design and
          engineering, where ideas have to survive contact with actual users,
          actual code, and actual business constraints.
        </p>
        <p>
          I like ambitious products, emerging technology, strong opinions backed
          by evidence, and making things people genuinely enjoy using.
        </p>
        <p>
          And when I&rsquo;m not doing that, there&rsquo;s a decent chance
          I&rsquo;m building an AI chatbot, putting a computer inside something
          that absolutely was not designed to contain a computer, or finding some
          other unnecessarily interesting problem to solve.
        </p>
      </div>

      <aside className={styles.smallBiz} aria-labelledby="small-biz-title">
        <p className={styles.smallBizKicker}>For small businesses</p>
        <h2 id="small-biz-title" className={styles.smallBizTitle}>
          A website that looks like you, built by one person start to finish.
        </h2>
        <ul className={styles.smallBizList}>
          <li>
            <strong>Websites</strong> &mdash; WordPress or fully custom, built
            so you can keep it up to date yourself.
          </li>
          <li>
            <strong>Online stores</strong> &mdash; a storefront set up and ready
            to take orders.
          </li>
          <li>
            <strong>Photography</strong> &mdash; your products, space, and people,
            shot for the site instead of pulled from stock.
          </li>
        </ul>
        <div className={styles.ctas}>
          <Link to="/consulting" className={styles.ctaPrimary}>
            Let&rsquo;s talk about your site
          </Link>
          <Link to="/photography" className={styles.ctaSecondary}>
            See my photography
          </Link>
        </div>
      </aside>
    </section>
  )
}

export default Home
