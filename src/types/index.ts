export interface Category {
  name: string;
  emoji: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}