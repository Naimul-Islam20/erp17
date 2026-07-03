import HeroSection from "@/components/modules/hero";
import IndustriesWeEmpower from "@/components/modules/industriesWeEmpower";
import HrFeatures from "@/components/modules/hrFeatures";
import HrApp from "@/components/modules/hr-app";
import Erp17CloudSolution from "@/components/modules/erp17CloudSolution";
import Faq from "@/components/modules/faq";
import CloudOrganogramSection from "@/components/modules/CloudOrganogramSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <IndustriesWeEmpower />
      <HrFeatures />

      <CloudOrganogramSection />

      <HrApp />
      <Erp17CloudSolution />

      <Faq />
    </div>
  );
}
