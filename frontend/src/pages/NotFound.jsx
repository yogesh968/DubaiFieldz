import { Button } from '../components/Button.jsx'
import { useSeo } from '../lib/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page Not Found' })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">404</div>
        <h1>Page not found.</h1>
        <p className="page-lead">
          The page you’re looking for doesn’t exist. Head back home, or go straight to booking
          options.
        </p>
        <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button as="link" to="/" variant="primary">
            Go to Home
          </Button>
          <Button as="link" to="/book" variant="ghost">
            Book now
          </Button>
        </div>
      </div>
    </section>
  )
}

