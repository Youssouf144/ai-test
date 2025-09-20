"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { NavLink } from "@/types";

interface HeaderProps {
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: "Sports", href: "/products" },
  { label: "Brands", href: "#" },
  { label: "Offers", href: "#" },
  { label: "Services", href: "#" },
];

export default function Header({ navLinks = defaultNavLinks }: HeaderProps) {
  const { itemCount } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200">
            DECATHLON
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="hover:bg-blue-700 px-3 py-1 rounded relative"
          >
            🛒 Cart
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/auth/login"
            className="hover:bg-blue-700 px-3 py-1 rounded"
          >
            👤 Account
          </Link>
        </div>
      </div>
    </header>
  );
}