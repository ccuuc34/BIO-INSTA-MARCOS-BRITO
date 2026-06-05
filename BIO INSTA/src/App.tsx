import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import './App.css';

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconTikTok = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z" />
  </svg>
);

const IconAntiVade = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    {/* Raio principal — impacto, velocidade, poder sobre o edital */}
    <path d="M14.5 2L7.5 13H13L9.5 22L22 10H16.5Z"
      fill="currentColor" strokeLinejoin="round"/>
    {/* Sombra / profundidade no lado direito do raio */}
    <path d="M16.5 4.5L13 10H15.5Z"
      fill="currentColor" opacity="0.35"/>
    {/* Highlight diagonal interno */}
    <path d="M13.5 4L10.5 9.5"
      stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Ponto de origem — topo do raio */}
    <circle cx="14.8" cy="2.8" r="1.2" fill="currentColor" opacity="0.55"/>
  </svg>
);

const IconKits = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    {/* Capa frontal */}
    <path d="M6 6H19V21H6Z" fill="currentColor" opacity="0.88"/>
    {/* Lombada — face lateral 3D */}
    <path d="M6 6L4 4V19L6 21Z" fill="currentColor" opacity="0.48"/>
    {/* Topo — face superior 3D */}
    <path d="M6 6L4 4L17 4L19 6Z" fill="currentColor" opacity="0.65"/>
    {/* Linhas de texto na capa */}
    <line x1="9" y1="10" x2="16" y2="10" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" strokeLinecap="round"/>
    <line x1="9" y1="13" x2="16" y2="13" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1" strokeLinecap="round"/>
    <line x1="9" y1="16" x2="13" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.1" strokeLinecap="round"/>
    {/* Marcador de página — toque autoral */}
    <path d="M16 3L16 9.5L18.5 7.5L21 9.5L21 3Z" fill="currentColor"/>
  </svg>
);

const IconGroups = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    {/* Person left */}
    <circle cx="7" cy="7" r="3" opacity="0.7" />
    <path d="M1 20c0-3.31 2.69-6 6-6h0c1.19 0 2.3.35 3.23.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Person right */}
    <circle cx="17" cy="7" r="3" opacity="0.7" />
    <path d="M23 20c0-3.31-2.69-6-6-6h0c-1.19 0-2.3.35-3.23.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Person center (larger/brighter) */}
    <circle cx="12" cy="6" r="3.5" />
    <path d="M5.5 21c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const IconTour = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    {/* Lente da lupa */}
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.9"/>
    {/* Cabo */}
    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Estrela dentro da lente — "encontre o que quer" */}
    <path d="M10.5 7.2L11.4 9.7H14.1L11.9 11.3L12.7 13.8L10.5 12.2L8.3 13.8L9.1 11.3L6.9 9.7H9.6Z"
      fill="currentColor" opacity="0.9"/>
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface LinkItem {
  id: string;
  label: string;
  url: string;
  color: string;
  buttonColor?: string; // cor do background do botão especial
  icon?: ReactNode;
  featured?: boolean;
  description: string;
}

// ─── Group Links (sub-área de grupos) ─────────────────────────────────────────

