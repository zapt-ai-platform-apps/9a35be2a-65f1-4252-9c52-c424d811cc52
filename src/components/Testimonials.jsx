import React from 'react';

const testimonials = [
  {
    quote: "Adding these effects to our app completely transformed the user experience. Our engagement metrics went through the roof!",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E"
  },
  {
    quote: "The attention to detail in these UI components is incredible. Our designers are thrilled with how everything looks.",
    author: "Michael Chen",
    role: "Design Lead",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238b5cf6'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E"
  },
  {
    quote: "Implementation was so easy. We were able to quickly integrate these effects into our existing app with minimal effort.",
    author: "Alex Rivera",
    role: "Frontend Developer",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f97316'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-secondary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text sparkle">What People Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the people who've used our effects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, avatar, index }) {
  return (
    <div className="card hover:shadow-xl relative overflow-hidden group bling-glow" 
         style={{ animationDelay: `${index * 200}ms` }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      {/* Decorative corner bling */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
      
      <div className="flex flex-col h-full">
        <div className="mb-6 text-gray-600 dark:text-gray-300 flex-1">
          <svg className="w-8 h-8 text-gray-300 dark:text-gray-700 mb-4 group-hover:text-primary-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg">{quote}</p>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full mr-3 bling-shadow-animate overflow-hidden">
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold group-hover:text-primary-500 transition-colors">{author}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}