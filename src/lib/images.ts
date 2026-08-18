/**
 * Every URL here is an Unsplash CDN asset. Swap the ids for licensed brand
 * photography before launch — the layout only depends on the aspect ratios.
 */
const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  heroFactory: unsplash("photo-1567789884554-0b844b597180", 1400, 900),
  aboutWelding: unsplash("photo-1504328345606-18bbc8c9d7d1", 700, 900),
  aboutLine: unsplash("photo-1581091226825-a6a2a5aee158", 700, 620),
  aboutElectronics: unsplash("photo-1563770660941-20978e870e26", 520, 420),
  aboutEngineer: unsplash("photo-1553413077-190dd305871c", 900, 560),
  controlRoom: unsplash("photo-1581092795360-fd1ca04f0952", 800, 1000),
  caseAutomotive: unsplash("photo-1565043666747-69f6646db940", 640, 460),
  caseElectronics: unsplash("photo-1518770660439-4636190af475", 640, 460),
  casePackaging: unsplash("photo-1595246140625-573b715d11dc", 640, 460),
  testimonial: unsplash("photo-1581093450021-4a7360e9a6b5", 800, 640),
  ctaRobot: unsplash("photo-1567789884554-0b844b597180", 900, 520),
} as const;
