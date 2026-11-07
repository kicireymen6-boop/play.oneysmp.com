import React from 'react';
import { Flame, ShieldAlert, Swords, Zap, Ban, Skull } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="ozellikler" className="py-20 bg-neutral-950/40 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            Oyun Kuralları & Mekanikleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            ONEY SMP: Saf ve Tavizsiz Hayatta Kalma
          </h2>
          <p className="text-base text-neutral-400 mt-2 text-balance">
            Yapay korumaların olmadığı, yapı yıkmanın serbest olduğu ve takasın bulunmadığı gerçek bir Minecraft macerası (Sürüm 26.2).
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Large Featured Card - Yapı Yıkmak & Yağma Serbest */}
          <div className="md:col-span-2 bg-neutral-900/80 border border-rose-900/40 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-rose-500/60 transition-all">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src="/src/assets/images/minecraft_castle_community_1794046140810.jpg"
                alt="Minecraft Survival Kaleler ve Mücadele"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-rose-950/90 backdrop-blur-md border border-rose-700 text-xs font-mono font-bold text-rose-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                YAPI YIKMAK VE YAĞMA SERBEST
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2.5 text-rose-400 mb-2">
                <Skull className="w-5 h-5 text-rose-500" />
                <h3 className="text-xl font-bold text-white">Üssünü Koru, Düşmanını Yık!</h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Sunucumuzda yapay claim veya dokunulmazlık engeli yoktur. Herkes haritada bulduğu yapıları yıkabilir, yağmalayabilir ve tuzak kurabilir. Üssünüzü gizlemek, yer altına inşa etmek ve savunmak tamamen sizin stratejinize kalmıştır.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-400 font-mono">
                <span className="text-rose-400 font-bold">Kurallar:</span>
                <span>Claim engeli yok</span>
                <span aria-hidden="true">·</span>
                <span>Kuşatma serbest</span>
                <span aria-hidden="true">·</span>
                <span>Tuzak serbest</span>
              </div>
            </div>
          </div>

          {/* Card 2: Takas Yok - Pure Survival */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <Ban className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Takas Yok: Kendi Emeğinle Yaşa
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Pazar, sanal market veya takas sistemi bulunmaz. Her zırhı, elması ve silahı kendi bileğinizin hakkıyla madenlerden çıkarır ve üretirsiniz.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              Sıfır ekonomi hilesi, saf vanilya hayatta kalma zevki.
            </div>
          </div>

          {/* Card 3: Anti-Cheat (X-Ray Ban) */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Hileye Asla Geçit Yok
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Yapı yıkmak serbesttir ancak X-Ray, KillAura, Fly gibi hilelere sıfır tolerans gösterilir. Herkes adil ve eşit şartlarda yarışır.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              Gelişmiş hile koruması ve anlık log incelemesi.
            </div>
          </div>

          {/* Card 4: Sürüm 26.2 / 1.26.2 */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Sürüm: 26.2 (1.26.2)
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                En güncel Minecraft sürümü 26.2 desteğiyle son bloklar, eşyalar ve akıcı oyun motoruyla oynamanın tadını çıkarın.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              Java Edition 26.2 tam uyumluluk.
            </div>
          </div>

          {/* Card 5: PvP & Klan Savaşları */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5">
                <Swords className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Klanlar ve İttifaklar
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Arkadaşlarınızla gizli üsler inşa edin, düşman klanların yerlerini tespit edin ve koordineli baskınlarla zafere ulaşın.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              Klan kurma, gizli iletişim ve stratejik ittifaklar.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
