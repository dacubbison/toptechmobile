import { Metadata } from 'next';
import WinterizingHero from '@/components/WinterizingHero';
import WinterizingBanner from '@/components/WinterizingBanner';
import SmallEngineServicesGrid from '@/components/SmallEngineServicesGrid';
import GreenCloserWinterizing from '@/components/GreenCloserWinterizing';
import SeoTags from '@/components/SeoTags';
import WinterizingFAQ from '@/components/WinterizingFAQ';

export const metadata: Metadata = {
  title: 'Mobile Small Engine Repair Conroe TX | Winterizing Special $129',
  description: '$129 Winterizing Special! Zero-turn mower winterization in Conroe, Willis, Montgomery. Bad Boy, Scag, Exmark mobile service. Text pics - (936) 529-4748',
};

export default function Page() {
  return (
    <>
      <SeoTags 
        title={metadata.title as string} 
        description={metadata.description as string} 
        url="https://toptechmobile.com/mobile-small-engine-repair-conroe-tx" 
        image="https://images.unsplash.com/photo-1603578092399-7e1cbcf59d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
      />
      <WinterizingHero cityLine="Conroe • Willis • Montgomery • Lake Conroe & surrounding" />
      <WinterizingBanner />
      <SmallEngineServicesGrid />
      <WinterizingFAQ />
      <GreenCloserWinterizing />
    </>
  );
}