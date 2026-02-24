import { Button } from '../components/Button.jsx'
import { LINKS, SITE } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function BookNow() {
  useSeo({
    title: 'Book Now',
    description:
      'Dubai Fieldz bookings are handled externally. Book Football (6v6), Box Cricket, or Pickleball via Playo or District.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Book now</div>
        <h1>We do not take bookings on this website.</h1>
        <p className="page-lead">
          All slots, pricing and payments are handled by Playo & District. Choose a platform below to
          view live availability and confirm your booking.
        </p>

        <div className="cards-3" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-top">
              <h2 className="h2">Book on Playo</h2>
              <span className="pill">External</span>
            </div>
            <p style={{ marginTop: 12 }}>
              Recommended for quick slot browsing and instant booking confirmation.
            </p>
            <div style={{ marginTop: 14 }}>
              <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary">
                Open Playo
              </Button>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <h2 className="h2">Book on District</h2>
              <span className="pill">External</span>
            </div>
            <p style={{ marginTop: 12 }}>
              Check availability and pricing directly on District.
            </p>
            <div style={{ marginTop: 14 }}>
              <Button as="a" href={LINKS.district} target="_blank" rel="noreferrer">
                Open District
              </Button>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <h2 className="h2">Need help?</h2>
              <span className="pill">Support</span>
            </div>
            <p style={{ marginTop: 12 }}>
              If you’re coordinating a corporate game or a large group, reach out for guidance.
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button as="link" to="/location" variant="ghost">
                Location & contact
              </Button>
              <Button as="a" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="callout" style={{ marginTop: 16 }}>
          <div className="kicker">{SITE.name}</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            Premium black-and-white sports brand vibe, clean operations, and 24/7 access—built to
            earn trust and make booking simple.
          </p>
        </div>
      </div>
    </section >
  )
}