const groupLinks: LinkItem[] = [
  {
    id: 'pmal',
    label: 'Grupo PMAL (Polícia Militar de Alagoas)',
    url: 'https://chat.whatsapp.com/FNCQXsGV1oV5RxBFJUTBzS?mode=gi_t',
    color: '#f0d4a0',
    description: 'Eu criei um grupo no WhatsApp pra quem estuda pra PMAL. Lá dentro eu posto conteúdo, dicas e avisos importantes direto pra você. Tem muita gente séria estudando junto. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'ppmg',
    label: 'Grupo PPMG (Polícia Militar de Minas Gerais)',
    url: 'https://chat.whatsapp.com/EzZ0EEDCpqc3qrFQyxMYgw?mode=gi_t',
    color: '#f0d4a0',
    description: 'Eu tenho um grupo no WhatsApp focado na PPMG. Lá dentro eu compartilho conteúdo, tiro dúvidas e ajudo você a se preparar do jeito certo. Clica em "Continuar" e o WhatsApp já abre pra você entrar no grupo.',
  },
  {
    id: 'pprs',
    label: 'Grupo Rumo à PPRS - Marcos Brito',
    url: 'https://chat.whatsapp.com/BwCviUNweyvLrgUwI81apE?mode=gi_t&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjjYcPKPUsF0Scz1ZyLQpTJecj2Uf3H5FTLewU5UjdD_Q8KqPijN1vR5CZT0_aem_X-zmAF3X0svTPrNoF9eT6w',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo especialmente pra quem está se preparando pra PPRS. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'carreira',
    label: 'Carreira Policial - MB',
    url: 'https://chat.whatsapp.com/EcebP2DrNzi9BzrXW1AI7o',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem quer seguir a Carreira Policial e não sabe por onde começar. Lá dentro eu explico tudo passo a passo. É um grupo de WhatsApp. Clica em "Continuar" e já entra.',
  },
  {
    id: 'pprn',
    label: 'Grupo PPRN',
    url: 'https://chat.whatsapp.com/CTN65RgZkhmCA1vML0JgD9?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PPRN. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'pcba',
    label: 'Grupo PCBA',
    url: 'https://chat.whatsapp.com/EUNAxz1piqp1E29URWhUju?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PCBA. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'pmesp',
    label: 'Grupo PMESP',
    url: 'https://chat.whatsapp.com/DCTSw8MjQhi54I4rDGtN0C?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PMESP. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'pmes-grupo',
    label: 'Grupo PMES',
    url: 'https://chat.whatsapp.com/IcrGzETtZjAFS5Zkvdnmnr?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PMES. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'pmba-grupo',
    label: 'Grupo PMBA',
    url: 'https://chat.whatsapp.com/Hk4pFM4HwDd5n4MVmsFQR1?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PMBA. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
  {
    id: 'pmpe-grupo',
    label: 'Grupo PMPE',
    url: 'https://chat.whatsapp.com/HGIDoACgcd2IUsBWCxBAtc?s=cl&p=i&mlu=4&amv=1',
    color: '#f0d4a0',
    description: 'Eu criei esse grupo pra quem estuda pra PMPE. Lá dentro eu posto conteúdo, dicas e te ajudo no que precisar. É um grupo de WhatsApp. Clica em "Continuar" e o WhatsApp já abre pra você entrar.',
  },
];

// ─── Anti-Vade Links (sub-área) ───────────────────────────────────────────────

const antiVadeLinks: LinkItem[] = [
  {
    id: 'anti-vade-carreira',
    label: 'Anti-Vade Mecum Carreira Policial',
    url: 'https://antivade-carreira.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o Anti-Vade Mecum Carreira Policial com todas as leis atualizadas que caem na prova. Olha o que você vai receber:\n\n📄 Atualizações Maria da Penha 2026\n📄 Crimes Hediondos (Lei nº 8.072/90)\n📄 Crimes Hediondos — Atualizações 2026\n📄 Direito Processual — Inquérito Policial\n📄 Direito Processual Penal — Ação Penal\n📄 Estatuto do Desarmamento (Lei nº 10.826/03)\n📄 ORCRIM (Lei nº 12.850)\n📄 Lei de Abuso de Autoridade (Lei nº 13.869/19)\n📄 Lei de Drogas (Lei nº 11.343/06)\n📄 Lei de Execução Penal (Lei 7.210/84)\n📄 Lei de Execução Penal — Atualizações 2026\n📄 Lei de Tortura (Lei nº 9.455/97)\n📄 Lei de Tortura — Atualizações 2026\n📄 Lei Maria da Penha (Lei nº 11.340/06)\n📄 Lei Maria da Penha — Atualizações 2026\n📄 Prisão Temporária (Lei nº 7.960)\n📄 Improbidade Administrativa (Lei nº 8.429/92)\n📄 LEP Atualizações 2026\n\nClica em "Continuar" e já abre pra você.',
  },
  {
    id: 'anti-vade-pprs',
    label: 'Anti-Vade Mecum PPRS',
    url: 'https://antivade-pprs.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu separei todas as leis que vão cair na sua prova da PPRS. Cada uma já está organizada pra você baixar e estudar. Olha o que tem aqui:\n\n📄 Lei de Abuso de Autoridade (Lei nº 13.869/19)\n📄 Lei de Execução Penal (Lei 7.210/84)\n📄 Lei de Execução Penal — Atualizações 2026\n📄 Lei de Tortura (Lei nº 9.455/97)\n📄 Lei de Tortura — Atualizações 2026\n📄 Lei Maria da Penha (Lei 11.340/06)\n📄 Lei Maria da Penha — Atualizações 2026\n📄 Crimes de Preconceito (Lei nº 7.716/89)\n📄 Crime Racial (Lei nº 14.532/23)\n📄 LEP Atualizações 2026\n📄 Estatuto do Desarmamento (Lei 10.826) — INCLUÍDO AGORA ✅\n\nClica em "Continuar" e já abre pra você.',
  },
  {
    id: 'anti-vade-gma',
    label: 'Anti-Vade Mecum GMA',
    url: 'https://antivade-gma.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o Anti-Vade Mecum GMA com todas as leis que caem na prova. Olha o que você vai receber:\n\n📄 Atualizações Maria da Penha 2026\n📄 Lei de Drogas (Lei nº 11.343/2006)\n📄 Direito Processual — Inquérito Policial\n📄 Direito Processual Penal — Ação Penal\n📄 Estatuto do Desarmamento (Lei nº 10.826/2003)\n📄 Lei de Abuso de Autoridade (Lei nº 13.869/19)\n📄 Lei de Tortura (Lei nº 9.455/97)\n📄 Lei de Tortura — Atualizações 2026\n📄 Lei Maria da Penha (Lei nº 11.340/06)\n📄 Lei Maria da Penha — Atualizações 2026\n📄 Crimes de Preconceito (Lei nº 7.716/89)\n\nClica em "Continuar" e já abre pra você.',
  },
  {
    id: 'anti-vade-pmpe',
    label: 'Anti-Vade Mecum PMPE',
    url: 'https://antivade-pmpe.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o Anti-Vade Mecum PMPE com todas as leis que caem na prova. Olha o que você vai receber:\n\n📄 Atualizações Maria da Penha 2026\n📄 Crimes Hediondos (Lei nº 8.072/90)\n📄 Crimes Hediondos — Atualizações 2026\n📄 Lei de Drogas (Lei nº 11.343/2006)\n📄 Lei de Abuso de Autoridade (Lei nº 13.869/19)\n📄 Lei de Tortura (Lei nº 9.455/97)\n📄 Lei de Tortura — Atualizações 2026\n📄 Lei Maria da Penha (Lei nº 11.340/06)\n📄 Lei Maria da Penha — Atualizações 2026\n📄 Crimes de Preconceito (Lei nº 7.716/89)\n\nClica em "Continuar" e já abre pra você.',
  },
  {
    id: 'anti-gramatica',
    label: 'Anti-Gramática: Português Intensivo',
    url: 'https://antigramatica.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu criei o Anti-Gramática pra você que trava em português. Tudo o que cai na prova, direto ao ponto, sem enrolação. Clica em "Continuar" e já abre pra você.',
  },
  {
    id: 'anti-vade-pmal',
    label: 'Anti-Vade Mecum PMAL',
    url: 'https://antivade-pmal.web.app',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o Anti-Vade Mecum PMAL com todas as leis que caem na prova. Olha o que você vai receber:\n\n📄 Código Processo-Penal-Militar\n📄 Código Penal Militar\n📄 Crimes de Preconceito (Lei nº 7.716)\n📄 Crimes Hediondos (Lei nº 8.072/90)\n📄 Crimes Hediondos — Atualizações 2026\n📄 Direito Processual — Inquérito Policial\n📄 Direito Processual Penal — Ação Penal\n📄 Estatuto do Desarmamento (Lei nº 10.826/03)\n📄 Lei de Abuso de Autoridade (Lei nº 13.869/19)\n📄 Lei de Drogas (Lei nº 11.343/06)\n📄 Lei de Tortura (Lei nº 9.455/97)\n📄 Lei de Tortura — Atualizações 2026\n📄 Lei Maria da Penha (Lei nº 11.340/06)\n📄 Lei Maria da Penha — Atualizações 2026\n📄 ORCRIM (Lei nº 12.850)\n📄 Prisão Temporária (Lei nº 7.960)\n\nClica em "Continuar" e já abre pra você.',
  },
];

// ─── Links Data ───────────────────────────────────────────────────────────────

// ─── Kit Links (sub-área de editais verticalizados) ──────────────────────────

const kitLinks: LinkItem[] = [
  {
    id: 'kit-pprs',
    label: 'KIT PPRS: Edital Verticalizado + Prioridades + Plano de Ação 76 Dias',
    url: 'https://edital-verticalizado-pprs.web.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei um kit completo pra você não perder tempo. Tem o edital verticalizado, as prioridades do que estudar primeiro e um plano de ação de 76 dias pra você chegar na prova preparado. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-pmal',
    label: 'KIT PMAL: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-pmal.vercel.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra PMAL. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-pmba',
    label: 'KIT PMBA: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-pmba.vercel.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra PMBA. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-gcm-aracaju',
    label: 'KIT GCM Aracaju: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-gcm-aracaju.vercel.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra GCM Aracaju. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-pmpe',
    label: 'KIT PMPE: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-pmpe.vercel.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra PMPE. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-pmes',
    label: 'KIT PMES: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-pmes.web.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra PMES. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
  {
    id: 'kit-pmesp',
    label: 'KIT PMESP: Edital Verticalizado + Prioridades',
    url: 'https://edital-verticalizado-pmsp.vercel.app/',
    color: '#e9d5ff',
    featured: true,
    description: 'Eu montei o kit completo pra quem estuda pra PMESP. Tem o edital verticalizado e as prioridades do que você precisa estudar primeiro, sem perder tempo com o que não cai. Clica em "Continuar" e acessa agora.',
  },
];

// ─── Links Data ───────────────────────────────────────────────────────────────

const links: LinkItem[] = [
  {
    id: 'antivade',
    label: 'ANTI-VADE AQUI',
    url: '',
    color: '#e9d5ff',
    buttonColor: '#8000ff',
    icon: <IconAntiVade />,
    featured: true,
    description: '',
  },
  {
    id: 'editais',
    label: 'EDITAIS VERTICALIZADOS AQUI',
    url: '',
    color: '#ffbbbb',
    buttonColor: '#8b171a',
    icon: <IconKits />,
    featured: true,
    description: '',
  },
  {
    id: 'grupos',
    label: 'GRUPOS AQUI',
    url: '',
    color: '#f0d4a0',
    buttonColor: '#AF9064',
    icon: <IconGroups />,
    featured: true,
    description: '',
  },
  {
    id: 'whatsapp',
    label: 'Fale Comigo - WhatsApp',
    url: 'https://wa.link/iatp2q',
    color: '#25D366',
    icon: <IconWhatsApp />,
    description: 'Aqui você fala direto comigo pelo WhatsApp. Se você tiver dúvida sobre o material, sobre a prova ou sobre por onde começar, me manda mensagem. Eu respondo pessoalmente. Clica em "Continuar" e o WhatsApp já abre pra você.',
  },
  {
    id: 'instagram',
    label: 'Instagram (Dicas Diárias)',
    url: 'https://www.instagram.com/_marcosbrit?igsh=ZWY0dDdlOXBtN2t0&utm_source=qr',
    color: '#ffffff',
    icon: <IconInstagram />,
    description: 'Esse é o meu Instagram. Todo dia eu posto dica, conteúdo e informação sobre concursos. É de graça. Você clica em "Continuar", meu Instagram abre, e você aperta o botão de seguir. Pronto, você começa a receber meu conteúdo todo dia.',
  },
  {
    id: 'tiktok',
    label: 'TikTok (Aulas e Motivação)',
    url: 'https://www.tiktok.com/@o_marcosbrito?_t=ZM-90uPBU5VNnc&_r=1',
    color: '#ffffff',
    icon: <IconTikTok />,
    description: 'Esse é o meu TikTok. Lá eu posto vídeos curtos com aulas e conteúdo direto ao ponto pra concurso. É de graça. Você clica em "Continuar", meu TikTok abre, e aperta o botão de seguir. Meus vídeos vão aparecer pra você automaticamente.',
  },
];

// ─── Category Popup Data ─────────────────────────────────────────────────────

const categoryPopups = {
  antivade: {
    color: '#8000ff',
    tag: 'Anti-Vade Mecum',
    headline: 'O ATALHO QUE OS APROVADOS NÃO CONTAM',
    sub: 'A maioria perde a vaga estudando o que não cai. Você não vai cometer esse erro.',
    blocks: [
      {
        icon: '📚',
        title: 'De 200 páginas para 5',
        body: 'O edital tem centenas de artigos em leis gigantes. Ninguém tem tempo pra estudar tudo. Eu peguei essas leis e reduzi para 5 a 12 páginas — só o que realmente cai na prova.',
      },
      {
        icon: '🎯',
        title: 'Sem surpresa na prova',
        body: 'Quem estuda pelo Anti-Vade chega na prova sabendo exatamente o que vai aparecer. Não tem susto, não tem "eu vi isso mas não lembro onde estava".',
      },
      {
        icon: '⚡',
        title: 'Atualizado para 2026',
        body: 'Cada material já vem com as leis atualizadas. Você não perde tempo caçando atualização em site nenhum.',
      },
    ],
    cta: 'QUERO ESTUDAR SÓ O QUE CAI',
    ctaSub: 'Ver os Anti-Vade disponíveis →',
  },
  editais: {
    color: '#8b171a',
    tag: 'Editais Verticalizados',
    headline: 'ESTUDE O QUE CAI. IGNORE O RESTO.',
    sub: 'O maior erro de quem estuda pra concurso é não saber o que priorizar.',
    blocks: [
      {
        icon: '🗺️',
        title: 'Edital organizado por prioridade',
        body: 'Eu peguei o edital do seu concurso e organizei matéria por matéria, do que mais cai pro que menos cai. Você sabe exatamente onde colocar sua energia.',
      },
      {
        icon: '📋',
        title: 'Plano de ação incluso',
        body: 'Não adianta saber o que estudar se você não sabe em que ordem. O kit já vem com um plano de ação pra você executar do zero até a prova.',
      },
      {
        icon: '🏆',
        title: 'Acesso imediato',
        body: 'Tudo digital. Você acessa agora e começa hoje. Sem espera, sem frete, sem enrolação.',
      },
    ],
    cta: 'ORGANIZA MEU ESTUDO AGORA',
    ctaSub: 'Ver os editais do meu concurso →',
  },
  grupos: {
    color: '#AF9064',
    tag: 'Grupos de Estudo',
    headline: 'ONDE OS APROVADOS SE REÚNEM',
    sub: 'Estudar sozinho é mais lento. Aqui você tem comunidade, conteúdo e o professor direto com você.',
    blocks: [
      {
        icon: '🎓',
        title: 'Conteúdo direto do professor',
        body: 'Eu posto conteúdo, dicas e avisos importantes direto no grupo. Nada de intermediário, nada de "vi num stories". O que você recebe lá é direto de mim.',
      },
      {
        icon: '🔔',
        title: 'Avisos em tempo real',
        body: 'Mudança no edital, nova data de prova, gabarito saiu — tudo você fica sabendo antes de qualquer um. Quem está no grupo não perde nada.',
      },
      {
        icon: '👥',
        title: '+1.500 alunos sérios',
        body: 'A comunidade já tem mais de 1.500 alunos estudando junto. Quando o ambiente é sério, o seu rendimento muda. Isso é tribalismo na prática.',
      },
    ],
    cta: 'ENTRA NA COMUNIDADE DOS APROVADOS',
    ctaSub: 'Ver os grupos do meu concurso →',
  },
} as const;

type CategoryKey = keyof typeof categoryPopups;

// ─── Tour Steps ───────────────────────────────────────────────────────────────

const tourSteps = [
  {
    target: 'antivade',
    title: 'Anti-Vade Mecum',
    body: 'Aqui ficam todos os Anti-Vade Mecum e o Anti-Gramática. São os materiais com as leis do edital, organizados por concurso. Clica pra ver qual tem pro seu.',
    color: '#8000ff',
  },
  {
    target: 'editais',
    title: 'Editais Verticalizados',
    body: 'Aqui estão os Kits de Edital Verticalizado. Cada kit tem o edital organizado por matéria e as prioridades do que estudar primeiro. Economiza tempo e foco.',
    color: '#8b171a',
  },
  {
    target: 'grupos',
    title: 'Grupos de WhatsApp',
    body: 'Aqui você entra nos grupos do seu concurso. Lá dentro eu posto conteúdo, dicas e avisos importantes direto pra você.',
    color: '#AF9064',
  },
  {
    target: 'whatsapp',
    title: 'Fale Direto Comigo',
    body: 'Tem dúvida? Quer saber por onde começar? É só clicar aqui e me mandar mensagem no WhatsApp. Eu respondo pessoalmente.',
    color: '#25D366',
  },
  {
    target: 'instagram',
    title: 'Redes Sociais',
    body: 'Aqui estão meu Instagram e TikTok. Todo dia eu posto conteúdo gratuito sobre concursos. Segue lá e o conteúdo começa a aparecer pra você automaticamente.',
    color: '#ffffff',
  },
];

// ─── Áudio ────────────────────────────────────────────────────────────────────

const IconAudio = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
    {/* Bolha de mensagem */}
    <path d="M3 5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15C21 16.1 20.1 17 19 17H8L3 21V5Z"
      fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    {/* Barras de forma de onda */}
    <rect x="7" y="10" width="1.6" height="3" rx="0.8" fill="currentColor"/>
    <rect x="10" y="7.5" width="1.6" height="8" rx="0.8" fill="currentColor"/>
    <rect x="13" y="9" width="1.6" height="5" rx="0.8" fill="currentColor"/>
    <rect x="16" y="10" width="1.6" height="3" rx="0.8" fill="currentColor" opacity="0.7"/>
  </svg>
);

const WAVEFORM_HEIGHTS = [3, 6, 10, 14, 9, 13, 7, 12, 15, 8, 11, 6, 14, 10, 7, 13, 9, 5, 12, 8];

const SPEEDS = [1, 1.5, 2];

function AudioPlayer({
  src, index, activeAudio, setActiveAudio,
}: {
  src: string;
  index: number;
  activeAudio: number | null;
  setActiveAudio: (i: number | null) => void;
}) {
  const audioRef  = useRef<HTMLAudioElement>(null);
  const [current, setCurrent]   = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);

  const playing = activeAudio === index;

  // Pausa quando outro áudio começa
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (!playing && !a.paused) a.pause();
  }, [playing]);

  // Aplica velocidade
  useEffect(() => {
    const a = audioRef.current;
    if (a) a.playbackRate = SPEEDS[speedIdx];
  }, [speedIdx]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setActiveAudio(null);
    } else {
      a.play().catch(() => {});
      setActiveAudio(index);
    }
  };

  const cycleSpeed = () => {
    const next = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(next);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setCurrent(Number(e.target.value));
  };

  const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  const pct = duration ? (current / duration) * 100 : 0;
  const speed = SPEEDS[speedIdx];

  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: '16px',
      padding: '18px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow de fundo quando tocando */}
      {playing && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '16px',
          background: 'radial-gradient(ellipse at 50% 120%, rgba(139,23,26,0.18), transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrent(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => { setActiveAudio(null); setCurrent(0); }}
      >
        <source src={src.replace('.ogg', '.mp3')} type="audio/mpeg" />
        <source src={src} type="audio/ogg" />
      </audio>

      {/* Label */}
      <p style={{
        fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '11px',
        color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em',
        textTransform: 'uppercase', marginBottom: '14px',
      }}>
        Áudio {index}
      </p>

      {/* Linha principal: botão + waveform */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>

        {/* Botão play/pause */}
        <button onClick={toggle} style={{
          width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
          background: playing ? '#8b171a' : 'rgba(139,23,26,0.25)',
          border: `1.5px solid ${playing ? '#cc2a2d' : 'rgba(139,23,26,0.5)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all 0.2s',
          boxShadow: playing ? '0 0 20px rgba(139,23,26,0.5)' : 'none',
        }}>
          <span className="material-symbols-outlined"
            style={{ color: '#fff', fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>
            {playing ? 'pause' : 'play_arrow'}
          </span>
        </button>

        {/* Waveform SVG animado */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '2.5px', height: '40px' }}>
          {WAVEFORM_HEIGHTS.map((h, i) => {
            const filled = pct > 0 && (i / WAVEFORM_HEIGHTS.length) * 100 < pct;
            return (
              <motion.div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: '2px',
                  background: filled ? '#cc2a2d' : 'rgba(255,255,255,0.18)',
                  minWidth: '3px',
                }}
                animate={playing ? {
                  height: [`${h}px`, `${Math.min(h * 1.6, 36)}px`, `${h}px`],
                } : {
                  height: `${h}px`,
                }}
                transition={playing ? {
                  duration: 0.6 + (i % 4) * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.04,
                } : { duration: 0.3 }}
              />
            );
          })}
        </div>
      </div>

      {/* Progress bar + tempos */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '11px',
          color: 'rgba(255,255,255,0.5)', minWidth: '32px',
        }}>{fmt(current)}</span>

        <div style={{ flex: 1, position: 'relative', height: '4px' }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '2px',
            background: 'rgba(255,255,255,0.1)',
          }} />
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: `${pct}%`, borderRadius: '2px',
            background: 'linear-gradient(90deg, #8b171a, #cc2a2d)',
            transition: 'width 0.1s linear',
          }} />
          <input
            type="range" min={0} max={duration || 100} step={0.1} value={current}
            onChange={seek}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              opacity: 0, cursor: 'pointer', margin: 0,
            }}
          />
        </div>

        <span style={{
          fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '11px',
          color: 'rgba(255,255,255,0.3)', minWidth: '32px', textAlign: 'right',
        }}>{fmt(duration)}</span>

        {/* Velocidade */}
        <button onClick={cycleSpeed} style={{
          background: speed !== 1 ? 'rgba(139,23,26,0.3)' : 'rgba(255,255,255,0.07)',
          border: `1px solid ${speed !== 1 ? 'rgba(139,23,26,0.6)' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: '6px', padding: '3px 7px', cursor: 'pointer',
          fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '11px',
          color: speed !== 1 ? '#ff8888' : 'rgba(255,255,255,0.45)',
          letterSpacing: '0.04em', whiteSpace: 'nowrap', transition: 'all 0.2s',
        }}>
          {speed === 1 ? '1×' : speed === 1.5 ? '1.5×' : '2×'}
        </button>
      </div>
    </div>
  );
}

// ─── Depoimentos ─────────────────────────────────────────────────────────────

const DEP_IMAGES = [
  '/depoimentos/dep01.jpg',
  '/depoimentos/dep02.jpg',
  '/depoimentos/dep03.webp',
  '/depoimentos/dep04.webp',
];
const DEP_CARD_W = 248;
const DEP_GAP = 12;

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [activeLink, setActiveLink] = useState<LinkItem | null>(null);
  const [showGroupsModal, setShowGroupsModal] = useState(false);
  const [showAntiVadeModal, setShowAntiVadeModal] = useState(false);
  const [showKitsModal, setShowKitsModal] = useState(false);
  const [categoryPopup, setCategoryPopup] = useState<CategoryKey | null>(null);
  const [previousModal, setPreviousModal] = useState<'antivade' | 'editais' | 'grupos' | null>(null);
  // ── Áudios ──
  const [activeAudio, setActiveAudio] = useState<number | null>(null);

  // ── Carrossel de Depoimentos ──
  const [depIdx, setDepIdx] = useState(0);
  const [depAutoplay, setDepAutoplay] = useState(true);
  const depTrackRef = useRef<HTMLDivElement>(null);

  const depGo = (dir: number) =>
    setDepIdx(i => (i + dir + DEP_IMAGES.length) % DEP_IMAGES.length);

  useEffect(() => {
    if (!depAutoplay) return;
    const t = setInterval(() => setDepIdx(i => (i + 1) % DEP_IMAGES.length), 3600);
    return () => clearInterval(t);
  }, [depAutoplay]);

  const [tourStep, setTourStep] = useState<number | null>(null);
  const [spotlightRect, setSpotlightRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (tourStep === null) { setSpotlightRect(null); return; }
    const target = tourSteps[tourStep].target;
    const el = document.querySelector(`[data-tour="${target}"]`);
    if (!el) return;
    setSpotlightRect(null);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const t = setTimeout(() => {
      setSpotlightRect(el.getBoundingClientRect());
    }, 380);
    return () => clearTimeout(t);
  }, [tourStep]);

  const handleVoltar = () => {
    setActiveLink(null);
    const prev = previousModal;
    setPreviousModal(null);
    if (prev === 'antivade') setTimeout(() => setShowAntiVadeModal(true), 50);
    else if (prev === 'editais') setTimeout(() => setShowKitsModal(true), 50);
    else if (prev === 'grupos') setTimeout(() => setShowGroupsModal(true), 50);
  };

  const handleLinkClick = (link: LinkItem) => {
    if (link.id === 'grupos')   { setCategoryPopup('grupos'); }
    else if (link.id === 'antivade') { setCategoryPopup('antivade'); }
    else if (link.id === 'editais')  { setCategoryPopup('editais'); }
    else { setActiveLink(link); }
  };

  const openCategoryList = (key: CategoryKey) => {
    setCategoryPopup(null);
    setTimeout(() => {
      if (key === 'antivade') setShowAntiVadeModal(true);
      else if (key === 'editais') setShowKitsModal(true);
      else if (key === 'grupos') setShowGroupsModal(true);
    }, 60);
  };

  return (
    <div className="stars-bg" style={{ minHeight: '100dvh' }}>

      {/* Grade de pontos */}
      <div className="overlay-quadradinhos" />

      {/* Glow vermelho no topo */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: '#990000',
        borderRadius: '50%',
        filter: 'blur(200px)',
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* TOP APP BAR */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '480px',
        height: '64px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(19,19,19,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <img
          src="/marcos-hero.webp"
          alt="Marcos Brito"
          style={{
            width: '32px', height: '32px', borderRadius: '50%',
            objectFit: 'cover', objectPosition: '50% 12%',
            border: '1.5px solid #e9c400',
          }}
        />
        <h1 style={{
          fontFamily: "'Sora', sans-serif", fontWeight: 800,
          fontSize: '18px', letterSpacing: '0.04em',
          color: '#e9c400', textTransform: 'uppercase', margin: 0,
        }}>
          MARCOS BRITO
        </h1>
        <span className="material-symbols-outlined"
          style={{ color: '#d5baff', fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>
          verified
        </span>
      </header>

      {/* CONTEÚDO */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '480px',
        margin: '0 auto',
        paddingTop: '80px', paddingBottom: '48px',
        paddingLeft: '24px', paddingRight: '24px',
        boxSizing: 'border-box',
      }}>

        {/* PERFIL */}
        <motion.section
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '16px', marginBottom: '24px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <img
              src="/marcos-hero.webp"
              alt="Marcos Brito"
              style={{
                width: '96px', height: '96px', borderRadius: '50%',
                objectFit: 'cover', objectPosition: '50% 12%',
                border: '2px solid #e9c400',
                boxShadow: '0 0 24px rgba(233,196,0,0.4)', display: 'block',
              }}
            />
            <div style={{
              position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', alignItems: 'center', gap: '4px',
              background: '#131313', border: '1px solid #00fbfb',
              borderRadius: '999px', padding: '3px 8px', whiteSpace: 'nowrap',
              boxShadow: '0 0 10px rgba(0,251,251,0.2)',
            }}>
              <span className="material-symbols-outlined"
                style={{ color: '#00fbfb', fontSize: '11px', fontVariationSettings: "'FILL' 1", lineHeight: 1 }}>
                verified
              </span>
              <span style={{ color: '#00fbfb', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em' }}>
                PERFIL VERIFICADO
              </span>
            </div>
          </div>

          {/* Bordão */}
          <p style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 700,
            fontSize: 'clamp(16px, 5vw, 20px)', color: '#ffffff',
            whiteSpace: 'nowrap', letterSpacing: '0.06em',
            textTransform: 'uppercase', margin: 0, marginTop: '4px',
          }}>
            TÁ DIFÍCIL? EU DEIXO FÁCIL.
          </p>
        </motion.section>

        {/* STATS */}
        <motion.div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
            padding: '16px 0', marginBottom: '28px', width: '100%',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '24px', color: '#8000ff', lineHeight: 1 }}>+1.500</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Alunos</span>
          </div>
        </motion.div>

        {/* BOTÃO TOUR */}
        <motion.button
          onClick={() => setTourStep(0)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.35 }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: '100%', marginBottom: '28px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '13px 20px', borderRadius: '8px', cursor: 'pointer',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s',
          }}
        >
          <span style={{ color: '#e9c400', display: 'flex', alignItems: 'center' }}>
            <IconTour />
          </span>
          <span style={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 700,
            fontSize: '13px', color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Onde acho o que eu quero?
          </span>
          <span className="material-symbols-outlined"
            style={{ color: 'rgba(255,255,255,0.25)', fontSize: '16px' }}>
            help_outline
          </span>
        </motion.button>

        {/* LINKS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {links.map((link, index) => (
            <motion.div
              key={link.id}
              data-tour={link.id}
              role="button"
              onClick={() => handleLinkClick(link)}
              className={link.featured ? undefined : 'thin-banner'}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px', borderRadius: '6px',
                cursor: 'pointer',
                ...(link.buttonColor ? {
                  background: hexToRgba(link.buttonColor, 0.18),
                  border: `1px solid ${hexToRgba(link.buttonColor, 0.55)}`,
                  boxShadow: `0 0 18px ${hexToRgba(link.buttonColor, 0.2)}`,
                } : link.featured ? {
                  background: 'rgba(128, 0, 255, 0.18)',
                  border: '1px solid rgba(160, 60, 255, 0.55)',
                  boxShadow: '0 0 18px rgba(128, 0, 255, 0.2)',
                } : {}),
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.06, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: link.icon ? '12px' : '0' }}>
                {link.icon && (
                  <div style={{ color: link.color, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    {link.icon}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '0.02em', lineHeight: 1.3 }}>
                    {link.label}
                  </span>
                  {(link.id === 'antivade' || link.id === 'editais' || link.id === 'grupos') && (
                    <span style={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '11px',
                      color: link.color, opacity: 0.75, letterSpacing: '0.06em',
                    }}>
                      Toque para ver →
                    </span>
                  )}
                </div>
              </div>
              <span className="material-symbols-outlined"
                style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', flexShrink: 0, marginLeft: '8px' }}>
                {(link.id === 'grupos' || link.id === 'antivade' || link.id === 'editais') ? 'expand_more' : 'chevron_right'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── DEPOIMENTOS ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ width: '100%', marginTop: '48px' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '28px', padding: '0 4px' }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 700,
              fontSize: '10px', color: '#8b171a', letterSpacing: '0.18em',
              textTransform: 'uppercase', display: 'block', marginBottom: '10px',
            }}>
              ★ Depoimentos reais
            </span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 900,
              fontSize: 'clamp(20px, 5.5vw, 26px)', color: '#ffffff',
              letterSpacing: '0.02em', lineHeight: 1.2, margin: '0 0 10px',
            }}>
              O QUE ESTÃO DIZENDO
            </h2>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 500,
              fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6,
            }}>
              Resultados reais de quem já usou os materiais e entrou para os grupos.
            </p>
          </div>

          {/* Trilho do carrossel */}
          <div
            style={{ overflow: 'hidden', width: '100%', cursor: 'grab' }}
            onMouseEnter={() => setDepAutoplay(false)}
            onMouseLeave={() => setDepAutoplay(true)}
            onTouchStart={() => setDepAutoplay(false)}
            onTouchEnd={() => setTimeout(() => setDepAutoplay(true), 800)}
          >
            <motion.div
              ref={depTrackRef}
              style={{
                display: 'flex',
                gap: `${DEP_GAP}px`,
                paddingLeft: `calc(50% - ${DEP_CARD_W / 2}px)`,
                paddingRight: `calc(50% - ${DEP_CARD_W / 2}px)`,
              }}
              animate={{ x: -(depIdx * (DEP_CARD_W + DEP_GAP)) }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              whileDrag={{ cursor: 'grabbing' }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -55) depGo(1);
                else if (info.offset.x > 55) depGo(-1);
                setTimeout(() => setDepAutoplay(true), 1000);
              }}
            >
              {DEP_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i === depIdx ? 1 : 0.5,
                    scale: i === depIdx ? 1 : 0.93,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: `${DEP_CARD_W}px`,
                    flexShrink: 0,
                    userSelect: 'none',
                    lineHeight: 0,
                  }}
                >
                  <img
                    src={src}
                    alt={`Depoimento ${i + 1}`}
                    draggable={false}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px',
                      pointerEvents: 'none',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contador + controles */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginTop: '20px',
          }}>
            {/* Anterior */}
            <button
              onClick={() => { setDepAutoplay(false); depGo(-1); }}
              style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back_ios</span>
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {DEP_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDepAutoplay(false); setDepIdx(i); }}
                  style={{
                    width: i === depIdx ? '18px' : '6px',
                    height: '6px', borderRadius: '3px', border: 'none', cursor: 'pointer',
                    background: i === depIdx ? '#8b171a' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.3s', padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Próximo */}
            <button
              onClick={() => { setDepAutoplay(false); depGo(1); }}
              style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward_ios</span>
            </button>
          </div>

          {/* Pause / Play */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
            <button
              onClick={() => setDepAutoplay(p => !p)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '999px', padding: '6px 14px', cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '12px',
                color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                {depAutoplay ? 'pause' : 'play_arrow'}
              </span>
              {depAutoplay ? 'PAUSAR' : 'CONTINUAR'}
            </button>
          </div>

          {/* Indicador de imagem */}
          <p style={{
            textAlign: 'center', marginTop: '10px',
            fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '11px',
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
          }}>
            {depIdx + 1} / {DEP_IMAGES.length}
          </p>
        </motion.section>

        {/* ── ÁUDIOS ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ width: '100%', marginTop: '48px' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ color: '#8b171a', display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <IconAudio />
            </div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 900,
              fontSize: 'clamp(18px, 5vw, 24px)', color: '#ffffff',
              letterSpacing: '0.02em', lineHeight: 1.2, margin: '0 0 10px',
            }}>
              AINDA NA DÚVIDA SOBRE MIM?
            </h2>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 600,
              fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5,
            }}>
              Olha o que estão falando nos áudios:
            </p>
          </div>

          {/* Players */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <AudioPlayer src="/audios/audio01.ogg" index={1} activeAudio={activeAudio} setActiveAudio={setActiveAudio} />
            <AudioPlayer src="/audios/audio02.ogg" index={2} activeAudio={activeAudio} setActiveAudio={setActiveAudio} />
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          style={{
            marginTop: '48px', paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center', opacity: 0.45,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1 }}
        >
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.06em' }}>
            © 2026 MARCOS BRITO | TACTICAL PREP
          </p>
        </motion.footer>

      </div>

      {/* ── TOUR GUIADO ── */}
      <AnimatePresence>
        {tourStep !== null && (
          <motion.div
            key="tour-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 900, pointerEvents: 'all' }}
          >
            {(() => {
              const SHEET = 268; // altura do bottom sheet em px
              const step  = tourSteps[tourStep];
              const R     = spotlightRect;
              return (
                <>
                  {/* ── Painéis escuros ── */}
                  {R ? (<>
                    {/* topo */}
                    <div onClick={() => setTourStep(null)} style={{ position:'fixed', top:0, left:0, right:0, height: Math.max(0, R.top-6), background:'rgba(0,0,0,0.85)' }} />
                    {/* meio (entre spotlight e sheet) */}
                    <div onClick={() => setTourStep(null)} style={{ position:'fixed', top: R.bottom+6, left:0, right:0, bottom: SHEET, background:'rgba(0,0,0,0.85)' }} />
                    {/* esquerda */}
                    <div onClick={() => setTourStep(null)} style={{ position:'fixed', top: R.top-6, left:0, width: Math.max(0, R.left-6), height: R.height+12, background:'rgba(0,0,0,0.85)' }} />
                    {/* direita */}
                    <div onClick={() => setTourStep(null)} style={{ position:'fixed', top: R.top-6, left: R.right+6, right:0, height: R.height+12, background:'rgba(0,0,0,0.85)' }} />
                    {/* borda spotlight */}
                    <motion.div
                      initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }}
                      style={{
                        position:'fixed', pointerEvents:'none',
                        top: R.top-6, left: R.left-6,
                        width: R.width+12, height: R.height+12,
                        border: `2px solid ${step.color}`,
                        borderRadius:'10px',
                        boxShadow:`0 0 0 3px ${step.color}22, 0 0 20px ${step.color}55`,
                      }}
                    />
                  </>) : (
                    /* spinner enquanto scrolla */
                    <div onClick={() => setTourStep(null)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', display:'flex', alignItems:'center', justifyContent:'center', paddingBottom: SHEET }}>
                      <div style={{ width:36, height:36, border:'3px solid rgba(255,255,255,0.1)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin .7s linear infinite' }} />
                    </div>
                  )}

                  {/* ── Bottom sheet tooltip ── */}
                  <motion.div
                    key={`sheet-${tourStep}`}
                    initial={{ y: 40, opacity:0 }} animate={{ y:0, opacity:1 }}
                    transition={{ type:'spring', stiffness:320, damping:32 }}
                    style={{
                      position:'fixed', bottom:0, left:0, right:0,
                      height: SHEET,
                      background:'#0f0f0f',
                      borderRadius:'24px 24px 0 0',
                      border:`1px solid ${step.color}33`,
                      borderBottom:'none',
                      padding:'12px 20px 24px',
                      boxShadow:`0 -8px 40px rgba(0,0,0,0.7)`,
                      zIndex:901,
                      display:'flex', flexDirection:'column',
                    }}
                  >
                    {/* Drag handle */}
                    <div style={{ width:36, height:4, background:'rgba(255,255,255,0.15)', borderRadius:2, margin:'0 auto 16px', flexShrink:0 }} />

                    {/* Progresso + fechar */}
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12, flexShrink:0 }}>
                      <div style={{ display:'flex', gap:'5px' }}>
                        {tourSteps.map((_, i) => (
                          <div key={i} style={{
                            width: i===tourStep ? '18px' : '6px', height:'6px',
                            borderRadius:'3px', transition:'all 0.3s',
                            background: i===tourStep ? step.color : 'rgba(255,255,255,0.2)',
                          }} />
                        ))}
                      </div>
                      <button onClick={() => setTourStep(null)} style={{
                        background:'rgba(255,255,255,0.07)', border:'none', borderRadius:'50%',
                        width:28, height:28, display:'flex', alignItems:'center', justifyContent:'center',
                        cursor:'pointer', color:'rgba(255,255,255,0.45)', fontSize:16,
                      }}>×</button>
                    </div>

                    {/* Texto */}
                    <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:'10px', color:step.color, letterSpacing:'0.14em', textTransform:'uppercase', flexShrink:0 }}>
                      PASSO {tourStep+1} DE {tourSteps.length}
                    </span>
                    <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:'15px', color:'#fff', margin:'5px 0 6px', flexShrink:0 }}>{step.title}</h3>
                    <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:500, fontSize:'12px', color:'rgba(255,255,255,0.55)', lineHeight:1.6, margin:'0 0 auto', overflow:'hidden' }}>{step.body}</p>

                    {/* Botões */}
                    <div style={{ display:'flex', gap:'8px', marginTop:14, flexShrink:0 }}>
                      {tourStep > 0 && (
                        <button onClick={() => setTourStep(s => s!-1)} style={{
                          flex:1, padding:'11px', background:'rgba(255,255,255,0.06)',
                          border:'1px solid rgba(255,255,255,0.12)', borderRadius:'10px',
                          cursor:'pointer', fontFamily:"'Nunito',sans-serif", fontWeight:700,
                          fontSize:'13px', color:'rgba(255,255,255,0.55)',
                          display:'flex', alignItems:'center', justifyContent:'center', gap:4,
                        }}>
                          <span className="material-symbols-outlined" style={{fontSize:14}}>arrow_back</span>
                          Anterior
                        </button>
                      )}
                      <button
                        onClick={() => tourStep < tourSteps.length-1 ? setTourStep(s => s!+1) : setTourStep(null)}
                        style={{
                          flex:2, padding:'11px',
                          background:`linear-gradient(135deg,${step.color}cc,${step.color}88)`,
                          border:'none', borderRadius:'10px', cursor:'pointer',
                          fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:'13px',
                          color: step.color === '#ffffff' ? '#000' : '#fff',
                          display:'flex', alignItems:'center', justifyContent:'center', gap:4,
                        }}
                      >
                        {tourStep < tourSteps.length-1
                          ? <><span>Próximo</span><span className="material-symbols-outlined" style={{fontSize:14}}>arrow_forward</span></>
                          : <><span>Concluir</span><span className="material-symbols-outlined" style={{fontSize:14}}>check</span></>}
                      </button>
                    </div>
                  </motion.div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CATEGORY POPUP (persuasão) ── */}
      <AnimatePresence>
        {categoryPopup && (() => {
          const data = categoryPopups[categoryPopup];
          return (
            <motion.div
              key="cat-overlay"
              onClick={() => setCategoryPopup(null)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 300,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              }}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  width: '100%', maxWidth: '480px',
                  background: '#0d0d0d',
                  border: `1px solid ${data.color}33`,
                  borderRadius: '28px 28px 0 0',
                  borderBottom: 'none',
                  maxHeight: '88vh',
                  overflowY: 'auto',
                  boxShadow: `0 -12px 48px ${data.color}18, 0 -32px 80px rgba(0,0,0,0.6)`,
                  padding: '8px 0 36px',
                }}
              >
                {/* Drag handle */}
                <div style={{ width: 40, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '12px auto 20px' }} />

                <div style={{ padding: '0 24px' }}>
                  {/* Tag */}
                  <span style={{
                    fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: '10px',
                    color: data.color, letterSpacing: '0.16em', textTransform: 'uppercase',
                    display: 'block', marginBottom: '10px',
                  }}>✦ {data.tag}</span>

                  {/* Headline */}
                  <h2 style={{
                    fontFamily: "'Sora',sans-serif", fontWeight: 900,
                    fontSize: 'clamp(20px, 5.5vw, 26px)', color: '#fff',
                    letterSpacing: '0.02em', lineHeight: 1.15, margin: '0 0 10px',
                  }}>{data.headline}</h2>

                  {/* Sub */}
                  <p style={{
                    fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 28px',
                  }}>{data.sub}</p>

                  {/* Divisor */}
                  <div style={{ height: 1, background: `${data.color}22`, marginBottom: 24 }} />

                  {/* Blocos de conteúdo */}
                  {data.blocks.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      style={{
                        display: 'flex', gap: 14, marginBottom: 20,
                        background: `${data.color}0d`,
                        border: `1px solid ${data.color}22`,
                        borderRadius: 12, padding: '14px 16px',
                      }}
                    >
                      <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{b.icon}</span>
                      <div>
                        <p style={{
                          fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: '13px',
                          color: '#fff', margin: '0 0 5px', letterSpacing: '0.02em',
                        }}>{b.title}</p>
                        <p style={{
                          fontFamily: "'Nunito',sans-serif", fontWeight: 500, fontSize: '13px',
                          color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0,
                        }}>{b.body}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* CTA principal */}
                  <motion.button
                    onClick={() => openCategoryList(categoryPopup)}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    style={{
                      width: '100%', padding: '20px 20px 16px',
                      background: `linear-gradient(135deg, ${data.color}, ${data.color}bb)`,
                      border: `2px solid ${data.color}`,
                      borderRadius: 16, cursor: 'pointer',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: 6,
                      boxShadow: `0 0 40px ${data.color}55, 0 8px 28px rgba(0,0,0,0.5)`,
                      marginBottom: 10,
                    }}
                  >
                    <span style={{
                      fontFamily: "'Sora',sans-serif", fontWeight: 900,
                      fontSize: 'clamp(14px, 3.8vw, 17px)',
                      color: categoryPopup === 'grupos' ? '#1a1000' : '#fff',
                      letterSpacing: '0.04em', lineHeight: 1.2,
                    }}>
                      {data.cta}
                    </span>
                    <span style={{
                      fontFamily: "'Nunito',sans-serif", fontWeight: 700,
                      fontSize: '12px',
                      color: categoryPopup === 'grupos' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.65)',
                      letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      {data.ctaSub}
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                    </span>
                  </motion.button>

                  {/* Skip */}
                  <button
                    onClick={() => setCategoryPopup(null)}
                    style={{
                      width: '100%', padding: '12px',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: '13px',
                      color: 'rgba(255,255,255,0.25)',
                    }}
                  >
                    Agora não
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* ── MODAL EDITAIS/KITS (Crimson) ── */}
      <AnimatePresence>
        {showKitsModal && (
          <motion.div
            key="kits-overlay"
            onClick={() => setShowKitsModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: '#111111',
                border: '1px solid rgba(139,23,26,0.3)',
                borderRadius: '24px 24px 0 0',
                padding: '8px 0 32px',
                width: '100%',
                maxWidth: '480px',
                boxShadow: '0 -8px 40px rgba(139,23,26,0.15), 0 -24px 64px rgba(0,0,0,0.6)',
              }}
            >
              <div style={{
                width: '40px', height: '4px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '2px', margin: '12px auto 24px',
              }} />
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 24px', marginBottom: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: '#ffbbbb' }}><IconKits /></div>
                  <span style={{
                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                    fontSize: '18px', color: '#ffffff', letterSpacing: '0.04em',
                  }}>EDITAIS VERTICALIZADOS</span>
                </div>
                <button
                  onClick={() => setShowKitsModal(false)}
                  style={{
                    background: 'rgba(255,255,255,0.07)', border: 'none',
                    borderRadius: '50%', width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
                    fontSize: '18px', lineHeight: 1,
                  }}
                >×</button>
              </div>
              <p style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 500,
                fontSize: '13px', color: 'rgba(255,255,255,0.4)',
                padding: '0 24px', marginBottom: '16px', lineHeight: 1.5,
              }}>
                Escolha o edital verticalizado do seu concurso.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
                {kitLinks.map((kit, i) => (
                  <motion.div
                    key={kit.id}
                    role="button"
                    onClick={() => {
                      setShowKitsModal(false);
                      setPreviousModal('editais');
                      setTimeout(() => setActiveLink(kit), 50);
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 16px', borderRadius: '10px', cursor: 'pointer',
                      background: 'rgba(139,23,26,0.14)',
                      border: '1px solid rgba(139,23,26,0.4)',
                    }}
                  >
                    <span style={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                      fontSize: '14px', color: '#ffffff', lineHeight: 1.3,
                    }}>
                      {kit.label}
                    </span>
                    <span className="material-symbols-outlined"
                      style={{ color: '#ffbbbb', fontSize: '18px', opacity: 0.7, flexShrink: 0, marginLeft: '8px' }}>
                      chevron_right
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODAL ANTI-VADE ── */}
      <AnimatePresence>
        {showAntiVadeModal && (
          <motion.div
            key="antivade-overlay"
            onClick={() => setShowAntiVadeModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: '#111111',
                border: '1px solid rgba(233,213,255,0.2)',
                borderRadius: '24px 24px 0 0',
                padding: '8px 0 32px',
                width: '100%',
                maxWidth: '480px',
                boxShadow: '0 -8px 40px rgba(128,0,255,0.1), 0 -24px 64px rgba(0,0,0,0.6)',
              }}
            >
              {/* Drag handle */}
              <div style={{
                width: '40px', height: '4px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '2px', margin: '12px auto 24px',
              }} />

              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 24px', marginBottom: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: '#e9d5ff' }}>
                    <IconAntiVade />
                  </div>
                  <span style={{
                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                    fontSize: '18px', color: '#ffffff', letterSpacing: '0.04em',
                  }}>
                    ANTI-VADE MECUM
                  </span>
                </div>
                <button
                  onClick={() => setShowAntiVadeModal(false)}
                  style={{
                    background: 'rgba(255,255,255,0.07)', border: 'none',
                    borderRadius: '50%', width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
                    fontSize: '18px', lineHeight: 1,
                  }}
                >×</button>
              </div>

              <p style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 500,
                fontSize: '13px', color: 'rgba(255,255,255,0.4)',
                padding: '0 24px', marginBottom: '16px', lineHeight: 1.5,
              }}>
                Escolha o Anti-Vade Mecum do seu concurso.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
                {antiVadeLinks.map((item, i) => (
                  <motion.div
                    key={item.id}
                    role="button"
                    onClick={() => {
                      setShowAntiVadeModal(false);
                      setPreviousModal('antivade');
                      setTimeout(() => setActiveLink(item), 50);
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 16px', borderRadius: '10px', cursor: 'pointer',
                      background: 'rgba(128,0,255,0.1)',
                      border: '1px solid rgba(160,60,255,0.3)',
                    }}
                  >
                    <span style={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                      fontSize: '14px', color: '#ffffff', lineHeight: 1.3,
                    }}>
                      {item.label}
                    </span>
                    <span className="material-symbols-outlined"
                      style={{ color: '#e9d5ff', fontSize: '18px', opacity: 0.7, flexShrink: 0, marginLeft: '8px' }}>
                      chevron_right
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODAL DE GRUPOS ── */}
      <AnimatePresence>
        {showGroupsModal && (
          <motion.div
            key="groups-overlay"
            onClick={() => setShowGroupsModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              padding: '0',
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: '#111111',
                border: '1px solid rgba(175,144,100,0.3)',
                borderRadius: '24px 24px 0 0',
                padding: '8px 0 32px',
                width: '100%',
                maxWidth: '480px',
                boxShadow: '0 -8px 40px rgba(175,144,100,0.12), 0 -24px 64px rgba(0,0,0,0.6)',
              }}
            >
              {/* Drag handle */}
              <div style={{
                width: '40px', height: '4px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '2px', margin: '12px auto 24px',
              }} />

              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 24px', marginBottom: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: '#f0d4a0' }}>
                    <IconGroups />
                  </div>
                  <span style={{
                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                    fontSize: '18px', color: '#ffffff', letterSpacing: '0.04em',
                  }}>
                    GRUPOS
                  </span>
                </div>
                <button
                  onClick={() => setShowGroupsModal(false)}
                  style={{
                    background: 'rgba(255,255,255,0.07)', border: 'none',
                    borderRadius: '50%', width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
                    fontSize: '18px', lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>

              {/* Subtítulo */}
              <p style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 500,
                fontSize: '13px', color: 'rgba(255,255,255,0.4)',
                padding: '0 24px', marginBottom: '16px', lineHeight: 1.5,
              }}>
                Escolha o grupo que faz mais sentido pra você.
              </p>

              {/* Lista de grupos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
                {groupLinks.map((group, i) => (
                  <motion.div
                    key={group.id}
                    role="button"
                    onClick={() => {
                      setShowGroupsModal(false);
                      setPreviousModal('grupos');
                      setTimeout(() => setActiveLink(group), 50);
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 16px', borderRadius: '10px', cursor: 'pointer',
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${group.color}22`,
                      transition: 'background 0.15s, border-color 0.15s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: group.icon ? '12px' : '0' }}>
                      {group.icon && (
                        <div style={{ color: group.color, flexShrink: 0, display: 'flex' }}>
                          {group.icon}
                        </div>
                      )}
                      <span style={{
                        fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                        fontSize: '14px', color: '#ffffff', lineHeight: 1.3,
                      }}>
                        {group.label}
                      </span>
                    </div>
                    <span className="material-symbols-outlined"
                      style={{ color: group.color, fontSize: '18px', opacity: 0.7, flexShrink: 0, marginLeft: '8px' }}>
                      chevron_right
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODAL POPUP DE LINK ── */}
      <AnimatePresence>
        {activeLink && (
          <motion.div
            key="overlay"
            onClick={() => setActiveLink(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 300,
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: '#111111',
                border: `1px solid ${activeLink.color}33`,
                borderRadius: '20px',
                padding: '32px 24px 28px',
                maxWidth: '360px',
                width: '100%',
                textAlign: 'center',
                boxShadow: `0 0 40px ${activeLink.color}22, 0 24px 64px rgba(0,0,0,0.6)`,
                position: 'relative',
              }}
            >
              {/* Botão fechar */}
              <button
                onClick={handleVoltar}
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(255,255,255,0.07)', border: 'none',
                  borderRadius: '50%', width: '32px', height: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
                  fontSize: '18px', lineHeight: 1,
                }}
              >
                ×
              </button>

              {/* Ícone */}
              {activeLink.icon && (
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: `${activeLink.color}18`,
                  border: `1.5px solid ${activeLink.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: activeLink.color,
                  transform: 'scale(1.5)',
                }}>
                  {activeLink.icon}
                </div>
              )}

              {/* Título */}
              <h3 style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 800,
                fontSize: '16px', color: '#ffffff',
                letterSpacing: '0.03em', margin: '0 0 12px',
                lineHeight: 1.3,
              }}>
                {activeLink.label}
              </h3>

              {/* Descrição */}
              <div style={{ margin: '0 0 28px', textAlign: 'left' }}>
                {activeLink.description.split('\n').map((line, i) => {
                  const isUpdate = line.includes('Atualizações 2026');
                  return (
                    <span key={i} style={{
                      display: 'block',
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '13px',
                      lineHeight: 1.8,
                      fontWeight: isUpdate ? 800 : 500,
                      color: isUpdate ? activeLink.color : 'rgba(255,255,255,0.82)',
                      ...(isUpdate ? {
                        background: `${activeLink.color}15`,
                        borderLeft: `2px solid ${activeLink.color}`,
                        paddingLeft: '8px',
                        marginLeft: '-2px',
                        borderRadius: '0 4px 4px 0',
                      } : {}),
                    }}>
                      {line || ' '}
                    </span>
                  );
                })}
              </div>

              {/* Botões */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleVoltar}
                  style={{
                    flex: 1, padding: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px', cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                    fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  Voltar
                </button>
                <a
                  href={activeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveLink(null)}
                  style={{
                    flex: 2, padding: '12px',
                    background: `linear-gradient(135deg, ${activeLink.color}cc, ${activeLink.color}88)`,
                    border: 'none', borderRadius: '10px', cursor: 'pointer',
                    fontFamily: "'Sora', sans-serif", fontWeight: 700,
                    fontSize: '14px', color: '#000000',
                    textDecoration: 'none', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: '6px',
                  }}
                >
                  Continuar
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    arrow_forward
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
