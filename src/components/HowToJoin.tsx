import React, { useState } from 'react';
import { Copy, Check, Gamepad2, PlayCircle, Network, Flame, Users } from 'lucide-react';
import { copyServerAddress } from '../utils/copyHelper';
import { SERVER_IP, SERVER_VERSION, MAX_PLAYERS } from '../services/mcStatus';

interface HowToJoinProps {
  onCopySuccess: () => void;
}

export const HowToJoin: React.FC<HowToJoinProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyServerAddress(SERVER_IP);
    if (success) {
      setCopied(true);
      onCopySuccess();
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const steps = [
    {
      step: '01',
      title: 'Sürüm 26.2 ile Başlat',
      description: `Minecraft Java Edition başlatıcınızdan 26.2 (1.26.2) sürümünü seçin ve oyunu açın.`,
      icon: Gamepad2,
    },
    {
      step: '02',
      title: 'Çok Oyunculu Menüsü',
      description: 'Ana menüden "Çok Oyunculu" (Multiplayer) bölümüne geçip ardından "Sunucu Ekle" seçeneğini tıklayın.',
      icon: Network,
    },
    {
      step: '03',
      title: 'Sunucu Adresini Gir',
      description: 'Sunucu Adı: ONEY SMP, Sunucu Adresi: oneysmp.mangoohost.live olarak doldurun.',
      icon: Copy,
      hasCopy: true,
    },
    {
      step: '04',
      title: '1881 Kişilik Dünyaya Katıl!',
      description: 'Sunucuya bağlanın! Unutmayın: Yapı yıkmak serbesttir, üssünüzü gizli tutun ve tuzaklarınızı kurun.',
      icon: PlayCircle,
    },
  ];

  return (
    <section id="nasil-katilirim" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
          Hızlı Bağlantı Kılavuzu
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
          Sürüm 26.2 ile Nasıl Katılırım?
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2">
          1881 oyuncu kapasiteli ONEY SMP dünyasına bağlanmak için 4 basit adım.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-500/40 font-mono group-hover:text-amber-500 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.hasCopy && (
                <div className="mt-5 pt-3 border-t border-neutral-800">
                  <button
                    onClick={handleCopy}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>IP Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Warning & Info banner */}
      <div className="mt-10 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-neutral-300">
          <Flame className="w-5 h-5 text-rose-500 shrink-0" />
          <span>
            <strong>Dikkat:</strong> Sunucumuzda yapı yıkmak ve yağma serbesttir, takas sistemi yoktur. Eşyalarınızı ve üssünüzü güvene almayı unutmayın!
          </span>
        </div>
        <div className="font-mono text-xs text-amber-400 font-semibold shrink-0">
          1881 Slot · Sürüm 26.2
        </div>
      </div>
    </section>
  );
};
