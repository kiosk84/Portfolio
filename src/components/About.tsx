import { motion } from 'framer-motion'
import { BarChart3, Bot, Brush, Code, TrendingUp, Sparkles, Zap, Palette, BrainCircuit } from 'lucide-react'

export function About() {
  const skills = [
    { 
      icon: Code, 
      title: 'IT-разработка', 
      description: 'Python, PHP, SQLite, FastAPI',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'group-hover:shadow-blue-500/25'
    },
    { 
      icon: TrendingUp, 
      title: 'Трейдинг', 
      description: 'MT5, алгоритмические стратегии',
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'group-hover:shadow-green-500/25'
    },
    { 
      icon: BrainCircuit, 
      title: 'AI/ML', 
      description: 'OpenAI, Gemini, Alibaba Group',
      gradient: 'from-purple-500 to-violet-500',
      glowColor: 'group-hover:shadow-purple-500/25'
    },
    { 
      icon: Palette, 
      title: 'Дизайн и Творчество', 
      description: 'Нейроискусство и портреты на холсте в студии ART_IRBIT.',
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'group-hover:shadow-pink-500/25'
    },
    { 
      icon: BarChart3, 
      title: 'Бизнес', 
      description: 'Предпринимательство, консалтинг',
      gradient: 'from-indigo-500 to-blue-500',
      glowColor: 'group-hover:shadow-indigo-500/25'
    },
  ]

  return (
    <section id="about" className="py-24 section-gradient-1 section-divider relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">Обо мне</h2>
            <Zap className="w-8 h-8 text-purple-500" />
          </motion.div>
          <div 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-6 text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Артём Пономарёв — многогранная личность, сочетающая в себе опыт <strong className="text-primary/90">предпринимателя</strong>, <strong className="text-primary/90">разработчика</strong> и <strong className="text-primary/90">творческого человека</strong>. Он активно работает в сфере финансовых рынков, создавая и развивая ИИ-роботов и умных Telegram-ботов как для индивидуальных заказов, так и для автоматизации бизнеса и блогеров.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Помимо всего этого, Артём развивает себя как разработчик и предприниматель в сфере IT. Он владеет <strong className="text-purple-400">Python</strong>, <strong className="text-purple-400">PHP</strong>, <strong className="text-purple-400">SQLite</strong>, <strong className="text-purple-400">FastAPI</strong> и работает с интеграциями с крупными брендами, такими как <strong className="text-green-400">OpenAI</strong>, <strong className="text-green-400">Gemini</strong>, <strong className="text-green-400">Alibaba Group</strong> и многими другими известными компаниями в сфере ИИ. Создаёт веб-приложения и Telegram-ботов для бизнеса, маркетинга, творчества и личных проектов. В его планах — построение полноценной экосистемы цифровых инструментов и автоматизации для бизнеса и пользователей.
            </motion.p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 10
              }}
              className={`group relative bg-card/50 glass-premium p-8 rounded-2xl card-3d-hover ${skill.glowColor} transition-all duration-500 border border-white/10 hover:border-white/20 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]`}
            >
              {/* Градиентный фон при ховере */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Иконка с эффектами */}
              <motion.div 
                className={`relative flex items-center mb-6`}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`relative p-4 bg-gradient-to-br ${skill.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                </div>
              </motion.div>
              
              {/* Контент */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-2 h-2 bg-gradient-to-r ${skill.gradient} rounded-full`} />
              </div>
              
              {/* Светящаяся линия снизу */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${skill.gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
