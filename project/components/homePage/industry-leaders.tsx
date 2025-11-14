import React from 'react'
import Image from "next/image";

export default function IndustryLeaders() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "/DOST-Logo.png",
              "/DTI-logo.png",
              "/GrowthInternationalCircle-logo.png",
              "/MPCI-logo.png"
            ].map((partner, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="relative h-40 w-full">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}
