import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ChevronRight, ChevronUp } from "lucide-react"
import { useProductStore } from "../../api/products"

type ProductListBoxProps = {
  category: string
}

const ProductListBox = ({ category }: ProductListBoxProps) => {
  const [expanded, setExpanded] = useState(false)

  // Берем товары из Zustand-хранилища
  const products = useProductStore((state) => state.products)

  const filteredProducts = products.filter(p => p.category === category)
  const hasMoreThanFive = filteredProducts.length > 5
  const displayedProducts = expanded ? filteredProducts : filteredProducts.slice(0, 5)

  // Можно добавить простой loading-флаг, если нужно:
  if (!products.length) {
    return <p className="text-white text-sm px-4">Загрузка...</p>
  }

  return (
    <Card className="w-full max-w-[790px] bg-[#1f1f1f] rounded-[15px] overflow-hidden border-none">
      <CardHeader className="px-5 pt-6 pb-0 flex flex-row justify-between items-center">
        <CardTitle className="text-xl text-white font-semibold">{category}</CardTitle>

        {hasMoreThanFive && (
          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1.5 text-white hover:bg-transparent p-1"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="text-[10px] font-medium">
              {expanded ? "Скрыть" : "Показать все"}
            </span>
            <div className="w-[15px] h-[15px] bg-[#373737] rounded-full flex items-center justify-center">
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </Button>
        )}
      </CardHeader>

      <CardContent className="px-5 pb-5 pt-3">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductListBox