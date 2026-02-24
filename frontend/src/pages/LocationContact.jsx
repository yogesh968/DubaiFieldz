import { Button } from '../components/Button.jsx'
import { LINKS, SITE } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function LocationContact() {
  useSeo({
    title: 'Location & Contact',
    description:
      'Dubai Fieldz location and contact details. Sector 74, Gurugram (Open 24/7). Booking is available via Playo and District.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Location & contact</div>
        <h1>Find us. Reach us. Play anytime.</h1>
        <p className="page-lead">
          Address: {SITE.addressLine}. Business hours: {SITE.hours}. For bookings, use Playo or
          District.
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
                  +91 78383 83583
                </p>
              </div>
              <div className="callout">
                <div className="kicker">Instagram</div>
                <p className="muted" style={{ margin: '10px 0 0' }}>
                  @dubai.fieldz
                </p>
              </div>
            </div>

            <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button as="a" href={LINKS.whatsapp} target="_blank" rel="noreferrer" variant="primary">
                WhatsApp
              </Button>
              <Button as="a" href={LINKS.instagram} target="_blank" rel="noreferrer">
                Instagram
              </Button>
              <Button as="a" href={LINKS.phone}>
                Call
              </Button>
            </div>
          </div>

          <div className="map-view" style={{ flex: 1, minHeight: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.226286553529!2d77.00864017506319!3d28.41242809404266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23a3b9fab563%3A0xdb1e3bec4aae080e!2sDubai%20Fieldz!5e0!3m2!1sen!2sin!4v1771910677530!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', borderRadius: 'var(--radius-sm)', filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dubai Fieldz Map"
            ></iframe>
          </div>
        </div>

        <div className="callout" style={{ marginTop: 16 }}>
          <div className="kicker">Booking</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            This website is informational only. All live slots, final pricing and payments are
            handled by Playo & District.
          </p>
          <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary">
              Book on Playo
            </Button>
            <Button as="a" href={LINKS.district} target="_blank" rel="noreferrer">
              Book on District
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

