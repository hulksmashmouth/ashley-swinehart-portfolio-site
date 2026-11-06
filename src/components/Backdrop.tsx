import Monstera from './Monstera'
import NeonCat from './NeonCat'
import styles from './Backdrop.module.css'

// fixed, decorative backdrop on wide screens: the den's sleeping-cat neon hung at the
// upper right, washing pink onto the paneling (which lives on <body>), and the monstera
// standing in the lower-left corner
function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.neonSpot}>
        <span className={styles.neonPool} />
        <NeonCat className={styles.neon} />
      </div>

      <Monstera className={styles.monstera} />
    </div>
  )
}

export default Backdrop
