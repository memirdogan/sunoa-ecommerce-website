'use client';

import { useCart } from '@/lib/cartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CartIcon() {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        className="flex items-center text-gray-700 hover:text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sepet"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 p-4">
          {totalItems > 0 ? (
            <>
              <p className="text-sm mb-3">Sepetinizde <span className="font-bold">{totalItems}</span> ürün var</p>
              <Link 
                href="/cart" 
                className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sepete Git
              </Link>
            </>
          ) : (
            <p className="text-sm text-gray-500">Sepetiniz boş</p>
          )}
        </div>
      )}
    </div>
  );
}