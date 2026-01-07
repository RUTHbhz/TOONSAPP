import { motion } from 'framer-motion';
import { Heart, Eye, ArrowUpRight } from 'lucide-react';

interface BookCardProps {
    title: string;
    author: string;
    preview: string;
    views: number;
    likes: number;
    summary: string;
    onAuthorClick: () => void;
    onExploreClick: () => void;
}

export const BookCard = ({ title, author, preview, views, likes, summary, onAuthorClick, onExploreClick }: BookCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{
                overflow: 'hidden',
                position: 'relative',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease'
            }}
        >
            <div
                onClick={onExploreClick}
                style={{
                    height: '300px',
                    width: '100%',
                    backgroundImage: `url(${preview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                {/* Category Badge */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--accent-primary)',
                    color: 'var(--bg-primary)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {(title.toLowerCase().includes('bd') || summary.toLowerCase().includes('bd') || summary.toLowerCase().includes('comic')) ? 'BD' : 'ART'}
                </div>

                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    display: 'flex',
                    gap: '10px',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
                        <Eye size={14} /> {views}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
                        <Heart size={14} /> {likes}
                    </span>
                </div>
            </div>

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="serif" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{title}</h3>
                <p
                    onClick={(e) => { e.stopPropagation(); onAuthorClick(); }}
                    style={{
                        color: 'var(--accent-secondary)',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        fontWeight: 600,
                        textDecoration: 'underline'
                    }}
                >
                    par {author}
                </p>
                <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: '1.25rem'
                }}>
                    {summary}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, background: 'var(--accent-primary)', color: 'var(--bg-primary)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onExploreClick}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            padding: '0.4rem 1rem',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Explorer <ArrowUpRight size={14} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};
