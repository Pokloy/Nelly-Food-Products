"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Package, MapPin, Clock, Phone, Mail, Search, Filter, CircleCheck as CheckCircle, Truck, CircleAlert as AlertCircle, CreditCard as Edit, Save, X, MessageSquare, Calendar, User, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

// Mock shipping data for admin
const mockAdminShippingData = [
  {
    id: 'ORD-001',
    userId: 'user1',
    recipientName: 'John Doe',
    address: '123 Main Street, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'john@example.com',
    courier: 'Express Delivery',
    estimatedDelivery: '2024-03-20',
    status: 'in-transit',
    currentLocation: 'Distribution Center - NYC',
    approved: true,
    orderDate: '2024-03-15',
    products: [
      {
        id: 1,
        name: 'Organic Wellness Tea',
        quantity: 2,
        variation: 'Regular',
        price: 24.99,
        image: '/images/products/wellness-tea.jpg'
      }
    ],
    statusHistory: [
      { status: 'processing', timestamp: '2024-03-15 10:30 AM', admin: 'Admin1', notes: 'Order received' },
      { status: 'packed', timestamp: '2024-03-16 02:15 PM', admin: 'Admin2', notes: 'Items packed and ready' },
      { status: 'in-transit', timestamp: '2024-03-17 08:45 AM', admin: 'Admin1', notes: 'Shipped via Express Delivery' }
    ]
  },
  {
    id: 'ORD-002',
    userId: 'user2',
    recipientName: 'Jane Smith',
    address: '456 Oak Avenue, Los Angeles, CA 90210',
    phone: '+1 (555) 987-6543',
    email: 'jane@example.com',
    courier: 'Standard Shipping',
    estimatedDelivery: '2024-03-22',
    status: 'processing',
    currentLocation: 'Warehouse',
    approved: false,
    orderDate: '2024-03-18',
    products: [
      {
        id: 2,
        name: 'Coffee Sachets Bundle',
        quantity: 3,
        variation: 'Mixed Pack',
        price: 6.99,
        image: '/images/products/coffee-sachets.jpg'
      }
    ],
    statusHistory: [
      { status: 'processing', timestamp: '2024-03-18 09:15 AM', admin: 'System', notes: 'Order placed, awaiting approval' }
    ]
  }
];

