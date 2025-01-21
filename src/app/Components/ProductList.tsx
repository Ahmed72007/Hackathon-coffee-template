"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { createClient } from "@sanity/client";

// Configure Sanity client
const client = createClient({
  projectId: "kzoedum9",
  dataset: "new_data",
// Update with your API version
  useCdn: true,
});

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "food"]{
          name,
          category,
          price,
          description,
          "image": image.asset->url
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-gray-600">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
