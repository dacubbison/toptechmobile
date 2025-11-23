import { Metadata } from 'next';
import WinterizingHero from '@/components/WinterizingHero';
import WinterizingBanner from '@/components/WinterizingBanner';
import SmallEngineServicesGrid from '@/components/SmallEngineServicesGrid';
import GreenCloserWinterizing from '@/components/GreenCloserWinterizing';
import SeoTags from '@/components/SeoTags';
import WinterizingFAQ from '@/components/WinterizingFAQ';

export const metadata: Metadata = {
  title: 'Zero Turn Mower Winterizing The Woodlands TX | $129 Special – Bad Boy · Scag · Exmark',
  description: '$129 Winterizing Special! Mobile zero-turn mower service The Woodlands, Kingwood, Conroe. Bad Boy, Scag, Exmark specialists. Text pics - (936) 529-4748',
};

export default function Page() {
  return (
    <>
      <SeoTags 
        title={metadata.title as string} 
        description={metadata.description as string} 
        url="https://toptechmobile.com/zero-turn-mower-repair-the-woodlands-tx" 
        image="https://images.unsplash.com/photo-1603578092399-7e1cbcf59d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
      />
      <WinterizingHero cityLine="The Woodlands • Kingwood • Conroe & surrounding" />
      <WinterizingBanner />
      <SmallEngineServicesGrid />
      <WinterizingFAQ />
      <GreenCloserWinterizing />
    </>
  );
}