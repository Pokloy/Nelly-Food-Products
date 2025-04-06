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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, UserCheck, UserX, RefreshCcw } from "lucide-react";

// Dummy data for demonstration
const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "approved", referrals: 3 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "pending", referrals: 0 },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "approved", referrals: 5 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "pending", referrals: 2 },
];

export default function Dashboard() {
  const router = useRouter();
  const [users, setUsers] = useState(dummyUsers);
  const [stats, setStats] = useState({
    totalUsers: 0,
    approvedUsers: 0,
    pendingUsers: 0,
    totalReferrals: 0,
  });

  useEffect(() => {
    // Check if user is admin
    const userType = localStorage.getItem('userType');
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated || userType !== 'admin') {
      router.push('/login');
      return;
    }

    // Calculate statistics
    const approved = users.filter(user => user.status === 'approved').length;
    const totalReferrals = users.reduce((acc, user) => acc + user.referrals, 0);

    setStats({
      totalUsers: users.length,
      approvedUsers: approved,
      pendingUsers: users.length - approved,
      totalReferrals,
    });
  }, [users, router]);

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'approved' ? 'pending' : 'approved';
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.approvedUsers}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <UserX className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingUsers}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <RefreshCcw className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalReferrals}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Users Table */}
        <Card className="mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Registered Users</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Referrals</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>{user.referrals}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === 'approved' ? 'Revoke' : 'Approve'}
                      </Button>
                    </TableCell>
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