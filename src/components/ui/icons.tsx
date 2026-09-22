import {
  Briefcase,
  Building2,
  Globe2,
  Hammer,
  Heart,
  Layers,
  Palette,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  ShoppingBag,
  Smartphone,
  Store,
  Target,
  Users,
  UtensilsCrossed,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react";

const icons = {
  globe: Globe2,
  shopping: ShoppingBag,
  refresh: RefreshCw,
  smartphone: Smartphone,
  search: Search,
  wrench: Wrench,
  palette: Palette,
  target: Target,
  devices: Smartphone,
  zap: Zap,
  users: Users,
  layers: Layers,
  hammer: Hammer,
  store: Store,
  utensils: UtensilsCrossed,
  briefcase: Briefcase,
  scale: Scale,
  building: Building2,
  rocket: Rocket,
  heart: Heart,
} as const;

export type IconName = keyof typeof icons;

type AppIconProps = LucideProps & {
  name: IconName;
};

export function AppIcon({ name, ...props }: AppIconProps) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
