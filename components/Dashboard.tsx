import React from 'react';
import { Briefcase, Sparkles, MoreHorizontal, Lock, Plus } from 'lucide-react';
import { Job, MOCK_JOBS } from '../types';
import JobCard from './JobCard';
import PremiumInsights from './PremiumInsights';
import FreeUpsell from './FreeUpsell';

interface DashboardProps {
  isPremium: boolean;
  onUpgrade: () => void;
  onAddJob: () => void;
  onViewFullInsights: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isPremium, onUpgrade, onAddJob, onViewFullInsights }) => {
  const columns = [
    { title: 'Wishlist', id: 'wishlist', count: 8 },
    { title: 'Applied', id: 'applied', count: 12 },
    { title: 'Interviewing', id: 'interviewing', count: 3 },
    { title: 'Offers', id: 'offers', count: 1 },
  ];

  return (
    <main className="p-6 max-w-[1600px] mx-auto pb-24 animate-fadeIn">
      {/* Header & Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Career Pipeline</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your active opportunities and interview stages.</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {/* Active Apps Stat */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-4 min-w-[200px]">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Active Apps</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>

          {/* Match Score Stat - Dynamic based on Tier */}
          <div 
            onClick={!isPremium ? onUpgrade : undefined}
            className={`bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border flex items-center gap-4 min-w-[200px] transition-all ${isPremium ? 'premium-border shadow-premium border-premium/30' : 'border-slate-200 dark:border-slate-700 cursor-pointer hover:border-premium/50 group'}`}
          >
            <div className={`p-2 rounded-lg ${isPremium ? 'bg-amber-100 dark:bg-amber-900/30 text-premium' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:text-premium group-hover:bg-amber-50 transition-colors'}`}>
               {isPremium ? <Sparkles size={24} /> : <Lock size={24} />}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    {isPremium ? 'Match Score' : 'Advanced Stats'}
                </p>
              </div>
              {isPremium ? (
                 <p className="text-xl font-bold">88<span className="text-sm font-medium text-slate-400">/100</span></p>
              ) : (
                 <p className="text-sm font-medium italic text-slate-400 group-hover:text-primary underline decoration-dotted">Upgrade to view</p>
              )}
            </div>
          </div>

          <button 
            onClick={onAddJob}
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <Plus size={20} /> Add New Job
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
        {columns.map((col) => (
            <div key={col.id} className="flex-1 min-w-[320px] snap-start">
                <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-700 dark:text-slate-300">{col.title}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            col.id === 'applied' ? 'bg-blue-100 dark:bg-blue-900/30 text-primary' :
                            col.id === 'interviewing' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' :
                            col.id === 'offers' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' :
                            'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                            {col.count}
                        </span>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    {MOCK_JOBS.filter(job => job.status === col.id).map(job => (
                        <JobCard key={job.id} job={job as Job} isPremium={isPremium} />
                    ))}
                </div>
            </div>
        ))}
      </div>

      {/* Insights Section - Switches based on tier */}
      <div className="mt-8">
          {isPremium ? (
            <PremiumInsights onViewFullReport={onViewFullInsights} />
          ) : (
            <FreeUpsell onUpgrade={onUpgrade} />
          )}
      </div>
    </main>
  );
};

export default Dashboard;