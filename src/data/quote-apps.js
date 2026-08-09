/**
 * Apps shown on /choose-apps before the Get a Quote form.
 * Names match ERP17 app modules (app.erp17.com).
 */
export const QUOTE_APP_CATEGORIES = [
  {
    id: "all-modules",
    title: "All Modules",
    apps: [
      { id: "hrm", label: "Hrm", value: "hrm", icon: "UsersRound", color: "#F43F5E" },
      {
        id: "attendance",
        label: "Attendance",
        value: "attendance",
        icon: "Clock",
        color: "#14B8A6",
      },
      {
        id: "payroll",
        label: "Payroll",
        value: "payroll",
        icon: "Banknote",
        color: "#22C55E",
      },
      {
        id: "inventory",
        label: "Inventory",
        value: "inventory",
        icon: "Package",
        color: "#F59E0B",
      },
      {
        id: "accounts",
        label: "Accounts",
        value: "accounts",
        icon: "Wallet",
        color: "#0EA5E9",
      },
      {
        id: "clienthub",
        label: "ClientHub",
        value: "clienthub",
        icon: "Users",
        color: "#6366F1",
      },
      { id: "pos", label: "Pos", value: "pos", icon: "ShoppingBag", color: "#059669" },
      {
        id: "game-zone",
        label: "Game Zone",
        value: "game_zone",
        icon: "Gamepad2",
        color: "#A855F7",
      },
      { id: "hotel", label: "Hotel", value: "hotel", icon: "Hotel", color: "#0D9488" },
      {
        id: "ecommerce",
        label: "Ecommerce",
        value: "ecommerce",
        icon: "ShoppingCart",
        color: "#EA580C",
      },
      {
        id: "car-wash",
        label: "Car Wash",
        value: "car_wash",
        icon: "Car",
        color: "#0284C7",
      },
      {
        id: "parking",
        label: "Parking",
        value: "parking",
        icon: "ParkingSquare",
        color: "#334155",
      },
      {
        id: "notify",
        label: "Notify",
        value: "notify",
        icon: "Bell",
        color: "#EF4444",
      },
      {
        id: "taxease",
        label: "TaxEase",
        value: "taxease",
        icon: "Calculator",
        color: "#64748B",
      },
      {
        id: "emails",
        label: "Emails",
        value: "emails",
        icon: "Mail",
        color: "#2563EB",
      },
      {
        id: "restaurant",
        label: "Restaurant",
        value: "restaurant",
        icon: "UtensilsCrossed",
        color: "#DC2626",
      },
      {
        id: "rent-hub",
        label: "Rent Hub",
        value: "rent_hub",
        icon: "KeyRound",
        color: "#7C3AED",
      },
      {
        id: "production",
        label: "Production",
        value: "production",
        icon: "Factory",
        color: "#B45309",
      },
      {
        id: "transport",
        label: "Transport",
        value: "transport",
        icon: "Truck",
        color: "#0F766E",
      },
      { id: "cnf", label: "Cnf", value: "cnf", icon: "Ship", color: "#1D4ED8" },
      {
        id: "projects",
        label: "Projects",
        value: "projects",
        icon: "FolderKanban",
        color: "#4F46E5",
      },
    ],
  },
];

export const ALL_QUOTE_APPS = QUOTE_APP_CATEGORIES.flatMap(
  (category) => category.apps,
);

export const QUOTE_APP_VALUES = new Set(ALL_QUOTE_APPS.map((app) => app.value));
