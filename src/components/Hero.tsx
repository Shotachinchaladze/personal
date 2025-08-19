"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAssetPath } from '@/utils/assetPath';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-bg-light to-bg-section overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              პირველი ქართული წიგნი{' '}
              <span className="gradient-text">ბრენდინგზე</span>
            </h1>
            
            <p className="text-lg md:text-xl text-body-color mb-8 leading-relaxed">
              აღმოაჩინე ბრენდინგის ხელოვნება და მეცნიერება ქართულ ენაზე. 
              სრულყოფილი სახელმძღვანელო თანამედროვე ბიზნესისთვის.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                შეიძინე ახლავე
              </button>
              <button className="btn-secondary">
                წაიკითხე ნიმუში
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-secondary">500+</p>
                <p className="text-sm text-body-color">გაყიდული ეგზემპლარი</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">4.9</p>
                <p className="text-sm text-body-color">შეფასების ქულა</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-sm text-body-color">მიმოხილვა</p>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                <Image
                  src={getAssetPath("/images/book-placeholder.svg")}
                  alt="ბრენდინგის წიგნი"
                  width={400}
                  height={600}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}