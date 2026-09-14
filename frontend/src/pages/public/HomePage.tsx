import { Hero } from '../../components/landing/Hero';
import { TrustSection } from '../../components/landing/TrustSection';
import { CapabilitiesSection } from '../../components/landing/CapabilitiesSection';
import { FeatureValueSection } from '../../components/landing/FeatureValueSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <CapabilitiesSection />
      <FeatureValueSection />
    </>
  );
}
