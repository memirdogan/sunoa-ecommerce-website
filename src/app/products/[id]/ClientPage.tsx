'use client';

import { useState, useEffect } from 'react';
import { getProductById } from '@/lib/products';
import { Product } from '@/types';
import ProductDetail from './ProductDetail';

export default function ClientPage({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const productData = await getProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          // Ürün bulunamadı
          document.location.href = '/products';
        }
      } catch (error) {
        console.error('Ürün yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center">Yükleniyor...</div>;
  }

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center">Ürün bulunamadı</div>;
  }

  return <ProductDetail product={product} />;
}