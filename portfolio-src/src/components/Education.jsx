import { motion } from 'framer-motion'

const education = [
  {
    degree: 'M.Sc. Data Analytics',
    school: 'Universität Hildesheim',
    period: 'April 2025 – Present',
    location: 'Hildesheim, Germany',
    highlights: [
      'Big Data Analytics: Multi-threading, distributed ML, scalable ETL',
      'Advanced Machine Learning: CNNs, RNNs, Decision Trees, K-Means',
      'Distributed Data Analytics Lab: PySpark, TensorFlow, PyTorch',
    ],
    badge: 'Current',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'Institute of Business Administration (IBA)',
    period: 'Sept 2020 – Aug 2024',
    location: 'Karachi, Pakistan',
    highlights: [
      'Thesis: "Enhancing Cyber Security through Machine Learning"',
      'Courses: Calculus I & II, Linear Algebra, Artificial Intelligence',
      'GPA: 2.9 / 4.0',
    ],
    badge: 'Graduated',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-white font-semibold text-xl">{edu.degree}</h3>
                  <p className="text-accent-light font-medium mt-1">{edu.school}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${
                      edu.badge === 'Current'
                        ? 'bg-accent/15 text-accent border-accent/30'
                        : 'bg-slate-700/50 text-slate-400 border-slate-600/50'
                    }`}
                  >
                    {edu.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{edu.period}</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mb-4">{edu.location}</p>
              <ul className="space-y-2">
                {edu.highlights.map((h, k) => (
                  <li key={k} className="flex gap-3 text-slate-400 text-sm">
                    <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
