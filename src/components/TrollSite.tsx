import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TrollSite = () => {
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Мигающий фон */}
      <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

      {/* Глитч эффект */}
      {showGlitch && (
        <div className="absolute inset-0 bg-red-500 opacity-20 animate-ping"></div>
      )}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8 animate-bounce font-['Montserrat'] drop-shadow-2xl">
            🎉 СУПЕР САЙТ! 🎉
          </h1>

          <div className="bg-yellow-300 text-black p-6 rounded-lg border-4 border-red-500 mb-8 animate-pulse">
            <h2 className="text-2xl font-bold mb-4">
              ⚡ ВНИМАНИЕ! ВАЖНАЯ ИНФОРМАЦИЯ! ⚡
            </h2>
            <p className="text-lg">
              Добро пожаловать на самый крутой сайт в интернете! Здесь ты
              найдешь всё что нужно и даже больше!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-500 text-white p-6 rounded-lg animate-bounce border-4 border-yellow-400">
              <Icon name="Gift" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ПОДАРКИ!</h3>
              <p>Получи свой подарок прямо сейчас!</p>
              <Button className="mt-4 bg-red-500 hover:bg-red-600 animate-pulse">
                ПОЛУЧИТЬ!
              </Button>
            </div>

            <div
              className="bg-green-500 text-white p-6 rounded-lg animate-bounce border-4 border-pink-400"
              style={{ animationDelay: "0.2s" }}
            >
              <Icon name="Trophy" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">КОНКУРС!</h3>
              <p>Участвуй в розыгрыше призов!</p>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600 animate-pulse">
                УЧАСТВОВАТЬ!
              </Button>
            </div>

            <div
              className="bg-purple-500 text-white p-6 rounded-lg animate-bounce border-4 border-green-400"
              style={{ animationDelay: "0.4s" }}
            >
              <Icon name="Star" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">СКИДКИ!</h3>
              <p>Невероятные скидки до 99%!</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 animate-pulse">
                ПОКУПАТЬ!
              </Button>
            </div>
          </div>

          <div className="bg-red-600 text-white p-8 rounded-lg mb-8 border-4 border-yellow-400">
            <h2 className="text-3xl font-bold mb-4 animate-pulse">
              🔥 ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ! 🔥
            </h2>
            <p className="text-xl mb-6">
              Только сегодня! Специальная цена! Не упусти шанс!
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold animate-bounce"
              >
                КУПИТЬ СЕЙЧАС!
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                УЗНАТЬ БОЛЬШЕ!
              </Button>
            </div>
          </div>

          {/* Бегущая строка */}
          <div className="bg-black text-yellow-400 p-4 rounded-lg overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-2xl font-bold">
              🎊 АКЦИЯ! СКИДКИ! ПОДАРКИ! ПРИЗЫ! КОНКУРСЫ! НЕ УПУСТИ! ТОЛЬКО
              СЕГОДНЯ! 🎊
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrollSite;
