import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ReaderViewProps {
    work: {
        title: string;
        author: string;
        content: string[]; // URLs of images or panels
        summary: string;
    } | null;
    onClose: () => void;
}

export const ReaderView = ({ work, onClose }: ReaderViewProps) => {
    const [currentPage, setCurrentPage] = useState(0);

    if (!work) return null;

    const next = () => setCurrentPage((p) => Math.min(work.content.length - 1, p + 1));
    const prev = () => setCurrentPage((p) => Math.max(0, p - 1));

    return (
        <AnimatePresence>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 3000,
                    background: 'var(--bg-primary)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Reader Header */}
                <header className="glass-card" style={{ padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 0 }}>
                    <div>
                        <h2 className="serif" style={{ fontSize: '1rem' }}>{work.title}</h2>
                        <p style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)' }}>par {work.author}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Page {currentPage + 1} / {work.content.length}
                        </div>
                        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <button
                        onClick={prev}
                        style={{ position: 'absolute', left: '2rem', zIndex: 10, background: 'var(--glass-bg)', padding: '1rem', borderRadius: '50%' }}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <motion.img
                        key={currentPage}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        src={work.content[currentPage]}
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                            borderRadius: '8px'
                        }}
                    />

                    <button
                        onClick={next}
                        style={{ position: 'absolute', right: '2rem', zIndex: 10, background: 'var(--glass-bg)', padding: '1rem', borderRadius: '50%' }}
                        disabled={currentPage === work.content.length - 1}
                    >
                        <ChevronRight size={32} />
                    </button>
                </main>

                {/* Thumbnails / Synthesis */}
                <footer style={{ height: '80px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0 2rem' }}>
                    {work.content.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            style={{
                                width: '40px',
                                height: '60px',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                border: currentPage === i ? '2px solid var(--accent-primary)' : 'none',
                                opacity: currentPage === i ? 1 : 0.5
                            }}
                        />
                    ))}
                </footer>
            </div>
        </AnimatePresence>
    );
};
