import React from 'react';

interface AddJobModalProps {
  onClose: () => void;
}

const AddJobModal: React.FC<AddJobModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800 premium-border premium-glow">
        <div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add New Job</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Track your next career milestone.</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <span className="material-icons-round">close</span>
            </button>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Job Listing URL</label>
              <div className="relative flex items-center">
                <input className="w-full pl-4 pr-32 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white outline-none" placeholder="https://company.com/careers/job-123" type="url"/>
                <button className="absolute right-2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-blue-700 transition-all" type="button">
                  <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                  Smart-Add
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                <span className="material-icons-round text-[14px]">info</span>
                Paste a URL to automatically fill the fields below
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Job Title</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white outline-none" placeholder="e.g. Senior Product Designer" type="text"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Company</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white outline-none" placeholder="Company Name" type="text"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Salary Range</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 dark:text-white outline-none" placeholder="120,000 - 150,000" type="text"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pipeline Stage</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary appearance-none bg-no-repeat bg-[right_1rem_center] text-slate-900 dark:text-white outline-none">
                    <option>Wishlist</option>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer Received</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Job Description</label>
                <span className="text-[10px] text-premium font-bold uppercase tracking-wider">AI Analysis Ready</span>
              </div>
              <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary resize-none text-slate-900 dark:text-white outline-none" placeholder="Paste the full job description here for an instant match score and resume tips..." rows={6}></textarea>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button onClick={onClose} className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all" type="button">Save Application</button>
              <button onClick={onClose} className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all" type="button">Cancel</button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-[380px] bg-slate-50 dark:bg-slate-800/50 p-8 border-l border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-premium">magic_button</span>
            <span className="text-sm font-bold uppercase tracking-widest text-premium">Match Score Preview</span>
          </div>
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle className="text-slate-200 dark:text-slate-700" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-premium transition-all duration-1000" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="364.4" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-900 dark:text-white">--</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Score</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 italic">Paste a description to see your AI-driven match score</p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Requirements</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="h-2 w-32 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-premium/5 border border-premium/20 rounded-2xl premium-glow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons-round text-premium text-sm">stars</span>
                <span className="text-xs font-bold text-premium uppercase">Premium Insight</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  Our AI will scan your resume against the description to suggest missing keywords and highlight potential interview questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;