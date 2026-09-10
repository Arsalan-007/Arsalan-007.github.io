import { useState, useEffect } from 'react'

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    navLinks.forEach(link => {
      const el = document.getElementById(link.toLowerCase())
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(link.toLowerCase())
      }, { rootMargin: '-40% 0px -55% 0px' })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent font-semibold text-lg tracking-tight">
          AJ<span className="text-slate-400">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 relative group ${active === link.toLowerCase() ? 'text-accent' : 'text-slate-400 hover:text-accent'}`}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${active === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/Arsalan-007" target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-navy-950 transition-all duration-200 font-medium">
              GitHub
            </a>
          </li>
        </ul>
        <button className="md:hidden text-slate-400 hover:text-accent" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className={`transition-colors py-1 font-medium ${active === link.toLowerCase() ? 'text-accent' : 'text-slate-400 hover:text-accent'}`}>
              {link}
            </a>
          ))}
          <a href="https://github.com/Arsalan-007" target="_blank" rel="noreferrer" className="text-accent border border-accent rounded-md px-4 py-2 text-center hover:bg-accent hover:text-navy-950 transition-all">
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
