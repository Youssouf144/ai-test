import { Metadata } from "next";
import { getProductById } from "@/data/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Decathlon",
      description: "The product you're looking for doesn't exist.",
    };
  }

  return {
    title: `${product.name} | Decathlon`,
    description: product.description,
    keywords: [product.name, product.category, "sports", "equipment", "Decathlon"],
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}