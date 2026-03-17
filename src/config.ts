/**
 * Configuração central do site — gerado automaticamente pelo CNX.
 * Será sobrescrito durante o build com o nome e nicho do projeto.
 */
export const siteConfig = {
  name: 'Meu Site',
  siteName: 'Meu Site',
  description: 'Marketing digital e estratégias inovadoras.',
  siteDescription: 'Marketing digital e estratégias inovadoras.',
  url: 'https://meu-site.vercel.app',
  author: 'Meu Site',
  primaryNiche: 'Geral',
  aboutDescription: 'Estratégias inovadoras para crescimento sustentável.',
  contactEmail: 'contato@meusite.com',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ],
  navSecondary: [] as { label: string; href: string }[],
} as const;

export default siteConfig;
export const SITE_CONFIG = siteConfig;
