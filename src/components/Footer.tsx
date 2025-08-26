import { Instagram, MessageSquare, Palette, Send, TrendingUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3 gradient-text">Артём Пономарёв</h3>
            <p className="text-xs text-muted-foreground mb-3 max-w-md leading-relaxed">
              Предприниматель, трейдер и IT-разработчик. Создаю инновационные решения 
              на стыке технологий, творчества и бизнеса.
            </p>
            <div className="flex space-x-3">
              <a href="https://t.me/artponomarev" target="_blank" rel="noopener noreferrer" title="Telegram" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="https://wa.me/79025850404" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/artponomarev" target="_blank" rel="noopener noreferrer" title="Личный Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
               <a href="https://instagram.com/ART_IRBIT" target="_blank" rel="noopener noreferrer" title="ART_IRBIT Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Palette className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Услуги</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <TrendingUp className="w-3 h-3 inline mr-1.5" />
                Автоматизация торговли
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Telegram-боты
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Веб-приложения
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Palette className="w-3 h-3 inline mr-1.5" />
                Искусство и дизайн
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Проекты</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                ART_IRBIT
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                GPT_TURBO_ROBOT
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Diana AI
              </li>
               <li className="hover:text-primary transition-colors cursor-pointer">
                Lillian AI
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2025 Артём Пономарёв. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
