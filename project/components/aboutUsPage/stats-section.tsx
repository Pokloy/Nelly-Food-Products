import React from 'react'
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Clock, ArrowRight, Shield, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function StatsSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Premium Products</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
    </main>
  )
}
