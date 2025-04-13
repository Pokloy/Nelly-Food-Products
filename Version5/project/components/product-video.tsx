"use client";

import { Play } from "lucide-react";

export default function ProductVideo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See Our Products in Action</h2>
          <p className="text-lg text-gray-300">
            Discover how our premium beverages are crafted with care and expertise
          </p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100057439451393%2Fvideos%2F720725176678723%2F&show_text=false&width=560&t=0"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
