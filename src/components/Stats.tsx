import { Users, GraduationCap, Building2, Globe2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Students Impacted', value: '5,000+' },
    { icon: GraduationCap, label: 'Graduation Rate', value: '94%' },
    { icon: Building2, label: 'Partner Companies', value: '100+' },
    { icon: Globe2, label: 'Countries Reached', value: '15' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}