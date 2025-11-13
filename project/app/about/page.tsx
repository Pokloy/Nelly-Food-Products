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
                Nelly's was founded by Leonila T. Pacatang, mother of current CEO Kevin T. Pacatang.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                It began as a small business of producing coffee and tablea marketed only
                at the town of the Jimenez Misamis Occidental, as of today due to the
                overwhelming customer acceptance and satisfaction of the product quality,
                Nelly Coffee and Tablea is now “Rising Beyond’ working to create a name in
                the industry as one of the best manufacturer of coffee and tablea including
                sweet products in the whole region. 
              </p>
              <Button className="gap-2">
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Aboutus.png"
                alt="Our Team"
                fill
                 className="object-cover object-top"
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
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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