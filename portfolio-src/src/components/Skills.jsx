import { motion } from 'framer-motion'

const groups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React.js', devicon: 'devicon-react-original colored' },
      { name: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
      { name: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
      { name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-plain colored' },
      { name: 'Redux', devicon: 'devicon-redux-original colored' },
      { name: 'SASS', devicon: 'devicon-sass-original colored' },
      { name: 'React Native', devicon: 'devicon-react-original colored' },
    ],
  },
  {
    category: 'Data & Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS', devicon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Databricks', img: '/Databricks-Emblem.png' },
      { name: 'Snowflake', img: '/snowflake.png' },
      { name: 'PySpark', devicon: 'devicon-apachespark-original colored' },
      { name: 'Docker', devicon: 'devicon-docker-plain colored' },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '📊',
    skills: [
      { name: 'Python', devicon: 'devicon-python-plain colored' },
      { name: 'SQL', devicon: 'devicon-azuresqldatabase-plain colored' },
      { name: 'Pandas', devicon: 'devicon-pandas-plain colored' },
      { name: 'NumPy', devicon: 'devicon-numpy-plain colored' },
      { name: 'Jupyter', devicon: 'devicon-jupyter-plain colored' },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'PyTorch', devicon: 'devicon-pytorch-plain colored' },
      { name: 'TensorFlow', devicon: 'devicon-tensorflow-original colored' },
      { name: 'Scikit-learn', devicon: 'devicon-scikitlearn-plain colored' },
      { name: 'OpenCV', devicon: 'devicon-opencv-plain colored' },
    ],
  },
  {
    category: 'Backend & Other',
    icon: '⚙️',
    skills: [
      { name: 'Java', devicon: 'devicon-java-plain colored' },
      { name: 'Node.js', devicon: 'devicon-nodejs-plain colored' },
      { name: 'Express', devicon: 'devicon-express-original' },
      { name: 'MongoDB', devicon: 'devicon-mongodb-plain colored' },
      { name: 'Git', devicon: 'devicon-git-plain colored' },
      { name: 'Linux', devicon: 'devicon-linux-plain' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills &amp; Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-5">
                {group.skills.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center gap-1.5 group cursor-default" title={skill.name}>
                    <div className="w-14 h-14 bg-navy-700/80 border border-navy-600/50 rounded-xl flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200">
                      {skill.img ? (
                        <img src={skill.img} alt={skill.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <i className={`${skill.devicon} text-3xl`} />
                      )}
                    </div>
                    <span className="text-slate-500 text-xs font-mono group-hover:text-slate-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
