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
    name: "Nelly Tablea Pouch",
    price: 35.00,
    rating: 4.8,
    reviews: 128,
    image: "/1.png"
  },
  {
    id: 2,
    name: "PURE MAIS JAR",
    price: 150.00,
    rating: 4.6,
    reviews: 95,
    image: "/21.png"
  },
  {
    id: 3,
    name: "PURE MAIS 175g",
    price: 90.00,
    rating: 4.9,
    reviews: 156,
    image: "/26.png"
  },
  {
    id: 4,
    name: "PURE MAIS SACHET",
    price: 50.00,
    rating: 4.7,
    reviews: 84,
    image: "/27.png"
  },
  {
    id: 5,
    name: "BINUKBOK KAPE JAR",
    price: 150.00,
    rating: 4.7,
    reviews: 84,
    image: "/28.png"
  },
  {
    id: 6,
    name: "BINUKBOK KAPE SACHET",
    price: 50.00,
    rating: 4.7,
    reviews: 84,
    image: "/29.png"
  },
  {
    id: 7,
    name: "BINUKBOK KAPE 175g",
    price: 90.00,
    rating: 4.7,
    reviews: 84,
    image: "/30.png"
  },
  {
    id: 8,
    name: "TABLEA POUCH",
    price: 35.00,
    rating: 4.7,
    reviews: 84,
    image: "/31.png"
  },
  {
    id: 9,
    name: "TABLEA SMALL PACK",
    price: 19.99,
    rating: 4.7,
    reviews: 84,
    image: "/32.png"
  },
  {
    id: 10,
    name: "TABLEA ROLL",
    price: 30.00,
    rating: 4.7,
    reviews: 84,
    image: "/33.png"
  },
  {
    id: 11,
    name: "TABLEA BIG PACK",
    price: 170.00,
    rating: 4.7,
    reviews: 84,
    image: "/34.png"
  }, 
  {
    id: 12,
    name: "TABLEA Sachet",
    price: 20.99,
    rating: 4.7,
    reviews: 84,
    image: "/35.png"
  },
  {
    id: 13,
    name: "INSTANT DULAW Turmeric Powder",
    price: 19.99,
    rating: 4.7,
    reviews: 84,
    image: "/36.png"
  },
  {
    id: 14,
    name: "INSTANT SALABAT Ginger Powder",
    price: 19.99,
    rating: 4.7,
    reviews: 84,
    image: "/37.png"
  },
  {
    id: 15,
    name: "PURE COFFEE 90g",
    price: 70.00,
    rating: 4.7,
    reviews: 84,
    image: "/38.png"
  },
  {
    id: 16,
    name: "SUKARAP 750ml",
    price: 170.00,
    rating: 4.7,
    reviews: 84,
    image: "/39.png"
  },
  {
    id: 17,
    name: "SUKARAP 375ml",
    price: 90.00,
    rating: 4.7,
    reviews: 84,
    image: "/40.png"
  }

];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="pt-24 min-h-screen bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mb-20">
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
                  <p className="text-2xl font-bold text-primary mb-2">₱{product.price}</p>
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