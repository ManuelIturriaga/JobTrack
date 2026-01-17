import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Insights from './components/Insights';
import Network from './components/Network';
import Profile from './components/Profile';
import AddJobModal from './components/AddJobModal';

const App: React.FC = () => {
  const [isPremium, setIsPremium] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'insights' | 'network' | 'profile'>('dashboard');
  const [isAddJobModalOpen, setIsAddJobModalOpen] = useState<boolean>(false);

  // Handle Dark Mode Class on Body/HTML
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePremium = () => setIsPremium(!isPremium);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard 
            isPremium={isPremium} 
            onUpgrade={() => setIsPremium(true)}
            onAddJob={() => setIsAddJobModalOpen(true)}
            onViewFullInsights={() => setCurrentPage('insights')}
          />
        );
      case 'insights':
        return <Insights />;
      case 'network':
        return <Network />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard 
          isPremium={isPremium} 
          onUpgrade={() => setIsPremium(true)}
          onAddJob={() => setIsAddJobModalOpen(true)}
          onViewFullInsights={() => setCurrentPage('insights')}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans">
      <Navbar 
        isPremium={isPremium} 
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {renderPage()}

      {isAddJobModalOpen && (
        <AddJobModal onClose={() => setIsAddJobModalOpen(false)} />
      )}

      {/* Floating Toggle for Demo Purposes */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-slate-400">Demo Controls</span>
            <button 
                onClick={togglePremium}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${isPremium ? 'bg-premium text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}
            >
                {isPremium ? 'View Free Version' : 'View Premium Version'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;