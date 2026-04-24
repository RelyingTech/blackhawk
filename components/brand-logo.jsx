import Image from "next/image";

import { brandAssets, siteSettings } from "@/content/site";

const variants = {
  header: {
    src: brandAssets.horizontal.src,
    width: 320,
    height: 104,
  },
  hero: {
    src: brandAssets.horizontal.src,
    width: 520,
    height: 170,
  },
  footer: {
    src: brandAssets.horizontal.src,
    width: 360,
    height: 118,
  },
  shield: {
    src: brandAssets.shield.src,
    width: 760,
    height: 880,
  },
};

export default function BrandLogo({
  variant = "header",
  className = "",
  priority = false,
}) {
  const asset = variants[variant] || variants.header;

  return (
    <Image
      src={asset.src}
      alt={siteSettings.name}
      width={asset.width}
      height={asset.height}
      className={`brand-logo ${className}`.trim()}
      priority={priority}
    />
  );
}
