import React from 'react'
import { Button } from "@/components/ui/button";

export default function newsletter() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
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
    </main>
  )
}
