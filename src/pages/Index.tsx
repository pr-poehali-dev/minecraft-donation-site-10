import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      name: "VIP",
      price: "199₽",
      color: "bg-green-500",
      features: ["Цветной ник", "Приват 10x10", "Кит /kit vip"],
      popular: false,
    },
    {
      name: "VIP+",
      price: "399₽",
      color: "bg-blue-500",
      features: [
        "Все VIP привилегии",
        "Приват 20x20",
        "Кит /kit vip+",
        "Полет в лобби",
      ],
      popular: false,
    },
    {
      name: "PREMIUM",
      price: "699₽",
      color: "bg-purple-500",
      features: [
        "Все VIP+ привилегии",
        "Приват 30x30",
        "Кит /kit premium",
        "Команда /back",
      ],
      popular: true,
    },
    {
      name: "DELUXE",
      price: "999₽",
      color: "bg-orange-500",
      features: [
        "Все PREMIUM привилегии",
        "Приват 50x50",
        "Кит /kit deluxe",
        "Команда /heal",
      ],
      popular: false,
    },
    {
      name: "LEGEND",
      price: "1499₽",
      color: "bg-red-500",
      features: [
        "Все DELUXE привилегии",
        "Приват 100x100",
        "Кит /kit legend",
        "Команда /fly",
      ],
      popular: false,
    },
    {
      name: "ULTRA",
      price: "2499₽",
      color: "bg-yellow-500",
      features: [
        "Все LEGEND привилегии",
        "Безлимитный приват",
        "Кит /kit ultra",
        "Все команды",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-green to-minecraft-brown">
      {/* Header */}
      <nav className="bg-minecraft-darkGray/90 backdrop-blur-sm border-b-4 border-minecraft-stone sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green minecraft-pixel"></div>
              <h1 className="text-2xl minecraft-font text-white">
                MINECRAFT DONATIONS
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-minecraft-stone/50"
              >
                <Icon name="Home" size={20} />
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-minecraft-stone/50"
              >
                <Icon name="Package" size={20} />
                Донаты
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-minecraft-stone/50"
              >
                <Icon name="User" size={20} />
                Профиль
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-minecraft-stone/50"
              >
                <Icon name="MessageCircle" size={20} />
                Поддержка
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center minecraft-pixel opacity-20"
          style={{
            backgroundImage:
              "url('img/49db1560-1271-4d8d-8450-087b1a1b37dd.jpg')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl minecraft-font text-white mb-6">
            ЛУЧШИЙ СЕРВЕР
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Поддержи наш сервер и получи уникальные привилегии! Все донаты идут
            на развитие проекта.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="minecraft-button minecraft-font text-white px-8 py-4 text-lg">
              <Icon name="Play" size={24} />
              IP: play.server.ru
            </Button>
            <Button
              variant="outline"
              className="minecraft-button minecraft-font border-white text-white px-8 py-4 text-lg"
            >
              <Icon name="Users" size={24} />
              Онлайн: 1,247
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16 bg-minecraft-darkGray/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl minecraft-font text-center text-white mb-12">
            ДОНАТ-ПАКЕТЫ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden border-2 ${pkg.popular ? "border-minecraft-gold" : "border-minecraft-stone"} bg-minecraft-darkGray/80 backdrop-blur-sm`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-minecraft-gold text-black font-bold">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 ${pkg.color} minecraft-pixel flex items-center justify-center`}
                  >
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl minecraft-font text-white">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-3xl minecraft-font text-minecraft-gold">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-200"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-minecraft-green mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full minecraft-button minecraft-font text-white">
                    <Icon name="ShoppingCart" size={20} />
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unban Section */}
      <section className="py-16 bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl minecraft-font text-white mb-6">РАЗБАН</h2>
            <p className="text-gray-200 mb-8">
              Получил бан? Не беда! Можешь купить разбан и продолжить игру.
              Учти, что повторное нарушение может привести к перманентному бану.
            </p>
            <Card className="bg-minecraft-darkGray/80 backdrop-blur-sm border-2 border-red-500">
              <CardHeader>
                <CardTitle className="minecraft-font text-white text-2xl">
                  <Icon
                    name="Shield"
                    size={32}
                    className="text-red-500 mx-auto mb-2"
                  />
                  РАЗБАН
                </CardTitle>
                <CardDescription className="text-3xl minecraft-font text-red-500">
                  499₽
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-gray-200">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-minecraft-green mr-2"
                    />
                    Разбан любого аккаунта
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-minecraft-green mr-2"
                    />
                    Мгновенная активация
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="AlertTriangle"
                      size={16}
                      className="text-yellow-500 mr-2"
                    />
                    Не действует на читы
                  </li>
                </ul>
                <Button className="w-full minecraft-button minecraft-font text-white bg-red-600 hover:bg-red-700">
                  <Icon name="Unlock" size={20} />
                  КУПИТЬ РАЗБАН
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-darkGray py-8 border-t-4 border-minecraft-stone">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Minecraft Donations. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" size={20} />
              Discord
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Send" size={20} />
              Telegram
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Globe" size={20} />
              Сайт
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
