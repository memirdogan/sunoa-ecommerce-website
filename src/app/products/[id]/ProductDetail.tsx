'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (product.stock && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (!product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
              <div className="flex items-center mt-2">
                <p className="text-2xl font-medium text-gray-900">{product.price} TL</p>
                {product.new && (
                  <span className="ml-3 inline-block bg-black text-white px-3 py-1 text-sm">
                    Yeni
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {product.size && (
              <div>
                <h3 className="text-sm font-medium text-gray-900">Boyut</h3>
                <p className="mt-1 text-gray-600">{product.size}</p>
              </div>
            )}

            {product.stock !== undefined && (
              <div>
                <h3 className="text-sm font-medium text-gray-900">Stok Durumu</h3>
                <p className="mt-1 text-gray-600">
                  {product.stock > 0 ? `Stokta ${product.stock} adet var` : 'Stokta yok'}
                </p>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Adet</h3>
              <div className="flex items-center mt-2 border border-gray-300 rounded-md w-32">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:text-gray-900"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:text-gray-900"
                  disabled={product.stock !== undefined && quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <div className="pt-6">
              <Link
                href="/products"
                className="w-full bg-black text-white px-8 py-4 rounded-md text-center block hover:bg-gray-800 transition-colors"
              >
                Diğer Ürünleri İncele
              </Link>
            </div>

            {/* Product Tabs */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-3 px-4 text-sm font-medium ${
                    activeTab === 'description'
                      ? 'border-b-2 border-black text-black'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Detaylar
                </button>
                {product.features && (
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`py-3 px-4 text-sm font-medium ${
                      activeTab === 'features'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Özellikler
                  </button>
                )}
                {product.usage && (
                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`py-3 px-4 text-sm font-medium ${
                      activeTab === 'usage'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Kullanım
                  </button>
                )}
                {product.ingredients && (
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`py-3 px-4 text-sm font-medium ${
                      activeTab === 'ingredients'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    İçerik
                  </button>
                )}
              </div>

              <div className="py-4">
                {activeTab === 'description' && (
                  <div>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                )}
                {activeTab === 'features' && product.features && (
                  <div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'usage' && product.usage && (
                  <div>
                    <p className="text-gray-600">{product.usage}</p>
                  </div>
                )}
                {activeTab === 'ingredients' && product.ingredients && (
                  <div>
                    <p className="text-gray-600">{product.ingredients}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}