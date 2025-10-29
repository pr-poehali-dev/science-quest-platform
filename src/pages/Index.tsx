import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Quest {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  reward: number;
  team: number;
  progress: number;
  status: 'active' | 'completed' | 'available';
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('quests');

  const quests: Quest[] = [
    {
      id: 1,
      title: 'Разработка квантового алгоритма для оптимизации энергосетей',
      category: 'Квантовые вычисления',
      difficulty: 'Эксперт',
      reward: 2500,
      team: 4,
      progress: 65,
      status: 'active'
    },
    {
      id: 2,
      title: 'ИИ-модель для ранней диагностики нейродегенеративных заболеваний',
      category: 'Биоинформатика',
      difficulty: 'Продвинутый',
      reward: 2000,
      team: 5,
      progress: 40,
      status: 'active'
    },
    {
      id: 3,
      title: 'Создание биоразлагаемого полимера из растительного сырья',
      category: 'Материаловедение',
      difficulty: 'Средний',
      reward: 1500,
      team: 0,
      progress: 0,
      status: 'available'
    },
    {
      id: 4,
      title: 'Система прогнозирования климатических изменений на основе Big Data',
      category: 'Экология',
      difficulty: 'Продвинутый',
      reward: 1800,
      team: 3,
      progress: 85,
      status: 'active'
    }
  ];

  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Анна Петрова', role: 'Квантовый физик', avatar: '👩‍🔬' },
    { id: 2, name: 'Иван Смирнов', role: 'ML-инженер', avatar: '👨‍💻' },
    { id: 3, name: 'Мария Козлова', role: 'Биолог', avatar: '👩‍🔬' },
    { id: 4, name: 'Дмитрий Волков', role: 'Data Scientist', avatar: '👨‍💼' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Команда Нейронов', score: 15420, badge: '🥇' },
    { rank: 2, name: 'Квантовые Исследователи', score: 14890, badge: '🥈' },
    { rank: 3, name: 'BioTech Pioneers', score: 13750, badge: '🥉' },
    { rank: 4, name: 'Data Wizards', score: 12340, badge: '🏅' },
    { rank: 5, name: 'AI Innovators', score: 11980, badge: '🏅' }
  ];

  const achievements = [
    { icon: '🎯', name: 'Первый квест', unlocked: true },
    { icon: '🔥', name: '10 дней подряд', unlocked: true },
    { icon: '👥', name: 'Лидер команды', unlocked: true },
    { icon: '⭐', name: '1000 очков', unlocked: true },
    { icon: '🏆', name: 'Эксперт', unlocked: false },
    { icon: '💎', name: 'NFT коллекция', unlocked: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Эксперт': return 'bg-accent text-accent-foreground';
      case 'Продвинутый': return 'bg-secondary text-secondary-foreground';
      case 'Средний': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'border-primary glow';
      case 'completed': return 'border-secondary';
      case 'available': return 'border-muted';
      default: return 'border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl animate-pulse-glow">🚀</div>
              <h1 className="text-2xl font-heading font-bold text-primary">Научный поиск</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Zap" size={20} className="text-accent" />
                <span className="font-semibold">3,450 XP</span>
              </div>
              <Button className="hover-lift">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card">
            <TabsTrigger value="home" className="gap-2">
              <Icon name="Home" size={18} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="quests" className="gap-2">
              <Icon name="Target" size={18} />
              Квесты
            </TabsTrigger>
            <TabsTrigger value="teams" className="gap-2">
              <Icon name="Users" size={18} />
              Команды
            </TabsTrigger>
            <TabsTrigger value="rating" className="gap-2">
              <Icon name="Trophy" size={18} />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="gap-2">
              <Icon name="Award" size={18} />
              Портфолио
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Активные квесты</h3>
                    <p className="text-4xl font-bold text-primary">3</p>
                  </div>
                  <Icon name="Rocket" size={32} className="text-primary animate-float" />
                </div>
                <p className="text-muted-foreground">В процессе выполнения</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Команда</h3>
                    <p className="text-4xl font-bold text-secondary">{teamMembers.length}</p>
                  </div>
                  <Icon name="Users" size={32} className="text-secondary animate-float" />
                </div>
                <p className="text-muted-foreground">Участников в вашей команде</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">NFT-публикации</h3>
                    <p className="text-4xl font-bold text-accent">7</p>
                  </div>
                  <Icon name="Diamond" size={32} className="text-accent animate-float" />
                </div>
                <p className="text-muted-foreground">Результатов исследований</p>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="font-heading font-bold text-2xl mb-4">Последние достижения</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <Card key={index} className={`p-4 hover-lift ${achievement.unlocked ? 'border-primary glow' : 'opacity-50'}`}>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <p className="font-semibold">{achievement.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {achievement.unlocked ? 'Разблокировано' : 'Заблокировано'}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quests" className="animate-fade-in">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading font-bold text-2xl">Доступные квесты</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover-lift">
                  <Icon name="Filter" size={14} className="mr-1" />
                  Все категории
                </Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {quests.map((quest) => (
                <Card key={quest.id} className={`p-6 hover-lift transition-all ${getStatusColor(quest.status)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{quest.category}</Badge>
                        <Badge className={`text-xs ${getDifficultyColor(quest.difficulty)}`}>
                          {quest.difficulty}
                        </Badge>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{quest.title}</h3>
                    </div>
                  </div>

                  {quest.status === 'active' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="font-semibold">{quest.progress}%</span>
                      </div>
                      <Progress value={quest.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Coins" size={16} className="text-accent" />
                        <span className="font-semibold">{quest.reward} XP</span>
                      </div>
                      {quest.team > 0 && (
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} className="text-secondary" />
                          <span>{quest.team} чел.</span>
                        </div>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      variant={quest.status === 'active' ? 'default' : 'outline'}
                      className="hover-lift"
                    >
                      {quest.status === 'active' ? 'Продолжить' : 'Принять'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teams" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl mb-2">Ваша команда</h2>
              <p className="text-muted-foreground">Междисциплинарные эксперты для решения сложных задач</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <Card key={member.id} className="p-6 text-center hover-lift border-primary/50">
                  <div className="text-5xl mb-3">{member.avatar}</div>
                  <h3 className="font-heading font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="MessageCircle" size={14} className="mr-1" />
                    Написать
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-6 border-dashed border-2 border-primary/30 bg-primary/5 hover-lift cursor-pointer">
              <div className="text-center">
                <Icon name="UserPlus" size={48} className="mx-auto mb-3 text-primary" />
                <h3 className="font-heading font-semibold text-lg mb-2">Пригласить участника</h3>
                <p className="text-muted-foreground mb-4">Расширьте свою команду новыми экспертами</p>
                <Button>
                  <Icon name="Search" size={16} className="mr-2" />
                  Найти специалиста
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="rating" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl mb-2">Таблица лидеров</h2>
              <p className="text-muted-foreground">Топ команд Научный поиск</p>
            </div>

            <Card className="overflow-hidden">
              <div className="divide-y divide-border">
                {leaderboard.map((team) => (
                  <div 
                    key={team.rank} 
                    className={`p-6 flex items-center justify-between hover:bg-muted/50 transition-colors ${
                      team.rank <= 3 ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl font-bold text-muted-foreground w-8">
                        #{team.rank}
                      </div>
                      <div className="text-3xl">{team.badge}</div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{team.name}</h3>
                        <p className="text-sm text-muted-foreground">Команда</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{team.score.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">опыта</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Ваша команда: 18 место</p>
                    <p className="text-sm text-muted-foreground">8,450 опыта • До топ-10: 3,890 XP</p>
                  </div>
                </div>
                <Button variant="outline">Подробнее</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl mb-2">Достижения и бейджи</h2>
              <p className="text-muted-foreground">Ваш путь в Научный поиск</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`p-6 text-center transition-all hover-lift ${
                    achievement.unlocked 
                      ? 'border-primary glow cursor-pointer' 
                      : 'opacity-50 grayscale'
                  }`}
                >
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{achievement.name}</h3>
                  <Badge variant={achievement.unlocked ? 'default' : 'secondary'}>
                    {achievement.unlocked ? 'Разблокировано' : 'Заблокировано'}
                  </Badge>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-heading font-bold text-2xl mb-4">NFT-публикации</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((nft) => (
                  <Card key={nft} className="p-6 hover-lift border-accent/50 bg-gradient-to-br from-accent/10 to-accent/5">
                    <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="FileText" size={48} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">Исследование #{nft}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Квантовая оптимизация энергосетей</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Вклад: 45%</span>
                      <Icon name="ExternalLink" size={16} className="text-accent" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;