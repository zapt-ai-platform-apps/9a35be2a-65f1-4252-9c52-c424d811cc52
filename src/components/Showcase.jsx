import React from 'react';

const showcaseItems = [
  {
    title: 'Gradient Buttons',
    description: 'Interactive buttons with beautiful gradient effects.'
  },
  {
    title: 'Glowing Cards',
    description: 'Cards that glow on hover for an enhanced visual experience.'
  },
  {
    title: 'Animated Icons',
    description: 'Icons that animate to provide better feedback and engagement.'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See our effects in action with these interactive examples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ShowcaseCard 
            title="Gradient Buttons"
            subtitle="Interactive Elements"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-glow transition-all duration-300">
                Primary
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-glow-purple transition-all duration-300">
                Secondary
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-glow-orange transition-all duration-300">
                Accent
              </button>
            </div>
          </ShowcaseCard>
          
          <ShowcaseCard 
            title="Glowing Cards"
            subtitle="Hover Effects"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm p-4 hover:shadow-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary-500/20 to-accent-500/20 backdrop-blur-sm p-4 hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm p-4 hover:shadow-glow-orange transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm p-4 hover:shadow-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">💫</span>
              </div>
            </div>
          </ShowcaseCard>
          
          <ShowcaseCard 
            title="Animated Icons"
            subtitle="Micro-interactions"
          >
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="text-4xl hover:scale-125 transition-transform duration-300 cursor-pointer">
                ✨
              </div>
              <div className="text-4xl animate-pulse cursor-pointer">
                💡
              </div>
              <div className="text-4xl hover:rotate-12 transition-transform duration-300 cursor-pointer">
                🎨
              </div>
              <div className="text-4xl animate-float cursor-pointer">
                🚀
              </div>
            </div>
          </ShowcaseCard>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ title, subtitle, children }) {
  return (
    <div className="card hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}