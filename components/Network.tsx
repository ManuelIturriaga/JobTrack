import React from 'react';

const Network: React.FC = () => {
  return (
    <main className="p-6 max-w-[1600px] mx-auto animate-fadeIn pb-24">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Networking CRM</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your strategic connections and referral pipeline.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">link</span> Import LinkedIn
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">person_add</span> Add Contact
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">coffee</span> Upcoming Chats
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full uppercase">Today</span>
                  <span className="text-xs text-slate-400">14:00</span>
                </div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">Jordan Smith</p>
                <p className="text-xs text-slate-500">Sr. Designer at Acme Corp</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-500 px-2 py-1 rounded-full uppercase">Thu, 12 Oct</span>
                  <span className="text-xs text-slate-400">10:30</span>
                </div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">Sarah Chen</p>
                <p className="text-xs text-slate-500">Tech Lead at FinStream</p>
              </div>
            </div>
            <button className="w-full mt-4 text-sm font-semibold text-primary py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              View Calendar
            </button>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-premium opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-premium">auto_awesome</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-premium">AI Insights</span>
              </div>
              <h3 className="text-md font-bold mb-2">Network Health</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">You haven't reached out to 3 key contacts in over 30 days. Your outreach velocity is down 12%.</p>
              <button className="text-xs font-bold text-white underline decoration-premium underline-offset-4">Get outreach templates</button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[240px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search by name, company, or role..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">sort</span> Sort
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer group premium-border premium-glow">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-lg ring-2 ring-premium/20">
                  JS
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-premium uppercase tracking-widest">Strength</span>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-3 h-1.5 bg-premium rounded-full"></div>
                    <div className="w-3 h-1.5 bg-premium rounded-full"></div>
                    <div className="w-3 h-1.5 bg-premium rounded-full"></div>
                    <div className="w-3 h-1.5 bg-premium rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Jordan Smith</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Senior Product Designer</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">business</span>
                <span>Acme Corp</span>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">history</span>
                  <span className="text-xs text-slate-500">2 days ago</span>
                </div>
                <button className="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-lg">
                  SC
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strength</span>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Sarah Chen</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Engineering Lead</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">business</span>
                <span>FinStream</span>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">history</span>
                  <span className="text-xs text-slate-500">12 days ago</span>
                </div>
                <button className="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-lg">
                  MW
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strength</span>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-3 h-1.5 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Marcus Wright</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Talent Acquisition</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">business</span>
                <span>Stellar Apps</span>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-red-400">priority_high</span>
                  <span className="text-xs text-red-500 font-medium">Over 30 days ago</span>
                </div>
                <button className="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-lg">
                  EL
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strength</span>
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Emily Lawson</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Head of Growth</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">business</span>
                <span>Nexus AI</span>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">history</span>
                  <span className="text-xs text-slate-500">5 days ago</span>
                </div>
                <button className="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <h4 className="font-bold text-slate-700 dark:text-slate-300">Expand Your Network</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">Connecting with people at target companies increases your interview chances by 3x.</p>
            <button className="text-primary font-bold text-sm hover:underline">Browse Company Directories</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Network;