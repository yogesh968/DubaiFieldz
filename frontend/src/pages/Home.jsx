import { Button } from '../components/Button.jsx'
import { LINKS, SITE } from '../config/site.js'
import { useSeo } from '../lib/useSeo.js'
import { Reveal } from '../components/Reveal.jsx'

function SportCard({ number, title, caption, imgSrc }) {
  return (
    <Reveal as="article" className="sport-card" aria-label={title}>
      <div className="sport-img" aria-label={`Image for ${title}`} style={{
        backgroundImage: `url(${imgSrc})`,
        aspectRatio: '3 / 4',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      </div>
      <div className="sport-content">
        <div className="sport-meta">{number} / {title}</div>
        <p>{caption}</p>
      </div>
    </Reveal>
  )
}

function WhyUsItem({ title, description }) {
  return (
    <div className="why-item">
      <h3 className="h3">{title}</h3>
      <p className="muted">{description}</p>
    </div>
  )
}

export default function Home() {
  useSeo({
    title: 'Dubai Fieldz - Premium Sports Turf',
    description:
      'Dubai Fieldz is a premium sports turf in Sector 74, Gurugram. Football, Box Cricket, and Pickleball.',
  })

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bleed" aria-label="Hero">
          <div className="hero-video" aria-hidden="true">
            <video autoPlay loop muted playsInline preload="auto" poster="/images/sport-football.jpg">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container hero-inner">
            <div className="hero-content">
              <Reveal>
                <h1 className="h1 hero-title">Elevate Your<br />Game.</h1>

                <div className="hero-cta">
                  <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary">
                    Book on Playo
                  </Button>
                  <Button as="a" href={LINKS.district} target="_blank" rel="noreferrer" variant="outline">
                    Book on District
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="section about" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-text" delay={0}>
              <div className="kicker">The Identity</div>
              <h2 className="h2 about-heading">Designed for<br />the purists.</h2>
              <p className="about-body">
                Dubai Fieldz was born from a simple vision: to create a luxury sports
                environment that respects the game. We stripped away the noise and neon
                to bring you a clean, meticulously maintained facility where the
                focus remains entirely on your performance.
              </p>
            </Reveal>
            <Reveal className="about-visual" delay={200}>
              <div className="about-img" style={{
                backgroundImage: 'url(/images/gallery-new-1.jpg)',
                aspectRatio: '16 / 9',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-sm)'
              }}>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Sports Available */}
      <section className="section sports" id="sports">
        <div className="container">
          <Reveal>
            <div className="kicker">The Offering</div>
            <h2 className="h2 sports-heading">Three disciplines.<br />Zero compromises.</h2>
          </Reveal>

          <div className="sports-grid" style={{ marginTop: '80px' }} role="list">
            <SportCard
              number="01"
              title="Football (6v6)"
              caption="FIFA-approved artificial grass. Wide playing area designed for fast-paced, fluid movement without restriction."
              imgSrc="/images/sport-football.jpg"
            />
            <SportCard
              number="02"
              title="Box Cricket"
              caption="Generous cage height and perfectly leveled surfaces. Ideal for high-energy corporate and social matches."
              imgSrc="/images/sport-cricket.jpg"
            />
            <SportCard
              number="03"
              title="Pickleball"
              caption="Professional grade hardcourt. High visibility lines and spacious boundaries for the ultimate racquet experience."
              imgSrc="/images/sport-pickleball.jpg"
            />
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="section why-us" id="why-us">
        <div className="container">
          <div className="why-us-grid">
            <Reveal className="why-us-content">
              <h2 className="h2">The Differentiator.</h2>
              <p className="muted" style={{ marginTop: 20, maxWidth: '400px' }}>
                We didn't just build a turf. We engineered a space where precision meets comfort, ensuring your playtime is always exceptional.
              </p>
            </Reveal>
            <div className="why-us-items">
              <Reveal delay={100}><WhyUsItem title="Pro-Level Lighting" description="Shadow-free LED arrays designed specifically to eliminate glare." /></Reveal>
              <Reveal delay={200}><WhyUsItem title="24/7 Access" description="Play on your schedule. Fully staffed and operational round the clock." /></Reveal>
              <Reveal delay={300}><WhyUsItem title="Premium Surfaces" description="Highest grade turf and court materials that reduce joint stress." /></Reveal>
              <Reveal delay={400}><WhyUsItem title="Prime Location" description="Easily accessible in Sector 74 with dedicated, secure parking." /></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to Book (Conversion) */}
      <section className="section book-now" id="book">
        <div className="container">
          <div className="book-now-card">
            <div className="book-now-content">
              <Reveal>
                <div className="kicker kicker-inverse">Reserve Your Turf</div>
                <h2 className="h2 book-heading">Start playing.</h2>
                <p className="book-body">
                  To ensure a flawless experience, all slot availability and payments are securely handled through our trusted booking partners. Select your preferred platform below.
                </p>
                <div className="book-cta">
                  <Button as="a" href={LINKS.playo} target="_blank" rel="noreferrer" variant="primary">
                    Book on Playo
                  </Button>
                  <Button as="a" href={LINKS.district} target="_blank" rel="noreferrer" variant="outline-inverse">
                    Book on District
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="book-now-visual">
              <div className="book-img" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/34563722/pexels-photo-34563722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                aspectRatio: '1 / 1',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-sm)'
              }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <Reveal>
            <div className="kicker">The Visual Proof</div>
            <h2 className="h2 gallery-heading">The Atmosphere.</h2>
          </Reveal>
          <div className="gallery-layout atmosphere-grid">
            <Reveal delay={100} className="atmosphere-item">
              <img src="/images/sport-football.jpg" alt="Football detail" className="atm-img" />
            </Reveal>
            <Reveal delay={200} className="atmosphere-item">
              <img src="/images/sport-cricket.jpg" alt="Cricket detail" className="atm-img" />
            </Reveal>
            <Reveal delay={300} className="atmosphere-item">
              <img src="/images/sport-pickleball.jpg" alt="Pickleball detail" className="atm-img" />
            </Reveal>
            <Reveal delay={400} className="atmosphere-item">
              <img src="/images/gallery-new-3.jpg" alt="Overhead courts view" className="atm-img" />
            </Reveal>
            <Reveal delay={500} className="atmosphere-item">
              <img src="/images/gallery-new-2.jpg" alt="Pickleball action" className="atm-img" />
            </Reveal>
            <Reveal delay={600} className="atmosphere-item">
              <img src="/images/gallery-new-1.jpg" alt="Wide facility view" className="atm-img" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Location & Contact */}
      <section className="section contact" id="contact">
        <div className="container">
          <Reveal>
            <div className="kicker">The Destination</div>
            <h2 className="h2 contact-heading">Find Us.</h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal className="contact-map">
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
            </Reveal>
            <Reveal className="contact-info" delay={100}>
              <div className="contact-block">
                <h3 className="h3">Address</h3>
                <p>
                  <strong>{SITE.name}</strong><br />
                  {SITE.addressLine}
                </p>
              </div>
              <div className="contact-block">
                <h3 className="h3">Connectivity</h3>
                <p className="muted">
                  Open 24/7, all days.<br />
                  <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-link">+91 78383 83583</a><br />
                  <a href="mailto:dubaifieldz@gmail.com" className="contact-link">dubaifieldz@gmail.com</a>
                </p>
              </div>
              <div className="contact-block">
                <h3 className="h3">Follow Us</h3>
                <p className="muted">
                  <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="contact-link">Instagram</a> /
                  <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-link" style={{ marginLeft: 8 }}>Whatsapp</a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
