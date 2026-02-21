import { Button } from '../components/Button.jsx'
import { LINKS, SITE } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function LocationContact() {
  useSeo({
    title: 'Location & Contact',
    description:
      'Dubai Fieldz location and contact details. Sector 74, Gurugram (Open 24/7). Booking is available via Playo and Huddle.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Location & contact</div>
        <h1>Find us. Reach us. Play anytime.</h1>
        <p className="page-lead">
          Address: {SITE.addressLine}. Business hours: {SITE.hours}. For bookings, use Playo or
          Huddle.
        </p>

        <div className="split" style={{ marginTop: 18 }}>
          <div className="card">
            <h2 className="h2">Address</h2>
            <p style={{ marginTop: 12 }}>
              <strong>{SITE.name}</strong>
              <br />
              {SITE.addressLine}
              <br />
              <span className="muted">{SITE.hours}</span>
            </p>

            <div className="grid" style={{ marginTop: 14 }}>
              <div className="callout">
                <div className="kicker">Phone</div>
                <p className="muted" style={{ margin: '10px 0 0' }}>
                  +91 XXXXX-XXXXX (placeholder)
                </p>
              </div>
              <div className="callout">
                <div className="kicker">Instagram</div>
                <p className="muted" style={{ margin: '10px 0 0' }}>
                  @dubai.fieldz (placeholder)
                </p>
              </div>
            </div>

            <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button as="a" href={LINKS.whatsapp} target="_blank" rel="noreferrer" variant="primary">
                WhatsApp (placeholder)
              </Button>
              <Button as="a" href={LINKS.instagram} target="_blank" rel="noreferrer">
                Instagram (placeholder)
              </Button>
              <Button as="a" href={LINKS.phone}>
                Call (placeholder)
              </Button>
            </div>
          </div>

          <div className="map-placeholder" aria-label="Embedded Google Map placeholder">
            <div>
              <div className="kicker">Google Map</div>
              <div style={{ marginTop: 10, fontWeight: 850, letterSpacing: '-0.01em' }}>
                Embed placeholder
              </div>
              <div style={{ marginTop: 8 }} className="muted">
                Replace this with an embedded Google Map iframe.
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button as="link" to="/book" variant="primary" size="sm">
                  Book now
                </Button>
                <Button as="link" to="/sports" variant="ghost" size="sm">
                  View sports
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="callout" style={{ marginTop: 16 }}>
          <div className="kicker">Booking</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            This website is informational only. All live slots, final pricing and payments are
            handled by Playo & Huddle.
          </p>
          <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary">
              Book on Playo
            </Button>
            <Button as="a" href={LINKS.huddle} target="_blank" rel="noreferrer">
              Book on Huddle
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

