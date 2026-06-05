import { motion } from 'framer-motion';

interface LinkCardProps {
    id: number;
    title: string;
    subtitle?: string;
    url: string;
    icon: string;
    color: string;
    isPrimary?: boolean;
    index: number;
}

function LinkCard({ title, subtitle, url, icon, color, isPrimary = false, index }: LinkCardProps) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1]
            }}
            whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className={`relative block w-full p-4 rounded-2xl overflow-hidden group cursor-pointer ${isPrimary ? 'ring-2' : ''
                }`}
            style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${color}40`,
                boxShadow: isPrimary
                    ? `0 0 30px ${color}30, 0 10px 40px rgba(0,0,0,0.3)`
                    : '0 10px 40px rgba(0,0,0,0.2)',
            }}
        >
            {/* Animated gradient border */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${color}30, transparent, ${color}30)`,
                }}
            />

            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: `inset 0 0 30px ${color}20, 0 0 40px ${color}20`,
                }}
            />

            {/* Primary pulse animation */}
            {isPrimary && (
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                        boxShadow: [
                            `0 0 20px ${color}20`,
                            `0 0 40px ${color}40`,
                            `0 0 20px ${color}20`,
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            )}

            {/* Content */}
            <div className="relative flex items-center gap-4 z-10">
                {/* Icon with glow */}
                <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                        background: `linear-gradient(135deg, ${color}40, ${color}15)`,
                        boxShadow: `0 4px 20px ${color}30`,
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                    }}
                >
                    {icon}
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm leading-tight">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-white/50 text-xs mt-0.5 font-medium">{subtitle}</p>
                    )}
                </div>

                {/* Arrow with animation */}
                <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                    }}
                    whileHover={{ x: 5 }}
                >
                    <svg
                        className="w-5 h-5 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Primary badge */}
            {isPrimary && (
                <motion.div
                    className="absolute -top-1 -right-1 px-3 py-1 rounded-full text-[10px] font-black tracking-wide"
                    style={{
                        background: `linear-gradient(135deg, ${color}, ${color}CC)`,
                        boxShadow: `0 2px 10px ${color}60`,
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    🔥 DESTAQUE
                </motion.div>
            )}
        </motion.a>
    );
}

export default LinkCard;
