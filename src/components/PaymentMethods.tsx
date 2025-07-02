import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const paymentMethods = [
  {
    name: "QIWI Кошелек",
    description: "Быстрые переводы через QIWI",
    icon: "Wallet",
    color: "bg-orange-600",
  },
  {
    name: "СберБанк Онлайн",
    description: "Оплата через СБП и карты Сбера",
    icon: "CreditCard",
    color: "bg-green-600",
  },
  {
    name: "Иностранные карты",
    description: "Visa, Mastercard, PayPal",
    icon: "Globe",
    color: "bg-blue-600",
  },
  {
    name: "ЮMoney",
    description: "Электронные кошельки ЮMoney",
    icon: "Banknote",
    color: "bg-purple-600",
  },
];

const PaymentMethods = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Способы оплаты
          </h2>
          <p className="text-xl text-gray-400 font-['Open_Sans']">
            Выберите удобный способ оплаты из множества доступных вариантов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center`}
                  >
                    <Icon
                      name={method.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                </div>
                <CardTitle className="text-white text-lg font-['Montserrat']">
                  {method.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-['Montserrat']">
                Безопасность платежей
              </h3>
              <p className="text-gray-400 mb-6">
                Мы используем современные технологии шифрования для защиты ваших
                данных. Все транзакции проходят через защищенные каналы связи.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span className="text-gray-300">SSL-шифрование данных</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Lock" size={20} className="text-blue-400 mr-3" />
                  <span className="text-gray-300">
                    Защищенные платежные системы
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-400 mr-3"
                  />
                  <span className="text-gray-300">Проверенные партнеры</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Icon
                  name="Headphones"
                  size={64}
                  className="text-blue-400 mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-white mb-2">
                  Нужна помощь?
                </h4>
                <p className="text-gray-400">
                  Наша служба поддержки работает круглосуточно
                </p>
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с поддержкой
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            © 2024 RobloxDonate. Все права защищены. Мы не связаны с Roblox
            Corporation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
