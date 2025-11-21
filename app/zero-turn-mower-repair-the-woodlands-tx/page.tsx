import { Metadata } from 'next';
import WinterizingHero from '@/components/WinterizingHero';
import WinterizingBanner from '@/components/WinterizingBanner';
import SmallEngineServicesGrid from '@/components/SmallEngineServicesGrid';
import GreenCloserWinterizing from '@/components/GreenCloserWinterizing';

export const metadata: Metadata = {
  title: 'Zero Turn Mower Winterizing The Woodlands TX | $89 Special – Bad Boy · Scag · Exmark',
  description: '$89 Winterizing Special! Mobile zero-turn mower service The Woodlands, Kingwood, Conroe. Bad Boy, Scag, Exmark specialists. Text pics - (936) 529-4748',
};

export default function Page() {
  return (
    <>
      <WinterizingHero cityLine="The Woodlands • Kingwood • Conroe & surrounding" />
      <WinterizingBanner />
      <SmallEngineServicesGrid />
      <GreenCloserWinterizing />
    </>
  );
}