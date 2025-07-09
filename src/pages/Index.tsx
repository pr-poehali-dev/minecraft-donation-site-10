import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <h1 className="text-lg md:text-2xl minecraft-font text-white">
                MINECRAFT DONATIONS
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-minecraft-darkGray border-minecraft-stone"
                >
                  <div className="flex flex-col space-y-4 mt-8">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-minecraft-stone/50 justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="Home" size={20} />
                      Главная
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-minecraft-stone/50 justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="Package" size={20} />
                      Донаты
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-minecraft-stone/50 justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="User" size={20} />
                      Профиль
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-minecraft-stone/50 justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="MessageCircle" size={20} />
                      Поддержка
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center minecraft-pixel opacity-20"
          style={{
            backgroundImage:
              "url('img/49db1560-1271-4d8d-8450-087b1a1b37dd.jpg')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-6xl minecraft-font text-white mb-6">
            ЛУЧШИЙ СЕРВЕР
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto px-4">
            Поддержи наш сервер и получи уникальные привилегии! Все донаты идут
            на развитие проекта.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
            <Button className="minecraft-button minecraft-font text-white px-4 md:px-8 py-4 text-sm md:text-lg">
              <Icon name="Play" size={20} />
              IP: Glacomine.aternos.me
            </Button>
            <Button
              variant="outline"
              className="minecraft-button minecraft-font border-white text-white px-4 md:px-8 py-4 text-sm md:text-lg"
            >
              <Icon name="Users" size={20} />
              Онлайн: 1,247
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16 bg-minecraft-darkGray/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl minecraft-font text-center text-white mb-8 md:mb-12">
            ДОНАТ-ПАКЕТЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                <CardHeader className="text-center p-4 md:p-6">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 ${pkg.color} minecraft-pixel flex items-center justify-center`}
                  >
                    <Icon
                      name="Crown"
                      size={24}
                      className="text-white md:w-8 md:h-8"
                    />
                  </div>
                  <CardTitle className="text-xl md:text-2xl minecraft-font text-white">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-2xl md:text-3xl minecraft-font text-minecraft-gold">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-200"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-minecraft-green mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full minecraft-button minecraft-font text-white text-sm md:text-base py-3">
                    <Icon name="ShoppingCart" size={18} />
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unban Section */}
      <section className="py-12 md:py-16 bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl minecraft-font text-white mb-6">
              РАЗБАН
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-8 px-4">
              Получил бан? Не беда! Можешь купить разбан и продолжить игру.
              Учти, что повторное нарушение может привести к перманентному бану.
            </p>
            <Card className="bg-minecraft-darkGray/80 backdrop-blur-sm border-2 border-red-500">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="minecraft-font text-white text-xl md:text-2xl">
                  <Icon
                    name="Shield"
                    size={24}
                    className="text-red-500 mx-auto mb-2 md:w-8 md:h-8"
                  />
                  РАЗБАН
                </CardTitle>
                <CardDescription className="text-2xl md:text-3xl minecraft-font text-red-500">
                  499₽
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ul className="space-y-2 mb-6 text-gray-200 text-sm md:text-base">
                  <li className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-minecraft-green mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Разбан любого аккаунта</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-minecraft-green mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Мгновенная активация</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="AlertTriangle"
                      size={16}
                      className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Не действует на читы</span>
                  </li>
                </ul>
                <Button className="w-full minecraft-button minecraft-font text-white bg-red-600 hover:bg-red-700 text-sm md:text-base py-3">
                  <Icon name="Unlock" size={18} />
                  КУПИТЬ РАЗБАН
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-darkGray py-6 md:py-8 border-t-4 border-minecraft-stone">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            © 2024 Minecraft Donations. Все права защищены.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white text-sm md:text-base"
            >
              <Icon name="MessageCircle" size={18} />
              Discord
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white text-sm md:text-base"
            >
              <Icon name="Send" size={18} />
              Telegram
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white text-sm md:text-base"
            >
              <Icon name="Globe" size={18} />
              Сайт
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
