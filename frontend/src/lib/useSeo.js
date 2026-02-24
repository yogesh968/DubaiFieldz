import { useEffect } from 'react'
import { SITE } from '../config/site.js'

function upsertMetaByName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Lightweight SEO helper (React 19 compatible).
 * Updates title + a few key meta tags per route.
 */
export function useSeo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} – ${SITE.tagline}`
    document.title = fullTitle

    const desc =
      description ||
      'Premium 24/7 sports turf in Sector 74, Gurugram. Football (6v6), Box Cricket, and Pickleball. Book via Playo or District.'

    upsertMetaByName('description', desc)
    upsertMetaByProperty('og:title', fullTitle)
    upsertMetaByProperty('og:description', desc)
    upsertMetaByProperty('twitter:title', fullTitle)
    upsertMetaByProperty('twitter:description', desc)
  }, [title, description])
}

