import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { SERVER_IP } from '../services/mcStatus';

interface CopyToastProps {
  show: boolean;
}

export const CopyToast: React.FC<CopyToastProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-900 border border-emerald-500/50 shadow-2xl shadow-emerald-950/60 text-white backdrop-blur-md">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>Sunucu Adresi Kopyalandı!</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-[11px] font-mono text-emerald-400 font-medium">
            {SERVER_IP}
          </div>
        </div>
      </div>
    </div>
  );
};
