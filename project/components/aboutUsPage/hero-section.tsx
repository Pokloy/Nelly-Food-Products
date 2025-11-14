import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Clock, ArrowRight, Shield, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function HerSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Nelly's was founded by Leonila T. Pacatang, mother of current CEO Kevin T. Pacatang.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                It began as a small business of producing coffee and tablea marketed only
                at the town of the Jimenez Misamis Occidental, as of today due to the
                overwhelming customer acceptance and satisfaction of the product quality,
                Nelly Coffee and Tablea is now “Rising Beyond’ working to create a name in
                the industry as one of the best manufacturer of coffee and tablea including
                sweet products in the whole region. 
              </p>
              <Button className="gap-2">
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Aboutus.png"
                alt="Our Team"
                fill
                 className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
    </main>
  )
}
