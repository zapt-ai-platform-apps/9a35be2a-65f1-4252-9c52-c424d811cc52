import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg"></div>
            <span className="font-bold text-xl">Bling</span>
          </div>
          
          <div className="flex space-x-6">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bling UI. All rights reserved.
          </p>
          
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <span>Made on ZAPT</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
    >
      {children}
    </a>
  );
}