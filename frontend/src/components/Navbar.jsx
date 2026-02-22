import { SITE } from '../config/site.js'
import { Button } from './Button.jsx'
import { useScrolled } from '../hooks/useScrolled.js'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#sports', label: 'Sports' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrolled(40)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleHash = () => {
      setActiveHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <header className={['nav', scrolled ? 'nav-solid' : 'nav-transparent'].join(' ')}>
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="#" aria-label={`${SITE.name} home`}>
            <img src="/images/logo.png" alt={SITE.name} className="brand-logo" />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeHash === item.href ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <Button as="a" href="#book" variant="primary" size="sm">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
