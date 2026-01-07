import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Mail, Twitter } from 'lucide-react';

interface Author {
    name: string;
    photo: string;
    bio: string;
    specialty: string;
    socials?: {
        twitter?: string;
        mail?: string;
    };
}

interface AuthorModalProps {
    author: Author | null;
    onClose: () => void;
}

export const AuthorModal = ({ author, onClose }: AuthorModalProps) => {
    if (!author) return null;

    return (
        <AnimatePresence>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '2rem'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="glass-card"
                    style={{
                        maxWidth: '500px',
                        width: '100%',
                        padding: '2rem',
                        position: 'relative',
                        textAlign: 'center'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)' }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '60px',
                        margin: '0 auto 1.5rem',
                        backgroundImage: `url(${author.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '3px solid var(--accent-primary)',
                        boxShadow: '0 0 20px var(--accent-primary)'
                    }} />

                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{author.name}</h2>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{author.specialty}</p>
                    <div style={{ height: '1px', background: 'var(--glass-border)', width: '50px', margin: '0 auto 1.5rem' }} />
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', fontSize: '0.95rem' }}>{author.bio}</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)' }} title="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }} title="Email">
                            <Mail size={20} />
                        </a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }} title="Site Web">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
