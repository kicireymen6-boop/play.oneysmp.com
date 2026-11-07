import React, { useState } from 'react';
import { Copy, Check, Menu, X, Swords } from 'lucide-react';
import { copyServerAddress } from '../utils/copyHelper';
import { SERVER_IP } from '../services/mcStatus';

interface NavbarProps {
  onCopySuccess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopy = async () => {
    const success = await copyServerAddress(SERVER_IP);
    if (success) {
      setCopied(true);
      onCopySuccess();
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-neutral-950 shadow-sm shadow-amber-500/20">
            <Swords className="w-4 h-4 stroke-[2.5]" />
          </span>
          <span className="font-extrabold tracking-wide">ONEY SMP</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#durum" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Sunucu Durumu
          </a>
          <a href="#ozellikler" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Özellikler
          </a>
          <a href="#hakkimizda" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Hakkımızda
          </a>
          <a href="#ekip" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Ekip
          </a>
          <a href="#kurallar" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Kurallar
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              copied
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 ring-1 ring-emerald-400'
                : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>IP Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>IP Kopyala</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg text-xs font-semibold transition-colors ${
              copied ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-neutral-950 font-bold'
            }`}
            title="IP Kopyala"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-2 pb-5 space-y-2">
          <a
            href="#durum"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Sunucu Durumu
          </a>
          <a
            href="#ozellikler"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Özellikler
          </a>
          <a
            href="#hakkimizda"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Hakkımızda
          </a>
          <a
            href="#ekip"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Ekip
          </a>
          <a
            href="#kurallar"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Kurallar
          </a>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                handleCopy();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg bg-amber-500 text-neutral-950"
            >
              <Copy className="w-4 h-4" />
              <span>oneysmp.mangoohost.live Kopyala</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
