"use client"
import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Specify the type here

  useEffect(() => {
    // Replace with API call later
    const fetchProducts = async () => {
      const demoProducts: Product[] = [
        {
          id: 1,
          image: "/product1.jpg",
          title: "Product 1",
          price: 29.99,
          description: "This is a great product.",
        },
        {
          id: 2,
          image: "/product2.jpg",
          title: "Product 2",
          price: 49.99,
          description: "This product is even better.",
        },
      ];
      setProducts(demoProducts); // This should work now
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (id: number) => {
    console.log(`Product ${id} added to cart`);
  };

  const handleViewDetails = (id: number) => {
    console.log(`Viewing details for product ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
          onViewDetails={() => handleViewDetails(product.id)}
        />
      ))}
    </div>
  );
};

export default Shop;