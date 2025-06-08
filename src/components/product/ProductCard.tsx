'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.new && (
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-medium rounded">
            Yeni
          </div>
        )}
        
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Önceki görsel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Sonraki görsel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <span 
                  key={index} 
                  className={`block h-1.5 w-1.5 rounded-full ${currentImageIndex === index ? 'bg-black' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-wider text-gray-600">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price} TL</p>
      </div>
      <button
        className="mt-4 block w-full bg-black text-white text-center py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
      >
        Satın Al
      </button>
    </div>
  );
};

export default ProductCard; 