import React from 'react';
import { Terminal, Shield, CheckCircle } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="ekip" className="py-16 bg-neutral-950/60 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            Yönetim
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            ONEY SMP Yetkilileri: EAK & ÖU
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Sunucunun teknik altyapısı ve düzeninden sorumlu ekip.
          </p>
        </div>

        {/* Minimalist EAK & ÖU Cards (No avatar photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* EAK Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-extrabold text-base flex items-center justify-center shrink-0">
                EAK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">EAK</h3>
                  <span className="text-[11px] font-mono text-neutral-400">(Eymen Ayvaz Kiçir)</span>
                </div>
                <p className="text-xs text-amber-400/90 font-medium flex items-center gap-1.5 mt-0.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Geliştirici & Kurucu · d. 2002
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
              Aktif
            </span>
          </div>

          {/* ÖU Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-extrabold text-base flex items-center justify-center shrink-0">
                ÖU
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">ÖU</h3>
                  <span className="text-[11px] font-mono text-neutral-400">(Ömer Ulukök)</span>
                </div>
                <p className="text-xs text-blue-400/90 font-medium flex items-center gap-1.5 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                  Yönetici & Moderasyon
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
              Aktif
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
