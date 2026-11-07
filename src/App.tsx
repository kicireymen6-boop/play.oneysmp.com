import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServerStatusCard } from './components/ServerStatusCard';
import { Features } from './components/Features';
import { HowToJoin } from './components/HowToJoin';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { RulesSection } from './components/RulesSection';
import { DiscordCommunityCard } from './components/DiscordCommunityCard';
import { Footer } from './components/Footer';
import { CopyToast } from './components/CopyToast';
import { ServerStatusData } from './types';
import { fetchServerStatus } from './services/mcStatus';

export default function App() {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);

  const loadStatus = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchServerStatus();
      setStatus(data);
    } catch (err) {
      console.error('Error fetching server status:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
    // Poll every 60 seconds for fresh player counts
    const interval = setInterval(loadStatus, 60000);
    return () => clearInterval(interval);
  }, [loadStatus]);

  const handleCopySuccess = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar onCopySuccess={handleCopySuccess} />
      
      <main className="flex-1">
        <Hero status={status} onCopySuccess={handleCopySuccess} />
        <ServerStatusCard
          status={status}
          loading={loading}
          onRefresh={loadStatus}
          onCopySuccess={handleCopySuccess}
        />
        <Features />
        <HowToJoin onCopySuccess={handleCopySuccess} />
        <AboutSection />
        <TeamSection />
        <RulesSection />
        <DiscordCommunityCard onCopySuccess={handleCopySuccess} />
      </main>

      <Footer onCopySuccess={handleCopySuccess} />
      <CopyToast show={showToast} />
    </div>
  );
}
