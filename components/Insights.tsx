import React from 'react';

const Insights: React.FC = () => {
  return (
    <main className="p-6 max-w-[1600px] mx-auto animate-fadeIn pb-24">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Insights & Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Advanced performance tracking and market benchmarking.</p>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white">Last 30 Days</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">90 Days</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Yearly</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Application Velocity</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Pipeline growth over the last 30 days</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="text-slate-700 dark:text-slate-300">Applications</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-premium"></span>
                <span className="text-slate-700 dark:text-slate-300">Interviews</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full flex items-end gap-1 h-full">
                <div className="bg-primary/20 w-1/2 rounded-t-md h-[40%]"></div>
                <div className="bg-premium/40 w-1/2 rounded-t-md h-[10%]"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">W1</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full flex items-end gap-1 h-full">
                <div className="bg-primary/20 w-1/2 rounded-t-md h-[65%]"></div>
                <div className="bg-premium/40 w-1/2 rounded-t-md h-[25%]"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">W2</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full flex items-end gap-1 h-full">
                <div className="bg-primary w-1/2 rounded-t-md h-[85%]"></div>
                <div className="bg-premium w-1/2 rounded-t-md h-[45%]"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">W3</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full flex items-end gap-1 h-full">
                <div className="bg-primary/20 w-1/2 rounded-t-md h-[60%]"></div>
                <div className="bg-premium/40 w-1/2 rounded-t-md h-[20%]"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">W4</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 premium-border premium-glow">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-premium">leaderboard</span>
            Conversion Rates
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400">App to Interview</span>
                <span className="font-bold">18.5%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{width: '18.5%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400">Interview to Offer</span>
                <span className="font-bold">4.2%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-premium h-full rounded-full" style={{width: '4.2%'}}></div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Improvement</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">+12.4% vs last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Avg Match Score</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">84%</span>
            <span className="text-xs text-emerald-500 font-bold mb-1">+5%</span>
          </div>
          <div className="flex gap-1 items-end h-8">
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-4 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-6 rounded-sm"></div>
            <div className="flex-1 bg-primary h-8 rounded-sm"></div>
            <div className="flex-1 bg-primary/60 h-7 rounded-sm"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Response Time</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">4.2d</span>
            <span className="text-xs text-emerald-500 font-bold mb-1">-1.2d</span>
          </div>
          <div className="flex gap-1 items-end h-8">
            <div className="flex-1 bg-primary h-8 rounded-sm"></div>
            <div className="flex-1 bg-primary/60 h-6 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-5 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-4 rounded-sm"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Offer Rate</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">2.1%</span>
            <span className="text-xs text-slate-400 font-bold mb-1">Stable</span>
          </div>
          <div className="flex gap-1 items-end h-8">
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-5 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-5 rounded-sm"></div>
            <div className="flex-1 bg-primary h-5 rounded-sm"></div>
            <div className="flex-1 bg-primary/60 h-5 rounded-sm"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Market Rank</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">Top 8%</span>
            <span className="text-xs text-premium font-bold mb-1">Elite</span>
          </div>
          <div className="flex gap-1 items-end h-8">
            <div className="flex-1 bg-premium h-8 rounded-sm"></div>
            <div className="flex-1 bg-premium/60 h-7 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-3 rounded-sm"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-2 rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Salary Benchmarking</h3>
              <p className="text-sm text-slate-500">Your current offers vs industry standards (Junior Roles)</p>
            </div>
            <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">payments</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative pt-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                <span>Entry Level</span>
                <span>$120k</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full relative">
                <div className="absolute inset-y-0 left-1/4 right-1/4 bg-slate-200 dark:bg-slate-600 rounded-full border-x-2 border-white dark:border-slate-800"></div>
                <div className="absolute -top-2 left-[65%] transform -translate-x-1/2 flex flex-col items-center">
                  <div className="h-8 w-1 bg-premium"></div>
                  <span className="mt-1 text-[10px] font-bold bg-premium text-white px-2 py-0.5 rounded">YOUR RANGE</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500">
                <span>$45k</span>
                <span>Market Median: $72k</span>
                <span>$120k</span>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 mt-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="material-symbols-outlined text-premium text-sm align-middle mr-1">auto_awesome</span>
                Insights: Your profile is currently command a <b>15% premium</b> over the market median due to your <i>Specialized AI</i> project portfolio.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Skill Gap Analysis</h3>
              <p className="text-sm text-slate-500">Matching your profile to target job descriptions</p>
            </div>
            <div className="h-10 w-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-premium">
              <span className="material-symbols-outlined">psychology</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
              <p className="text-xs font-bold text-emerald-600 uppercase mb-3">Top Strengths</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 rounded-md">UI/UX Design</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 rounded-md">React</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 rounded-md">Figma</span>
              </div>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl">
              <p className="text-xs font-bold text-amber-600 uppercase mb-3">Top Gaps</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 rounded-md">Unit Testing</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 rounded-md">AWS Basics</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              Generate Upskilling Plan
            </button>
          </div>
        </div>
      </div>
      <button className="fixed bottom-6 right-6 bg-premium text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold hover:scale-105 transition-transform z-40">
        <span className="material-symbols-outlined">smart_toy</span>
        AI Insights
      </button>
    </main>
  );
};

export default Insights;