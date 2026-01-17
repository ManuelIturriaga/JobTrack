import React from 'react';
import { Sparkles, BarChart2, ArrowRight } from 'lucide-react';

interface FreeUpsellProps {
    onUpgrade: () => void;
}

const FreeUpsell: React.FC<FreeUpsellProps> = ({ onUpgrade }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blurred/Basic Stats */}
        <div className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
                        <BarChart2 className="text-slate-400" size={24} />
                        Personal Analytics
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Basic overview of your application activity.</p>
                </div>
                <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                    View History <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                 {/* Velocity Card */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 opacity-60">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Weekly Velocity</p>
                    <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">+4</span>
                         <div className="flex gap-1 items-end h-8">
                            <div className="w-1.5 h-3 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                            <div className="w-1.5 h-5 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                            <div className="w-1.5 h-4 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                            <div className="w-1.5 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 font-medium">Average activity for your profile</p>
                </div>

                 {/* Resume Strength Card (Blurred) */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 opacity-40 filter blur-[2px] select-none">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Resume Strength</p>
                    <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">A+</span>
                         <div className="text-right">
                             <span className="text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-1 rounded-full">OPTIMIZED</span>
                         </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
                        Your profile is in the top % of applicants.
                    </p>
                </div>
            </div>
        </div>

        {/* Upgrade Card */}
        <div className="bg-slate-900 dark:bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary rounded-full filter blur-[80px] opacity-20"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-primary">
                    <Sparkles size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Premium Upgrade</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Upgrade to Pro</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Unlock advanced AI match scores, interview coaching, and priority resume audits from industry mentors.
                </p>
                
                <button 
                    onClick={onUpgrade}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                    Learn More
                </button>
            </div>
        </div>
    </div>
  );
};

export default FreeUpsell;