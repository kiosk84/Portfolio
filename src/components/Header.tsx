import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'projects', label: 'Проекты' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <div className="relative">
            <div className="text-xl md:text-2xl font-bold gradient-text group-hover:text-glow-primary transition-all duration-300">
              Артём Пономарёв
            </div>
            <motion.div
              className="absolute -top-1 -right-6"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.6 }}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group py-2"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 opacity-50 blur-sm transition-all duration-300 group-hover:w-full rounded-full"></span>
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
             <a href="https://t.me/artponomarev" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
                <Button
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 pulse-premium"
                  size="sm"
                >
                  Связаться
                </Button>
              </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl glass-premium hover:neon-primary transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-white/10 glass-premium"
      >
        <nav className="container mx-auto px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 px-4 text-sm font-medium hover:text-primary transition-all duration-300 rounded-lg hover:bg-white/5"
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.button>
          ))}
          <a href="https://t.me/artponomarev" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              className="w-full mt-6 bg-gradient-to-r from-primary to-purple-500 text-white"
              size="sm"
            >
              Связаться
            </Button>
          </a>
        </nav>
      </motion.div>
    </motion.header>
  )
}
