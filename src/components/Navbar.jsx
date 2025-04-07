import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg animate-float bling-shadow-animate"></div>
          <span className="font-bold text-xl">Bling</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#showcase">Showcase</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div className="hidden md:block">
          <button className="btn btn-primary bling-shadow-animate">Get Started</button>
        </div>
        
        <button 
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 animate-fadeIn">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#features" onClick={toggleMobileMenu}>Features</MobileNavLink>
              <MobileNavLink href="#showcase" onClick={toggleMobileMenu}>Showcase</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={toggleMobileMenu}>Testimonials</MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
              <div className="pt-4">
                <button className="w-full btn btn-primary bling-shadow-animate">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="group relative text-gray-800 dark:text-gray-200 font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <a 
      href={href} 
      className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
      onClick={onClick}
    >
      {children}
    </a>
  );
}