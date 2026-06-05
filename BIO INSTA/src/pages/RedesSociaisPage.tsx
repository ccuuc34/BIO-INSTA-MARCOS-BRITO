import CategoryLayout from '../components/CategoryLayout';

const links = [
  {
    id: 5,
    title: 'ME SIGA NO INSTAGRAM',
    url: 'https://www.instagram.com/_marcosbrit?igsh=ZWY0dDdlOXBtN2t0&utm_source=qr',
    image: '/link-instagram.jpg',
    color: '#E1306C',
    isPrimary: true,
  },
  {
    id: 6,
    title: 'TIK TOK - AULAS E MOTIVAÇÃO',
    url: 'https://www.tiktok.com/@o_marcosbrito?_t=ZM-90uPBU5VNnc&_r=1',
    image: '/link-tiktok.jpg',
    color: '#00F2EA',
    isPrimary: false,
  },
];

export default function RedesSociaisPage() {
  return (
    <CategoryLayout
      icon="📱"
      label="Redes Sociais"
      sublabel="Me siga nas redes"
      accentColor="#E1306C"
      links={links}
    />
  );
}
