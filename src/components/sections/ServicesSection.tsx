import React from 'react';
import { useSiteData } from '../../hooks/useSiteData';

export const ServicesSection = () => {
  const { data } = useSiteData();
  const services = data?.services || [];
  
  if (!services.length) return null;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-heading">Nossos Serviços / Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-4">{s.name}</h3>
              <p className="text-gray-600">{s.shortDescription || s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
