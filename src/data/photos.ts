// Real job photos from the current Wix site (leafitalone.ca/projects).
// They are served from Wix's CDN for now. Before launch, export the originals
// from the Wix Media Manager into /public/photos and swap `src()` to local paths.

export type PhotoCategory = 'mulch' | 'stone' | 'lawn';

export interface Photo {
  id: string;
  category: PhotoCategory;
  alt: string;
  caption: string;
}

export const categoryLabels: Record<PhotoCategory, string> = {
  mulch: 'Mulch & garden beds',
  stone: 'Stone & hardscape',
  lawn: 'Sod & lawns',
};

export const photos: Photo[] = [
  { id: 'db3d51_2958b7b850514d60b2e55e8bfa548668', category: 'stone', caption: 'River rock garden with black mulch', alt: 'Front yard garden bed with granite river rock, boulders and black mulch around shrubs' },
  { id: 'db3d51_5e67f837c2fc422b824b8f9f58a7cec9', category: 'stone', caption: 'Raised bed with armour stone edging', alt: 'Spring garden bed with daffodils and black mulch, edged with large natural stones' },
  { id: 'db3d51_c20fb5716bd84f1c80cc468c870a7c2d', category: 'stone', caption: 'Flagstone patio', alt: 'Flagstone patio beside a wooden deck and fence with a barbecue' },
  { id: 'db3d51_083fce0f7b174aefbec05c059e6654a9', category: 'mulch', caption: 'Front beds in black mulch', alt: 'Front of a brick house with shrubs in fresh black mulch beds' },
  { id: 'db3d51_d236f289a4ef4057b39fa62f25d9b3dc', category: 'lawn', caption: 'Soil graded and ready for sod', alt: 'Freshly graded patch of dark soil in a backyard lawn, prepared for new sod' },
  { id: 'db3d51_2e9cd6e6a9cc444793bfc6b8da56561d', category: 'mulch', caption: 'Curved front bed, crisp edge', alt: 'Curved front garden bed with shrubs and brown mulch next to a green lawn' },
  { id: 'db3d51_59e474af3df2499c8074e4e8d5fab8f8', category: 'mulch', caption: 'Corner bed in auburn mulch', alt: 'Backyard corner bed with an evergreen and small shrubs in red-brown mulch' },
  { id: 'db3d51_39e29b7cd24a4021b6d5514f4319a1e7', category: 'lawn', caption: 'Removing old lawn with a sod cutter', alt: 'Sod cutter parked on a lawn next to a stripped patch of soil' },
  { id: 'db3d51_32bf2137bdaf4d1bab15c705e2b4f3fe', category: 'mulch', caption: 'Tree ring with new plantings', alt: 'Round mulched bed around a young tree with small perennials in a lawn' },
  { id: 'db3d51_0a2036455d4346649bac3699caa69966', category: 'stone', caption: 'Paver border and garden beds', alt: 'Backyard with interlocking paver border and mulched beds under young trees' },
  { id: 'db3d51_df51d6c57dc14a30a6b0a5785794a20f', category: 'mulch', caption: 'Fence-line bed in black mulch', alt: 'Long garden bed along a red fence with hostas in black mulch beside a driveway' },
  { id: 'db3d51_731d844539df4a769e6535a39d9b0381', category: 'lawn', caption: 'Backyard lawn by the shed', alt: 'Green backyard lawn in front of a garden shed and wooden fence' },
  { id: 'db3d51_efd66db2884e4fe78c795b88792a2138', category: 'mulch', caption: 'Side-of-house bed refresh', alt: 'Narrow bed along vinyl siding with shrubs in red mulch' },
  { id: 'db3d51_db14d941741c4cdbb6ce43e492c0454e', category: 'mulch', caption: 'Island bed with stone border', alt: 'Garden with a circular planted island, stone edging and brown mulch' },
  { id: 'db3d51_007932f7cce743a1935318af1d78a5bf', category: 'stone', caption: 'Stepping stones through a side bed', alt: 'Side yard bed with stepping stones, perennials and brown mulch' },
  { id: 'db3d51_c8ce28a3d40f41d3867ec9707dfd19f9', category: 'mulch', caption: 'Fence bed in auburn mulch', alt: 'Garden bed along a wooden fence with small shrubs in red mulch' },
  { id: 'db3d51_6082b895e9594a7bb43682c41e9b4b06', category: 'mulch', caption: 'Mulch under a mature tree', alt: 'Large bed of brown mulch under a tree with a boulder at the sidewalk edge' },
  { id: 'db3d51_60094484192149479320c4d4e38f9a4e', category: 'lawn', caption: 'Backyard lawn, freshly cut', alt: 'Backyard lawn with a wooden fence and neighbouring houses behind' },
  { id: 'db3d51_a839634549ff45d487e8254ab11e711f', category: 'mulch', caption: 'Front bed, new mulch and stakes', alt: 'Front yard bed with fresh brown mulch and a newly staked tree' },
  { id: 'db3d51_0f98038914374cd78a3286a2a8141971', category: 'mulch', caption: 'Blue spruce mulch ring by the pool', alt: 'Backyard beside a pool with a blue spruce in a ring of fresh mulch' },
  { id: 'db3d51_6ecf8701fc334107bfa567c2cab7d1cc', category: 'mulch', caption: 'Spring cleanup along the fence', alt: 'Cleaned-up fence-line bed with shrubs cut back and fresh brown mulch' },
  { id: 'db3d51_2be2824d707146b681e10719c17f81bc', category: 'mulch', caption: 'Under-deck bed', alt: 'Mulched bed under a raised deck and staircase next to a concrete pad' },
  { id: 'db3d51_f3552fe1348f42a6b38cd21e94e824bb', category: 'lawn', caption: 'Fenced backyard lawn', alt: 'Even green lawn in a fenced backyard with trees behind the fence' },
];

