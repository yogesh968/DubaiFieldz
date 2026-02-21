import { useSeo } from '../lib/useSeo.js'

const items = [
  { title: 'Football Turf', caption: 'Placeholder photo — team play & match moments' },
  { title: 'Box Cricket', caption: 'Placeholder photo — fast-format highlights' },
  { title: 'Pickleball', caption: 'Placeholder photo — doubles sessions & practice' },
  { title: 'Night Play', caption: 'Placeholder photo — LED floodlights in action' },
  { title: 'Facility', caption: 'Placeholder photo — premium, clean setup' },
  { title: 'Community', caption: 'Placeholder photo — groups, events, and energy' },
  { title: 'Warm-up Zone', caption: 'Placeholder photo — pre-match prep' },
  { title: 'Score Moments', caption: 'Placeholder photo — big plays & celebrations' },
  { title: 'Pitch Detail', caption: 'Placeholder photo — turf quality close-ups' },
]

export default function Gallery() {
  useSeo({
    title: 'Gallery',
    description:
      'Gallery of Dubai Fieldz (placeholders). Photos of the football turf, box cricket pitch, pickleball court, and facilities will be added soon.',
  })

  return (
    <section className="page">
      <div className="container">
        <div className="kicker">Gallery</div>
        <h1>Gallery (photos coming soon)</h1>
        <p className="page-lead">
          This is a placeholder gallery. Replace these cards with your real images whenever you’re
          ready.
        </p>

        <div className="gallery-grid" style={{ marginTop: 18 }}>
          {items.map((x) => (
            <figure className="card img-card" key={x.title}>
              <div className="img-ph" aria-label={`${x.title} placeholder image`}>
                <div>
                  <div className="kicker">Placeholder</div>
                  <div style={{ marginTop: 8, fontWeight: 850, letterSpacing: '-0.01em' }}>
                    {x.title}
                  </div>
                </div>
              </div>
              <figcaption className="img-cap">
                <h3 className="h3">{x.title}</h3>
                <p>{x.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

