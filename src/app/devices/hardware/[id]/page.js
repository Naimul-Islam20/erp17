import DeviceDetailsClient from "./DeviceDetailsClient";

const DEVICE_STATIC_SLUGS = [
  "tipsoi-tc-03-exit-reader",
  "tipsoi-rfid-card-reader",
  "tipsoi-tf-80",
  "tipsoi-fastface-5-lite",
  "tipsoi-fastface-5",
  "tipsoi-fastface-5-pro",
  "tipsoi-fastface-5-pro-fp",
  "tipsoi-fastface-7-lite",
  "tipsoi-fastface-8",
  "tipsoi-fastface-8-lite",
  "tipsoi-fastface-go-lite",
  "tipsoi-fastface-go",
  "tipsoi-prompt-p40",
  "tipsoi-prompt-p310",
  "tipsoi-prompt-p205",
];

export function generateStaticParams() {
  return DEVICE_STATIC_SLUGS.map((id) => ({ id }));
}

export default function DeviceHardwareDetailsPage({ params }) {
  return <DeviceDetailsClient id={params.id} />;
}
