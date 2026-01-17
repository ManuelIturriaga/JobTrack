import React from 'react';
import { TrendingUp, ArrowRight, Award, ShieldCheck } from 'lucide-react';

const PremiumInsights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
      {/* Main Stats Area */}
      <div className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 premium-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
              <TrendingUp className="text-premium" size={24} />
              Premium AI Coaching
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Analysis of your current pipeline velocity and strategy.</p>
          </div>
          <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
             View Full Report <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Velocity Card */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Weekly Velocity</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">+12%</span>
              <div className="flex gap-1 items-end h-8">
                <div className="w-1.5 h-4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="w-1.5 h-6 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full shadow-lg shadow-blue-500/30"></div>
                <div className="w-1.5 h-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-emerald-600 mt-3 font-medium flex items-center gap-1">
              <TrendingUp size={12} /> Above market average for Junior roles
            </p>
          </div>

          {/* Resume Strength Card */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Resume Strength</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">A+</span>
              <div className="text-right">
                <span className="text-[10px] font-bold text-premium bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full border border-premium/20">OPTIMIZED</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
              Your profile is in the top 5% of applicants for <b>Fintech</b> roles.
            </p>
          </div>
        </div>
      </div>

      {/* Priority Support Card */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-premium opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-premium" size={20} />
            <span className="text-xs font-bold uppercase tracking-widest text-premium">Priority Support</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Get Expert Review</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
             Connect with a senior industry mentor for a 15-minute rapid resume audit or interview prep session.
          </p>
        </div>
        <button className="bg-white text-slate-900 w-full py-3 rounded-xl font-bold hover:bg-premium hover:text-white transition-all shadow-lg">
            Schedule Session
        </button>
      </div>
    </div>
  );
};

export default PremiumInsights;