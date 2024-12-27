"use client"

import { useState } from "react"
import { GraduationCap, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Pathways</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
            <a href="#student-visa" className="text-gray-600 hover:text-purple-600 transition-colors">Student Visa</a>
            <a href="#eligibility" className="text-gray-600 hover:text-purple-600 transition-colors">Eligibility</a>
            <Button asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors">Services</a>
            <a href="#student-visa" className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors">Student Visa</a>
            <a href="#eligibility" className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors">Eligibility</a>
            <a href="#contact" className="block px-3 py-2 text-purple-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  )
}

