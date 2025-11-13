"use client"

import { Package, Coffee, Leaf, Gift, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const bundles = [
  {
    id: 1,
    name: "PURE MAIS SACHET",
    description: "Perfect for your daily coffee needs",
    originalPrice: 70.35,
    salePrice: 50.00,
    savings: "30%",
    image: "/27.png",
    rating: 4.8,
    reviews: 156,
    items: [
      "PURE MAIS SACHET (10 pcs)",
      "PURE MAIS SACHET (10 pcs)",
      "PURE MAIS SACHET (5 pcs)"
    ]
  },
  {
    id: 2,
    name: "BINUKBOK KAPE SACHET",
    description: "Variety of premium tea sachets",
    originalPrice: 70.35,
    salePrice: 50.00,
    savings: "33%",
    image: "/29.png",
    rating: 4.7,
    reviews: 124,
    items: [
      "BINUKBOK KAPE SACHET (10 pcs)",
      "BINUKBOK KAPE SACHET (10 pcs)",
      "BINUKBOK KAPE SACHET (5 pcs)"
    ]
  },
  {
    id: 3,
    name: "TABLEA Sachet",
    description: "Try our best-selling sachets",
    originalPrice: 12.99,
    salePrice: 7.99,
    savings: "38%",
    image: "/35.png",
    rating: 4.9,
    reviews: 98,
    items: [
      "TABLEA Sachet (8 pcs)",
      "TABLEA Sachets (8 pcs)",
      "TABLEA Sachet (4 pcs)"
    ]
  }
];

export default function ProductBundles() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sulit Bundles</h2>
          <p className="text-lg text-gray-600">Great value packs for your daily beverage needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={bundle.image}
                  alt={bundle.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                  Save {bundle.savings}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                <p className="text-gray-600 mb-3">{bundle.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(bundle.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({bundle.reviews} reviews)
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {bundle.items.map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <Package className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${bundle.salePrice}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">₱{bundle.originalPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Best Value
                    </div>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Prices and availability may vary. Limited time offer while stocks last.
          </p>
        </div>
      </div>
    </section>
  );
}