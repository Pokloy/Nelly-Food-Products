"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, PhoneCall, MessageCircle, LayoutDashboard, LogOut, User, ShoppingBag, Heart, Settings, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CartModal from './cart-modal'
import { useAuth } from '@/lib/auth-context';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, userType, userEmail, logout } = useAuth();

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    ...(!isAuthenticated ? [{ name: 'Login', href: '/login' }] : []),
    ...(!isAuthenticated ? [{ name: 'Join Us', href: '/register' }] : []),
    ...(isAuthenticated ? [{ name: 'Shop', href: '/products' }] : []),
    ...(isAuthenticated && userType === 'admin' ? [{ name: 'Dashboard', href: '/dashboard' }] : []),
    ...(isAuthenticated && userType === 'user' ? [{ name: 'My Dashboard', href: '/user-dashboard' }] : []),
  ]

  const sideMenuItems = [
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Orders', icon: ShoppingBag, href: '/orders' },
    { name: 'Wishlist', icon: Heart, href: '/wishlist' },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Support', icon: HelpCircle, href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between h-22">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/nelly-logo.png"
              alt="Company Logo"
              width={120}
              height={40}
            />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.name === 'Join Us' ? (
                <Button
                  key={item.name}
                  asChild
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-none"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ) : item.name.includes('Dashboard') ? (
                <Button
                  key={item.name}
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Link href={item.href}>
                    <LayoutDashboard className="h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            {isAuthenticated && (
              <>
                <CartModal />
                {/* Side Menu for Authenticated Users */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="py-6">
                      <div className="mb-6 pb-6 border-b">
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="font-medium">{userEmail}</p>
                      </div>
                      <nav className="flex flex-col space-y-4">
                        {sideMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                            >
                              <Icon className="h-5 w-5" />
                              {item.name}
                            </Link>
                          );
                        })}
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors"
                        >
                          <LogOut className="h-5 w-5" />
                          Logout
                        </button>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
            <Button
              onClick={() => router.push('/contact')}
              variant="outline"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 border-none flex items-center gap-2 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="font-medium">24/7 Support</span>
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            {isAuthenticated && <CartModal />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ml-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.name === 'Join Us' ? (
                  <div key={item.name} className="px-3 py-2">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-none"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  </div>
                ) : item.name.includes('Dashboard') ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              {isAuthenticated && (
                <>
                  {sideMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-gray-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              )}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    router.push('/contact');
                    setIsOpen(false);
                  }}
                  variant="outline"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 border-none flex items-center justify-center gap-2 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span className="font-medium">24/7 Support</span>
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar