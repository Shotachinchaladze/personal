"use client";

import { useEffect, useRef, useState } from 'react';

export default function ContactFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-secondary text-white py-20">
      <div className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              დაგვიკავშირდით
            </h3>
            <p className="text-body-color-dark mb-6">
              გაქვთ კითხვები წიგნის შესახებ? გვაინტერესებს თქვენი აზრი და შეთავაზებები.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-body-color-dark">ელექტრონული ფოსტა</p>
                  <a
                    href="mailto:arshemedzloarmetqva@chamokalibdit.ge"
                    className="text-primary hover:text-lime-300 transition-colors font-semibold"
                  >
                    arshemedzloarmetqva@chamokalibdit.ge
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-body-color-dark">სამუშაო საათები</p>
                  <p className="text-white font-semibold">ორშ-პარ: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">
              გამოიწერეთ სიახლეები
            </h3>
            <p className="text-body-color-dark mb-6">
              მიიღეთ ინფორმაცია ახალი გამოცემებისა და ღონისძიებების შესახებ
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="თქვენი ელ-ფოსტა"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-body-color-dark focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  გამოწერა
                </button>
              </div>
              <p className="text-xs text-body-color-dark">
                თქვენი მონაცემები დაცულია
              </p>
            </form>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">ბ</span>
              </div>
              <span className="text-white font-bold text-lg">ბრენდინგის წიგნი</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-body-color-dark hover:text-primary transition-colors">
                კონფიდენციალურობა
              </a>
              <a href="#" className="text-body-color-dark hover:text-primary transition-colors">
                წესები და პირობები
              </a>
            </div>

            <p className="text-body-color-dark text-sm">
              © 2025 ყველა უფლება დაცულია
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
