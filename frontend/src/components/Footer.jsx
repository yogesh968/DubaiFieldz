import { LINKS, SITE } from '../config/site.js'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-min">
          <span>
            © {new Date().getFullYear()} {SITE.name} • Sector 74, Gurugram • Open 24/7
          </span>
          <span style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={LINKS.playo} target="_blank" rel="noreferrer">
              Playo
            </a>
            <a href={LINKS.district} target="_blank" rel="noreferrer">
              District
            </a>
            <a href={LINKS.hudle} target="_blank" rel="noreferrer">
              Hudle
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

