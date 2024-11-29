import React from 'react';
import ProfileCard from './ProfileCard';
import { BookOpen, UserPlus, School } from 'lucide-react';

const mentors = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Technology Mentor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Ph.D. in Computer Science with 15+ years experience in software engineering and AI.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Michael Okonjo',
    role: 'Entrepreneurship Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Serial entrepreneur with multiple successful tech startups in East Africa.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Innovation Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in emerging technologies and innovation management.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
];

export default function MentorSection() {
  return (
    <section id="mentors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Mentors</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Learn from industry experts who are passionate about sharing their knowledge and experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <ProfileCard key={index} {...mentor} />
          ))}
        </div>
        
        {/* Mentor Registration Card */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <UserPlus className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Mentor</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share your expertise and make a difference in the lives of aspiring tech professionals. Join our mentorship program and help shape the future of technology in East Africa.
          </p>
          <button 
            onClick={() => console.log('Mentor registration clicked')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Apply to Mentor
          </button>
        </div>
      </div>
    </section>
  );
}