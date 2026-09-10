import { motion } from 'framer-motion'

const featured = {
  title: 'Tabular-DL Research Assistant (RAG)',
  description: 'Multi-turn, grounded Q&A over 41 curated arXiv papers on why gradient-boosted trees beat deep learning on tabular data. Hybrid retrieval (BGE embeddings + BM25, fused with Reciprocal Rank Fusion) followed by cross-encoder reranking; every answer cites the passages it used, and follow-up questions are condensed into standalone queries. Measured on a 40-question labelled set: hit@10 1.00, MRR 0.90.',
  tags: ['Python', 'ChromaDB', 'BGE', 'BM25 + RRF', 'Cross-Encoder', 'Gemini / Ollama', 'Streamlit'],
  github: 'https://github.com/Arsalan-007/rag-tabular-assistant',
  demo: 'https://rag-tabular-assistant-j89p5jnx4hiwzuq3r2jys9.streamlit.app/',
  image: '/card-rag.png',
}

const projects = [
  {
    title: 'ETL Pipeline Dashboard',
    description: 'Full-stack ETL pipeline fetching live stock data for 20 Hamburg-listed companies via Yahoo Finance. Features Pandas transformations, MA7/MA30 indicators, data quality tracking, volume analysis, and CSV export — all visualized in a real-time React dashboard.',
    tags: ['Python', 'FastAPI', 'Pandas', 'SQLite', 'React.js', 'Recharts'],
    github: 'https://github.com/Arsalan-007/etl-pipeline-dashboard',
    demo: '',
    image: '/card-etl.png',
  },
  {
    title: 'Real-Time Chat App',
    description: 'A full-stack real-time messaging app with Socket.io WebSockets, MongoDB persistence, read receipts (✓✓), live online/offline status, accurate last-seen timestamps, and typing indicators. Rebuilt from a React Native app I originally built at Codex.',
    tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Arsalan-007/real-time-chat-app',
    demo: '',
    image: '/card-chat.png',
  },
  {
    title: 'Interactive Code Learning Platform',
    description: 'A full rebuild of my first project — an in-browser coding platform with Monaco Editor, Python/Java/C++ compiler support, 5 structured challenges, a collapsible hints system, and an automatic verdict system that validates your solution against hidden test cases.',
    tags: ['React.js', 'Node.js', 'Monaco Editor', 'Express', 'compilex'],
    github: 'https://github.com/Arsalan-007/code-learning-platform',
    demo: '',
    image: '/card-code.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-6 bg-navy-800/60 border border-accent/20 rounded-xl overflow-hidden card-glow hover:border-accent/40 transition-all duration-300 flex flex-col md:flex-row"
        >
          <div className="relative md:w-1/2 h-56 md:h-auto overflow-hidden bg-navy-900/80 flex-shrink-0">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-800/60 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-800/20 to-transparent md:hidden" />
            <span className="absolute top-3 left-3 text-xs font-mono px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
              ★ Featured
            </span>
            {featured.demo && (
              <span className="absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                live demo
              </span>
            )}
          </div>
          <div className="p-6 flex flex-col flex-1 justify-center">
            <h3 className="text-white font-semibold text-xl group-hover:text-accent transition-colors duration-200 mb-3">
              {featured.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {featured.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-navy-700/80 text-accent/80 border border-accent/15">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={featured.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 text-sm font-mono">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Source Code
              </a>
              {featured.demo && (
                <a href={featured.demo} target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors flex items-center gap-2 text-sm font-mono">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Try it live
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-navy-800/60 border border-navy-700/50 rounded-xl overflow-hidden card-glow hover:border-accent/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-navy-900/80 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-800/20 to-transparent" />
                {project.demo && (
                  <span className="absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                    live demo
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors duration-200 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 flex-shrink-0 ml-3">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors" aria-label={`${project.title} live demo`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent transition-colors" aria-label={`${project.title} on GitHub`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-navy-700/80 text-accent/80 border border-accent/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 font-mono text-sm mt-10"
        >
          More projects coming soon — check back or{' '}
          <a href="https://github.com/Arsalan-007" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            follow on GitHub
          </a>
        </motion.p>
      </div>
    </section>
  )
}
