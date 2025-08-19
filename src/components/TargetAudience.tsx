"use client";

import { useEffect, useRef, useState } from 'react';

const audiences = [
  {
    id: 1,
    title: "მეწარმეები",
    description: "სტარტაპების დამფუძნებლები და ბიზნეს ლიდერები, რომლებსაც სურთ ძლიერი ბრენდის შექმნა",
    icon: "🚀",
    color: "bg-lime-50 border-lime-200"
  },
  {
    id: 2,
    title: "მარკეტინგის სპეციალისტები",
    description: "პროფესიონალები, რომლებიც მუშაობენ ბრენდის სტრატეგიაზე და პოზიციონირებაზე",
    icon: "📊",
    color: "bg-navy-50 border-navy-200"
  },
  {
    id: 3,
    title: "დიზაინერები",
    description: "კრეატიული პროფესიონალები, რომლებიც ქმნიან ვიზუალურ იდენტობას",
    icon: "🎨",
    color: "bg-lime-50 border-lime-200"
  },
  {
    id: 4,
    title: "სტუდენტები",
    description: "მარკეტინგის, ბიზნესის და დიზაინის სტუდენტები",
    icon: "📚",
    color: "bg-navy-50 border-navy-200"
  },
  {
    id: 5,
    title: "კონსულტანტები",
    description: "ბიზნეს კონსულტანტები და ბრენდინგის ექსპერტები",
    icon: "💼",
    color: "bg-lime-50 border-lime-200"
  },
  {
    id: 6,
    title: "მცირე ბიზნესი",
    description: "მცირე და საშუალო ბიზნესის მფლობელები",
    icon: "🏪",
    color: "bg-navy-50 border-navy-200"
  }
];

export default function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            ვისთვისაა <span className="gradient-text">წიგნი</span>
          </h2>
          <p className="text-lg text-body-color max-w-2xl mx-auto">
            ეს წიგნი შექმნილია ყველასთვის, ვინც დაინტერესებულია ბრენდინგით და სურს ისწავლოს მისი საფუძვლები
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow hidden md:block"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow hidden md:block"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="scroll-container"
          >
            {audiences.map((audience, index) => (
              <div
                key={audience.id}
                className={`scroll-item transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-80 h-full border-2 ${audience.color} rounded-3xl p-6 hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="text-5xl mb-4">{audience.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-body-color">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2 md:hidden">
          {audiences.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === 0 ? 'bg-secondary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}