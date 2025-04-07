import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/20 rounded-full animate-float delay-300 blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-500/20 rounded-full animate-float delay-100 blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Add <span className="gradient-text">Sparkle</span> to Your UI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your applications with stunning effects, smooth animations, and eye-catching designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary bling-shadow-animate">Get Started</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bling-border animate-float">
              <div className="aspect-square max-w-lg rounded-xl bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900/30 dark:via-secondary-900/30 dark:to-accent-900/30 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bling-border rounded-xl col-span-2 h-32 animate-pulse bg-white/80 dark:bg-gray-800/80"></div>
                  <div className="bling-border rounded-xl h-40 animate-pulse delay-100 bg-white/80 dark:bg-gray-800/80"></div>
                  <div className="bling-border rounded-xl h-40 animate-pulse delay-200 bg-white/80 dark:bg-gray-800/80"></div>
                  <div className="bling-border rounded-xl col-span-2 h-24 animate-pulse delay-300 bg-white/80 dark:bg-gray-800/80"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}