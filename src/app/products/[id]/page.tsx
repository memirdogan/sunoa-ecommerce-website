import ProductDetail from './ProductDetail';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import { Product } from '@/types';

// Statik export için gerekli
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Ürünleri doğrudan sayfada tanımlayarak params.id uyarısını önlüyoruz
const productsMap: Record<string, Product> = {};
products.forEach(product => {
  productsMap[product.id] = product;
});

export default function ProductPage({ params }: { params: { id: string } }) {
  // params.id yerine doğrudan ürün ID'sini kullanıyoruz
  const product = productsMap[params.id];

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}