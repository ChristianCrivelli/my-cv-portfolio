'use client';

import dynamic from 'next/dynamic';

// Leaflet touches `window` at module-load time, which crashes Next.js's
// server-side prerender of the homepage. Loading it via next/dynamic with
// ssr:false keeps it entirely client-side. This indirection has to live in
// its own 'use client' file because `dynamic(..., { ssr: false })` isn't
// allowed directly inside a Server Component (page.tsx).
export const JourneyMap = dynamic(
  () => import('./journey-map').then((mod) => mod.JourneyMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full animate-pulse rounded-lg border bg-neutral-100" />
    ),
  }
);
