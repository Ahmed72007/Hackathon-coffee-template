import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="w-[1320px] h-[240px] flex items-center justify-between bg-white px-8 shadow-md rounded-lg">
      {/* Left Section: Text */}
      <div className="text-gray-800 font-bold text-2xl">
        Subscribe <br /> To Our Newsletter
      </div>

      {/* Center Section: Input and Button */}
      <div className="flex items-center space-x-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[366px] h-[56px] px-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-[193px] h-[56px] bg-[#BC9A6C] text-white px-6  hover:bg-[] focus:ring-2 focus:ring-yellow-500"
        >
          Subscribe now
        </button>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex space-x-4">
        <Facebook className="w-8 h-8 text-gray-600 hover:text-blue-600 cursor-pointer" />
        <Instagram className="w-8 h-8 text-gray-600 hover:text-pink-500 cursor-pointer" />
        <Twitter className="w-8 h-8 text-gray-600 hover:text-blue-400 cursor-pointer" />
        <Youtube className="w-8 h-8 text-gray-600 hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default NewsLetter;
