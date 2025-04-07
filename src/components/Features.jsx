import React, { useState } from 'react';

const features = [
  {
    icon: '✨',
    title: 'Stunning Effects',
    description: 'Add beautiful visual effects that catch the eye and enhance user experience.'
  },
  {
    icon: '🎭',
    title: 'Animations',
    description: 'Smooth, performant animations that bring your interface to life.'
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    description: 'Clean, contemporary aesthetics that showcase your content perfectly.'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Looks great on any device, from mobile phones to desktop screens.'
  },
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Optimized for speed and smooth operation, even with complex effects.'
  },
  {
    icon: '🔍',
    title: 'Attention to Detail',
    description: 'Carefully crafted components with pixel-perfect execution.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary-300/10 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary-300/10 dark:bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text sparkle">Amazing Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover all the ways you can enhance your UI with our collection of features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`card hover:shadow-xl hover:-translate-y-1 group bling-glow ${isHovered ? 'bling-shadow-animate' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 text-4xl group-hover:scale-110 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}