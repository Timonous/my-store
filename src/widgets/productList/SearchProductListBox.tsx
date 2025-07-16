import { useProductStore } from "../../api/products"
import { ProductCard } from "./ProductCard"

const SearchProductListBox = ({ query }: { query: string }) => {
  const products = useProductStore((state) => state.products)

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  if (!query) return null

  return (
    <div className="w-full max-w-[790px] bg-[#1f1f1f] rounded-[15px] border-none p-5 mx-auto mt-4">
      <h2 className="text-white text-xl font-semibold mb-3">
        {filtered.length > 0
          ? `Найдено: ${filtered.length}`
          : "Ничего не найдено"}
      </h2>

      {filtered.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchProductListBox