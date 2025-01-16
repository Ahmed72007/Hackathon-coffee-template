import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onViewDetails}
            className="bg-blue-500 text-white py-1 px-3 rounded-md"
          >
            View Details
          </button>
          <button
            onClick={onAddToCart}
            className="bg-green-500 text-white py-1 px-3 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
