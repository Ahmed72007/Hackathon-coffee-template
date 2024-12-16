import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu, Search, User, ShoppingBag } from "lucide-react";
  
  const MobileNavbar = () => {
    return (
      <nav className="w-full h-[90px] bg-[#0D0D0D] px-4 flex items-center justify-between">
        {/* Logo Section */}
       
  
        {/* Menu Icon */}
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white w-6 h-6 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#0D0D0D]">
            <SheetHeader>
              <SheetDescription>
                <ul className="text-white flex flex-col items-start space-y-6 p-6 text-lg">
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Home</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Menu</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Blog</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Pages</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">About</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Shop</li>
                  <li className="cursor-pointer hover:text-[#FF9F0D]">Contact</li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex items-center space-x-1">
          <span className="font-sans font-bold text-white text-lg">Food</span>
          <span className="font-sans font-bold text-[#FF9F0D] text-lg">tuck</span>
        </div>
        {/* Icons Section */}
        <div className="flex space-x-4">
          <Search className="text-white w-5 h-5 cursor-pointer hover:text-[#FF9F0D]" />
          <User className="text-white w-5 h-5 cursor-pointer hover:text-[#FF9F0D]" />
          <ShoppingBag className="text-white w-5 h-5 cursor-pointer hover:text-[#FF9F0D]" />
        </div>
      </nav>
    );
  };
  
  export default MobileNavbar;
  