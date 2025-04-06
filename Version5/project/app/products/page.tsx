"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

// Updated product data with local images
const products = [
  {
    id: 1,
    name: "Organic Wellness Tea",
    price: 24.99,
    rating: 4.8,
    reviews: 128,
    image: "/images/products/wellness-tea.jpg"
  },
  {
    id: 2,
    name: "Natural Vitamin Complex",
    price: 39.99,
    rating: 4.6,
    reviews: 95,
    image: "/images/products/vitamins.jpg"
  },
  {
    id: 3,
    name: "Essential Oil Set",
    price: 49.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/products/essential-oils.jpg"
  },
  {
    id: 4,
    name: "Wellness Journal",
    price: 19.99,
    rating: 4.7,
    reviews: 84,
    image: "/images/products/journal.jpg"
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Our Products</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link href="/products/sample" key={product.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-2xl font-bold text-primary mb-2">${product.price}</p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}