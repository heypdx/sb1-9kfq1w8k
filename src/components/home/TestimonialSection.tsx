import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';

const testimonials = [
  {
    quote: "Shop With Local CRM has transformed how we manage our business. The social media integration is a game-changer!",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "The analytics tools have helped us make better decisions and grow our customer base significantly.",
    author: "Michael Chen",
    role: "Retail Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "Customer support is outstanding, and the platform is so easy to use. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};