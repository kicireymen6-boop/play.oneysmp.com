import React from 'react';
import { ShieldAlert, Flame, Ban, MessageCircleOff, AlertOctagon, HelpCircle } from 'lucide-react';

export const RulesSection: React.FC = () => {
  const rules = [
    {
      id: 1,
      title: 'Hile ve X-Ray Kesinlikle Yasaktır',
      desc: 'X-Ray, KillAura, Fly, Speed, Baritone veya haksız avantaj sağlayan tüm hileli istemciler yasaktır. Tespit edilenler uyarılmaksızın sınırsız banlanır.',
      category: 'Hile Koruması',
      badgeColor: 'text-rose-400',
      badge: 'Sınırsız Ban',
      icon: ShieldAlert,
    },
    {
      id: 2,
      title: 'Yapı Yıkımı ve Yağma SERBESTTİR',
      desc: 'ONEY SMP bir anarşi/saf hayatta kalma sunucusudur. Bulduğunuz yapıları yıkabilir, üsleri yağmalayabilir ve düşman kalelerini patlatabilirsiniz. Yapıların yıkılması kural ihlali DEĞİLDİR!',
      category: 'Oyun Mekaniği',
      badgeColor: 'text-emerald-400',
      badge: 'Tamamen Serbest',
      icon: Flame,
    },
    {
      id: 3,
      title: 'Takas Sistemi Yoktur',
      desc: 'Sunucumuzda takas, pazar veya sanal ticaret eklentisi bulunmaz. Her oyuncu kendi madenini kendisi kazar, zırhını kendisi üretir veya savaşarak elde eder.',
      category: 'Ekonomi / Saf Survival',
      badgeColor: 'text-amber-400',
      badge: 'Takas Yok',
      icon: Ban,
    },
    {
      id: 4,
      title: 'Saygılı Sohbet ve Küfür Yasağı',
      desc: 'Küfür, hakaret, aşağılama, ailevi değerlere saldırı ve taciz kesinlikle yasaktır. Yapı yıkmak serbest olsa da sohbette saygı esastır.',
      category: 'Topluluk',
      badgeColor: 'text-rose-400',
      badge: 'Mute / Susturma',
      icon: MessageCircleOff,
    },
    {
      id: 5,
      title: 'Reklam ve Spam Yasağı',
      desc: 'Genel sohbetten veya özel mesajla başka Minecraft sunucularının, Discord adreslerinin veya harici platformların reklamını yapmak yasaktır.',
      category: 'Güvenlik',
      badgeColor: 'text-rose-400',
      badge: 'Kalıcı Ban',
      icon: AlertOctagon,
    },
    {
      id: 6,
      title: 'Açık (Bug/Glitch) Kötüye Kullanımı',
      desc: 'Oyun içi eşya kopyalama veya yazılımsal açıkları kötüye kullanmak yasaktır. Açıkları yetkililere (EAK & ÖU) bildiren oyuncular ödüllendirilir.',
      category: 'Dürüstlük',
      badgeColor: 'text-amber-400',
      badge: 'Raporla',
      icon: HelpCircle,
    },
  ];

  return (
    <section id="kurallar" className="py-24 bg-neutral-950/40 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">
            Kurallar & Standartlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            ONEY SMP Sunucu Kuralları
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            1881 kişilik dev sunucumuzda herkes için net ve adil kurallar.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.id}
                className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      Kural #{rule.id}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-500">{rule.category}</span>
                  <span className={`font-bold ${rule.badgeColor}`}>{rule.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500 font-mono">
          Sürüm: 26.2 · 1881 Oyuncu Kapasitesi · IP: oneysmp.mangoohost.live
        </div>

      </div>
    </section>
  );
};
