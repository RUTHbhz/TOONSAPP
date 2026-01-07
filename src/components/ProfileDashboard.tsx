import { User, Settings, Heart, Clock, LogOut, ShieldCheck } from 'lucide-react';

export const ProfileDashboard = () => {
    return (
        <div className="container" style={{ paddingBottom: '6rem' }}>
            <header style={{
                display: 'flex',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                alignItems: 'center',
                gap: '2rem',
                marginBottom: '3rem',
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                textAlign: window.innerWidth < 768 ? 'center' : 'left'
            }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '60px',
                    background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'var(--bg-primary)',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)'
                }}>
                    JD
                </div>
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: window.innerWidth < 480 ? 'column' : 'row',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                    }}>
                        <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>Jane Doe</h1>
                        <span style={{ padding: '4px 12px', background: 'rgba(245, 158, 11, 0.2)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>ARTISTE PREMIUM</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Membre depuis Janvier 2026 • 24 Favoris • 12 Collections</p>
                </div>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '260px 1fr',
                gap: '2.5rem'
            }}>
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                        { icon: User, label: 'Infos Personnelles', active: true },
                        { icon: Heart, label: 'Favoris' },
                        { icon: Clock, label: 'Historique de Lecture' },
                        { icon: ShieldCheck, label: 'Sécurité' },
                        { icon: Settings, label: 'Préférences' },
                        { icon: LogOut, label: 'Déconnexion', color: '#ef4444' }
                    ].map((item, i) => (
                        <button
                            key={i}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.25rem',
                                width: '100%',
                                justifyContent: 'flex-start',
                                border: item.active ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                                background: item.active ? 'rgba(245, 158, 11, 0.1)' : 'var(--glass-bg)',
                                color: item.color || 'var(--text-primary)',
                                fontSize: '0.95rem',
                                fontWeight: item.active ? 'bold' : 'normal'
                            }}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </button>
                    ))}
                </aside>

                <main>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 640 ? '1fr' : '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Vos Statistiques</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>156</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Cœurs Donnés</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>42</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Livres Lus</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 className="serif" style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Abonnement Pro</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Débloquez les téléchargements infinis et l'accès anticipé.</p>
                            <button style={{ width: '100%', background: 'var(--accent-primary)', color: 'var(--bg-primary)', fontWeight: 'bold', padding: '0.75rem' }}>Passer Pro</button>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 className="serif" style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Activité Récente</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'Le Samouraï Néon', time: 'Il y a 2 heures' },
                                { title: 'IA Fantôme', time: 'Hier' },
                                { title: 'Requiem Stellaire', time: 'Il y a 2 jours' }
                            ].map((activity, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingBottom: '1rem', borderBottom: i === 2 ? 'none' : '1px solid var(--glass-border)' }}>
                                    <div style={{ width: '50px', height: '70px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }} />
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Vous avez aimé "{activity.title}"</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{activity.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
