import { ShoppingCart, Tag, DollarSign } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  category,
  price,
  description,
}) => {
  const productSlug = name.toLowerCase().replace(/\s+/g, "-");
  console.log("Generated Product Slug:", productSlug);

  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-[200px] bg-gray-200">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image}
          alt={`${name} Image`}
        />
      </div>

      {/* Meta Info Section */}
      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Tag className="w-4 h-4 text-yellow-500" />
          <p>{category}</p>
        </div>
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4 text-yellow-500" />
          <p>${price.toFixed(2)}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-2">
        <h6 className="text-lg font-bold text-gray-800 mb-2">{name}</h6>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center px-4 py-2">
      <Link href={`/shop/${productSlug}`}>
  <p className="text-sm font-medium cursor-pointer hover:underline">
    View Details
  </p>
      </Link>

        <ShoppingCart className="w-5 h-5 text-yellow-500 ml-auto" />
      </div>
    </div>
  );
};

export default ProductCard;
