import { useEffect, useState } from "react"
import { useProductStore } from "../api/products"
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { SearchBar } from "../widgets/SearchBar";
import { Categories } from "../widgets/Categories";
import ProductListBox from "../widgets/productList/ProductListBox"
import SearchProductListBox from "../widgets/productList/SearchProductListBox"

export const Home = () => {
  const [query, setQuery] = useState("")
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="bg-[#131313] flex flex-row justify-center w-full">
      <div className="bg-[#131313] relative w-full">
        <div className="px-4 md:px-10">
          <Header />
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
          <SearchBar query={query} setQuery={setQuery} />
          <Categories />

          {query ? (
            <SearchProductListBox query={query} />
          ) : (
            <>
              <ProductListBox category="Акции" />
              <ProductListBox category="Курица" />
              <ProductListBox category="Свинина" />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
