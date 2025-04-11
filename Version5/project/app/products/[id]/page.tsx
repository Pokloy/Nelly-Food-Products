import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Dummy product data
const products = {
  1: {
    name: "Organic Wellness Tea",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 128,
    description: "Our premium organic wellness tea is a carefully crafted blend of natural ingredients designed to promote overall well-being. Each sip delivers a perfect balance of flavors and therapeutic benefits.",
    specifications: [
      "100% Organic Ingredients",
      "30 Tea Bags per Pack",
      "Caffeine-Free",
      "Non-GMO Certified",
      "Sustainably Sourced"
    ],
    images: [
      "https://images.unsplash.com/photo-1563822249-9a62765ebcef?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563822249-ef66117e683f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563822249-7a8def6dc0ae?ixlib=rb-4.0.3"
    ]
  },
  2: {
    name: "Natural Vitamin Complex",
    price: 39.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 95,
    description: "A comprehensive blend of essential vitamins and minerals sourced from natural ingredients. Support your daily wellness routine with our premium vitamin complex.",
    specifications: [
      "60 Capsules",
      "Vegan-Friendly",
      "No Artificial Additives",
      "GMP Certified",
      "Third-Party Tested"
    ],
    images: [
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577174881489-2f06fa6a9c1d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577174881925-6c1a1db8b4a5?ixlib=rb-4.0.3"
    ]
  },
  // Add more products as needed
};

export async function generateStaticParams() {
  // Generate static pages for all products
  return Object.keys(products).map((id) => ({
    id: id.toString()
  }));
}

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                    Save {discount}%
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Specifications:</h2>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Truck className="h-5 w-5" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="h-5 w-5" />
                    <span>Money-back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}