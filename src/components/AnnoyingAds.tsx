import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AnnoyingAds = () => {
  const [popups, setPopups] = useState<
    Array<{ id: number; type: string; x: number; y: number }>
  >([]);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerPosition, setBannerPosition] = useState({ x: 0, y: 0 });
  const [popupCounter, setPopupCounter] = useState(0);

  const adTypes = [
    {
      type: "win",
      title: "🎉 ПОЗДРАВЛЯЕМ!",
      content: "Вы выиграли iPhone 15 Pro! Кликните чтобы получить!",
      color: "bg-green-500",
    },
    {
      type: "urgent",
      title: "⚠️ СРОЧНО!",
      content: "Ваш компьютер заражен! Скачайте антивирус прямо сейчас!",
      color: "bg-red-500",
    },
    {
      type: "discount",
      title: "💰 СКИДКА 90%!",
      content: "Невероятная распродажа! Только сегодня!",
      color: "bg-blue-500",
    },
    {
      type: "alert",
      title: "🚨 ВНИМАНИЕ!",
      content: "Осталось 3 минуты до окончания акции!",
      color: "bg-orange-500",
    },
    {
      type: "prize",
      title: "🏆 ПРИЗ ДЛЯ ВАС!",
      content: "Заберите свой подарок за регистрацию!",
      color: "bg-purple-500",
    },
  ];

  // Всплывающие окна каждые 30 секунд
  useEffect(() => {
    const popupInterval = setInterval(() => {
      const randomAd = adTypes[Math.floor(Math.random() * adTypes.length)];
      const newPopup = {
        id: Date.now(),
        type: randomAd.type,
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 200),
      };

      setPopups((prev) => [...prev, newPopup]);
      setPopupCounter((prev) => prev + 1);

      // Звуковое уведомление (имитация)
      console.log("🔊 НОВАЯ РЕКЛАМА!");
    }, 30000); // 30 секунд

    return () => clearInterval(popupInterval);
  }, []);

  // Движущийся баннер
  useEffect(() => {
    setShowBanner(true);

    const bannerInterval = setInterval(() => {
      setBannerPosition({
        x: Math.random() * (window.innerWidth - 400),
        y: Math.random() * (window.innerHeight - 100),
      });
    }, 5000);

    return () => clearInterval(bannerInterval);
  }, []);

  // Закрытие попапа (но открытие нового!)
  const closePopup = (id: number) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));

    // Подвох: при попытке закрыть открывается еще 2 попапа!
    setTimeout(() => {
      const newPopups = [];
      for (let i = 0; i < 2; i++) {
        const randomAd = adTypes[Math.floor(Math.random() * adTypes.length)];
        newPopups.push({
          id: Date.now() + i,
          type: randomAd.type,
          x: Math.random() * (window.innerWidth - 300),
          y: Math.random() * (window.innerHeight - 200),
        });
      }
      setPopups((prev) => [...prev, ...newPopups]);
    }, 500);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Движущийся баннер */}
      {showBanner && (
        <div
          className="fixed bg-yellow-400 text-black p-4 border-4 border-red-500 rounded-lg shadow-2xl animate-bounce pointer-events-auto transition-all duration-1000"
          style={{
            left: bannerPosition.x,
            top: bannerPosition.y,
            zIndex: 1000,
          }}
        >
          <div className="flex items-center space-x-2">
            <Icon name="Gift" size={24} className="animate-spin" />
            <span className="font-bold text-lg animate-pulse">
              🎁 БЕСПЛАТНЫЙ ПОДАРОК! КЛИКНИ СЮДА! 🎁
            </span>
          </div>
        </div>
      )}

      {/* Всплывающие окна */}
      {popups.map((popup) => {
        const adData =
          adTypes.find((ad) => ad.type === popup.type) || adTypes[0];

        return (
          <Card
            key={popup.id}
            className={`fixed w-80 ${adData.color} text-white border-4 border-yellow-400 shadow-2xl animate-pulse pointer-events-auto`}
            style={{
              left: popup.x,
              top: popup.y,
              zIndex: 999 + popup.id,
            }}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold animate-bounce">
                  {adData.title}
                </CardTitle>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => closePopup(popup.id)}
                  className="bg-red-600 hover:bg-red-700 animate-pulse"
                >
                  ❌
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 font-semibold">{adData.content}</p>
              <div className="flex space-x-2">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold animate-bounce flex-1"
                  onClick={() => closePopup(popup.id)}
                >
                  КЛИКНУТЬ!
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black animate-bounce"
                  onClick={() => closePopup(popup.id)}
                >
                  НЕТ
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Счетчик рекламы */}
      <div className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded-lg border-2 border-yellow-400 pointer-events-auto animate-pulse">
        <span className="font-bold">Реклама: {popupCounter}</span>
      </div>

      {/* Боковые баннеры */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rotate-90 origin-left pointer-events-auto animate-bounce">
        <span className="font-bold text-sm">🔥 ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ! 🔥</span>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 -rotate-90 origin-right pointer-events-auto animate-bounce">
        <span className="font-bold text-sm">💎 ЭКСКЛЮЗИВ! 💎</span>
      </div>

      {/* Нижний баннер */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center py-3 border-t-4 border-yellow-400 pointer-events-auto animate-pulse">
        <span className="font-bold text-lg">
          ⏰ АКЦИЯ ЗАКАНЧИВАЕТСЯ! НЕ УПУСТИ ШАНС! КЛИКНИ СЮДА! ⏰
        </span>
      </div>
    </div>
  );
};

export default AnnoyingAds;
