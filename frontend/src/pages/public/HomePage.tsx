import { Hero } from '../../components/landing/Hero';
import { TrustSection } from '../../components/landing/TrustSection';
import { CapabilitiesSection } from '../../components/landing/CapabilitiesSection';
import { FeatureValueSection } from '../../components/landing/FeatureValueSection';
import { FinalCtaSection } from '../../components/landing/FinalCtaSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <CapabilitiesSection />
      <FeatureValueSection />
      <FinalCtaSection />
    </>
  );
}
