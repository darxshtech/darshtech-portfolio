'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Silk component with SSR disabled
const Silk = dynamic(
  () => import('./Silk'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-[#1a1a2e] -z-10" />
  }
);

export default function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 -z-10">
      <Silk
        speed={5}
        scale={1}
        color="#5A5460"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}
