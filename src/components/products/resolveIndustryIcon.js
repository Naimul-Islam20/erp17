import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Laptop,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

export function resolveIndustryIcon(label) {
  const text = label.toLowerCase();

  if (text.includes("manufactur")) return Factory;
  if (text.includes("it ") || text.includes("tech") || text.includes("digital"))
    return Laptop;
  if (text.includes("educat") || text.includes("school")) return GraduationCap;
  if (
    text.includes("health") ||
    text.includes("clinic") ||
    text.includes("hospital")
  )
    return HeartPulse;
  if (
    text.includes("retail") ||
    text.includes("ecommerce") ||
    text.includes("e-commerce") ||
    text.includes("shop")
  )
    return Store;
  if (text.includes("logistic") || text.includes("security"))
    return Truck;
  if (text.includes("finance") || text.includes("investment")) return Wallet;
  if (text.includes("real estate") || text.includes("agency")) return Building2;
  if (text.includes("service")) return Users;

  return ShoppingBag;
}
