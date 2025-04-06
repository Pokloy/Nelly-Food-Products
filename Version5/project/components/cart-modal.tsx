"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';

export default function CartModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push('/checkout');
  };

  return (
    <>
      {/* Cart Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="relative"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          {/* Modal Content */}
          <div className="bg-white w-full max-w-md h-full">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        <div className="relative h-20 w-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-primary font-semibold">${item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full"
                  disabled={items.length === 0}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}