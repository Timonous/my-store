import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { goodsImages } from "../../lib/goodsImageMap"
import { useCartStore } from "../../app/cartStore";
import type { Product } from "../../api/products";

export const ProductCard = ({ product }: { product: Product }) => {
  const { items, addToCart, increment, decrement } = useCartStore();
  const cartItem = items.find((i) => i.id === product.id);

  return (
    <Card className="w-[130px] h-61 bg-transparent border-none">
      <CardContent className="p-0 space-y-2">
        <div
          className="relative w-[130px] h-[130px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${goodsImages[product.image] || ""})` }}
        >
          {!product.inStock && (
            <Badge className="absolute top-[7px] left-[7px] bg-white text-black text-[10px]">
              Нет в наличии
            </Badge>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-white text-xs">{product.name}</h3>
          <p className="text-white text-[10px]">{product.weight}</p>
          <p className="text-[#6a6a6a] text-[11px] line-through">{product.oldPrice} ₽/кг</p>
          <p className="text-white text-[14px]">{product.price} ₽/кг</p>

          {!cartItem ? (
            <Button
              className="w-full h-[29px] bg-[#373737] hover:bg-[#4a4a4a] text-white text-xs"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  weight: product.weight,
                })
              }
            >
              В корзину
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-[#ff7f00] rounded-[15px] px-2 h-[29px]">
              <button onClick={() => decrement(product.id)} className="text-white">−</button>
              <span className="text-white text-xs">{cartItem.quantity} кг</span>
              <button onClick={() => increment(product.id)} className="text-white">+</button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;