import React, { useState } from 'react';
import { Check, Sparkles, X } from 'lucide-react';

interface BillingModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const BillingModal: React.FC<BillingModalProps> = ({ onClose, onConfirm }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const benefits = [
    "Unlimited Job Applications Tracking",
    "AI Resume Scanner & Keyword Optimization",
    "Interview Prep with AI Coach",
    "Priority Support from Industry Mentors",
    "Market Salary Benchmarking",
    "LinkedIn Network Import"
  ];

  return (
    <div className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Left Side: Visual & Benefits */}
        <div className="w-full md:w-2/5 bg-slate-900 text-white p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-premium opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                    <Sparkles className="text-premium" size={24} />
                </div>
                <span className="font-bold text-lg tracking-wide">JobTrack <span className="text-premium">GOLD</span></span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 leading-tight">Accelerate Your <br/><span className="premium-gradient-text">Career Growth</span></h2>
            <p className="text-slate-400 text-sm mb-8">Join 50,000+ professionals who landed their dream jobs 3x faster.</p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 bg-emerald-500/20 p-0.5 rounded-full">
                    <Check size={14} className="text-emerald-400" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
             <div className="flex -space-x-3 mb-3">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                 ))}
             </div>
             <p className="text-xs text-slate-400">"The AI insights completely changed my interview game." — <span className="text-white font-bold">Sarah J.</span></p>
          </div>
        </div>

        {/* Right Side: Pricing & Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 bg-white dark:bg-slate-900 relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X size={24} />
          </button>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Choose your plan</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Cancel anytime. 14-day money-back guarantee.</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex relative">
               <button 
                 onClick={() => setBillingCycle('monthly')}
                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}
               >
                 Monthly
               </button>
               <button 
                 onClick={() => setBillingCycle('yearly')}
                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}
               >
                 Yearly <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md">-30%</span>
               </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="border-2 border-premium/30 bg-premium/5 rounded-2xl p-6 mb-8 relative premium-glow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-premium text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
              </div>
              <div className="flex justify-between items-center mb-4">
                  <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">JobTrack Gold</h4>
                      <p className="text-sm text-slate-500">Full access to all features</p>
                  </div>
                  <div className="text-right">
                      <div className="flex items-end gap-1">
                          <span className="text-3xl font-bold text-slate-900 dark:text-white">
                              ${billingCycle === 'yearly' ? '12' : '19'}
                          </span>
                          <span className="text-slate-500 mb-1">/mo</span>
                      </div>
                      {billingCycle === 'yearly' && (
                          <p className="text-xs text-emerald-600 font-bold">Billed $144 yearly</p>
                      )}
                  </div>
              </div>
              <div className="h-px bg-premium/20 w-full mb-4"></div>
              <button 
                onClick={onConfirm}
                className="w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                  <Sparkles size={18} />
                  {billingCycle === 'yearly' ? 'Start Annual Plan' : 'Start Monthly Plan'}
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">Secure payment via Stripe. Auto-renews.</p>
          </div>

          <div className="text-center">
              <button onClick={onClose} className="text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Continue with Free Plan
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BillingModal;