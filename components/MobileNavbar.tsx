import React from 'react';
import { LayoutDashboard, LineChart, Users, User } from 'lucide-react';

interface MobileNavbarProps {
  currentPage: string;
  onNavigate: (page: 'dashboard' | 'insights' | 'network' | 'profile') => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'insights', icon: LineChart, label: 'Insights' },
    { id: 'network', icon: Users, label: 'Network' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-50 px-6 py-3 safe-area-pb">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-primary transform -translate-y-1' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <div className={`p-1.5 rounded-xl ${isActive ? 'bg-blue-50 dark:bg-blue-900/30' : ''}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;