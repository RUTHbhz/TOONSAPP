import { motion } from 'framer-motion';
import { Award, Book } from 'lucide-react';

export const AuthorsView = ({ authors, onAuthorClick }: { authors: any, onAuthorClick: (author: any) => void }) => {
    return (
        <div className="container" style={{ paddingBottom: '6rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1rem' }}>Nos Artistes <span style={{ color: 'var(--accent-primary)' }}>Visionnaires</span></h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Les esprits créatifs derrière les histoires visuelles les plus captivantes.</p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '2rem'
            }}>
                {Object.values(authors).map((author: any, index: number) => (
                    <motion.div
                        key={author.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card"
                        style={{ padding: '2.5rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}
                        onClick={() => onAuthorClick(author)}
                        whileHover={{ y: -10, borderColor: 'var(--accent-primary)' }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            margin: '0 auto 1.5rem',
                            backgroundImage: `url(${author.photo})`,
                            backgroundSize: 'cover',
                            border: '2px solid var(--accent-primary)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                        }} />
                        <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{author.name}</h3>
                        <p style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{author.specialty}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Award size={16} /> Élite</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Book size={16} /> 12 Œuvres</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
