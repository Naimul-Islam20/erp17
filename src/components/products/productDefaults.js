import {
  Database,
  Fingerprint,
  Headphones,
  KeyRound,
  Languages,
  LayoutGrid,
  Lock,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const DEFAULT_TRUST_POINTS = [
  { icon: LayoutGrid, label: "User-friendly Interface" },
  { icon: Sparkles, label: "Customizable Modules" },
  { icon: Languages, label: "Local Language Support (Bangla & English)" },
  { icon: Smartphone, label: "Mobile App Integration" },
  { icon: Headphones, label: "24/7 Customer Support" },
];

export const DEFAULT_SECURITY_FEATURES = [
  { label: "SSL Encryption", icon: Lock },
  { label: "Role-Based Access", icon: KeyRound },
  { label: "MFA", icon: Fingerprint },
  { label: "Data Backups", icon: Database },
];
