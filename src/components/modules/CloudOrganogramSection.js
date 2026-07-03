import Image from "next/image";

export default function CloudOrganogramSection() {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:rounded-3xl">
          <Image
            src="/erp-system.png"
            alt="ERP17 Cloud Solution organogram — integrated module connectivity"
            width={1536}
            height={1020}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
