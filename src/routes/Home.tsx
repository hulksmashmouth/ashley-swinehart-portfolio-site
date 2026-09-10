import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Hi, I&rsquo;m Ash.</p>
      <h1 className={styles.title}>I make complicated things make sense.</h1>

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
    </section>
  )
}

export default Home
