import { Button } from '../components/Button.jsx'
import { LINKS } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

function SportSection({ title, tag, description, who, why, cta }) {
  return (
    <article className="card">
      <div className="card-top">
        <h2 className="h2">{title}</h2>
        <span className="pill">{tag}</span>
      </div>
      <p style={{ marginTop: 12 }}>{description}</p>

      <div className="split" style={{ marginTop: 14 }}>
        <div className="callout">
          <div className="kicker">Who is it for</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            {who}
          </p>
        </div>
        <div className="callout">
          <div className="kicker">Why play here</div>
          <p className="muted" style={{ margin: '10px 0 0' }}>
            {why}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Button as="a" href={cta} target="_blank" rel="noreferrer" variant="primary">
          Book on Playo
        </Button>
        <Button as="link" to="/book" variant="ghost">
          Booking options
        </Button>
      </div>
    </article>
  )
}

export default function SportsFacilities() {
  useSeo({
    title: 'Sports & Facilities',
    description:
      'Explore Dubai Fieldz facilities in Sector 74, Gurugram: Football Turf (6v6), Box Cricket Pitch, and Pickleball Court. Book via Playo or District.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Sports & Facilities</div>
        <h1>Three sports. One premium experience.</h1>
        <p className="page-lead">
          Designed for high-energy play, clean operations, and strong lighting for night sessions.
          Final slots and payments are handled on Playo / District.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          <SportSection
            title="Football Turf (6v6)"
            tag="6v6"
            description="A premium 6v6 turf built for pace, control, and consistent play—whether it’s a quick match or a full team session."
            who="College groups, working professionals, and teams who want a reliable pitch for weekly games, training, or competitive matches."
            why="High-contrast lighting, safe & maintained turf surface, and a professional facility vibe—so your game feels premium every time."
            cta={LINKS.playo}
          />

          <SportSection
            title="Box Cricket Pitch"
            tag="Fast"
            description="Compact, action-packed cricket that’s perfect for quick matches, office groups, and weekend squads."
            who="Friends, corporate teams, and mixed-skill groups who want a fun game format with minimal downtime."
            why="A clean, well-managed space with lighting for late slots—book and play with zero hassle."
            cta={LINKS.playo}
          />

          <SportSection
            title="Pickleball Court"
            tag="Modern"
            description="A fast-growing sport that’s social and competitive—ideal for doubles sessions and skill-building."
            who="Beginners who want a friendly entry sport, and regular players who want consistent court time."
            why="Smooth, premium environment and easy slot visibility—perfect for building a routine."
            cta={LINKS.playo}
          />
        </div>
      </div>
    </section>
  )
}

