'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const nav = [
  {
    label: 'Nos offres',
    children: [
      { label: 'Formation individuelle', href: '/offres/formation-individuelle' },
      { label: 'Formation intra-entreprise', href: '/offres/formation-intra-entreprise' },
      { label: 'Team building équicoaching', href: '/offres/team-building-equicoaching' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <LogoSVG />
          <span className="logo-text">
            <strong>SD Équicoaching</strong>
            <em>Neurosciences · Équicoaching</em>
          </span>
        </Link>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Navigation principale">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className={`nav-dropdown${dropOpen ? ' open' : ''}`}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => setDropOpen((v) => !v)}
                  aria-expanded={dropOpen}
                >
                  {item.label} <span className="chevron">▾</span>
                </button>
                <ul className="dropdown-menu">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="dropdown-item" onClick={() => { setMenuOpen(false); setDropOpen(false) }}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" className="btn btn-primary btn-sm nav-cta" onClick={() => setMenuOpen(false)}>
            Prendre contact
          </Link>
        </nav>

        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function LogoSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="50" cy="50" rx="46" ry="46" stroke="#CDA540" strokeWidth="3" fill="#F2EDE5" />
      {/* Horse head silhouette */}
      <path d="M58 22 C62 20 68 22 70 28 C72 34 70 40 66 44 C64 46 65 50 64 54 C63 58 60 60 56 58 C52 56 50 52 52 48 C54 44 50 40 48 36 C46 32 48 26 52 24 Z" fill="none" stroke="#CDA540" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M58 22 C56 18 60 15 64 16 C66 17 67 20 66 22" fill="none" stroke="#CDA540" strokeWidth="2" />
      <path d="M56 58 C54 62 52 68 54 72 C56 76 60 76 62 72" fill="none" stroke="#CDA540" strokeWidth="2.5" />
      {/* SD monogram */}
      <text x="26" y="72" fontFamily="Georgia, serif" fontWeight="700" fontSize="22" fill="#78427F" letterSpacing="-1">SD</text>
    </svg>
  )
}
