"use client";

import { useEffect, useRef, useState } from 'react';

const stores = [
  {
    id: 1,
    name: "წიგნის სახლი",
    description: "ონლაინ და ფიზიკური მაღაზია",
    price: "₾45",
    discount: "₾39",
    link: "#",
    popular: true
  },
  {
    id: 2,
    name: "ბიბლუსი",
    description: "ონლაინ მაღაზია",
    price: "₾45",
    discount: null,
    link: "#",
    popular: false
  },
  {
    id: 3,
    name: "პეგასი",
    description: "ფიზიკური მაღაზიები",
    price: "₾45",
    discount: "₾42",
    link: "#",
    popular: false
  },
  {
    id: 4,
    name: "Saba.com.ge",
    description: "ონლაინ პლატფორმა",
    price: "₾45",
    discount: null,
    link: "#",
    popular: false
  }
];

export default function PurchaseSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            სად შევიძინო <span className="gradient-text">წიგნი</span>
          </h2>
          <p className="text-lg text-body-color max-w-2xl mx-auto">
            აირჩიეთ თქვენთვის მოსახერხებელი მაღაზია და შეიძინეთ წიგნი დღესვე
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative bg-white rounded-3xl p-6 h-full ${
                store.popular ? 'border-2 border-primary shadow-lg' : 'border border-stroke-stroke shadow-one'
              } hover:shadow-two transition-shadow`}>
                {store.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-secondary px-4 py-1 rounded-full text-sm font-semibold">
                      პოპულარული
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-secondary mb-2 mt-2">
                  {store.name}
                </h3>
                <p className="text-sm text-body-color mb-4">
                  {store.description}
                </p>
                
                <div className="mb-6">
                  {store.discount ? (
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {store.discount}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {store.price}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-secondary">
                      {store.price}
                    </span>
                  )}
                </div>
                
                <a
                  href={store.link}
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    store.popular
                      ? 'bg-primary text-secondary hover:bg-primary-dark'
                      : 'bg-secondary text-white hover:bg-navy-700'
                  }`}
                >
                  შეიძინე
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                ელექტრონული ვერსია
              </h3>
              <p className="text-body-color mb-6">
                მიიღეთ წიგნის PDF ვერსია მყისიერად და დაიწყეთ კითხვა ნებისმიერ მოწყობილობაზე
              </p>
              <ul className="space-y-2 text-body-color mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  მყისიერი წვდომა
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  კითხვა ნებისმიერ მოწყობილობაზე
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  ეკოლოგიური არჩევანი
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-3xl p-8 shadow-lg">
                <p className="text-sm text-body-color mb-2">ელექტრონული ვერსია</p>
                <p className="text-4xl font-bold text-primary mb-4">₾25</p>
                <button className="btn-primary w-full">
                  შეიძინე PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}