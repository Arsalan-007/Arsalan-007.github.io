import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Habib Bank AG Zurich',
    period: 'Oct 2024 – Mar 2025',
    location: 'Karachi, Pakistan',
    bullets: [
      'Developed and integrated features for proprietary banking software in Java',
      'Led development of an ETL pipeline for the wealth management module, automating ingestion, transformation, and validation of customer data',
      'Provided application support by handling and resolving tickets across various banking modules (Java & SQL)',
      'Collaborated with cross-functional teams to troubleshoot issues and ensure timely delivery',
    ],
    tags: ['Java', 'SQL', 'ETL', 'Banking Software'],
  },
  {
    role: 'Front-End Developer',
    company: 'Codex',
    period: 'Jun 2023 – Aug 2023',
    location: 'Karachi, Pakistan',
    bullets: [
      'Developed a React Native Android messaging app with real-time chat, friend list management, and last-seen functionality',
      'Built a web-based learning platform with an interactive code editor and integrated compiler for practicing programming languages',
    ],
    tags: ['React Native', 'React.js', 'JavaScript', 'WebSockets'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">Where I've worked</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:self-start' : 'md:pl-12 md:self-end md:ml-auto'}`}
              >
                <div
                  className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-navy-950 ${
                    i % 2 === 0 ? '-right-[6.5px]' : '-left-[6.5px]'
                  }`}
                />
                <div className="bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-accent-light font-medium mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-navy-700/80 text-slate-400 border border-navy-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
