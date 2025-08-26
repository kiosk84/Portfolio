import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Анна Петрова',
    role: 'Директор по маркетингу',
    company: 'TechStart',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/667eea/ffffff?text=AP',
    content: 'Артём создал для нас невероятного Telegram-бота с AI-интеграцией. Качество работы превзошло все ожидания!',
    rating: 5
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Трейдер',
    company: 'Independent',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/764ba2/ffffff?text=DS',
    content: 'GPT_TURBO_ROBOT изменил мой подход к торговле. Прибыльность выросла на 40% за первый месяц использования.',
    rating: 5
  },
  {
    name: 'Елена Морозова',
    role: 'Основатель',
    company: 'Creative Studio',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/f093fb/ffffff?text=EM',
    content: 'Портрет от ART_IRBIT стал настоящим украшением нашего офиса. Внимание к деталям просто поразительное!',
    rating: 5
  },
  {
    name: 'Алексей Волков',
    role: 'CTO',
    company: 'InnovateTech',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/4facfe/ffffff?text=AV',
    content: 'Веб-приложение, разработанное Артёмом, полностью автоматизировало наши бизнес-процессы. Рекомендую!',
    rating: 5
  },
  {
    name: 'Мария Козлова',
    role: 'Блогер',
    company: 'YouTube',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/43e97b/ffffff?text=MK',
    content: 'Благодаря Diana AI мой канал стал намного интерактивнее. Подписчики в восторге от нового ассистента!',
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Что говорят о моей работе довольные клиенты
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-xl mx-auto">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-sm italic mb-4 text-muted-foreground">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
