import React from 'react'
import { ShoppingCart, ArrowRight, Star, Users, Shield, Quote } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Miguel Santos",
                role: "LA UNION Customer",
                image: "/JuanMiguelSantos.png",
                content: "Maganda po sa katawan, after 2 days na iniinom meron cleansing effect, para sa akin kahit hindi maglagay ng sugar sakto lang panlasa ko. Maraming salamat po Nelly Herbal Coffee. God bless po sa inyo."
              },
              {
                name: "Maria Isabella Reyes",
                role: "Santa Maria Customer",
                image: "/MariaIsabellaReyes.png",
                content: "Masarap po ang kape ng Nelly herbal coffee, mahilig po ko mag kape kaya naghanap ako ng alternative na hindi ako magpapalpitate at Nakita ko ang Nelly Herbal Coffee, Nag try ako, Lumakas ang immune system ko, dati maambunan lang ako, sinisipon na ako, at dati palaging sumasakit ang balakang ko pag matagal akong naka upo... 50 years old na ko kaya kailangan ko narin ng mga healthy drinks tulad ng Nelly Coffee...."
              },
              {
                name: "Wilma Namia Ragos",
                role: "Cavite Customer",
                image: "/WilmaNamiaRagos.jpg",
                content: "Hi Nelly herbal coffe Wilma ragos Po Second order ko na Po sa inyo ng mangosteen Malunggay corn coffe Dati Hindi ko hilig Ang black coffe pero nung nakilala ko Ang Nelly herbal coffe nasanay na Po ako dahil nung Bata pa ako same lasa ng kinakape Naminat mataas Po Kasi uric acid ko at nagkaroon ako ng lagnat with bukol dahil daw po iyon sa mataas ang uric acid kaya Ang ginawa ko Po Ang iniinom ko ay Ang mangosteen Malunggay corn coffe Meron Po Kasi Akong trabaho at bawal Po kaming Hindi pumasok at syempre bilang nanay na Po kailangan magtrabaho ito pong mangosteen Malunggay corn coffe Ang nakatulong sakin dahil nawala Po Ang lagnat ko at bukol hirap din ako makatulog kaya malaking tulong po ito sakin at naging pagkakitaan ko narin Maraming salamat Nelly Herbal coffe."
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gray-200 mb-2" />
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}
