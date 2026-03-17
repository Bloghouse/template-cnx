import type { SiteData } from '../types/siteData';

export const siteConfig: SiteData = {
  settings: {
    companyName: 'Meu Site',
    slogan: 'Construindo o futuro',
    contact: { phone: '', whatsapp: '', email: '' },
    colors: { primary: '#2563eb', secondary: '#f59e0b', accent: '#f59e0b' }
  },
  pages: { home: { hero: { title: 'Bem-vindo', subtitle: '', ctaText: 'Saiba Mais', ctaLink: '/' } } }
};
export default siteConfig;
