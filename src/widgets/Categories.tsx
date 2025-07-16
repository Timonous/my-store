import { Card, CardContent } from "../components/ui/card";
import pork from "../assets/categoriesIcons/pork.svg"
import cow from "../assets/categoriesIcons/cow.svg"
import chicken from "../assets/categoriesIcons/chicken.svg"

export const Categories = () => {
  const categories = [
    {
      name: "Акции",
      icon: <img src={pork} className="h-10 w-[60px]" />,
    },
    {
      name: "Свинина",
      icon: <img src={pork} alt="Pork icon" className="h-10 w-[60px]" />,
    },
    {
      name: "Говядина",
      icon: <img src={cow} className="h-10 w-[60px]" />,
    },
    {
      name: "Наборы",
      icon: <img src={pork} className="h-10 w-[60px]" />,
    },
    {
      name: "Курица",
      icon: <img src={chicken} alt="Chicken icon" className="h-10 w-[60px]" />,
    },
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto flex gap-[15px] flex-wrap justify-center py-4">
      {categories.map((category, index) => (
        <Card
        key={index}
        onClick={() => console.log(`Нажата категория: ${category.name}`)}
        className="cursor-pointer transition-colors duration-200 hover:bg-[#2a2a2a] active:scale-[0.98] flex flex-col items-center justify-center w-[130px] h-[90px] bg-[#1f1f1f] rounded-[20px] border-none"
        >
        <CardContent className="flex flex-col items-center justify-center p-0 pt-[15px]">
            <div className="mb-[19px]">{category.icon}</div>
            <div className="w-[100px] mb-[19px] font-semibold text-white text-xs text-center">
            {category.name}
            </div>
        </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Categories;