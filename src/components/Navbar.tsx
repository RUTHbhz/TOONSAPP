import { BookOpen, User } from 'lucide-react';

export const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) => {
    return (
        <nav className="glass-card" style={{
            position: 'sticky',
            top: '1rem',
            margin: '1rem 2rem',
            padding: '0.75rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div
                onClick={() => onNavigate('Gallery')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
            >
                <BookOpen size={28} style={{ color: 'var(--accent-primary)' }} />
                <span className="serif" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                    TOONS<span style={{ color: 'var(--accent-primary)' }}>APP</span>
                </span>
            </div>

            <div style={{ display: 'flex', gap: 'clamp(0.5rem, 3vw, 2rem)', alignItems: 'center' }}>
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate('Gallery'); }}
                    style={{
                        color: 'var(--text-primary)',
                        opacity: currentView === 'Gallery' ? 1 : 0.6,
                        fontWeight: currentView === 'Gallery' ? 'bold' : 'normal',
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}
                >
                    Galerie
                </a>
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate('Authors'); }}
                    style={{
                        color: 'var(--text-primary)',
                        opacity: currentView === 'Authors' ? 1 : 0.6,
                        fontWeight: currentView === 'Authors' ? 'bold' : 'normal',
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}
                >
                    Auteurs
                </a>
                <button
                    onClick={() => onNavigate('Profile')}
                    className="glass-card"
                    style={{
                        padding: '0.4rem clamp(0.6rem, 2vw, 1.25rem)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: currentView === 'Profile' ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                        background: currentView === 'Profile' ? 'rgba(245, 158, 11, 0.1)' : 'var(--glass-bg)',
                        color: currentView === 'Profile' ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                    }}
                >
                    <User size={16} />
                    <span style={{ display: window.innerWidth < 400 ? 'none' : 'block' }}>Profil</span>
                </button>
            </div>
        </nav>
    );
};
