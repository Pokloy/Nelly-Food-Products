"use client"

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Package, MapPin, Clock, Phone, Mail, MessageCircle, CircleCheck as CheckCircle, Truck, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

// Mock shipping data
const mockShippingData = [
  {
    id: 'ORD-001',
    recipientName: 'John Doe',
    address: '123 Main Street, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'john@example.com',
    courier: 'Express Delivery',
    estimatedDelivery: '2024-03-20',
    status: 'in-transit',
    currentLocation: 'Distribution Center - NYC',
    products: [
      {
        id: 1,
        name: 'Organic Wellness Tea',
        quantity: 2,
        variation: 'Regular',
        price: 24.99,
        image: '/images/products/wellness-tea.jpg'
      },
      {
        id: 2,
        name: 'Coffee Sachets Bundle',
        quantity: 1,
        variation: 'Mixed Pack',
        price: 6.99,
        image: '/images/products/coffee-sachets.jpg'
      }
    ],
    trackingSteps: [
      { status: 'processing', label: 'Order Processing', completed: true, timestamp: '2024-03-15 10:30 AM' },
      { status: 'packed', label: 'Packed', completed: true, timestamp: '2024-03-16 02:15 PM' },
      { status: 'in-transit', label: 'In Transit', completed: true, timestamp: '2024-03-17 08:45 AM' },
      { status: 'out-for-delivery', label: 'Out for Delivery', completed: false, timestamp: null },
      { status: 'delivered', label: 'Delivered', completed: false, timestamp: null }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'processing': return 'bg-yellow-100 text-yellow-800';
    case 'packed': return 'bg-blue-100 text-blue-800';
    case 'in-transit': return 'bg-purple-100 text-purple-800';
    case 'out-for-delivery': return 'bg-orange-100 text-orange-800';
    case 'delivered': return 'bg-green-100 text-green-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string, completed: boolean) => {
  if (completed) {
    return <CheckCircle className="h-5 w-5 text-green-500" />;
  }
  
  switch (status) {
    case 'processing': return <Clock className="h-5 w-5 text-yellow-500" />;
    case 'packed': return <Package className="h-5 w-5 text-blue-500" />;
    case 'in-transit': return <Truck className="h-5 w-5 text-purple-500" />;
    case 'out-for-delivery': return <Truck className="h-5 w-5 text-orange-500" />;
    case 'delivered': return <CheckCircle className="h-5 w-5 text-green-500" />;
    default: return <AlertCircle className="h-5 w-5 text-gray-500" />;
  }
};

export default function UserShipping() {
  const router = useRouter();
  const [shipments, setShipments] = useState(mockShippingData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on client side
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const storedUserType = localStorage.getItem('userType');
    
    setIsAuthenticated(authStatus);
    setUserType(storedUserType);
    setIsLoading(false);
    
    if (!authStatus) {
      router.push('/login');
      return;
    }
    
    if (storedUserType === 'admin') {
      router.push('/admin-shipping');
      return;
    }
  }, [router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated || userType !== 'user') {
    return null;
  }

  const totalAmount = shipments.reduce((total, shipment) => 
    total + shipment.products.reduce((sum, product) => sum + (product.price * product.quantity), 0), 0
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Shipments</h1>

        {shipments.map((shipment) => (
          <div key={shipment.id} className="mb-8">
            <Card className="p-6">
              {/* Order Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Order #{shipment.id}</h2>
                  <Badge className={getStatusColor(shipment.status)}>
                    {shipment.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="font-semibold">{new Date(shipment.estimatedDelivery).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Shipping Information */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium">{shipment.recipientName}</p>
                        <p className="text-gray-600">{shipment.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-600">{shipment.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-600">{shipment.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-600">{shipment.courier}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Current Location</h4>
                    <p className="text-gray-600">{shipment.currentLocation}</p>
                  </div>

                  <Button className="w-full mt-6 gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contact Support
                  </Button>
                </div>

                {/* Order Tracking */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Order Tracking</h3>
                  <div className="space-y-4">
                    {shipment.trackingSteps.map((step, index) => (
                      <div key={step.status} className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          {getStatusIcon(step.status, step.completed)}
                          {index < shipment.trackingSteps.length - 1 && (
                            <div className={`w-0.5 h-8 mt-2 ${step.completed ? 'bg-green-200' : 'bg-gray-200'}`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.label}
                          </p>
                          {step.timestamp && (
                            <p className="text-sm text-gray-500">{step.timestamp}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-4">
                    {shipment.products.map((product) => (
                      <div key={product.id} className="flex items-center gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-sm text-gray-600">
                            {product.variation} • Qty: {product.quantity}
                          </p>
                          <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span>${shipment.products.reduce((sum, product) => sum + (product.price * product.quantity), 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}