"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { categories } from "@/data/categories";
import { featuredProducts, getValidatedProducts } from "@/data/products";

export default function Home() {
  const handleShopNow = () => {
    console.log("Shop Now clicked");
  };

  const handleCategoryExplore = (category: string) => {
    console.log(`Exploring ${category} category`);
  };

  const handleProductClick = (productId: string) => {
    console.log(`Product ${productId} clicked`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Sport for Everyone"
        subtitle="Discover our wide range of sports equipment and clothing"
        buttonText="Shop Now"
        onButtonClick={handleShopNow}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
          Shop by Sport
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              {...category}
              onExplore={handleCategoryExplore}
            />
          ))}
        </div>
      </main>

      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
