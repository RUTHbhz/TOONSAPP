import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { BookCard } from './components/BookCard';
import { AuthorModal } from './components/AuthorModal';
import { ReaderView } from './components/ReaderView';
import { AuthorsView } from './components/AuthorsView';
import { ProfileDashboard } from './components/ProfileDashboard';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Filter, Sparkles } from 'lucide-react';

const AUTHORS = {
  "Elena Rivers": {
    name: "Elena Rivers",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Artiste fractale visionnaire et romancière graphique basée à Néo-Tokyo. Elena explore les frontières de la conscience numérique.",
    specialty: "Illustration Cyberpunk",
  },
  "Marcus Thorne": {
    name: "Marcus Thorne",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Animateur primé se concentrant sur les paysages oniriques surréalistes et la physique des fluides en mouvement.",
    specialty: "Animation Surréaliste",
  },
  "Sara Vane": {
    name: "Sara Vane",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Peintre classique devenue illustratrice numérique. Sara se spécialise dans la fantasy victorienne sombre.",
    specialty: "Illustration Fantasy",
  },
  "Dr. Orion": {
    name: "Dr. Orion",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Physicien théoricien utilisant l'art génératif pour visualiser des théories multidimensionnelles complexes.",
    specialty: "Art Scientifique",
  }
};

const SAMPLE_WORKS = [
  {
    category: "BD",
    title: "Le Samouraï Néon",
    author: "Elena Rivers",
    preview: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
    views: 1240,
    likes: 450,
    summary: "Un roman graphique cyberpunk explorant l'intersection des traditions ancestrales et de l'immortalité numérique.",
    content: [
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    category: "BD",
    title: "Chroniques de l'Ombre",
    author: "Sara Vane",
    preview: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=800",
    views: 3200,
    likes: 890,
    summary: "Une série gothique suivant la vie d'un détective fantôme dans un monde d'ombres.",
    content: [
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    category: "BD",
    title: "L'IA Fantôme",
    author: "Elena Rivers",
    preview: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    views: 5200,
    likes: 1800,
    summary: "Une conscience artificielle tente de s'échapper de sa prison numérique à travers les souvenirs d'un scientifique.",
    content: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Le Coureur du Vide",
    author: "Elena Rivers",
    preview: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    views: 4100,
    likes: 1100,
    summary: "Noir spatial haletant sur un chasseur de primes poursuivant les fragments de sa propre mémoire.",
    content: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    category: "BD",
    title: "Cité de Vapeur",
    author: "Marcus Thorne",
    preview: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    views: 1200,
    likes: 340,
    summary: "Une aventure steampunk où les nuages sont d'argent et les rues pavées de cuivre.",
    content: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Encre & Alchimie",
    author: "Marcus Thorne",
    preview: "https://images.unsplash.com/photo-1581412038764-da96f7c97561?auto=format&fit=crop&q=80&w=800",
    views: 2400,
    likes: 670,
    summary: "Conte fantaisiste sur un brasseur de potions dont les créations prennent vie par l'encre sur sa peau.",
    content: [
      "https://images.unsplash.com/photo-1581412038764-da96f7c97561?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244ec32?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    category: "Animation",
    title: "Échos Éthérés",
    author: "Marcus Thorne",
    preview: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    views: 890,
    likes: 310,
    summary: "Images d'animation expérimentales capturant les moments fugitifs entre rêve et réalité.",
    content: ["https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "Illustration",
    title: "Chroniques de Minuit",
    author: "Sara Vane",
    preview: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    views: 2100,
    likes: 720,
    summary: "Illustrations immersives détaillant les vies cachées des créatures nocturnes.",
    content: ["https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Cœurs de Chrome",
    author: "Elena Rivers",
    preview: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    views: 4500,
    likes: 1230,
    summary: "Une romance dans un monde où les émotions sont fabriquées synthétiquement.",
    content: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "La Forêt Silencieuse",
    author: "Sara Vane",
    preview: "https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=800",
    views: 1540,
    likes: 420,
    summary: "Une courte BD magnifiquement illustrée sur une forêt qui dévore les sons.",
    content: ["https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Requiem Stellaire",
    author: "Dr. Orion",
    preview: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800",
    views: 6700,
    likes: 2100,
    summary: "Un opéra spatial en BD détaillant les derniers jours d'un système solaire mourant.",
    content: ["https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "Illustration",
    title: "Odyssée de Poussière",
    author: "Dr. Orion",
    preview: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    views: 5600,
    likes: 1200,
    summary: "Un voyage à travers le cosmos raconté par des compositions numériques vibrantes.",
    content: ["https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Moine Cyber",
    author: "Dr. Orion",
    preview: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    views: 7800,
    likes: 1950,
    summary: "Manga philosophique sur une IA cherchant l'éveil spirituel.",
    content: ["https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"]
  },
  {
    category: "BD",
    title: "Poussière Numérique",
    author: "Elena Rivers",
    preview: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    views: 3100,
    likes: 920,
    summary: "Que reste-t-il de l'humanité quand nos héritages numériques sont tout ce qu'il reste ?",
    content: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"]
  }
];

function App() {
  const [currentView, setCurrentView] = useState('Gallery');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedAuthor, setSelectedAuthor] = useState<any>(null);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const categories = ['Tous', 'BD', 'Animation', 'Illustration'];

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'Tous') return SAMPLE_WORKS;
    return SAMPLE_WORKS.filter(work => work.category === activeCategory);
  }, [activeCategory]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'Authors':
        return <AuthorsView authors={AUTHORS} onAuthorClick={setSelectedAuthor} />;
      case 'Profile':
        return <ProfileDashboard />;
      default:
        return (
          <>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  background: 'var(--glass-bg)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <Sparkles size={16} /> Découverte d'Art Premium
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="serif"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}
              >
                Élevez Votre <br />
                <span style={{
                  background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Voyage Visuel</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 3vw, 1.25rem)', maxWidth: '650px', margin: '0 auto 3rem' }}
              >
                Découvrez des bandes dessinées, animations et illustrations professionnelles pour les passionnés d'art.
              </motion.p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: activeCategory === cat ? 'var(--accent-primary)' : 'var(--glass-bg)',
                      color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '30px',
                      padding: '0.5rem 1.2rem',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {cat === 'Tous' ? <Filter size={14} /> : null}
                    {cat}
                  </button>
                ))}
              </div>
            </header>

            <section className="masonry-grid">
              <AnimatePresence mode='popLayout'>
                {filteredWorks.map((work, index) => (
                  <motion.div
                    key={work.title}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="masonry-item"
                  >
                    <BookCard
                      {...work}
                      onAuthorClick={() => setSelectedAuthor((AUTHORS as any)[work.author])}
                      onExploreClick={() => setSelectedWork(work)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      <main className="container" style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer style={{
        padding: '6rem 2rem',
        borderTop: '1px solid var(--glass-border)',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.2)',
        marginTop: 'auto'
      }}>
        <div className="serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>TOONS<span style={{ color: 'var(--accent-primary)' }}>APP</span></div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Donner aux artistes les outils pour montrer leurs histoires au monde.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('Gallery'); }}>Galerie</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('Authors'); }}>Auteurs</a>
          <a href="#">Support</a>
          <a href="#">Confidentialité</a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 ToonsApp. Créé avec <Heart size={14} style={{ color: 'var(--accent-primary)' }} /> par KADID bhz.
        </p>
      </footer>

      {/* Modals */}
      <AuthorModal author={selectedAuthor} onClose={() => setSelectedAuthor(null)} />
      <ReaderView work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}

export default App;
