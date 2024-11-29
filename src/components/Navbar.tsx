import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">Akilah</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-700"> Innovation Center</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#mentors" className="text-gray-700 hover:text-blue-600 transition">Mentors</a>
            <a href="#mentees" className="text-gray-700 hover:text-blue-600 transition">Mentees</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="#donate" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Donate
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#mentors" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mentors</a>
            <a href="#mentees" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mentees</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <a href="#donate" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Donate</a>
          </div>
        </div>
      )}
    </nav>
  );
}