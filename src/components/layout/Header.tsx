import { NavLink } from "@/types";

interface HeaderProps {
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: "Sports", href: "#" },
  { label: "Brands", href: "#" },
  { label: "Offers", href: "#" },
  { label: "Services", href: "#" },
];

export default function Header({ navLinks = defaultNavLinks }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">DECATHLON</h1>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:bg-blue-700 px-3 py-1 rounded">
            🛒 Cart
          </button>
          <button className="hover:bg-blue-700 px-3 py-1 rounded">
            👤 Account
          </button>
        </div>
      </div>
    </header>
  );
}