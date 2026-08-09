import GetQuoteForm from "@/components/plans/GetQuoteForm";

export const metadata = {
  title: "Get a Quote",
  description:
    "Request a custom ERP17 quote tailored to your business needs. Share your requirements and our team will get back to you.",
};

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <GetQuoteForm />
    </div>
  );
}
