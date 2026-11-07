import React from 'react';
import { Quote, Code, Flame, Shield, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm shadow-xl">
        
        {/* Ambient warm glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            Hakkımızda
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-6 text-balance">
            ONEY SMP Nasıl Doğdu?
          </h2>

          <div className="relative mb-8">
            <Quote className="w-10 h-10 text-amber-500/30 mb-3" />
            <blockquote className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-normal">
              "Selam! Ben <strong className="text-amber-400 font-semibold">Eymen Ayvaz Kiçir (EAK)</strong>. 2002 doğumlu, Minecraft tutkunu bir yazılımcıyım.
              <br /><br />
              ONEY SMP'yi Türk kullanıcılar için kurdum. Piyasada herkesin yapay claim sistemleriyle birbirine dokunamadığı, parayı verenin zırh aldığı sunuculardan sıkılmıştık. Biz de dedik ki: <strong>Sürüm 26.2</strong>, takas yok, yapmacık koruma yok, <strong>yapı yıkmak ve yağma serbest</strong>! Herkes kendi aklıyla üssünü gizlesin, madenini kazsın, klanını kursun ve gerçek hayatta kalmanın tadını çıkarsın."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80 text-xs">
            <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <span className="font-mono text-amber-400 font-bold block mb-1">EAK (Kurucu)</span>
              <span className="text-neutral-300">Eymen Ayvaz Kiçir, 2002 doğumlu yazılımcı ve sunucu geliştiricisi.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <span className="font-mono text-amber-400 font-bold block mb-1">ÖU (Yönetici)</span>
              <span className="text-neutral-300">Ömer Ulukök, sunucu ve topluluk düzeninden sorumlu yönetici.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <span className="font-mono text-rose-400 font-bold block mb-1">Sürüm 26.2</span>
              <span className="text-neutral-300">Takassız ve yapı yıkımının serbest olduğu saf vanilya mücadele.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
