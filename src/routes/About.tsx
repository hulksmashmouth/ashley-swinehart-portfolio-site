import styles from './About.module.css'

function About() {
  return (
    <article className={styles.page}>
      <h1 className={styles.lead}>
        I&rsquo;ve always been interested in how things work. And how they could
        work better.
      </h1>

      <div className={styles.body}>
        <p>
          I&rsquo;m Ashley, a UX strategist, designer, and front-end engineer
          based in Northeast Ohio.
        </p>
        <p>
          My path into UX wasn&rsquo;t exactly linear. I started in art, earning
          a BFA in Studio Art before eventually finding my way into technology. I
          spent more than a decade as a front-end developer, building the things
          other people designed and discovering that I had a lot of opinions
          about <em>why</em> we were building them that way in the first place.
        </p>
        <p>That curiosity pulled me deeper into UX.</p>
        <p>
          I earned my master&rsquo;s in UX Design and gradually moved from
          implementing experiences to shaping them: working across UX
          engineering, design systems, product strategy, and engineering
          leadership. Along the way, I&rsquo;ve led teams, modernized front-end
          platforms, built component systems, worked through deeply complicated
          enterprise workflows, and helped turn vague ideas into products people
          can actually understand and use.
        </p>
        <p>
          Having lived on both sides of the design-development divide changed the
          way I approach UX. I don&rsquo;t think design ends when the mockup is
          finished, and I don&rsquo;t think technical constraints should only
          enter the conversation after someone hits &ldquo;handoff.&rdquo;
        </p>
        <p>
          I want to know what we&rsquo;re solving, who we&rsquo;re solving it for,
          why it matters, how it behaves, and whether we can actually build the
          damn thing.
        </p>
      </div>

      <div className={styles.snapshots}>
        <figure className={`${styles.snapshot} ${styles.snapshotWide}`}>
          <img
            src="/about/home-office.webp"
            alt="Ash at her home office desk, in front of a dual-monitor coding setup"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
          />
          <figcaption className={styles.snapshotCaption}>Office</figcaption>
        </figure>
        <div className={styles.snapshotRow}>
          <figure className={styles.snapshot}>
            <img
              src="/about/kitchen.webp"
              alt="Ash in her kitchen, with a wall of hanging copper pots behind her"
              width={1050}
              height={1400}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.snapshotCaption}>Kitchen</figcaption>
          </figure>
          <figure className={styles.snapshot}>
            <img
              src="/about/on-the-road.webp"
              alt="Ash sitting on a bench along a tree-lined street while traveling"
              width={1050}
              height={1400}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.snapshotCaption}>Travel</figcaption>
          </figure>
        </div>
      </div>

      <h2 className={styles.subhead}>
        I&rsquo;m also a person who likes making things.
      </h2>

      <div className={styles.body}>
        <p>That part has never really changed.</p>
        <p>
          I&rsquo;m the kind of person who will renovate a kitchen, obsess over a
          piece of vintage furniture, build an open-source AI chatbot, and then
          decide the obvious next step is putting a tiny computer inside a Polly
          Pocket.
        </p>
        <p>
          I love art, old technology, weird technology, mid-century and
          &rsquo;70s design, vintage shopping, live music, and projects that give
          me an excuse to learn something I didn&rsquo;t know yesterday. My house
          has a dedicated &rsquo;70s den with a VHS setup, because apparently
          having access to every movie ever made wasn&rsquo;t inconvenient
          enough.
        </p>

        <figure className={styles.den}>
          <img
            src="/about/seventies-den.webp"
            alt="A wood-paneled 70s den with a VHS setup, a shag rug, vintage armchairs, and a black cat perched on the TV"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
          />
          <figcaption className={styles.denCaption}>
            The den in question — VHS setup, shag rug, resident cat included.
          </figcaption>
        </figure>

        <p>
          That mix of art, technology, curiosity, and mild refusal to leave well
          enough alone is probably the throughline of my career.
        </p>
        <p>I don&rsquo;t just want to make software prettier.</p>
        <p className={styles.closer}>
          <strong>
            I want to understand it, question it, take it apart, and put it back
            together better.
          </strong>
        </p>
      </div>
    </article>
  )
}

export default About
