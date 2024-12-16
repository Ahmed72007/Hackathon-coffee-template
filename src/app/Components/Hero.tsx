import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div
      className="w-full h-[390px] flex flex-col justify-center items-center text-white px-8"
      style={{
        backgroundImage: "url('/hero.png')", // Correct format for backgroundImage
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
      <h2 className="text-4xl font-bold">Our Shop</h2>
      <div className="flex items-center space-x-2 text-lg mt-2">
        <h3>Home</h3>
        <ChevronRight />
        <h3>Shop</h3>
      </div>
    </div>
  );
}
