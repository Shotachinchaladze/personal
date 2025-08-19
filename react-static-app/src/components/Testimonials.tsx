"use client";

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "გიორგი ბერიძე",
    role: "სტარტაპის დამფუძნებელი",
    content: "ეს წიგნი გახდა ჩემი სახელმძღვანელო ბრენდის შექმნისას. ძალიან პრაქტიკული და სასარგებლო რჩევებით სავსე.",
    rating: 5
  },
  {
    id: 2,
    name: "ნინო წიკლაური",
    role: "მარკეტინგის მენეჯერი",
    content: "საუკეთესო რესურსი ქართულ ენაზე ბრენდინგის შესახებ. ყველა თავი დეტალურად არის განხილული.",
    rating: 5
  },
  {
    id: 3,
    name: "დავით კაპანაძე",
    role: "გრაფიკული დიზაინერი",
    content: "როგორც დიზაინერს, ძალიან დამეხმარა ბრენდის ვიზუალური იდენტობის შექმნაში. რეკომენდაციას ვუწევ ყველას.",
    rating: 5
  },
  {
    id: 4,
    name: "მარიამ გელაშვილი",
    role: "ბიზნეს კონსულტანტი",
    content: "პროფესიონალურად დაწერილი, მდიდარი მაგალითებით. ჩემი კლიენტების კონსულტირებისას ხშირად ვიყენებ.",
    rating: 5
  },
  {
    id: 5,
    name: "ალექსანდრე ჯავახიშვილი",
    role: "სტუდენტი",
    content: "უნივერსიტეტში ბრენდინგის კურსისთვის შესანიშნავი დამხმარე მასალა აღმოჩნდა. ყველაფერი ნათლად არის ახსნილი.",
    rating: 5
  },
  {
    id: 6,
    name: "თამარ მელაძე",
    role: "მცირე ბიზნესის მფლობელი",
    content: "ამ წიგნის წყალობით შევძელი ჩემი ბრენდის სწორად პოზიციონირება ბაზარზე. ძალიან მადლობელი ვარ.",
    rating: 5
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-bg-section">
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            რას ამბობენ <span className="gradient-text">მკითხველები</span>
          </h2>
          <p className="text-lg text-body-color max-w-2xl mx-auto">
            500+ კმაყოფილი მკითხველი უკვე იყენებს წიგნის ცოდნას პრაქტიკაში
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl p-6 h-full shadow-one hover:shadow-two transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-lime-300 rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-body-color">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="text-lg mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-body-color italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-lime-300 rounded-full border-2 border-white flex items-center justify-center text-secondary font-bold text-sm"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-secondary">4.9/5</p>
              <p className="text-sm text-body-color">საშუალო შეფასება</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}