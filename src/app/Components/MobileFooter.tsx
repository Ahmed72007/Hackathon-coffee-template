import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from "lucide-react";

export default function MobileFooter() {
  return (
    <div className="w-full bg-[#0D0D0D] text-white py-8">
      {/* Section 1: Subscribe */}
      <div className="px-4 mb-8 text-center">
        <h2 className="text-xl font-bold mb-2">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Don’t wait, make a smart & logical quote here. It’s pretty easy.
        </p>
        <div className="flex flex-col items-center space-y-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full h-[48px] px-4 rounded-md border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="h-[48px] w-full bg-[#FF9F0D] rounded-md text-black font-medium hover:bg-yellow-600">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mx-4 mb-8"></div>

      {/* Section 2: Footer Links */}
      <div className="px-4 grid grid-cols-2 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-gray-400 text-sm">
            We provide reliable, safe, and professional chauffeured car service worldwide.
          </p>
          <p className="text-[#FF9F0D] mt-4">Opening Hours</p>
          <p className="text-gray-400 text-sm">Mon - Sat (8:00 - 6:00)</p>
          <p className="text-gray-400 text-sm">Sunday - Closed</p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help?</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>FAQ</li>
            <li>Term & Condition</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 text-white hover:text-[#FF9F0D] cursor-pointer" />
            <Instagram className="w-6 h-6 text-white hover:text-[#FF9F0D] cursor-pointer" />
            <Twitter className="w-6 h-6 text-white hover:text-[#FF9F0D] cursor-pointer" />
            <Youtube className="w-6 h-6 text-white hover:text-[#FF9F0D] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Section 3: Copyright */}
      <div className="mt-8 bg-[#1E1E1E] py-4 text-center text-gray-400 text-xs">
        Copyright © 2022 by Ayeman. All Rights Reserved.
      </div>
    </div>
  );
}
