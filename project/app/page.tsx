import WebinarModal from "@/components/webinar-modal";
import ProductShowcase from "@/components/homePage/product-showcase";
import LimitedOffers from "@/components/homePage/limited-offers";
import ProductBundles from "@/components/homePage/product-bundles";
import ProductVideo from "@/components/homePage/product-video";
import SustainabilitySection from "@/components/homePage/sustainability-section";
import HeroSection from "@/components/homePage/hero-section";
import ProductPitch from "@/components/homePage/product-pitch";
import CustomerReviews from "@/components/homePage/customer-reviews";
import IndustryLeaders from "@/components/homePage/industry-leaders";
import Newsletter from "@/components/homePage/newsletter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <WebinarModal />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Limited Time Offers */}
      <LimitedOffers />

      {/* Product Bundles */}
      <ProductBundles />

      {/* Product Video Section */}
      <ProductVideo />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Features Section */}
      <ProductPitch />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Partner Companies Section */}
      <IndustryLeaders />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}