const statusOptions = [
  { value: 'processing', label: 'Processing' },
  { value: 'packed', label: 'Packed' },
  { value: 'in-transit', label: 'In Transit' },
  { value: 'out-for-delivery', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' }
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

export default function AdminShipping() {
  const router = useRouter();
  const [shipments, setShipments] = useState(mockAdminShippingData);
  const [filteredShipments, setFilteredShipments] = useState(mockAdminShippingData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingOrder, setEditingOrder] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
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
    
    if (storedUserType !== 'admin') {
      router.push('/shipping');
      return;
    }
  }, [router]);

  useEffect(() => {
    let filtered = shipments;
    
    if (searchTerm) {
      filtered = filtered.filter(shipment => 
        shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(shipment => shipment.status === statusFilter);
    }
    
    setFilteredShipments(filtered);
  }, [searchTerm, statusFilter, shipments]);

  const handleApproveOrder = (orderId: string, approved: boolean, reason?: string) => {
    setShipments(prev => prev.map(shipment => 
      shipment.id === orderId 
        ? { 
            ...shipment, 
            approved,
            statusHistory: [
              ...shipment.statusHistory,
              {
                status: approved ? 'approved' : 'rejected',
                timestamp: new Date().toLocaleString(),
                admin: 'Current Admin',
                notes: reason || (approved ? 'Order approved' : 'Order rejected')
              }
            ]
          }
        : shipment
    ));
  };

  const handleStatusUpdate = (orderId: string, newStatus: string, location: string, notes: string) => {
    setShipments(prev => prev.map(shipment => 
      shipment.id === orderId 
        ? { 
            ...shipment, 
            status: newStatus,
            currentLocation: location,
            statusHistory: [
              ...shipment.statusHistory,
              {
                status: newStatus,
                timestamp: new Date().toLocaleString(),
                admin: 'Current Admin',
                notes
              }
            ]
          }
        : shipment
    ));
    setEditingOrder(null);
  };

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

  if (!isAuthenticated || userType !== 'admin') {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shipping Management</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search orders..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {statusOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-semibold text-gray-900">{shipments.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {shipments.filter(s => !s.approved).length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Transit</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {shipments.filter(s => s.status === 'in-transit').length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {shipments.filter(s => s.status === 'delivered').length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredShipments.map((shipment) => (
            <Card key={shipment.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Order #{shipment.id}</h3>
                    <p className="text-sm text-gray-600">
                      {shipment.recipientName} • {new Date(shipment.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge className={getStatusColor(shipment.status)}>
                    {shipment.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  {!shipment.approved && (
                    <Badge className="bg-red-100 text-red-800">
                      PENDING APPROVAL
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedOrder(shipment)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Order Details - #{selectedOrder?.id}</DialogTitle>
                      </DialogHeader>
                      {selectedOrder && (
                        <div className="space-y-6">
                          {/* Customer Info */}
                          <div>
                            <h4 className="font-semibold mb-2">Customer Information</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p><strong>Name:</strong> {selectedOrder.recipientName}</p>
                                <p><strong>Email:</strong> {selectedOrder.email}</p>
                                <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                              </div>
                              <div>
                                <p><strong>Address:</strong> {selectedOrder.address}</p>
                                <p><strong>Courier:</strong> {selectedOrder.courier}</p>
                                <p><strong>Est. Delivery:</strong> {new Date(selectedOrder.estimatedDelivery).toLocaleDateString()}</p>
                              </div>
                            </div>
                          </div>

                          {/* Products */}
                          <div>
                            <h4 className="font-semibold mb-2">Products</h4>
                            <div className="space-y-2">
                              {selectedOrder.products.map((product: any) => (
                                <div key={product.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                                  <div className="relative h-12 w-12">
                                    <Image
                                      src={product.image}
                                      alt={product.name}
                                      fill
                                      className="object-cover rounded"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-sm text-gray-600">
                                      {product.variation} • Qty: {product.quantity} • ${product.price}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Status History */}
                          <div>
                            <h4 className="font-semibold mb-2">Status History</h4>
                            <div className="space-y-2">
                              {selectedOrder.statusHistory.map((history: any, index: number) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                                  <div className="text-sm">
                                    <p className="font-medium">{history.status.toUpperCase()}</p>
                                    <p className="text-gray-600">{history.timestamp}</p>
                                    <p className="text-gray-600">By: {history.admin}</p>
                                    {history.notes && <p className="text-gray-600">Notes: {history.notes}</p>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  {editingOrder === shipment.id ? (
                    <UpdateStatusForm
                      shipment={shipment}
                      onSave={handleStatusUpdate}
                      onCancel={() => setEditingOrder(null)}
                    />
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingOrder(shipment.id)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Update Status
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Customer</p>
                  <p className="font-medium">{shipment.recipientName}</p>
                  <p className="text-sm text-gray-600">{shipment.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Location</p>
                  <p className="font-medium">{shipment.currentLocation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Products</p>
                  <p className="font-medium">{shipment.products.length} item(s)</p>
                  <p className="text-sm text-gray-600">
                    Total: ${shipment.products.reduce((sum, p) => sum + (p.price * p.quantity), 0).toFixed(2)}
                  </p>
                </div>
              </div>

              {!shipment.approved && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleApproveOrder(shipment.id, true)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve Order
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="destructive">
                          Reject Order
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Reject Order</DialogTitle>
                        </DialogHeader>
                        <RejectOrderForm
                          orderId={shipment.id}
                          onReject={handleApproveOrder}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

// Update Status Form Component
function UpdateStatusForm({ 
  shipment, 
  onSave, 
  onCancel 
}: { 
  shipment: any; 
  onSave: (id: string, status: string, location: string, notes: string) => void;
  onCancel: () => void;
}) {
  const [status, setStatus] = useState(shipment.status);
  const [location, setLocation] = useState(shipment.currentLocation);
  const [notes, setNotes] = useState('');

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="location">Current Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter current location"
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this status update"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={() => onSave(shipment.id, status, location, notes)}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" onClick={onCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Reject Order Form Component
function RejectOrderForm({ 
  orderId, 
  onReject 
}: { 
  orderId: string; 
  onReject: (id: string, approved: boolean, reason: string) => void;
}) {
  const [reason, setReason] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="reason">Reason for Rejection</Label>
        <Textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Please provide a reason for rejecting this order"
          required
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant="destructive"
          onClick={() => onReject(orderId, false, reason)}
          disabled={!reason.trim()}
        >
          Reject Order
        </Button>
      </div>
    </div>
  );
}