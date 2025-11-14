import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Star, Users, Shield, Quote } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="mt-20 pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/*title section*/}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Always Rising beyond it’s limits...
              </h1>
              {/*description section*/}
              <p className="text-lg text-gray-600 mb-8">
              Fresh farm produce from the locals of
              Jimenez, Misamis Occidental, and
              other regions in Mindanao,
              Philippines, is one of the key reasons
              why Nelly's has remained in business
              for years. By supporting the local
              community,
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/products">
                    Shop Now <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/HomePageBanner.png"
                alt="Wellness Products"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>   
    </main>
  )
}
