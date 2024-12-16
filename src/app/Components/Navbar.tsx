import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    
    <nav className="flex items-center justify-between w-full h-[90px] bg-[#0D0D0D] px-8 ">
      {/* Logo Section */}
      <div className="flex items-center space-x-1">
        <span className="font-sans font-bold text-white text-xl">Food</span>
        <span className="font-sans font-bold text-[#FF9F0D] text-xl">tuck</span>
      </div>

      {/* Menu Section */}
      <div className="flex">
        <ol className="flex space-x-6 text-white text-sm">
          <li className="cursor-pointer hover:text-[#FF9F0D]">Home</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">Menu</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">Blog</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">Pages</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">About</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">Shop</li>
          <li className="cursor-pointer hover:text-[#FF9F0D]">Contact</li>
        </ol>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-6">
        <Search className="text-white w-6 h-6 cursor-pointer hover:text-[#FF9F0D]" />
        <User className="text-white w-6 h-6 cursor-pointer hover:text-[#FF9F0D]" />
        <ShoppingBag className="text-white w-6 h-6 cursor-pointer hover:text-[#FF9F0D]" />
      </div>
    </nav>
  );
}
