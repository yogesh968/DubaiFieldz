import { Button } from '../components/Button.jsx'
import { LINKS } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

function PriceCard({ title, price, note, points }) {
  return (
    <div className="card">
      <div className="card-top">
        <h3 className="h3">{title}</h3>
        <span className="pill">{price}</span>
      </div>
      <p style={{ marginTop: 10 }}>{note}</p>
      <ul className="list">
        {points.map((p) => (
          <li key={p}>
            <span className="check" aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary" size="sm">
          Check slots on Playo
        </Button>
        <Button as="a" href={LINKS.huddle} target="_blank" rel="noreferrer" size="sm">
          Check slots on Huddle
        </Button>
      </div>
    </div>
  )
}

export default function PricingOffers() {
  useSeo({
    title: 'Pricing & Offers',
    description:
      'Dubai Fieldz pricing & offers for Box Cricket and Pickleball in Sector 74, Gurugram. Final slots, pricing, and payments are handled via Playo / Huddle.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Pricing & offers</div>
        <h1>Simple, transparent offers.</h1>
        <p className="page-lead">
          Prices shown below are promotional starting points. Final slot pricing, availability, and
          payments are handled on Playo / Huddle.
        </p>

        <div className="cards-3" style={{ marginTop: 18 }}>
          <PriceCard
            title="Box Cricket"
            price="₹499"
            note="Starting offer for box cricket bookings."
            points={[
              'Great for groups & corporate teams',
              'Fast format, high energy',
              'Book & pay on Playo/Huddle',
            ]}
          />
          <PriceCard
            title="Pickleball"
            price="₹99"
            note="Starting offer for pickleball sessions."
            points={[
              'Beginner-friendly',
              'Perfect for doubles',
              'Book & pay on Playo/Huddle',
            ]}
          />
          <PriceCard
            title="Football (6v6)"
            price="Varies"
            note="Football pricing depends on time slot and availability."
            points={[
              'LED floodlights for night play',
              'Premium turf feel & traction',
              'Live pricing on Playo/Huddle',
            ]}
          />
        </div>

        <div className="callout" style={{ marginTop: 16 }}>
          <div className="kicker">Important</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            We do not take bookings on this website. Please use Playo or Huddle to view live slots,
            confirm pricing, and complete payments securely.
          </p>
          <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button as="link" to="/book" variant="primary">
              Book now
            </Button>
            <Button as="link" to="/sports" variant="ghost">
              See facilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

