import React from 'react'
import Image from 'next/image';

export default function TeamSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              image:"/CEO.png",
              name:"Nelly Food Products",
              position:"CEO"
            },{
              image:"/Nerf.jpg",
              name:"Nerf Roden",
              position:"Executive"
            },{
              image:"/MarcoReyes.png",
              name:"Marco Reyes",
              position:"Product Manager"
            },{
              image:"/Lira_Santos.jpg",
              name:"Lira Santos",
              position:"Marketing Manager"
            }
          ].map((member,index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}
