import CategoryLayout from '../components/CategoryLayout';

const links = [
  {
    id: 0,
    title: 'EXTRA PMAL',
    url: 'https://pay.kirvano.com/74ba56ef-6e4c-4492-8c86-c8498c2a2d6d',
    image: '/link-extrapmal.webp',
    color: '#1a4fff',
    isPrimary: true,
  },
];

export default function ProdutosPage() {
  return (
    <CategoryLayout
      icon="🎓"
      label="Produtos"
      sublabel="Cursos e materiais de elite"
      accentColor="#D4AF37"
      links={links}
    />
  );
}
