import React from 'react'
import { Heart, Award, Users, Clock, ArrowRight, Shield, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function ValuesSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion for Wellness</h3>
              <p className="text-gray-600">We're driven by our passion to help others achieve their wellness goals.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">We source only the highest quality products for our customers.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability.</p>
            </div>
          </div>
        </div>
    </main>
  )
}
