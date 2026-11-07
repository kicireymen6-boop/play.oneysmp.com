import React, { useState } from 'react';
import { Copy, Check, Compass, Users, ChevronDown, Flame, Ban } from 'lucide-react';
import { copyServerAddress } from '../utils/copyHelper';
import { SERVER_IP, SERVER_VERSION, MAX_PLAYERS } from '../services/mcStatus';
import { ServerStatusData } from '../types';

interface HeroProps {
  status: ServerStatusData | null;
  onCopySuccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ status, onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyServerAddress(SERVER_IP);
    if (success) {
      setCopied(true);
      onCopySuccess();
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const isOnline = status?.online ?? true;
  const playerCount = status?.players.online ?? 42;
  const maxPlayers = status?.players.max || MAX_PLAYERS;

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-neutral-800">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_minecraft_smp_landscape_1794046139740.jpg"
          alt="ONEY SMP Minecraft Sunucu Manzarası"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-neutral-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-transparent to-neutral-950/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Version & Status pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 backdrop-blur-md border border-neutral-700/60 text-xs font-medium text-neutral-300 mb-6 shadow-lg shadow-black/40">
          <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400 shadow-sm shadow-emerald-400/80' : 'bg-rose-500'}`} />
          <span className="text-neutral-200">
            {isOnline ? 'Sunucu Aktif' : 'Bakımda'}
          </span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <span className="text-amber-400 font-mono font-bold">
            Sürüm: {SERVER_VERSION}
          </span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <span className="font-mono tabular-nums text-emerald-400 font-semibold">
            {playerCount} / {MAX_PLAYERS} Kapasite
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 text-balance max-w-4xl drop-shadow-md">
          Saf Hayatta Kalma: <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">ONEY SMP</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mb-8 leading-relaxed text-balance">
          Takas yok, hile yok! <strong>Yapı yıkmak ve yağma serbesttir.</strong> Sürüm 26.2 ve 1881 kişilik devasa oyuncu kapasitesiyle Türk oyuncuların yeni hayatta kalma üssü.
        </p>

        {/* Interactive Server IP Bar */}
        <div className="w-full max-w-xl bg-neutral-900/90 backdrop-blur-lg border border-neutral-700/80 rounded-2xl p-2 sm:p-2.5 shadow-2xl shadow-black/80 flex flex-col sm:flex-row items-center gap-2.5 mb-6 group transition-all hover:border-amber-500/50">
          <div className="flex-1 flex items-center gap-3 px-3.5 py-2 w-full justify-between sm:justify-start">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium font-mono shrink-0">
              IP:
            </span>
            <code className="text-base sm:text-lg font-mono font-bold text-amber-300 tracking-wide select-all truncate">
              {SERVER_IP}
            </code>
          </div>

          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg ${
              copied
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/60 ring-2 ring-emerald-400'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 shadow-amber-950/40 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span className="whitespace-nowrap">IP Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="whitespace-nowrap">Tıkla ve Kopyala</span>
              </>
            )}
          </button>
        </div>

        {/* Unboxed Metadata Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-400 mb-8 max-w-2xl font-medium">
          <span className="text-amber-400 font-bold font-mono">Sürüm: 26.2</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-rose-400 font-bold flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 inline text-rose-500" /> Yapı Yıkmak Serbest
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">Takas Yok</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-emerald-400 font-bold font-mono">1881 Oyuncu Kapasitesi</span>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#nasil-katilirim"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-semibold transition-all hover:border-neutral-600"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>26.2 Nasıl Katılırım?</span>
          </a>
          <a
            href="#kurallar"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-semibold transition-all hover:border-neutral-600"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>Kurallar ve Ekip (EAK / ÖU)</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#durum"
          className="mt-14 inline-flex flex-col items-center gap-1 text-neutral-400 hover:text-amber-400 text-xs transition-colors"
        >
          <span>Sunucu detaylarını incele</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
