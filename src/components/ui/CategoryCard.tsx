"use client";

import { Category } from "@/types";

interface CategoryCardProps extends Category {
  onExplore?: (category: string) => void;
}

export default function CategoryCard({
  name,
  emoji,
  description,
  onExplore
}: CategoryCardProps) {
  const handleExplore = () => {
    onExplore?.(name);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
      <div className="p-6 text-center">
        <div className="text-4xl mb-4">{emoji}</div>
        <h4 className="text-xl font-semibold mb-2 text-foreground">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        <button
          onClick={handleExplore}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Explore
        </button>
      </div>
    </div>
  );
}