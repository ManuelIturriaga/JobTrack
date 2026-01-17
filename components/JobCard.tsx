import React from 'react';
import { Job } from '../types';
import { Clock, Star, Calendar, CheckCircle } from 'lucide-react';

interface JobCardProps {
  job: Job;
  isPremium: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, isPremium }) => {
  const isTopMatch = job.tags?.includes('TOP MATCH');

  return (
    <div className={`bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden ${isTopMatch && isPremium ? 'premium-border shadow-premium border-l-4 border-l-premium' : ''}`}>
      
      {isTopMatch && isPremium && (
        <div className="absolute top-0 right-0 p-1 bg-premium text-white text-[8px] font-bold px-2 rounded-bl-lg">
          TOP MATCH
        </div>
      )}

      {job.tags?.includes('NEW OFFER') && (
        <div className="absolute top-0 right-0 p-1 bg-emerald-500 text-white text-[8px] font-bold px-2 rounded-bl-lg">
          NEW OFFER
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <div className="h-10 w-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center font-bold text-slate-400">
          {job.logoLetter}
        </div>
        {!isTopMatch && !job.tags?.includes('NEW OFFER') && (
           <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
               job.tags?.includes('PENDING') ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' : 
               job.tags?.includes('ROUND 1') || job.tags?.includes('ROUND 2') ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600' :
               'bg-slate-100 dark:bg-slate-700 text-slate-500'
           }`}>
            {job.tags && job.tags.length > 0 ? job.tags[0] : job.level}
           </span>
        )}
      </div>

      <h4 className={`font-bold text-slate-900 dark:text-white group-hover:${job.status === 'offers' ? 'text-emerald-600' : 'text-primary'} transition-colors`}>
        {job.role}
      </h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        {job.company} • {job.location}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-1">
            {job.status === 'offers' ? (
                 <div className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle size={14} />
                    <span className="text-xs font-bold">{job.salary}</span>
                 </div>
            ) : job.nextStep ? (
                <div className="flex items-center gap-1 text-primary">
                    <Calendar size={14} />
                    <span className="text-xs font-semibold">{job.nextStep}</span>
                </div>
            ) : (
                <span className="text-[10px] text-slate-400">Added {job.addedAgo}</span>
            )}
        </div>

        {/* Match Score Visibility Logic */}
        <div className={`flex items-center gap-1 ${isPremium ? 'text-premium' : 'text-slate-300 dark:text-slate-600'}`}>
          <Star size={14} fill={isPremium ? "currentColor" : "none"} />
          {isPremium ? (
             <span className="text-xs font-bold">{job.matchScore}% Match</span>
          ) : (
             <span className="text-[10px] font-medium">Match ?</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;