import React, { useState } from 'react';
import { Swords, Copy, Check, Heart } from 'lucide-react';
import { SERVER_IP, SERVER_VERSION, MAX_PLAYERS } from '../services/mcStatus';
import { copyServerAddress } from '../utils/copyHelper';

interface FooterProps {
  onCopySuccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopySuccess }) => {
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
    <footer className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-850">
          
          {/* Brand & Server Summary */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-neutral-950">
                <Swords className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span className="font-extrabold tracking-wide">ONEY SMP</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
              Türk Minecraft topluluğuna özel; yapı yıkmanın serbest olduğu, takassız ve hilesiz {MAX_PLAYERS} kişilik saf hayatta kalma sunucusu (Sürüm {SERVER_VERSION}).
            </p>
            <div className="inline-flex items-center gap-2 p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs">
              <code className="font-mono text-amber-300 font-semibold px-2">{SERVER_IP}</code>
              <button
                onClick={handleCopy}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  copied ? 'bg-emerald-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                }`}
              >
                {copied ? 'Kopyalandı' : 'Kopyala'}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Hızlı Menü
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#durum" className="hover:text-amber-400 transition-colors">
                  Canlı Durum (1881 Slot)
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-amber-400 transition-colors">
                  Sunucu Mekanikleri
                </a>
              </li>
              <li>
                <a href="#nasil-katilirim" className="hover:text-amber-400 transition-colors">
                  Nasıl Katılırım (26.2)?
                </a>
              </li>
              <li>
                <a href="#hakkimizda" className="hover:text-amber-400 transition-colors">
                  Hakkımızda & Hikaye
                </a>
              </li>
              <li>
                <a href="#ekip" className="hover:text-amber-400 transition-colors">
                  Yönetim (EAK & ÖU)
                </a>
              </li>
              <li>
                <a href="#kurallar" className="hover:text-amber-400 transition-colors">
                  Oyun Kuralları
                </a>
              </li>
            </ul>
          </div>

          {/* Ekip: EAK & ÖU */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Yetkili Ekip (EAK & ÖU)
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 mb-4 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">[ EAK ]</span>
                <span className="text-white font-semibold">Eymen Ayvaz Kiçir</span>
                <span className="text-neutral-500">(Geliştirici / d. 2002)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">[ ÖU ]</span>
                <span className="text-white font-semibold">Ömer Ulukök</span>
                <span className="text-neutral-500">(Yönetici)</span>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Altyapı, sunucu çekirdeği ve moderasyon ONEY SMP yetkilileri EAK & ÖU tarafından sağlanmaktadır.
            </p>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center md:text-left">
            <p>© 2026 ONEY SMP. Tüm Telif ve Mülkiyet Hakları Saklıdır.</p>
            <p className="text-[11px] text-neutral-600 mt-1">
              ONEY SMP, bağımsız bir oyuncu sunucusudur ve Mojang AB veya Microsoft ile hiçbir resmi bağı bulunmamaktadır.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
            <span>Sürüm: 26.2 · 1881 Slot · EAK & ÖU</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
