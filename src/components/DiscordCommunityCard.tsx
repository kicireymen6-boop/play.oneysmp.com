import React, { useState } from 'react';
import { Users, Sparkles, Check, Flame } from 'lucide-react';
import { SERVER_IP, SERVER_VERSION, MAX_PLAYERS } from '../services/mcStatus';
import { copyServerAddress } from '../utils/copyHelper';

interface DiscordCommunityCardProps {
  onCopySuccess: () => void;
}

export const DiscordCommunityCard: React.FC<DiscordCommunityCardProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyServerAddress(SERVER_IP);
    if (success) {
      setCopied(true);
      onCopySuccess();
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
              Birlikte Daha Güçlüyüz
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              1881 Kişilik ONEY SMP Topluluğuna Katılın
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
              Sürüm 26.2 güncellemeleri, klan savaşları, serbest yağma taktikleri ve yetkililerimiz (EAK & ÖU) ile doğrudan iletişim için hemen aramıza katılın.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <Users className="w-4 h-4 text-amber-400" />
                Maksimum {MAX_PLAYERS} Oyuncu Slotu
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-rose-300">
                <Flame className="w-4 h-4 text-rose-500" />
                Yapı Yıkımı & Yağma Serbest
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleCopy}
              className={`px-6 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-lg shadow-amber-950/40'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>IP Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Hemen Oyuna Katıl ({SERVER_IP})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
