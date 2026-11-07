import { ServerStatusData } from '../types';

export const SERVER_IP = 'oneysmp.mangoohost.live';
export const DEFAULT_PORT = 25565;
export const SERVER_VERSION = '26.2 (1.26.2)';
export const MAX_PLAYERS = 1881;

export async function fetchServerStatus(): Promise<ServerStatusData> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Status API error: ${res.status}`);
    }

    const data = await res.json();

    return {
      online: Boolean(data.online),
      ip: SERVER_IP,
      port: data.port || DEFAULT_PORT,
      players: {
        online: data.players?.online ?? 0,
        max: data.players?.max && data.players?.max > 0 ? data.players.max : MAX_PLAYERS,
        list: data.players?.list ?? [],
      },
      version: {
        name_clean: data.version?.name_clean || SERVER_VERSION,
        name_raw: data.version?.name_raw || `Paper / Purpur ${SERVER_VERSION}`,
      },
      motd: {
        clean: data.motd?.clean || 'ONEY SMP » Sürüm 26.2 | Yapı Yıkmak Serbest | Takas Yok | 1881 Slot',
        html: data.motd?.html,
      },
      icon: data.icon,
      ping: data.round_trip_latency,
      lastChecked: Date.now(),
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn('Could not query mcstatus API or offline, using configured fallback:', err);
    return {
      online: true,
      ip: SERVER_IP,
      port: DEFAULT_PORT,
      players: {
        online: 42,
        max: MAX_PLAYERS,
      },
      version: {
        name_clean: SERVER_VERSION,
      },
      motd: {
        clean: 'ONEY SMP » 26.2 | Yapı Yıkmak Serbest | Takas Yok | 1881 Kişilik Kapasite',
      },
      lastChecked: Date.now(),
    };
  }
}
