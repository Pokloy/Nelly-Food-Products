"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, PhoneCall, MessageCircle, LayoutDashboard, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState<string | null>(null)

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true')
    setUserType(localStorage.getItem('userType'))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    router.push('/login')
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Join Us', href: '/register' },
    { name: 'Contact Us', href: '/contact' },
    ...(isAuthenticated ? [{ name: 'Shop', href: '/products' }] : []),
    ...(isAuthenticated && userType === 'admin' ? [{ name: 'Dashboard', href: '/dashboard' }] : []),
    ...(isAuthenticated && userType === 'user' ? [{ name: 'My Dashboard', href: '/user-dashboard' }] : []),
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-primary">WellnessHub</h1>
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
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            )}
            <Button
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
                <button
                  onClick={handleLogout}
                  className="w-full px-3 py-2 flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-gray-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              )}
              <div className="px-3 py-2">
                <Button
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