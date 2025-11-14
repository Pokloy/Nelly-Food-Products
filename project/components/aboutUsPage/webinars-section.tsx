import React from 'react'
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Clock, ArrowRight, Shield, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function WebinarsSection() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
    </main>
  )
}
