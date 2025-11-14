import React from 'react'
import { ShoppingCart, ArrowRight, Star, Users, Shield, Quote } from "lucide-react";

export default function ProductPitch() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the highest quality products, carefully selected for your wellness journey.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Join a community of wellness enthusiasts and share your journey to better health.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">Your satisfaction is our priority, backed by our 100% guarantee.</p>
            </div>
          </div>
        </div>
    </main>
  )
}
