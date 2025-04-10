"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Users, UserCheck, Clock } from "lucide-react";

// Dummy data for demonstration
const dummyReferrals = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", status: "approved", date: "2024-03-15" },
  { id: 2, name: "Mike Williams", email: "mike@example.com", status: "pending", date: "2024-03-16" },
  { id: 3, name: "Emma Davis", email: "emma@example.com", status: "approved", date: "2024-03-17" },
];

export default function UserDashboard() {
  const router = useRouter();
  const [referrals, setReferrals] = useState(dummyReferrals);
  const [stats, setStats] = useState({
    totalReferrals: 0,
    approvedReferrals: 0,
    pendingReferrals: 0,
  });

  useEffect(() => {
    // Check if user is authenticated
    const userType = localStorage.getItem('userType');
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated || userType !== 'user') {
      router.push('/login');
      return;
    }

    // Calculate statistics
    const approved = referrals.filter(ref => ref.status === 'approved').length;
    
    setStats({
      totalReferrals: referrals.length,
      approvedReferrals: approved,
      pendingReferrals: referrals.length - approved,
    });
  }, [referrals, router]);

  return (
    <main className="pt-24 min-h-screen bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalReferrals}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.approvedReferrals}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingReferrals}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Referrals Table */}
        <Card className="mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Referrals</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrals.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell>{referral.name}</TableCell>
                    <TableCell>{referral.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        referral.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {referral.status}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(referral.date).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </main>
  );
}