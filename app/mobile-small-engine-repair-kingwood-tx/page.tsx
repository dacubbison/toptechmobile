import { Metadata } from 'next';
import WinterizingHero from '@/components/WinterizingHero';
import WinterizingBanner from '@/components/WinterizingBanner';
import SmallEngineServicesGrid from '@/components/SmallEngineServicesGrid';
import GreenCloserWinterizing from '@/components/GreenCloserWinterizing';

export const metadata: Metadata = {
  title: 'Mobile Small Engine Repair Kingwood TX | Winterizing Special $89',
  description: '$89 Winterizing Special! Zero-turn mower winterization in Kingwood, Porter, Humble. Bad Boy, Scag, Exmark mobile service. Text pics - (936) 529-4748',
};

export default function Page() {
  return (
    <>
      <WinterizingHero cityLine="Kingwood • Porter • Humble & surrounding" />
      <WinterizingBanner />
      <SmallEngineServicesGrid />
      <GreenCloserWinterizing />
    </>
  );
}