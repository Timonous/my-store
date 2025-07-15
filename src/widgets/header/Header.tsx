import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import logo from "../../assets/logo.svg"
import basket from "../../assets/icon.basket.svg"

export const Header = () => {
  // Navigation menu items data
  const menuItems = [
    { label: "Мясо", href: "#" },
    { label: "Акции", href: "#" },
    { label: "Наборы", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Контакты", href: "#" },
  ];

  return (
    <header className="w-full h-[50px] bg-[url(/bg.svg)] bg-cover bg-[50%_50%] flex items-center justify-between px-5">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-[38px] h-8" alt="Logo" src={logo} />

        {/* Navigation */}
        <NavigationMenu className="ml-[56px]">
          <NavigationMenuList className="flex gap-[15px]">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="inline-flex h-[21px] items-center justify-center px-2.5 py-[3px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-normal"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-5">
        {/* Balance display */}
        <div className="inline-flex h-[29px] items-center gap-1.5 pl-3.5 pr-2.5 py-[7px] rounded-[50px] border border-solid border-white">
          <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-normal">
            700 ₽
          </span>
          <div className="relative w-4 h-[15px]">
            <img className="w-4 h-4 text-white" src={basket} alt="Basket" />
          </div>
        </div>

        {/* Login button */}
        <Button className="h-[29px] w-[115px] rounded-[15px] bg-[linear-gradient(90deg,rgba(254,147,0,1)_0%,rgba(238,92,0,1)_100%)] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs">
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
