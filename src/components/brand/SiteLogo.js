import Image from "next/image";
import {
  SITE_LOGO_ALT,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_SRC,
  SITE_LOGO_WIDTH,
} from "@/constants/brand";

export default function SiteLogo({
  className = "w-full h-auto",
  priority = false,
  ...props
}) {
  return (
    <Image
      src={SITE_LOGO_SRC}
      alt={SITE_LOGO_ALT}
      width={SITE_LOGO_WIDTH}
      height={SITE_LOGO_HEIGHT}
      priority={priority}
      className={className}
      {...props}
    />
  );
}
