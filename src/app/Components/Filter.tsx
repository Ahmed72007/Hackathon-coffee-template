// src/app/Components/Filter.tsx
import React from 'react';

interface FilterProps {
  filters: {
    category: string;
    priceRange: string;
    searchQuery: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    priceRange: string;
    searchQuery: string;
  }>>;
}

const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, priceRange: e.target.value });
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <select value={filters.category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Pastries">Pastries</option>
        <option value="Coffee">Coffee</option>
        <option value="Cakes">Cakes</option>
        
        {/* Add options for categories */}
      </select>
      <select value={filters.priceRange} onChange={handlePriceRangeChange}>
        <option value="">All Prices</option>
        <option value="0-5">0 - 5</option>
        <option value="6-10">6 - 10</option>
        <option value="10-100">10+</option>
        {/* Add more price ranges */}
      </select>
      <input
        type="text"
        value={filters.searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search products"
      />
    </div>
  );
};

export default Filter;
