import Head from 'next/head';
import Navbar from '../Components/Navbar';
const About = () => {
  return (
    
    <>
    <Navbar />
      <Head>
        <title>About Us | FoodTuck</title>
        <meta name="description" content="Learn more about FoodTuck, your go-to destination for the finest coffee experiences." />
      </Head>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About FoodTuck</h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            At FoodTuck, we believe that every cup of coffee tells a story. Founded by passionate coffee lovers, our mission is to share the joy of high-quality coffee with the world. Whether you're savoring your first cup of the day or enjoying a relaxing break, FoodTuck is here to make every coffee moment extraordinary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Commitment to quality and sustainability.</li>
                <li>Support for local farmers and ethical sourcing.</li>
                <li>Creating a welcoming community for coffee lovers.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Offer</h2>
              <p className="text-gray-700">
                From hand-selected coffee beans to expertly brewed cups, FoodTuck provides a diverse range of coffee products to suit every taste. Our selection includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Specialty coffee blends</li>
                <li>Single-origin coffees</li>
                <li>Freshly roasted beans</li>
                <li>Brewing equipment and accessories</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Join the FoodTuck Community</h2>
            <p className="text-white">
              We invite you to explore our offerings and discover your new favorite coffee experience. Follow us on social media and stay updated on our latest products, events, and promotions.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/shop" className="px-6 py-3 bg-brown-600 text-white font-medium rounded hover:bg-blue-700 transition">
              Explore Our Coffee
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
