import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Particles from './Particles';

interface Link {
  id: number;
  title: string;
  url: string;
  image: string;
  color: string;
  isPrimary?: boolean;
}

interface CategoryLayoutProps {
  icon: string;
  label: string;
  sublabel: string;
  accentColor: string;
  links: Link[];
}

export default function CategoryLayout({ icon, label, sublabel, accentColor, links }: CategoryLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black">
      <div className="fixed inset-0 bg-black" />
      <Particles />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-5 sm:px-6">

        {/* BACK BUTTON — premium */}
        <motion.div
          className="w-full max-w-[340px] pt-14"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 focus:outline-none"
          >
            {/* Arrow box */}
            <span
              className="flex items-center justify-center rounded-lg transition-all duration-200"
              style={{
                width: '32px',
                height: '32px',
                background: `rgba(255,255,255,0.04)`,
                border: `1px solid rgba(255,255,255,0.1)`,
                boxShadow: `0 0 12px ${accentColor}22`,
              }}
            >
              <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'League Spartan', sans-serif" }}
            >
              Voltar
            </span>
          </button>
        </motion.div>

        {/* CATEGORY HERO */}
        <motion.section
          className="w-full max-w-[340px] mt-8 mb-1 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {/* Icon */}
          <motion.div
            className="text-4xl mb-4"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15, type: 'spring', stiffness: 200 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h1
            className="font-black uppercase leading-none mb-3"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '38px',
              letterSpacing: '-0.5px',
              background: `linear-gradient(135deg, #ffffff 0%, ${accentColor} 60%, #ffffff 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 18px ${accentColor}55)`,
            }}
          >
            {label}
          </h1>

          {/* Sublabel */}
          <p
            className="font-semibold uppercase tracking-[0.22em] text-[11px]"
            style={{ color: `${accentColor}99`, fontFamily: "'League Spartan', sans-serif" }}
          >
            {sublabel}
          </p>

          {/* Divider */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50)` }} />
            <div className="w-1 h-1 rounded-full" style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }} />
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }} />
          </div>
        </motion.section>

        {/* LINKS */}
        <section className="w-full max-w-[340px] py-7" aria-label={label}>
          <div className="flex flex-col gap-6" role="list">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.09, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="relative block overflow-hidden rounded-2xl cursor-pointer focus:outline-none"
                style={{
                  boxShadow: link.isPrimary
                    ? `0 12px 40px ${link.color}25, 0 4px 16px rgba(0,0,0,0.5)`
                    : '0 8px 32px rgba(0,0,0,0.45)',
                }}
                aria-label={link.title}
              >
                <img src={link.image} alt="" className="w-full h-auto block" loading="lazy" aria-hidden="true" />
                {link.isPrimary && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        `inset 0 0 0px ${link.color}00`,
                        `inset 0 0 28px ${link.color}18`,
                        `inset 0 0 0px ${link.color}00`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <motion.footer
          className="w-full max-w-[400px] pb-20 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-center text-white/20 text-[11px] font-medium tracking-wider pb-5">
            © 2026 Marcos Brito. Todos os direitos reservados.
          </p>
        </motion.footer>
      </div>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