// Original upload sizes on Wix. Most were uploaded at 960x720, so never ask the CDN for more
// than this (it would upscale and look soft). Replace with full-size originals when Josh sends them.
const ORIGINAL: Record<string, [number, number]> = {
  'db3d51_60094484192149479320c4d4e38f9a4e': [1500, 2000],
  'db3d51_731d844539df4a769e6535a39d9b0381': [1500, 2000],
  'db3d51_c20fb5716bd84f1c80cc468c870a7c2d': [1500, 2000],
  'db3d51_f3552fe1348f42a6b38cd21e94e824bb': [1500, 2000],
  'db3d51_d236f289a4ef4057b39fa62f25d9b3dc': [720, 960],
};
const originalSize = (id: string): [number, number] => ORIGINAL[id] ?? [960, 720];

/** Largest crop of this aspect ratio that fits inside the original, capped at the requested size. */
function fit(id: string, w: number, h: number): [number, number] {
  const [ow, oh] = originalSize(id);
  const f = Math.min(1, ow / w, oh / h);
  return [Math.round(w * f), Math.round(h * f)];
}

/** Wix CDN transform URL: centre-crop fill, sharpened, never upscaled. */
export function src(id: string, w: number, h: number, q = 90) {
  const [fw, fh] = fit(id, w, h);
  return `https://static.wixstatic.com/media/${id}~mv2.jpg/v1/fill/w_${fw},h_${fh},al_c,q_${q},usm_0.66_1.00_0.01,enc_auto/${id}.jpg`;
}

export function srcset(id: string, w: number, h: number) {
  const seen = new Set<number>();
  return [1, 1.5, 2]
    .map((m) => fit(id, Math.round(w * m), Math.round(h * m)))
    .filter(([fw]) => (seen.has(fw) ? false : (seen.add(fw), true)))
    .map(([fw, fh]) => `${src(id, fw, fh)} ${fw}w`)
    .join(', ');
}

export const photoById = (id: string) => photos.find((p) => p.id === id)!;
export const photosIn = (c: PhotoCategory) => photos.filter((p) => p.category === c);
