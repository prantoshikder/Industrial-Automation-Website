import type { SVGProps } from "react";

/**
 * Stroke-based 24x24 glyphs. Kept inline so the site ships without an icon
 * dependency; every path is drawn on the same grid and stroke width.
 */
const paths = {
  chevronDown: <path d="m6 9 6 6 6-6" />,
  bell: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  play: <path d="M6 4.5 20 12 6 19.5z" fill="currentColor" stroke="none" />,
  check: <path d="m20 6-11 11-5-5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8 4.5-8 4.5-8-4.5z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  scale: (
    <>
      <path d="M4 20V9" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M22 20H2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="9" width="14" height="10" rx="2.5" />
      <path d="M12 9V5" />
      <circle cx="12" cy="3.6" r="1.6" />
      <path d="M9.5 13.5h.01M14.5 13.5h.01" />
      <path d="M2.5 13v2M21.5 13v2" />
    </>
  ),
  network: (
    <>
      <rect x="9" y="2.5" width="6" height="5" rx="1.4" />
      <rect x="2.5" y="16.5" width="6" height="5" rx="1.4" />
      <rect x="15.5" y="16.5" width="6" height="5" rx="1.4" />
      <path d="M12 7.5v4.5" />
      <path d="M5.5 16.5V12h13v4.5" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" />
    </>
  ),
  wrench: (
    <>
      <path d="M15.6 3.6a5.5 5.5 0 0 0-7.2 7l-5 5a2 2 0 0 0 2.8 2.8l5-5a5.5 5.5 0 0 0 7-7.2l-3 3-2.6-2.6z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.2 7 4.7-2.6 4.7 2.6-1.2-7" />
    </>
  ),
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="0.8" />
      <path d="M10 2.5v4M14 2.5v4M10 17.5v4M14 17.5v4M2.5 10h4M2.5 14h4M17.5 10h4M17.5 14h4" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-4M12.5 16V8M17 16v-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3 19.5c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" />
      <path d="M16.5 5.2a3.5 3.5 0 0 1 0 6.6" />
      <path d="M18.5 14.6c1.7.8 2.8 2.4 2.8 4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  quote: (
    <path
      d="M9.6 5.5C6.3 7 4.4 9.9 4.4 13.6c0 3 1.7 4.9 4.1 4.9 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.8 1.9-3.4 4-4.3zm9.9 0c-3.3 1.5-5.2 4.4-5.2 8.1 0 3 1.7 4.9 4.1 4.9 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.8 1.9-3.4 4-4.3z"
      fill="currentColor"
      stroke="none"
    />
  ),
  phone: (
    <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7.5 10.5V17M7.5 7.4v.01M11.5 17v-3.6a2.2 2.2 0 0 1 4.4 0V17" />
      <path d="M11.5 10.5V17" />
    </>
  ),
  twitter: (
    <path d="M4 4.5h3.6l4.2 5.6 4.6-5.6H20l-6.5 7.7L20.5 20h-3.6l-4.5-6-5 6H4.4l7-8.3z" />
  ),
  facebook: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M14.8 8.2h-1.2a1.6 1.6 0 0 0-1.6 1.6V21" />
      <path d="M9.8 12.6h4.6" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.4 9.4 5 2.6-5 2.6z" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
