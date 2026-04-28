import HeroSection from "@/components/modules/hero";
import IndustriesWeEmpower from "@/components/modules/industriesWeEmpower";
import HrFeatures from "@/components/modules/hrFeatures";
import HrApp from "@/components/modules/hr-app";
import Erp17CloudSolution from "@/components/modules/erp17CloudSolution";
import Faq from "@/components/modules/faq";
import Image from "next/image";
// import MarqueeSlider from "@/components/modules/clients/client";
// import ClientsMarquee from "@/components/modules/clients";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IndustriesWeEmpower />
      {/* <ClientsMarquee /> — full section (logos + Get Started / Contact) hidden per request */}

      <HrFeatures />
      <section>
        <div className="container">
          <Image
            src="/erp-cloud-system-design.jpeg"
            alt="ERP17 business growth banner"
            width={1920}
            height={480}
            className="w-full  mx-auto h-auto object-cover"
            priority={false}
          />
        </div>
      </section>
      <HrApp />
      <Erp17CloudSolution />
      <Faq />
    </div>
  );
}
