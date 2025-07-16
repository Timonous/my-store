import { Input } from "../components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto h-[34px] relative">
      <div className="absolute inset-y-0 left-[15px] flex items-center pointer-events-none">
        <SearchIcon className="h-4 w-[15px] text-[#b6b6b6]" />
      </div>
      <Input
        className="h-[34px] w-full bg-[#1f1f1f] rounded-[15px] pl-[45px] text-xs text-[#b6b6b6] font-normal border-none"
        placeholder="Искать в магазине"
      />
    </div>
  );
};
