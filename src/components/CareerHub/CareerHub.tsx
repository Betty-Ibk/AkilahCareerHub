import React, { useState, useMemo } from 'react';
import { 
  Code, Database, Globe, Server, Shield, Smartphone, Cpu, PenTool, BarChart,
  Camera, MessageSquare, Hammer, Wrench, Share2, Construction
} from 'lucide-react';
import CareerCard from './CareerCard';
import SearchBar from './SearchBar';

const careerPaths = [
  {
    category: 'Software Development',
    icon: Code,
    title: 'Web Development',
    skills: ['Frontend Development', 'Backend Development', 'Full Stack', 'UI/UX Integration']
  },
  {
    category: 'Data Science',
    icon: Database,
    title: 'Data Analytics',
    skills: ['Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Big Data']
  },
  {
    category: 'Cloud Computing',
    icon: Globe,
    title: 'Cloud Architecture',
    skills: ['AWS', 'Azure', 'Cloud Security', 'DevOps']
  },
  {
    category: 'Infrastructure',
    icon: Server,
    title: 'System Administration',
    skills: ['Network Management', 'Server Maintenance', 'IT Support', 'Security']
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    title: 'Security Operations',
    skills: ['Threat Detection', 'Incident Response', 'Security Auditing', 'Compliance']
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    title: 'App Development',
    skills: ['iOS Development', 'Android Development', 'Cross-platform', 'Mobile UI']
  },
  {
    category: 'AI/ML',
    icon: Cpu,
    title: 'AI Engineering',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
  },
  {
    category: 'Design',
    icon: PenTool,
    title: 'Digital Design',
    skills: ['UI Design', 'UX Research', 'Visual Design', 'Prototyping']
  },
  {
    category: 'Business Intelligence',
    icon: BarChart,
    title: 'Data Strategy',
    skills: ['Business Analytics', 'Data Visualization', 'Reporting', 'KPI Tracking']
  },
  {
    category: 'Visual Arts & Media',
    icon: Camera,
    title: 'Visual Arts',
    skills: ['Photography', 'Cinematography', 'Video Editing', 'Digital Art', 'Traditional Art', 'Graphic Design']
  },
  {
    category: 'Communication & Content',
    icon: MessageSquare,
    title: 'Content Creation',
    skills: ['Creative Writing', 'Technical Writing', 'Public Speaking', 'Content Creation', 'Copywriting', 'Brand Storytelling']
  },
  {
    category: 'Crafts & Manufacturing',
    icon: Hammer,
    title: 'Crafts',
    skills: ['Furniture Making', 'Woodworking', 'Metalworking', 'Pottery & Ceramics', 'Textile Crafts', 'Jewelry Making']
  },
  {
    category: 'Technical Services',
    icon: Wrench,
    title: 'Tech Support',
    skills: ['Computer Repair', 'Smartphone Repair', 'Electronics Troubleshooting', 'Hardware Maintenance', 'Network Setup', 'System Diagnostics']
  },
  {
    category: 'Digital Marketing',
    icon: Share2,
    title: 'Marketing',
    skills: ['Social Media Management', 'SEO Optimization', 'Content Marketing', 'Email Marketing', 'Analytics & Reporting', 'PPC Advertising']
  },
  {
    category: 'Trade Skills',
    icon: Construction,
    title: 'Trade Skills',
    skills: ['Plumbing', 'Electrical Work', 'HVAC Maintenance', 'Carpentry', 'Welding', 'Home Renovation']
  }
];

export default function CareerHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = useMemo(() => {
    return careerPaths.filter(career => 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <section id="careers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Development Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse career paths in technology and innovation. Our comprehensive programs are designed to equip you with the skills needed for success in these high-demand fields.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              icon={career.icon}
              skills={career.skills}
              category={career.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}