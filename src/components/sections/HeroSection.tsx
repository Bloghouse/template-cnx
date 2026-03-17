import React from 'react';
import { useSiteData } from '../../hooks/useSiteData';

export const HeroSection = () => {
  const { data } = useSiteData();
  const hero = data?.pages?.home?.hero;
  if (!hero) return null;

  return (
    <section className="bg-site-primary text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 font-heading">{hero.title}</h1>
        <p className="text-xl mb-8 font-body opacity-90">{hero.subtitle}</p>
        {hero.ctaText && (
          <a href={hero.ctaLink} className="bg-site-secondary text-white px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            {hero.ctaText}
          </a>
        )}
      </div>
    </section>
  );
};
