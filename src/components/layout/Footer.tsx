import { FooterSection } from "@/types";

interface FooterProps {
  sections?: FooterSection[];
}

const defaultFooterSections: FooterSection[] = [
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Size Guide", href: "#" },
    ],
  },
  {
    title: "About Decathlon",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    title: "Sports",
    links: [
      { label: "All Sports", href: "#" },
      { label: "New Arrivals", href: "#" },
      { label: "Sale", href: "#" },
    ],
  },
];

export default function Footer({ sections = defaultFooterSections }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h5 className="font-bold mb-3">{section.title}</h5>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className="font-bold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">📘</a>
              <a href="#" className="hover:text-blue-400">📷</a>
              <a href="#" className="hover:text-blue-400">🐦</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Decathlon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}