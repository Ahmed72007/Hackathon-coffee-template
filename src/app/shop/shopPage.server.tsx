// src/app/shop/shopPage.server.tsx
import { client } from "@/sanity/lib/client";

// Constants for pagination
const PRODUCTS_PER_PAGE = 15;

// Fetch all products based on filters and pagination (Server-side logic)
const fetchProducts = async ({
  filters: { category, priceRange, searchQuery },
  page = 1,
}: {
  filters: { category: string; priceRange: string; searchQuery: string };
  page: number;
}) => {
  const skip = (page - 1) * PRODUCTS_PER_PAGE;

  const priceFilter = priceRange
    ? `&& price >= ${priceRange.split('-')[0]} && price <= ${priceRange.split('-')[1]}`
    : "";

  const searchFilter = searchQuery ? `&& name match "${searchQuery}"` : "";

  const query = `*[_type == "food" ${
    category ? `&& category == "${category}"` : ""
  } ${priceFilter} ${searchFilter}] | order(_createdAt desc) [${skip}...${skip + PRODUCTS_PER_PAGE}]{
    name,
    id,
    price,
    category,
    description,
    pic
  }`;

  const totalQuery = `*[_type == "food" ${category ? `&& category == "${category}"` : ""} ${priceFilter} ${searchFilter}]{
    _id
  }`;

  const products = await client.fetch(query);
  const totalProducts = await client.fetch(totalQuery);

  return {
    products,
    totalProducts: totalProducts.length,
  };
};

const ShopPageServer = async ({ filters, page }: { filters: any, page: number }) => {
  const { products, totalProducts } = await fetchProducts({ filters, page });

  // Return the products data so it can be passed as props to the client component
  return {
    props: {
      initialProducts: products,
      initialTotalProducts: totalProducts,
      initialPage: page,
    },
  };
};

export { ShopPageServer };
