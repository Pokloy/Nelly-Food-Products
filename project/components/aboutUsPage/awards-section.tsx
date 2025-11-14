import React from 'react'
import Image from 'next/image';

export default function AwardsSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        photo: "/award-1.png",
                        title: "2024 Presidential Awardee for Outstanding MSME’s",
                        org: "Presidential Award",
                        description: "Recognized for innovative products"
                      },
                      {
                        photo: "/award-2.png",
                        title: "Asia’s Quality Excellence Awards",
                        org: "Asia’s Quality Excellence",
                        description: "Asia’s Quality Excellence Awards for Best Quality Herbal Wellness Products of 2024"
                      },
                      {
                        photo: "/award-3.png",
                        title: "Best Setup Consultancy Adoptor Awardee of 2019",
                        org: "Department of Science and Tehcnology",
                        description: "DOST Best Setup Consultancy Adoptor Awardee of 2019"
                      },
                      {
                        photo: "/award-4.png",
                        title: "Awards for Youth Micro-entrepreneur of the Year",
                        org: "Citi Micro-entrepreneurship",
                        description: "2016 Citi Micro-entrepreneurship Awards for Youth Micro-entrepreneur of the Year"
                      }
                    ].map((award, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                        <div className="relative h-40 w-full">
                        <Image
                          src={award.photo}
                          alt={`Partner ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                        <p className="text-sm text-primary mb-2">{award.org}</p>
                        <p className="text-gray-600">{award.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
    </main>
  )
}
