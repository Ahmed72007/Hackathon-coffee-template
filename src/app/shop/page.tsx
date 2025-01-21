"use client";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import {client} from '@/sanity/lib/client';
 // Adjust the path to your sanityClient.js
import Filter from "@/app/Components/Filter";
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  pic: string;
}
interface Product {
  _id: string; // Note: `_id` is the typical field in Sanity documents.
  name: string;
  price: number;
  category: string;
  description: string;
  pic: string; // This corresponds to the image URL.
}

interface ShopPageProps {
  products: Product[];
  totalProducts: number;
  page: number;
}

// Constants for pagination
const PRODUCTS_PER_PAGE = 15;


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ category: "", priceRange: "", searchQuery: "" });
  const [totalProducts, setTotalProducts] = useState(0);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "food"]{
          _id,
          name,
          price,
          category,
          description,
          "pic": image.asset->url
        }`;
        const sanityProducts = await client.fetch(query);
        setProducts(sanityProducts);
        setFilteredProducts(sanityProducts);
        setTotalProducts(sanityProducts.length);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Update the filtered products based on the current filters
    const filtered = products.filter((product: Product) => {
      const categoryMatch = filters.category ? product.category === filters.category : true;
      const priceMatch = filters.priceRange
        ? product.price >= parseInt(filters.priceRange.split("-")[0]) &&
          product.price <= parseInt(filters.priceRange.split("-")[1])
        : true;
      const searchMatch = filters.searchQuery
        ? product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
        : true;
  
      return categoryMatch && priceMatch && searchMatch;
    });
  
    setFilteredProducts(filtered);
  }, [filters, products]);
  return (
    <main className="p-8">
      <Navbar/>
      <div className="flex justify-between mb-8">
        <Filter filters={filters} setFilters={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found matching the filters.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="mt-2">{product.description}</p>
              <img
                src={product.pic}
                alt={product.name}
                className="mt-4 w-full h-48 object-cover rounded-md"
              />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`py-2 px-4 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-gray-500 text-white"}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-xl">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`py-2 px-4 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-500 text-white"}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default ShopPage;
