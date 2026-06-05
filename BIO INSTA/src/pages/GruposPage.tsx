import CategoryLayout from '../components/CategoryLayout';

const links = [
  {
    id: 5,
    title: 'GRUPO PMAL',
    url: 'https://chat.whatsapp.com/FNCQXsGV1oV5RxBFJUTBzS?mode=gi_t',
    image: '/grupo-pmal.png',
    color: '#003087',
    isPrimary: true,
  },
  {
    id: 6,
    title: 'GRUPO PPMG',
    url: 'https://chat.whatsapp.com/EzZ0EEDCpqc3qrFQyxMYgw?mode=gi_t',
    image: '/grupo-ppmg.png',
    color: '#AF9064',
    isPrimary: true,
  },
  {
    id: 2,
    title: 'PROJETO PM 2026 | VIP MARCOS BRITO',
    url: 'https://chat.whatsapp.com/D4P4LcICcINJ2uVmzPzoMD?mode=gi_t',
    image: '/link-projeto.jpg',
    color: '#D4AF37',
    isPrimary: true,
  },
  {
    id: 3,
    title: 'CARREIRA POLICIAL - MB',
    url: 'https://chat.whatsapp.com/EcebP2DrNzi9BzrXW1AI7o',
    image: '/link-carreira.jpg',
    color: '#1E90FF',
    isPrimary: false,
  },
  {
    id: 4,
    title: 'FALE COMIGO - WHATSAPP',
    url: 'https://wa.link/iatp2q',
    image: '/link-whatsapp.jpg',
    color: '#25D366',
    isPrimary: false,
  },
];

export default function GruposPage() {
  return (
    <CategoryLayout
      icon="💬"
      label="Grupos"
      sublabel="Comunidades VIP no WhatsApp"
      accentColor="#25D366"
      links={links}
    />
  );
}
