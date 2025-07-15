import { Footer } from "../widgets/footer/Footer";
import { Header } from "../widgets/header/Header";

export const Home = () => {
  return (
    <div className="bg-[#131313] flex flex-row justify-center w-full">
      <div className="bg-[#131313] w-[770px] relative">
        <Header />
        <Footer />
      </div>
    </div>
  );
};
