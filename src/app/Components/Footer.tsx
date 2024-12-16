import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full h-[580px] bg-[#0D0D0D] text-white">
      {/* Section 1 */}
      <div className="w-[1169px] mx-auto py-12">
        <div className="flex justify-between items-center">
          {/* Heading Text */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Don’t wait, make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>

          {/* Email Form */}
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-[400px] h-[48px] px-4 rounded-l-md border-none text-gray-800 focus:outline-none"
            />
            <button className="h-[48px] px-6 bg-[#FF9F0D] rounded-r-md text-black font-medium hover:bg-yellow-600">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="w-[1169px] border-t border-gray-700 mx-auto"
        style={{
          height: "0px",
          top: "231.73px",
          borderWidth: "1px 0px 0px 0px",
          opacity: "1",
          transform: "rotate(-0.01deg)",
        }}
      ></div>

      {/* Section 2 */}
      <div className="w-[1169px] mx-auto grid grid-cols-4 gap-8 py-12">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and
            professional chauffeured car service in major cities across the world.
          </p>
          <p className="text-[#FF9F0D] mt-4">Opening Hours</p>
          <p className="text-gray-400 text-sm">Mon - Sat (8:00 - 6:00)</p>
          <p className="text-gray-400 text-sm">Sunday - Closed</p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3: Help? */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help?</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>FAQ</li>
            <li>Term & Condition</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Column 4: Recent Post */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex space-x-2">
              <img src="/post1.png" alt="Post" className="w-12 h-12 rounded" />
              <div>
                <p>Is fastfood good for your body?</p>
                <p className="text-xs">February 28, 2022</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <img src="/post2.png" alt="Post" className="w-12 h-12 rounded" />
              <div>
                <p>Change your food habit with organic food</p>
                <p className="text-xs">February 28, 2022</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <img src="/post3.png" alt="Post" className="w-12 h-12 rounded" />
              <div>
                <p>Do you like fastfood for your life?</p>
                <p className="text-xs">February 28, 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full h-[99px] bg-[#4F4F4F] flex items-center justify-between px-16">
        <p className="text-gray-200 text-sm">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <Facebook className="w-6 h-6 text-white cursor-pointer hover:text-[#FF9F0D]" />
          <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-[#FF9F0D]" />
          <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-[#FF9F0D]" />
          <Youtube className="w-6 h-6 text-white cursor-pointer hover:text-[#FF9F0D]" />
          <ChevronRight className="w-6 h-6 text-white cursor-pointer hover:text-[#FF9F0D]" />
        </div>
      </div>
    </div>
  );
}
