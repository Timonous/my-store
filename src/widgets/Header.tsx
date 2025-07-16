import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { useCartStore } from "../app/cartStore";
import logo from "../assets/logo.svg"
import basket from "../assets/icon.basket.svg"

export const Header = () => {
  const menuItems = [
    { label: "Мясо", href: "#" },
    { label: "Акции", href: "#" },
    { label: "Наборы", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Контакты", href: "#" },
  ]

  const total = useCartStore((state) =>
    state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  );

  return (
    <header className="mb-[20px] w-full h-auto bg-[#1f1f1f] px-4 md:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-3 rounded-bl-[20px] rounded-br-[20px]">
      {/* Верхняя часть: логотип + навигация */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10 w-full md:w-auto">
        <img className="w-[38px] h-8" alt="Logo" src={logo} />

        {/* Навигация — скрывается на мобилках */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-[15px]">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="inline-flex h-[21px] items-center justify-center px-2.5 py-[3px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xs"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-3 md:gap-5 w-full md:w-auto justify-end">
        {/* Баланс */}
        <div className="inline-flex h-[29px] items-center gap-1.5 px-3 py-[7px] border border-white rounded-[50px]">
          <span className="text-white text-xs">{total} ₽</span>
          <img src={basket} alt="Basket" className="w-4 h-4" />
        </div>

        {/* Кнопка входа */}
        <Button className="h-[29px] w-[100px] sm:w-[115px] rounded-[15px] bg-[linear-gradient(90deg,rgba(254,147,0,1)_0%,rgba(238,92,0,1)_100%)] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs">
          Войти
        </Button>
      </div>
    </header>
  )
}

export default Header
