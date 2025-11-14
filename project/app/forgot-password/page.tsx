"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function page() {
  return (
    <main className="pt-24 pb-32 bg-gradient-to-r from-blue-50 to-indigo-50 mt-14">
      <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-xl  sm:p-8">
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-gray-900">Forgot Password</h1>
            <p className="mt-2 text-gray-600">We will recover it on time</p>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="pl-10"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            >
              Send Password Reset
            </Button>
          </form>

        </div>
      </div>
    </main>
  )
}
