import { Button } from '../components/Button.jsx'
import { LINKS, SITE } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Learn about Dubai Fieldz—our mission to make sports accessible 24/7 in Sector 74, Gurugram, and our vision to build a community around fitness and sport.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">About</div>
        <h1>Built for players who don’t wait for “perfect timing.”</h1>
        <p className="page-lead">
          {SITE.name} is a modern sports turf startup in Sector 74, Gurugram—created for college
          students, professionals, weekend squads, and corporate teams who want reliable turf, clean
          facilities, and 24/7 access.
        </p>

        <div className="split" style={{ marginTop: 18 }}>
          <div className="card">
            <h2 className="h2">Our story</h2>
            <p style={{ marginTop: 12 }}>
              We started {SITE.name} with a simple belief: the best games happen when access is easy.
              Late-night football after work. A quick box cricket match with friends. A weekend
              pickleball session that turns into a new routine.
            </p>
            <p style={{ marginTop: 12 }}>
              That’s why we focused on premium turf quality, safe play, strong lighting, and a
              facility that stays consistent—day or night.
            </p>
          </div>

          <div className="card">
            <h2 className="h2">Mission & vision</h2>
            <ul className="list" style={{ marginTop: 14 }}>
              <li>
                <span className="check" aria-hidden="true" />
                <span>
                  <strong>Mission:</strong> making sports accessible 24/7—so you can play when your
                  schedule allows, not when the clock says so.
                </span>
              </li>
              <li>
                <span className="check" aria-hidden="true" />
                <span>
                  <strong>Vision:</strong> build a community around fitness & sport—where beginners
                  become regulars and teams find their home ground.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section" style={{ paddingBottom: 0 }}>
          <div className="section-head">
            <div>
              <div className="kicker">Why Dubai Fieldz</div>
              <h2>What makes us different</h2>
              <p>Premium finishes, professional operations, and a booking flow that’s genuinely easy.</p>
            </div>
          </div>

          <div className="cards-3">
            {[
              {
                t: 'Premium-first setup',
                d: 'A clean, high-contrast facility experience built to feel modern and trustworthy.',
              },
              {
                t: '24/7 operations',
                d: 'Play early mornings, late nights, or anytime in between—without compromising safety.',
              },
              {
                t: 'Fast online booking',
                d: 'No complicated forms here. View slots and confirm instantly via Playo or District.',
              },
            ].map((x) => (
              <div className="card" key={x.t}>
                <h3 className="h3">{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
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

