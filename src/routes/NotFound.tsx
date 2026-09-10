import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>
        That page doesn't exist. <Link to="/">Go home</Link>.
      </p>
    </section>
  )
}

export default NotFound
