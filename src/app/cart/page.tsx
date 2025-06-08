'use client';

import { useCart } from '@/lib/cartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Gerçek bir sipariş işlemi burada olacak
    // Statik site olduğu için sadece sepeti temizliyoruz
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-6">Siparişiniz Alındı</h1>
          <p className="mb-8 text-gray-600">Teşekkür ederiz! Siparişiniz başarıyla alındı.</p>
          <Link 
            href="/products/all" 
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Alışverişe Devam Et
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-6">Sepetiniz</h1>
          <p className="mb-8 text-gray-600">Sepetinizde ürün bulunmuyor.</p>
          <Link 
            href="/products/all" 
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif mb-10">Sepetiniz</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex border-b border-gray-200 pb-6">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">{item.product.brand}</p>
                    </div>
                    <p className="text-lg font-medium">{item.product.price} TL</p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                        disabled={item.product.stock !== undefined && item.quantity >= item.product.stock}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Sipariş Özeti</h2>
            
            <div className="space-y-2 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>{item.product.name} x {item.quantity}</span>
                  <span>{item.product.price * item.quantity} TL</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-medium">
                <span>Toplam</span>
                <span>{totalPrice} TL</span>
              </div>
            </div>
            
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Siparişi Tamamla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}