// src/app/shop/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client"; // Ensure correct client import


// Generate static params for SSG using 'id'
export const generateStaticParams = async () => {
  // Fetch all product IDs
  const query = `*[_type == "food"]{ "id": _id }`; // Use '_id' to fetch the unique identifier from Sanity
  const products = await client.fetch(query);

  return products.map((product: { id: string }) => ({
    id: product.id, // Map '_id' to the 'id' param
  }));
};

// Fetch a single product by 'id'
const getProduct = async (id: string) => {
  // Query the product by its 'id'
  const query = `*[_type == "food" && _id == $id][0]{
    name,
    id,
    price,
    category,
    description,
    pic
  }`;

  return await client.fetch(query, { id });
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
  console.log("Params received:", params); // Debugging to check the value of params

  if (!params.id) {
    console.error("Product ID is missing!");
    return notFound(); // Handle missing product ID
  }

  // Fetch product data
  const product = await getProduct(params.id);

  // Check if the product exists
  if (!product) {
    return notFound(); // Return a 404 page if product is not found
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-600">Price: ${product.price.toFixed(2)}</p>
      <p className="text-md text-gray-500">Category: {product.category}</p>
      <p className="mt-4">{product.description}</p>

      {/* Displaying product image if available */}
      {product.pic && (
        <img
          src={product.pic}
          alt={product.name}
          className="mt-6 w-full max-w-md object-cover rounded-md shadow-md"
        />
      )}
    </main>
  );
};

export default ProductPage;
