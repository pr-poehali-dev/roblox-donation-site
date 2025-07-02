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

const products = [
  {
    id: 1,
    name: "Robux Starter",
    price: "299 ₽",
    robux: "400 R$",
    description: "Отличный стартовый пакет для новичков",
    popular: false,
    icon: "Coins",
  },
  {
    id: 2,
    name: "Robux Premium",
    price: "599 ₽",
    robux: "800 R$",
    description: "Популярный выбор среди игроков",
    popular: true,
    icon: "Crown",
  },
  {
    id: 3,
    name: "Robux Ultimate",
    price: "999 ₽",
    robux: "1,600 R$",
    description: "Максимальная выгода для активных игроков",
    popular: false,
    icon: "Gem",
  },
  {
    id: 4,
    name: "Premium Items",
    price: "799 ₽",
    robux: "Уникальные предметы",
    description: "Эксклюзивные аксессуары и скины",
    popular: false,
    icon: "Star",
  },
];

const ProductCatalog = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Каталог товаров
          </h2>
          <p className="text-xl text-gray-400 font-['Open_Sans']">
            Выберите подходящий пакет для вашей игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {product.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon
                      name={product.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                </div>
                <CardTitle className="text-white text-xl font-['Montserrat']">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {product.price}
                  </div>
                  <div className="text-lg text-white">{product.robux}</div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Все покупки обрабатываются автоматически в течение 1-2 минут
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <Icon name="Check" size={20} className="text-green-400 mr-2" />
              <span className="text-gray-300">Мгновенная выдача</span>
            </div>
            <div className="flex items-center">
              <Icon name="RefreshCw" size={20} className="text-blue-400 mr-2" />
              <span className="text-gray-300">Автоматическая система</span>
            </div>
            <div className="flex items-center">
              <Icon
                name="Headphones"
                size={20}
                className="text-purple-400 mr-2"
              />
              <span className="text-gray-300">Техподдержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
