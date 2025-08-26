import { motion } from 'framer-motion'
import { Send, Instagram, MessageSquare, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

export function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; delay: number; left: string; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8,
      left: Math.random() * 100 + '%',
      duration: Math.random() * 4 + 6
    }))
    setParticles(newParticles)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Send, href: "https://t.me/artponomarev", label: "Telegram", color: "hover:text-sky-400" },
    { icon: MessageSquare, href: "https://wa.me/79025850404", label: "WhatsApp", color: "hover:text-green-400" },
    { icon: Instagram, href: "https://instagram.com/artponomarev", label: "Instagram", color: "hover:text-pink-400" }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-background floating-3d">
      {/* Магические частицы */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magic-particles particles-float fixed"
          style={{
            width: particle.size + 'px',
            height: particle.size + 'px',
            left: particle.left,
            animationDelay: particle.delay + 's',
            animationDuration: particle.duration + 's'
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10 pt-24 pb-16">
        {/* Аватар */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <div className="relative w-36 h-36 mx-auto">
            <div 
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #4facfe, #667eea)',
              }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Артём Пономарёв" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
             <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse" style={{borderColor: 'rgba(102, 126, 234, 0.3)'}} />
          </div>
        </motion.div>

        {/* Главный заголовок */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Артём Пономарёв
          </h1>
        </motion.div>

        {/* Подзаголовок/Роли */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium mb-6 gradient-text"
        >
          Цифровой архитектор, предприниматель и нейрохудожник
        </motion.h2>

        {/* Описание */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Превращаю сложные идеи в элегантные цифровые продукты и инновационные AI-решения. 
          Основатель <span className="text-primary font-semibold">ART_IRBIT</span> и создатель <span className="text-purple-400 font-semibold">GPT_TURBO_ROBOT</span>.
        </motion.p>
        
        {/* CTA кнопки */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://t.me/artponomarev" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="min-w-[220px] h-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-primary text-white font-bold text-base border-0 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 pulse-premium group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Обсудить проект
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="min-w-[220px] h-12 glass-premium font-bold text-base border-2 border-primary/30 rounded-full hover:border-primary hover:neon-primary transition-all duration-500"
            >
              Мои проекты
            </Button>
          </motion.div>
        </motion.div>

        {/* Социальные ссылки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex justify-center items-center space-x-4"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.2, 
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-2 glass-premium rounded-full text-muted-foreground ${color} transition-all duration-300 hover:neon-primary`}
              title={label}
            >
              <Icon className="w-4 h-4" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
