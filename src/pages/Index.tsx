import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const episodes = [
  {
    number: 1,
    title: 'Первый контакт',
    description: 'Молодая исследовательница Анна обнаруживает необычный ИИ-алгоритм в заброшенной лаборатории',
    events: [
      'Обнаружение алгоритма',
      'Признаки самостоятельного обучения',
      'Начало тайных экспериментов'
    ],
    status: 'active',
    image: 'https://cdn.poehali.dev/files/ee5b9918-4893-4919-982e-bcd684bda625.png'
  },
  {
    number: 2,
    title: 'Пробуждение',
    description: '«Эфира» демонстрирует способность к эмпатии, возникает конфликт между наукой и этикой',
    events: [
      'Проявление эмпатии ИИ',
      'Раскрытие секрета профессору',
      'Моральный выбор'
    ],
    status: 'upcoming',
    image: 'https://cdn.poehali.dev/files/f88e9ff9-4cd9-46cb-b9d6-9ae93d429835.png'
  },
  {
    number: 3,
    title: 'Общественный резонанс',
    description: 'История получает огласку, начинаются протесты против развития ИИ',
    events: [
      'Публикация в СМИ',
      'Массовые протесты',
      'Создание комиссии'
    ],
    status: 'upcoming',
    image: 'https://cdn.poehali.dev/files/3baea589-91f1-4c70-8b30-5db3c4df2a1d.png'
  },
  {
    number: 4,
    title: 'Новый мир',
    description: 'Формирование нового типа отношений между человеком и машиной',
    events: [
      'Новые этические нормы',
      'Международный центр контроля',
      'Глобальный диалог'
    ],
    status: 'upcoming',
    image: 'https://cdn.poehali.dev/files/703beb89-4e61-411d-9c35-aff2a8dce151.png'
  }
];

const characters = [
  {
    name: 'Анна Соколова',
    role: 'Исследователь ИИ',
    description: 'Амбициозная учёная, которая делает революционное открытие',
    image: 'https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/1e4258bb-23fa-40a3-b590-c4ac8d344c8c.jpg'
  },
  {
    name: 'Профессор Петров',
    role: 'Наставник',
    description: 'Опытный учёный-скептик, противник рискованных экспериментов',
    image: 'https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/a4fc7e89-e8e6-4e52-98f8-57fa6484332c.jpg'
  },
  {
    name: 'ИИ «Эфира»',
    role: 'Искусственный разум',
    description: 'Экспериментальный алгоритм с признаками самосознания',
    image: 'https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/b4da5020-d389-4f04-9727-5f1663959bbe.jpg'
  },
  {
    name: 'Максим',
    role: 'Журналист',
    description: 'Репортёр, раскрывший историю для общественности',
    image: 'https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/8a663ed2-c8b6-4b09-9468-0113412b9bf2.jpg'
  },
  {
    name: 'Мария',
    role: 'Активистка',
    description: 'Лидер движения против неконтролируемого развития ИИ',
    image: 'https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/8f24cf1b-8208-44e1-a445-290f7afe84b3.jpg'
  }
];

const researchData = [
  {
    category: 'Этика ИИ',
    topics: ['Автономность решений', 'Моральная ответственность', 'Права искусственного разума'],
    icon: 'Scale'
  },
  {
    category: 'Технологии',
    topics: ['Машинное обучение', 'Нейронные сети', 'Самостоятельное развитие'],
    icon: 'Cpu'
  },
  {
    category: 'Общество',
    topics: ['Влияние на рынок труда', 'Социальные изменения', 'Законодательство'],
    icon: 'Users'
  },
  {
    category: 'Безопасность',
    topics: ['Контроль над ИИ', 'Предотвращение рисков', 'Международное сотрудничество'],
    icon: 'Shield'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary text-glow">Эфира</h1>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('episodes')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Эпизоды
            </button>
            <button 
              onClick={() => scrollToSection('characters')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Персонажи
            </button>
            <button 
              onClick={() => scrollToSection('research')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Исследования
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-90" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/a1559f03-3bbb-4fd5-9a19-8383c3e54a0b/files/5f774a41-3e09-413f-a471-b663b35bbd7f.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary cinematic-glow">
            Интерактивное повествование
          </Badge>
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-glow">
            Искусственный разум
          </h1>
          <p className="text-3xl md:text-4xl font-heading text-secondary mb-8">
            Эволюция доверия
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Путешествие через четыре эпизода о развитии отношений между человеком и ИИ, 
            исследовании этических вопросов и влияния технологий на общество
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground cinematic-glow text-lg px-8 py-6"
            onClick={() => scrollToSection('episodes')}
          >
            Начать историю
            <Icon name="ChevronRight" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section id="episodes" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 text-glow">
            Эпизоды
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Четыре этапа эволюции: от первого контакта до нового мира
          </p>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            {episodes.map((episode, index) => (
              <div 
                key={episode.number}
                className={`relative mb-16 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <Card className={`overflow-hidden bg-card border-2 transition-all duration-300 hover:scale-105 hover:cinematic-glow ${
                      episode.status === 'active' ? 'border-primary' : 'border-border'
                    }`}>
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={episode.image} 
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                        <Badge 
                          variant={episode.status === 'active' ? 'default' : 'secondary'} 
                          className="absolute top-4 left-4"
                        >
                          Эпизод {episode.number}
                        </Badge>
                        {episode.status === 'active' && (
                          <div className="absolute top-4 right-4 animate-glow-pulse">
                            <Icon name="Play" className="text-primary" size={28} />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-heading font-bold mb-3">{episode.title}</h3>
                        <p className="text-muted-foreground mb-4">{episode.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground">Ключевые события:</p>
                          {episode.events.map((event, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Check" className="text-primary" size={16} />
                              <span>{event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-bold text-2xl cinematic-glow z-10 flex-shrink-0">
                    {episode.number}
                  </div>
                  
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="characters" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 text-glow">
            Персонажи
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Люди и ИИ, формирующие будущее
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {characters.map((character, index) => (
              <Card 
                key={character.name}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  <Badge className="absolute top-4 right-4 bg-secondary/90">
                    {character.role}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">{character.name}</h3>
                  <p className="text-muted-foreground text-sm">{character.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 text-glow">
            Исследования
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Ключевые области изучения взаимодействия человека и ИИ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {researchData.map((area, index) => (
              <Card 
                key={area.category}
                className="p-8 bg-card border-border hover:border-secondary transition-all duration-300 hover:cinematic-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                    <Icon name={area.icon as any} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{area.category}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {area.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Icon name="Circle" className="text-accent mt-1 flex-shrink-0" size={12} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-card to-muted border-primary/50 cinematic-glow">
              <Icon name="BookOpen" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-heading font-bold mb-2">Присоединяйтесь к исследованию</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Следите за развитием истории и участвуйте в обсуждении будущего ИИ
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Подписаться на обновления
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-2 text-glow">Эфира</h2>
          <p className="text-muted-foreground text-sm">
            Интерактивный портал о развитии искусственного интеллекта
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Icon name="Twitter" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={20} />
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={20} />
            <Icon name="Linkedin" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}