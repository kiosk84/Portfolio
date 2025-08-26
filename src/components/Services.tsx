import { motion } from 'framer-motion'
import { Bot, Brush, Building, Globe, TrendingUp, ArrowRight, Star, Zap, CalendarClock, BookOpen, MapPin, MessageSquare as MessageSquareIcon, Gift, BarChart3, CheckCircle, BrainCircuit } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Автоматизация торговли',
      description: 'Создание торговых ботов, стратегий и сигнал-систем для финансовых рынков',
      features: ['MT5 интеграция', 'Алгоритмические стратегии', 'Риск-менеджмент', 'Backtesting'],
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'hover:shadow-green-500/25'
    },
    {
      icon: Bot,
      title: 'Telegram-боты',
      description: 'Разработка ботов для бизнеса, блогеров с интеграцией AI',
      features: ['AI-интеграция', 'Автоматизация процессов', 'Аналитика', 'Webhook поддержка'],
      gradient: 'from-purple-500 to-violet-500',
      glowColor: 'hover:shadow-purple-500/25',
      modalContent: <BeautySalonBotModal />
    },
    {
      icon: Globe,
      title: 'Веб-приложения',
      description: 'Создание современных IT-решений и веб-приложений',
      features: ['React/Vue.js', 'FastAPI/Django', 'Адаптивный дизайн', 'PWA технологии'],
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'hover:shadow-blue-500/25'
    },
    {
      icon: Brush,
      title: 'Искусство и дизайн',
      description: 'Портреты на холсте и цифровое творчество',
      features: ['Портреты по фото', 'Нейроискусство', 'Брендинг', 'UI/UX дизайн'],
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'hover:shadow-pink-500/25'
    },
    {
      icon: Building,
      title: 'Бизнес-консультации',
      description: 'Консультации по развитию бизнеса и личного бренда',
      features: ['Стратегическое планирование', 'Цифровая трансформация', 'Личный бренд', 'Маркетинг'],
      gradient: 'from-indigo-500 to-blue-500',
      glowColor: 'hover:shadow-indigo-500/25'
    }
  ]

  return (
    <section id="services" className="py-24 section-gradient-2 section-divider relative">
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
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">Мои услуги</h2>
            <Zap className="w-8 h-8 text-purple-500" />
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Предлагаю комплексные решения премиум-класса в области технологий, 
            творчества и бизнеса. Каждый проект — это уникальный подход и инновационное решение.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20, 
                scale: 1.02,
                rotateY: 5
              }}
              className={`${services.length === 5 && index >= 3 ? 'lg:col-start-auto' : ''} ${services.length === 5 && index === 3 ? 'lg:col-start-2' : ''}`}
            >
              <Card className={`group h-full glass-premium border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden card-3d-hover ${service.glowColor} transition-all duration-500`}>
                <CardHeader className="pb-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className="relative flex items-center mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`relative p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                  
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 relative z-10">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300 relative z-10">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-sm group-hover:text-foreground/90 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {service.modalContent ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full group/btn glass-premium border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 relative overflow-hidden"
                            size="sm"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`} />
                            <span className="relative z-10 flex items-center justify-center">
                              Узнать больше
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          {service.modalContent}
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full group/btn glass-premium border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 relative overflow-hidden"
                        size="sm"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`} />
                        <span className="relative z-10 flex items-center justify-center">
                          Узнать больше
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    )}
                  </motion.div>
                  
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-premium p-8 md:p-12 rounded-3xl max-w-4xl mx-auto border border-white/10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6 gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              💡 Есть идея проекта?
            </motion.h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Давайте обсудим ваш проект и найдем оптимальное решение. 
              Я готов воплотить любую идею в высококачественный цифровой продукт.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://t.me/artponomarev" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-primary text-white font-bold border-0 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 pulse-premium"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Обсудить проект
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BeautySalonBotModal() {
  const features = [
    {
      icon: CalendarClock,
      title: "Онлайн-запись",
      description: "Клиент выбирает мастера (с фото и описанием), услугу (с ценой и длительностью) и удобное время прямо в чате. Запись занимает 1 минуту — без звонков и ожидания."
    },
    {
      icon: BookOpen,
      title: "Меню услуг в удобном формате",
      description: "Красивый каталог: стрижки, окрашивание, уход, укладки. Можно добавить фото “до/после” и даже примеры работ мастеров."
    },
    {
      icon: MapPin,
      title: "Адрес, карта и контакты",
      description: "Новый клиент сразу получит точный адрес и карту, телефон для связи и ссылки на соцсети."
    },
    {
      icon: BrainCircuit,
      title: "Ответы на вопросы с помощью ИИ",
      description: "ИИ-помощник, обученный на информации о вашем салоне (RAG-система), будет отвечать на частые вопросы клиентов, как живой администратор."
    },
    {
      icon: Gift,
      title: "Рассылки, акции и напоминания",
      description: "Бот напомнит о записи, поздравит с Днём рождения и предложит скидку, пришлёт спецпредложение после визита. Это создаёт постоянный поток клиентов и повышает их лояльность."
    },
    {
      icon: Star,
      title: "Отзывы и оценки",
      description: "После визита бот вежливо попросит оставить отзыв. Вы получите ценную обратную связь, а положительные отзывы можно использовать в рекламе."
    },
    {
      icon: BarChart3,
      title: "Аналитика и статистика",
      description: "Для владельца бот собирает данные: количество записей, популярные услуги, загруженность мастеров. Эта информация помогает лучше управлять салоном."
    }
  ]

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl gradient-text mb-2">Презентация: ИИ-ассистент для салона красоты</DialogTitle>
        <DialogDescription className="text-base text-muted-foreground">
          👋 Представьте, что у вашего салона появляется свой цифровой администратор в Telegram, который работает 24/7.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4 space-y-6">
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-sm text-primary-foreground">
            Фактически это ваш второй администратор, который никогда не уходит на обед или выходной 😉
          </p>
        </div>
        
        <h3 className="text-xl font-semibold flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
          Что умеет бот:
        </h3>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg mt-1">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
