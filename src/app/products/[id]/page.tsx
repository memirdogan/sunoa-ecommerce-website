import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '@/lib/products';
import { notFound } from 'next/navigation';

// Statik export için gerekli
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

'use client';

import { useState } from 'react';

export default function ProductPage({ params }: PageProps) {
  const product = getProductById(params.id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10"
                  aria-label="Önceki görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10"
                  aria-label="Sonraki görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square w-20 cursor-pointer rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-black' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Ürünler
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="font-bold uppercase tracking-wider">{product.brand}</li>
            </ol>
          </nav>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-1">{product.brand}</p>
              <h1 className="text-3xl font-serif">{product.name}</h1>
              <p className="mt-2 text-xl text-gray-900">{product.price} TL</p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Açıklama</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {product.new && (
              <div className="inline-block bg-black text-white px-3 py-1 text-sm">
                Yeni
              </div>
            )}

            <div className="pt-6">
              <button
                className="w-full bg-black text-white px-8 py-4 rounded-md text-center block hover:bg-gray-800 transition-colors"
              >
                Satın Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}