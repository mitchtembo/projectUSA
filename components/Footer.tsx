import { GraduationCap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold">TruPathways</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#student-visa" className="hover:text-purple-400 transition-colors">Student Visa</a>
            <a href="#eligibility" className="hover:text-purple-400 transition-colors">Eligibility</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} TruPathways All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

