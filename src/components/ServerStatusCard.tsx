import React, { useState } from 'react';
import { RefreshCw, Server, Users, Shield, Terminal, Check, Copy, Flame, Ban } from 'lucide-react';
import { ServerStatusData } from '../types';
import { SERVER_IP, DEFAULT_PORT, SERVER_VERSION, MAX_PLAYERS } from '../services/mcStatus';
import { copyServerAddress } from '../utils/copyHelper';

interface ServerStatusCardProps {
  status: ServerStatusData | null;
  loading: boolean;
  onRefresh: () => void;
  onCopySuccess: () => void;
}

export const ServerStatusCard: React.FC<ServerStatusCardProps> = ({
  status,
  loading,
  onRefresh,
  onCopySuccess,
}) => {
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
  const onlineCount = status?.players.online ?? 42;
  const maxCount = MAX_PLAYERS;
  const percentage = Math.min(100, Math.round((onlineCount / (maxCount || 1)) * 100));

  return (
    <section id="durum" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            Canlı Telemetri
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Sunucu Durumu & 1881 Oyuncu Kapasitesi
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Yapı yıkmanın serbest olduğu, takassız ONEY SMP sunucusuna (Sürüm 26.2) hemen katılın.
          </p>
        </div>

        <button
          onClick={onRefresh}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-xs font-semibold text-neutral-200 hover:text-white transition-all disabled:opacity-50 cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
          <span>{loading ? 'Sorgulanıyor...' : 'Durumu Yenile'}</span>
        </button>
      </div>

      {/* Main Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Core Connectivity */}
        <div className="lg:col-span-2 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{SERVER_IP}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${
                    isOnline ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {isOnline ? 'ONLINE' : 'BAKIMDA'}
                  </span>
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  Port: {DEFAULT_PORT} · Sürüm: <span className="text-amber-300 font-bold">26.2 (1.26.2)</span> · Slot: <span className="text-emerald-400 font-bold">1881</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                  : 'bg-neutral-800 border-neutral-700 hover:border-amber-500 text-neutral-300 hover:text-white'
              }`}
              title="Sunucu IP'sini Kopyala"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* MOTD / Welcome Message */}
          <div className="py-4 border-b border-neutral-800">
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 block mb-1">
              Sunucu Bildirimi (MOTD)
            </span>
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 font-mono text-xs text-amber-200/90 leading-relaxed">
              {status?.motd.clean || 'ONEY SMP » Sürüm 26.2 | Yapı Yıkmak Serbest | Takas Yok | 1881 Oyuncu Kapasitesi!'}
            </div>
          </div>

          {/* Player Capacity Bar (Max 1881) */}
          <div className="pt-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Aktif Oyuncular / Kapasite
              </span>
              <span className="font-mono tabular-nums text-white font-bold">
                <span className="text-emerald-400">{onlineCount}</span> / <span className="text-amber-400">1881</span> Kişi
              </span>
            </div>
            <div className="w-full h-2.5 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(3, Math.min(100, Math.round((onlineCount / 1881) * 100)))}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 2: Quick Specs / Technical Telemetry */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-mono mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-500" />
              Sunucu Özellikleri
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">Maksimum Kapasite</span>
                <span className="font-mono text-amber-400 font-bold text-sm">
                  1881 Oyuncu
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">Sürüm</span>
                <span className="font-mono text-white font-bold">
                  26.2 (1.26.2)
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">Yapı Yıkımı (Grief)</span>
                <span className="font-mono text-rose-400 font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3 text-rose-500" /> SERBEST
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">Takas Sistemi</span>
                <span className="font-mono text-neutral-300 font-semibold flex items-center gap-1">
                  <Ban className="w-3 h-3 text-neutral-500" /> Yok (Saf Survival)
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <span className="text-neutral-400">Hile Koruması</span>
                <span className="font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <Shield className="w-3 h-3" /> X-Ray / Fly Yasak
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800">
            <a
              href="#nasil-katilirim"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
            >
              26.2 Bağlantı Adımları
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
