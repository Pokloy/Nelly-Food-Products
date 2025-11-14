"use client"

import { Leaf, Recycle, Heart, Globe } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Leaf,
    title: "Organic Sourcing",
    description: "We partner with certified organic farms to ensure the highest quality ingredients."
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Packaging",
    description: "Our packaging is made from recycled materials and is 100% biodegradable."
  },
  {
    icon: Heart,
    title: "Fair Trade Certified",
    description: "Supporting local communities through fair trade practices and sustainable partnerships."
  },
  {
    icon: Globe,
    title: "Carbon Neutral",
    description: "We offset our carbon footprint through various environmental initiatives."
  }
];

export default function SustainabilitySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Committed to Sustainability
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe in creating products that not only taste great but also contribute to a healthier planet. Our commitment to sustainability guides every decision we make.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative h-[470px] rounded-2xl overflow-hidden">
            <Image
              src="/NellyProds.png"
              alt="Sustainability"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}