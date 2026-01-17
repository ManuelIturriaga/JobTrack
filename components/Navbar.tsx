import React from 'react';
import { LayoutDashboard, LineChart, Users, Moon, Sun } from 'lucide-react';
import { IMAGES } from '../constants';

interface NavbarProps {
  isPremium: boolean;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isPremium, toggleTheme, isDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between transition-colors duration-300">
      {/* Dynamic Logo Section based on User Request */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <img 
            alt={isPremium ? "JobTrack Premium Logo" : "JobTrack Free Logo"} 
            className={`h-12 w-12 rounded-xl transition-all duration-300 ${isPremium ? 'shadow-lg ring-2 ring-premium/20' : ''}`}
            src={isPremium ? IMAGES.PREMIUM_LOGO : IMAGES.FREE_LOGO} 
          />
          {isPremium && (
            <div className="absolute -top-1 -right-1 bg-premium text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full border border-white dark:border-slate-900 shadow-sm animate-pulse">
              PRO
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">JobTrack</span>
          <span className={`text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 ${isPremium ? 'text-premium' : 'text-slate-500'}`}>
            {isPremium ? 'Premium Edition' : 'Free Edition'}
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 ml-12">
        <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-2 rounded-lg transition-all">
          <LayoutDashboard size={20} /> Dashboard
        </a>
        <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 px-3 py-2">
          <LineChart size={20} /> Insights
        </a>
        <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 px-3 py-2">
          <Users size={20} /> Network
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <Sun className="text-slate-400 hover:text-amber-400 transition-colors" size={20} />
          ) : (
             <Moon className="text-slate-500 hover:text-primary transition-colors" size={20} />
          )}
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">Alex Rivera</p>
            <p className={`text-[10px] font-bold uppercase tracking-tighter ${isPremium ? 'text-premium' : 'text-slate-400'}`}>
              {isPremium ? 'Gold Member' : 'Basic Member'}
            </p>
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold transition-all ${isPremium ? 'bg-primary ring-2 ring-premium/30' : 'bg-slate-400'}`}>
            AR
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;