import React from 'react';

const Profile: React.FC = () => {
  return (
    <main className="p-6 max-w-7xl mx-auto animate-fadeIn pb-24">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-primary flex items-center justify-center text-3xl font-bold text-white ring-4 ring-white dark:ring-slate-900 shadow-xl overflow-hidden">
              AR
            </div>
            <button className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Alex Rivera</h1>
              <span className="bg-premium/10 text-premium border border-premium/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">stars</span> GOLD MEMBER
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Product Designer & Frontend Enthusiast</p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">location_on</span> San Francisco, CA</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">mail</span> alex.rivera@example.com</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary">link</span> portfolio.design/alex</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200">Edit Profile</button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-base">share</span> Share Profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">description</span> Professional Resume
              </h2>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider italic">Last updated 2 days ago</span>
            </div>
            <div className="p-8">
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group bg-slate-50/50 dark:bg-slate-900/50">
                <div className="h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                </div>
                <p className="text-slate-900 dark:text-white font-semibold">Drop your updated resume here</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">PDF or DOCX, max 5MB. AI will automatically scan for new skills.</p>
                <button className="mt-6 text-sm font-bold text-primary hover:underline">Or browse files from your computer</button>
              </div>
              <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Alex_Rivera_Resume_2024.pdf</p>
                    <p className="text-xs text-slate-500">1.2 MB • Scanned & Optimized</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-500">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-500">
                    <span className="material-symbols-outlined text-xl">download</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-premium">verified</span> Top Skills
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Verified by JobTrack AI based on your experience</p>
              </div>
              <button className="text-sm font-bold text-primary">Manage Skills</button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-premium/30 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Product Strategy</span>
                  <span className="material-symbols-outlined text-premium text-base" title="Verified Expert">auto_awesome</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">UI/UX Design</span>
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Figma</span>
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">React.js</span>
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Tailwind CSS</span>
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-500">Design Systems</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Pending</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold text-slate-500">Agile Methods</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Pending</span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">target</span> Career Goals
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Target Roles</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Senior Product Designer</span>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded">Primary</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Design Systems Engineer</span>
                  </div>
                  <button className="w-full py-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">add</span> Add Role
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Target Locations</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm text-primary">public</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Remote (Worldwide)</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">New York City, NY</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">London, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-slate-900 text-white rounded-3xl border border-slate-800 relative overflow-hidden flex flex-col premium-border premium-glow">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-premium opacity-10 rounded-full blur-3xl"></div>
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-premium">workspace_premium</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-premium">Membership Status</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 premium-gradient-text">Premium Gold</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Your plan expires on Dec 31, 2026. You have active priority support and AI coaching enabled.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Monthly Usage</span>
                  <span className="font-bold">82%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-premium h-full w-[82%]"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button className="bg-white text-slate-900 w-full py-3 rounded-xl font-bold hover:bg-premium hover:text-white transition-all text-sm">Manage Subscription</button>
                <button className="bg-slate-800 text-white w-full py-3 rounded-xl font-bold hover:bg-slate-700 transition-all text-sm border border-slate-700">View Invoices</button>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Account Settings</h2>
            </div>
            <div className="p-4 space-y-1">
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">lock</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Privacy & Security</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">notifications</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notifications</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">language</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Connected Apps</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">help</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Help & Support</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
              <div className="h-px bg-slate-100 dark:bg-slate-700 my-2"></div>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-500">logout</span>
                  <span className="text-sm font-medium text-red-500">Sign Out</span>
                </div>
              </a>
            </div>
          </section>
          <section className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">AI Coach Advice</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Profile Strength: 94%</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "Alex, adding a <b>Case Study</b> link to your target roles could increase your response rate by up to 22% for Senior roles."
            </p>
            <button className="mt-4 text-sm font-bold text-primary flex items-center gap-1">Update Portfolio <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profile;