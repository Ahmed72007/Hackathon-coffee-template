import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const MobileNewsLetter = () => {
  return (
    <div className="w-full bg-white px-4 py-6 shadow-md rounded-lg flex flex-col space-y-6 items-center">
      {/* Top Section: Text */}
      <div className="text-gray-800 font-bold text-center text-xl">
        Subscribe <br /> To Our Newsletter
      </div>

      {/* Middle Section: Input and Button */}
      <div className="flex flex-col space-y-4 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="h-[50px] bg-[#BC9A6C] text-white font-medium rounded-md hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500"
        >
          Subscribe Now
        </button>
      </div>

      {/* Bottom Section: Social Media Icons */}
      <div className="flex space-x-6">
        <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
        <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500 cursor-pointer" />
        <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 cursor-pointer" />
        <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default MobileNewsLetter;
