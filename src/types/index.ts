export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured?: boolean;
  new?: boolean;
  features?: string[];
  usage?: string;
  ingredients?: string;
  size?: string;
  stock?: number;
}

export type ProductCategory = 'all' | 'new-arrivals' | 'best-sellers' | 'trending';

export interface Brand {
  id: string;
  name: string;
  logo: string;
}
