const links = [
  { label: 'GitHub', href: 'https://github.com/Arsalan-007' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arsalanjawed007' },
  { label: 'Email', href: 'mailto:arsalan.jawed@outlook.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-navy-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-slate-600 text-sm">
          Designed &amp; built by <span className="text-accent">Arsalan Jawed</span>
        </p>
        <div className="flex gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-slate-600 hover:text-accent transition-colors text-sm font-mono"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
