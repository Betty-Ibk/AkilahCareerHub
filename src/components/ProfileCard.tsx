import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export default function ProfileCard({ name, role, image, bio, linkedin, twitter }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0A66C2] hover:text-[#004182] transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1DA1F2] hover:text-[#0C85D0] transition-all duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}