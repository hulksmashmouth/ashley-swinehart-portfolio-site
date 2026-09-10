import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Ashley Swinehart</h1>
      <p className={styles.lede}>
        Software engineer. This is the start of my portfolio site — replace this
        copy with a real introduction.
      </p>
    </section>
  )
}

export default Home
