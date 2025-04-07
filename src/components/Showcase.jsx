import React, { useState } from 'react';

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
            <span className="gradient-text sparkle">Showcase</span>
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
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-glow transition-all duration-300 cursor-pointer">
                Primary
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-glow-purple transition-all duration-300 cursor-pointer">
                Secondary
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-glow-orange transition-all duration-300 cursor-pointer">
                Accent
              </button>
            </div>
          </ShowcaseCard>
          
          <ShowcaseCard 
            title="Glowing Cards"
            subtitle="Hover Effects"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm p-4 hover:shadow-glow bling-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary-500/20 to-accent-500/20 backdrop-blur-sm p-4 hover:shadow-glow-purple bling-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm p-4 hover:shadow-glow-orange bling-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm p-4 hover:shadow-glow bling-glow transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl">💫</span>
              </div>
            </div>
          </ShowcaseCard>
          
          <ShowcaseCard 
            title="Animated Icons"
            subtitle="Micro-interactions"
          >
            <div className="flex flex-wrap gap-8 justify-center">
              <AnimatedIcon emoji="✨" />
              <AnimatedIcon emoji="💡" isPulsing={true} />
              <AnimatedIcon emoji="🎨" isRotating={true} />
              <AnimatedIcon emoji="🚀" isFloating={true} />
            </div>
          </ShowcaseCard>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatedBlingCard />
        </div>
      </div>
    </section>
  );
}

function AnimatedIcon({ emoji, isPulsing, isRotating, isFloating }) {
  const [isActive, setIsActive] = useState(false);
  
  const baseClasses = "text-4xl transition-all duration-300 cursor-pointer";
  
  let animationClasses = "";
  if (isPulsing) animationClasses += " animate-pulse";
  if (isRotating && isActive) animationClasses += " rotate-12";
  if (isFloating) animationClasses += " animate-float";
  if (isActive && !isPulsing && !isRotating && !isFloating) animationClasses += " scale-125";
  
  return (
    <div 
      className={`${baseClasses} ${animationClasses}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {emoji}
    </div>
  );
}

function ShowcaseCard({ title, subtitle, children }) {
  return (
    <div className="card hover:shadow-xl bling-glow">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}

function AnimatedBlingCard() {
  return (
    <div className="card bling-border overflow-hidden relative">
      <h3 className="text-2xl font-bold mb-4 gradient-text sparkle">Super Bling Effect</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This card showcases multiple effects combined to create an eye-catching component.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 bling-glow bling-shadow-animate">
          <h4 className="font-semibold mb-2">Animated Shadows</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Soft pulsing shadows create depth and draw attention.
          </p>
        </div>
        
        <div className="p-4 rounded-lg bg-gradient-to-r from-secondary-50 to-accent-50 dark:from-secondary-900/30 dark:to-accent-900/30 bling-glow">
          <h4 className="font-semibold mb-2">Gradient Backgrounds</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Subtle color transitions add visual interest.
          </p>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-accent-500/10 rounded-full blur-xl"></div>
    </div>
  );
}