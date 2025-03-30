import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Star, Users, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
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

      {/* Featured Products Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-155622857${item}-0d85b1a4d571?ixlib=rb-4.0.3`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Premium Wellness Product</h3>
                  <p className="text-gray-600 text-sm mb-3">Experience the difference with our signature product line.</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
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