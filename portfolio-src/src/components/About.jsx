import { motion } from 'framer-motion'

const facts = [
  { label: 'Location', value: 'Hildesheim, Germany' },
  { label: 'Degree', value: 'M.Sc. Data Analytics (ongoing)' },
  { label: 'Availability', value: '20 hrs/week (Student Visa)' },
  { label: 'Languages', value: 'English (Fluent), Urdu (Native)' },
  { label: 'Email', value: 'arsalan.jawed@outlook.com', href: 'mailto:arsalan.jawed@outlook.com' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="flex-shrink-0">
            <div className="w-52 h-52 rounded-2xl overflow-hidden">
              <img src="/IMG_1075.png" alt="Arsalan Jawed" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building things that <span className="gradient-text">matter</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm a software engineer and data analytics student with hands-on experience in full-stack
              web development, ETL pipelines, and banking software. Currently pursuing my M.Sc. in Data
              Analytics at Universität Hildesheim, I work at the intersection of modern web technologies
              and data-driven systems — from React frontends to PySpark pipelines and ML models.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facts.map(({ label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-accent font-mono text-sm mt-0.5">▹</span>
                  <div>
                    <span className="text-slate-500 text-sm">{label}: </span>
                    {href ? (
                      <a href={href} className="text-slate-300 text-sm hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
