import { Product } from "@/types";

export const allProducts: Product[] = [
  // Running Products
  {
    id: "1",
    name: "Running Shoes Pro",
    price: "€89.99",
    category: "Running",
    description: "High-performance running shoes with advanced cushioning technology.",
    image: "/images/running-shoes.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    name: "Lightweight Running Shorts",
    price: "€29.99",
    category: "Running",
    description: "Breathable shorts perfect for long-distance running.",
    image: "/images/running-shorts.jpg",
    inStock: true,
    rating: 4.2,
    reviews: 85
  },
  {
    id: "3",
    name: "Marathon Training Shirt",
    price: "€39.99",
    category: "Running",
    description: "Moisture-wicking shirt designed for marathon training.",
    image: "/images/running-shirt.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 156
  },

  // Cycling Products
  {
    id: "4",
    name: "Professional Cycling Helmet",
    price: "€79.99",
    category: "Cycling",
    description: "Safety-certified helmet with excellent ventilation.",
    image: "/images/cycling-helmet.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: "5",
    name: "Mountain Bike 26\"",
    price: "€599.99",
    category: "Cycling",
    description: "Durable mountain bike perfect for trail adventures.",
    image: "/images/mountain-bike.jpg",
    inStock: false,
    rating: 4.6,
    reviews: 92
  },
  {
    id: "6",
    name: "Cycling Gloves",
    price: "€19.99",
    category: "Cycling",
    description: "Padded gloves for comfort during long rides.",
    image: "/images/cycling-gloves.jpg",
    inStock: true,
    rating: 4.3,
    reviews: 67
  },

  // Swimming Products
  {
    id: "7",
    name: "Competition Swimsuit",
    price: "€69.99",
    category: "Swimming",
    description: "High-performance swimsuit for competitive swimming.",
    image: "/images/swimsuit.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 45
  },
  {
    id: "8",
    name: "Swimming Goggles",
    price: "€24.99",
    category: "Swimming",
    description: "Anti-fog goggles with UV protection.",
    image: "/images/goggles.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 112
  },

  // Hiking Products
  {
    id: "9",
    name: "Hiking Boots Waterproof",
    price: "€129.99",
    category: "Hiking",
    description: "Waterproof hiking boots for all-terrain adventures.",
    image: "/images/hiking-boots.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: "10",
    name: "Outdoor Backpack 40L",
    price: "€89.99",
    category: "Hiking",
    description: "Spacious backpack with multiple compartments.",
    image: "/images/backpack.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 134
  },

  // Fitness Products
  {
    id: "11",
    name: "Yoga Mat Premium",
    price: "€34.99",
    category: "Fitness",
    description: "Non-slip yoga mat with excellent grip and cushioning.",
    image: "/images/yoga-mat.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 267
  },
  {
    id: "12",
    name: "Adjustable Dumbbells Set",
    price: "€199.99",
    category: "Fitness",
    description: "Complete dumbbell set for home workouts.",
    image: "/images/dumbbells.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 98
  }
];

export const featuredProducts: Product[] = allProducts.slice(0, 3);

// Ensure we have valid data
export const getValidatedProducts = (): Product[] => {
  return allProducts.filter(product =>
    product &&
    product.id &&
    product.name &&
    product.price &&
    product.category &&
    product.description
  );
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};