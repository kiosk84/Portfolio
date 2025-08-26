import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function Projects() {
  const projects = [
    {
      title: 'ART_IRBIT',
      description: 'Студия портретов на холсте по фотографии с использованием современных технологий',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/667eea/ffffff?text=ART_IRBIT',
      tags: ['Искусство', 'Бизнес', 'Дизайн'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'GPT_TURBO_ROBOT',
      description: 'Торговый ИИ-робот для платформы MT5 с продвинутыми алгоритмами',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/764ba2/ffffff?text=GPT_TURBO',
      tags: ['AI', 'Трейдинг', 'Python'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI ELEGAN',
      description: 'Участие в команде онлайн-разработчиков по созданию AI-решений',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/f093fb/ffffff?text=AI_ELEGAN',
      tags: ['AI', 'Командная работа', 'Веб-разработка'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Diana AI Assistant',
      description: 'Цифровой персонаж-ассистент с продвинутыми возможностями ИИ',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/4facfe/ffffff?text=Diana_AI',
      tags: ['AI', 'Чат-бот', 'NLP'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Lillian AI',
      description: 'Персональный цифровой ассистент с уникальной личностью',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/43e97b/ffffff?text=Lillian_AI',
      tags: ['AI', 'Персонализация', 'ML'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Проекты и кейсы</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Избранные работы, демонстрирующие мой опыт в различных областях
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${projects.length === 5 && index >= 3 ? 'lg:col-start-auto' : ''} ${projects.length === 5 && index === 3 ? 'lg:col-start-2' : ''}`}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
