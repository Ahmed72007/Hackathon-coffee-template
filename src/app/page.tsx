import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import BlogCardList from "./Components/BlogCardList";
import NewsLetter from "./Components/NewsLetter"
import Footer from "./Components/Footer";
import MobileNavbar from "./Components/MobileNavbar";
import MobileNewsLetter from "./Components/MobileNewsletter";
import MobileFooter from "./Components/MobileFooter";
export default function Home() {
  return (
    <main>
      <div className="hidden lg:block">
        <Navbar />
      </div>  
      <div className=" lg:hidden">
        <MobileNavbar />
      </div>  
    <HeroSection/> 
    <BlogCardList/>
    <div className="hidden lg:block">
        <NewsLetter />
      </div>  
      <div className=" lg:hidden">
        <MobileNewsLetter />
      </div>  
      <div className="hidden lg:block">
        <Footer />
      </div>  
      <div className=" lg:hidden">
        <MobileFooter />
      </div> 
    </main>

    
  );
}
