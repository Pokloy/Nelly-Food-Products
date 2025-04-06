import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Clock, ArrowRight, Shield, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Empowering Your Journey to Wellness
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At WellnessHub, we're dedicated to providing premium health and wellness products 
                that enhance your quality of life. Our journey began with a simple mission: 
                to make wellness accessible to everyone.
              </p>
              <Button className="gap-2">
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion for Wellness</h3>
              <p className="text-gray-600">We're driven by our passion to help others achieve their wellness goals.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">We source only the highest quality products for our customers.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "Best Wellness Platform",
                org: "Health Tech Awards 2024",
                description: "Recognized for innovative health solutions"
              },
              {
                icon: Star,
                title: "Customer Excellence",
                org: "Global Wellness Summit",
                description: "Outstanding customer satisfaction"
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                org: "International Standards",
                description: "ISO 9001:2015 Certified"
              },
              {
                icon: Award,
                title: "Innovation Award",
                org: "Digital Health Forum",
                description: "Leading digital wellness solutions"
              }
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <award.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-sm text-primary mb-2">{award.org}</p>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-15562285${member}1-0d85b1a4d571?ixlib=rb-4.0.3`}
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold mb-1">Team Member {member}</h3>
                  <p className="text-gray-600 text-sm">Wellness Expert</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Wellness: Mind, Body, and Spirit",
                date: "March 25, 2024",
                time: "2:00 PM - 3:30 PM EST",
                speaker: "Dr. Sarah Johnson",
                attendees: "Limited to 100 participants"
              },
              {
                title: "Nutrition Essentials for Modern Life",
                date: "April 5, 2024",
                time: "1:00 PM - 2:30 PM EST",
                speaker: "Prof. Michael Chen",
                attendees: "Limited to 150 participants"
              },
              {
                title: "Stress Management in Digital Age",
                date: "April 15, 2024",
                time: "3:00 PM - 4:30 PM EST",
                speaker: "Dr. Emma Davis",
                attendees: "Limited to 120 participants"
              }
            ].map((webinar, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{webinar.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{webinar.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{webinar.attendees}</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Register Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Premium Products</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}