import { useCallback, useEffect, useState } from 'react'
import { photos } from '../data/photography'
import styles from './Photography.module.css'

function Photography() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [],
  )
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  )

  useEffect(() => {
    if (openIndex === null) return

    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [openIndex, close, showPrev, showNext])

  const open = openIndex !== null ? photos[openIndex] : null

  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>Photography</h1>
        <p className={styles.subhead}>
          Some of what I shoot when I&rsquo;m not staring at a screen — mostly
          phone photography, mostly at golden hour.
        </p>
      </header>

      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.item}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photograph ${i + 1} of ${photos.length}`}
          >
            <img
              src={`/${photo.src}`}
              alt={`Photograph by Ash Swinehart, ${i + 1} of ${photos.length}`}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          onClick={close}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous photograph"
          >
            ‹
          </button>

          <img
            key={open.src}
            className={styles.lightboxImg}
            src={`/${open.src}`}
            alt={`Photograph by Ash Swinehart, ${openIndex! + 1} of ${photos.length}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next photograph"
          >
            ›
          </button>

          <span className={styles.counter}>
            {openIndex! + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default Photography
