import { Product } from "@/types";

interface ProductCardProps extends Product {
  onProductClick?: (productId: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  onProductClick
}: ProductCardProps) {
  const handleClick = () => {
    onProductClick?.(id);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-500 dark:text-gray-400">No Image</span>
        )}
      </div>
      <h4 className="font-semibold text-foreground mb-1">{name}</h4>
      <p className="text-gray-600 dark:text-gray-300">{price}</p>
    </div>
  );
}