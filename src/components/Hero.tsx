import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Gamepad2" size={48} className="text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold font-['Montserrat']">
              RobloxDonate
            </h1>
          </div>

          <p className="text-xl text-gray-300 mb-8 font-['Open_Sans']">
            Профессиональная платформа для доната в Roblox
          </p>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Автоматическая выдача игровых валют и предметов • Поддержка всех
            популярных платежных систем • Мгновенные транзакции
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Начать покупки
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
            >
              Связаться с нами
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-yellow-400 mr-3" />
              <span className="text-gray-300">Мгновенная выдача</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-green-400 mr-3" />
              <span className="text-gray-300">100% безопасность</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Clock" size={24} className="text-blue-400 mr-3" />
              <span className="text-gray-300">24/7 поддержка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
