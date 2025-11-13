"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "TABLEA BIG PACK",
    description: "Experience the bold, authentic richness of tradition with every cup — now in a value-packed Tablea Big Pack made for true cacao lovers.",
    price: 170.00,
    image: "/34.png"
  },
  {
    id: 2,
    name: "PURE MAIS JAR",
    description: "Savor the natural goodness of real corn in every spoonful — Pure Mais Jar delivers pure, hearty flavor straight from the farm.",
    price: 150.00,
    image: "/21.png"
  },
  {
    id: 3,
    name: "PURE MAIS 175g",
    description: "Packed with wholesome corn flavor in a perfectly sized 175g pack — Pure Mais is your go-to comfort drink anytime, anywhere.",
    price: 90.00,
    image: "/26.png"
  },
  {
    id: 4,
    name: "PURE MAIS SACHET",
    description: "Enjoy the warm, comforting taste of Pure Mais anytime — now in a handy sachet, perfect for on-the-go moments.",
    price: 50.00,
    image: "/27.png"
  },
  {
    id: 5,
    name: "BINUKBOK KAPE JAR",
    description: "Bold, earthy, and full of heritage — Binukbok Kape in a jar brings the true taste of tradition to your cup.",
    price: 150.00,
    image: "/28.png"
  },
  {
    id: 6,
    name: "BINUKBOK KAPE SACHET",
    description: "Authentic Binukbok Kape flavor in a convenient sachet — rich tradition, ready anytime, anywhere.",
    price: 50.00,
    image: "/29.png"
  }
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-600">Discover our selection of high-quality Products</p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[300px] group"
              >
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden transition-transform duration-300 ease-out transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-opacity duration-300" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-primary">₱{product.price}</span>
                    <Button
                      variant="outline"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}