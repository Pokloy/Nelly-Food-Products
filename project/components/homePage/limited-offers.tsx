"use client"

import { useState, useEffect } from 'react';
import { Timer, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const offers = [
  {
    id: 1,
    name: "BINUKBOK KAPE JAR",
    description: "Limited time offer! Get our premium coffee selection at a special price.",
    originalPrice: 200.00,
    salePrice: 150.00,
    image: "/28.png",
    endTime: new Date(Date.now() + 172800000) // 48 hours from now
  }
];

export default function LimitedOffers() {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = offers[0].endTime.getTime();
      const distance = end - now;

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <Image
                src={offers[0].image}
                alt={offers[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{offers[0].name}</h2>
              <p className="text-lg text-gray-600 mb-6">{offers[0].description}</p>
              
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <span className="text-3xl font-bold text-primary">₱{offers[0].salePrice}</span>
                  <span className="ml-2 text-xl text-gray-500 line-through">
                  ₱{offers[0].originalPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Timer className="h-5 w-5 text-primary" />
                  <span className="font-mono font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto gap-2">
                <ShoppingCart className="h-5 w-5" />
                Claim Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}