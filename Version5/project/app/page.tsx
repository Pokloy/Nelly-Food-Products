import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Star, Users, Shield, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WebinarModal from "@/components/webinar-modal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <WebinarModal />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Life with Premium Wellness Products
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our curated selection of high-quality health, nutrition, and personal care products designed to enhance your well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/products">
                    Shop Now <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3"
                alt="Wellness Products"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fitness Enthusiast",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
                content: "The quality of products and customer service is exceptional. I've seen remarkable improvements in my wellness journey."
              },
              {
                name: "Michael Chen",
                role: "Wellness Coach",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
                content: "As a wellness coach, I highly recommend WellnessHub. Their products are authentic and deliver real results."
              },
              {
                name: "Emma Davis",
                role: "Yoga Instructor",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
                content: "Found amazing supplements that perfectly complement my yoga practice. The results have been transformative."
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
      </section>

      {/* Partner Companies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1560472355-b33ff0c44a43?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1560472355-b33ff0c44a44?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1560472355-b33ff0c44a45?ixlib=rb-4.0.3"
            ].map((partner, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="relative h-16 w-full">
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
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest products, wellness tips, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-900 min-w-[300px]"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}