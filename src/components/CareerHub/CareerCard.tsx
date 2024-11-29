import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CareerCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  category: string;
}

export default function CareerCard({ title, icon: Icon, skills, category }: CareerCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      role="article"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Icon className="w-12 h-12 text-blue-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="flex-grow">
          <ul className="space-y-2 mb-4">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mt-auto w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
          onClick={() => console.log(`Learn more about ${category}: ${title}`)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}