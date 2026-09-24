// Every service page is generated from this file.
// Slugs match the current leafitalone.ca URLs so Google rankings carry over.
// Facts marked "from current site" come straight from leafitalone.ca.

export type ServiceGroup = 'lawn' | 'cleanups' | 'beds' | 'trees';
export type Season = 'spring' | 'summer' | 'fall';

export interface Faq { q: string; a: string }

export interface Service {
  slug: string;
  name: string;
  short: string; // nav + chips
  group: ServiceGroup;
  icon: string; // Phosphor icon name
  seasons: Season[];
  card: string; // one-liner for cards
  intro: string;
  included: string[];
  price?: { from: string; unit: string; note: string };
  addOn?: { name: string; from: string; unit: string; text: string };
  goodToKnow: string[];
  faqs: Faq[];
  photos: string[]; // photo ids from photos.ts
  related: string[];
  metaTitle: string;
  metaDescription: string;
  materials?: 'mulch' | 'stone';
}

export const groupLabels: Record<ServiceGroup, { name: string; blurb: string }> = {
  lawn: { name: 'Lawn care', blurb: 'Weekly mowing, new sod, seeding and feeding.' },
  cleanups: { name: 'Seasonal cleanups', blurb: 'Leaves, branches and beds cleared in spring and fall.' },
  beds: { name: 'Gardens & beds', blurb: 'Mulch, stone gardens and soil prep.' },
  trees: { name: 'Trees, shrubs & hedges', blurb: 'Trimming, shaping and removal of trees up to 15 ft.' },
};

export const services: Service[] = [
  {
    slug: 'lawn-mowing-guelph',
    name: 'Lawn mowing',
    short: 'Lawn mowing',
    group: 'lawn',
    icon: 'rows',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Mow, trim and blow-off on a regular schedule.',
    intro:
      'Every visit includes mowing, string trimming around obstacles and garden beds, trimming along the lawn edge, and blowing clippings off driveways, walkways and patios.',
    included: [
      'Mowing with commercial-grade equipment',
      'String trimming around beds, trees, posts and fences',
      'Trimming along the full lawn perimeter',
      'Clippings blown off driveways, walkways and patios',
    ],
    price: {
      from: '$55',
      unit: 'per visit',
      note: 'Residential properties. Pricing depends on lot size, terrain, grass height and how often we visit.',
    },
    addOn: {
      name: 'Hard-surface weed control',
      from: '$50',
      unit: 'per application',
      text: 'Clears weeds from driveway cracks, curb lines, sidewalks and other hard surfaces, and helps keep new ones from coming back.',
    },
    goodToKnow: [
      'If rain or heat pushes your cut, we let you know and rebook you as soon as it is safe to mow.',
      'Regular visits cost less per cut than an overgrown lawn, because long grass takes longer and needs extra passes.',
    ],
    faqs: [
      { q: 'How much does lawn mowing cost in Guelph?', a: 'Residential mowing starts at $55 per visit. Your price depends on lot size, terrain, grass height and visit frequency, and we confirm it in your free quote.' },
      { q: 'Do you trim and clean up after mowing?', a: 'Yes. Every visit includes string trimming, edge trimming and blowing clippings off hard surfaces.' },
      { q: 'What happens if it rains on my mowing day?', a: 'We reschedule and let you know. Cutting wet grass tears the blades and leaves ruts, so we wait for it to dry.' },
    ],
    photos: ['db3d51_f3552fe1348f42a6b38cd21e94e824bb', 'db3d51_60094484192149479320c4d4e38f9a4e', 'db3d51_731d844539df4a769e6535a39d9b0381'],
    related: ['seeding-fertilizing-guelph', 'hedge-trimming-guelph', 'fall-cleanups-guelph'],
    metaTitle: 'Lawn Mowing in Guelph | From $55 a Visit | Leaf It Alone',
    metaDescription: 'Reliable weekly and bi-weekly lawn mowing in Guelph. Mowing, trimming and blow-off included, from $55 per visit. Free quotes from a local, owner-run crew.',
  },
  {
    slug: 'spring-cleanup-guelph',
    name: 'Spring cleanups',
    short: 'Spring cleanup',
    group: 'cleanups',
    icon: 'flower-tulip',
    seasons: ['spring'],
    card: 'Beds cut back, debris hauled, lawn cleared.',
    intro:
      'We cut back perennials in the garden beds, remove leaves, branches and other yard waste, trim overgrown shrubs and clear debris off the lawn.',
    included: [
      'Perennials and ornamental grasses cut back',
      'Leaves, branches and winter debris removed',
      'Overgrown shrubs and bushes trimmed',
      'Lawn cleared so it can breathe and green up',
      'Yard waste taken away',
    ],
    goodToKnow: [
      'Spring pairs well with fresh mulch, seeding and fertilizing, since the beds and lawn are already cleared.',
      'Cleanup slots fill quickly once the snow is gone. Booking in March or early April gets you on the early list.',
    ],
    faqs: [
      { q: 'When should I book a spring cleanup in Guelph?', a: 'Most cleanups happen from April into May, once the ground has firmed up. Book early to get a spot near the start of the season.' },
      { q: 'Do you take the yard waste away?', a: 'Yes. Leaves, branches and trimmings are removed from your property as part of the cleanup.' },
      { q: 'Can you add mulch at the same visit?', a: 'Yes. Tell us in your quote request and we will price the cleanup and mulch together.' },
    ],
    photos: ['db3d51_6ecf8701fc334107bfa567c2cab7d1cc', 'db3d51_5e67f837c2fc422b824b8f9f58a7cec9', 'db3d51_2e9cd6e6a9cc444793bfc6b8da56561d'],
    related: ['mulch-installation-guelph', 'seeding-fertilizing-guelph', 'shrub-trimming-removal-guelph'],
    metaTitle: 'Spring Cleanup Services in Guelph | Yard Waste Removal',
    metaDescription: 'Spring yard cleanups in Guelph: beds cut back, leaves and branches removed, shrubs trimmed and yard waste hauled away. Free, no-obligation quotes.',
  },
  {
    slug: 'fall-cleanups-guelph',
    name: 'Fall cleanups',
    short: 'Fall cleanup',
    group: 'cleanups',
    icon: 'leaf',
    seasons: ['fall'],
    card: 'Leaves and debris cleared before the snow.',
    intro:
      'Get your yard ready for winter. We clear leaves, branches and garden debris off the lawn and beds before the snow, and take it all away.',
    included: [
      'Leaf removal from lawn and garden beds',
      'Branches and garden debris cleared',
      'Beds tidied for winter',
      'Yard waste taken away',
    ],
    goodToKnow: [
      'Leaves left on the lawn over winter can smother the grass and invite mould. A cleared lawn greens up faster in spring.',
      'Fall is also a good window for overseeding and for trimming shrubs and trees once they drop their leaves.',
    ],
    faqs: [
      { q: 'When do fall cleanups happen?', a: 'Usually from October until the first snow, once most of the leaves are down. Book early in the fall to secure your spot.' },
      { q: 'Should I leave leaves on my lawn over winter?', a: 'A light layer mulched into the grass is fine. A thick layer blocks light and traps moisture, which can leave dead patches in spring.' },
    ],
    photos: ['db3d51_6082b895e9594a7bb43682c41e9b4b06', 'db3d51_c8ce28a3d40f41d3867ec9707dfd19f9', 'db3d51_0f98038914374cd78a3286a2a8141971'],
    related: ['seeding-fertilizing-guelph', 'tree-trimming-removal-guelph', 'lawn-mowing-guelph'],
    metaTitle: 'Fall Cleanup Services in Guelph | Leaf Removal & Yard Prep',
    metaDescription: 'Fall cleanups and leaf removal in Guelph. We clear leaves, branches and garden debris and get your yard ready for winter. Book your free quote.',
  },
  {
    slug: 'sod-installation-guelph',
    name: 'Sod installation',
    short: 'Sod',
    group: 'lawn',
    icon: 'squares-four',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Old lawn out, triple mix in, new sod laid.',
    intro:
      'A new lawn starts with the ground under it. We remove the old lawn with a sod cutter, add a layer of nutrient-rich triple mix, grade it for drainage, and lay fresh sod in a staggered pattern so it knits together smoothly.',
    included: [
      'Old lawn removed with a sod cutter and disposed of',
      'Nutrient-rich triple mix soil added',
      'Grading for proper drainage',
      'Sod laid in a staggered, brick-style pattern',
      'A 4-week watering schedule sent after the job',
    ],
    goodToKnow: [
      'The first four weeks decide how well new sod roots. We send you the watering schedule so you know exactly what to do each week.',
      'Shady or clay-heavy yards need a little extra planning. Mention it in your quote and we will account for it.',
    ],
    faqs: [
      { q: 'How long until I can walk on new sod?', a: 'Keep foot traffic light for the first two to three weeks while the roots take hold. Your watering schedule covers when to do the first mow.' },
      { q: 'Do you remove the old grass?', a: 'Yes. We cut out the old lawn with a sod cutter and dispose of it before adding triple mix and grading.' },
      { q: 'When is the best time to lay sod?', a: 'Spring and early fall are ideal because the weather is cooler and wetter. Summer installs work too with steady watering.' },
    ],
    photos: ['db3d51_39e29b7cd24a4021b6d5514f4319a1e7', 'db3d51_d236f289a4ef4057b39fa62f25d9b3dc', 'db3d51_731d844539df4a769e6535a39d9b0381'],
    related: ['rototilling-guelph', 'seeding-fertilizing-guelph', 'lawn-mowing-guelph'],
    metaTitle: 'Sod Installation in Guelph | Lawn Replacement | Leaf It Alone',
    metaDescription: 'Professional sod installation in Guelph. Old lawn removed, triple mix added, graded for drainage and new sod laid, with a 4-week watering plan. Free quotes.',
  },
  {
    slug: 'mulch-installation-guelph',
    name: 'Mulch installation',
    short: 'Mulch',
    group: 'beds',
    icon: 'circles-three',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Six colours of mulch, delivered and spread.',
    intro:
      'Fresh mulch holds moisture in the soil and keeps weeds down. Pick from six mulch types and we deliver it, spread it and tidy the edges.',
    included: [
      'Beds weeded and prepped before mulching',
      'Mulch delivered and spread at an even depth',
      'Clean edges along lawn and walkways',
      'Your choice of six mulch colours',
    ],
    goodToKnow: [
      'Mulch breaks down over time. Most beds look their best with a top-up every year or two.',
      'Keep mulch pulled back a few centimetres from tree trunks and house siding. We do this as part of every install.',
    ],
    faqs: [
      { q: 'Which mulch colour should I choose?', a: 'Black and mocha give a clean, modern contrast with green plants. Auburn and shredded pine suit brick homes. Cedar starts golden and greys naturally with age.' },
      { q: 'How often should mulch be replaced?', a: 'Plan on a top-up every one to two years, depending on how quickly it breaks down and fades.' },
    ],
    photos: ['db3d51_083fce0f7b174aefbec05c059e6654a9', 'db3d51_59e474af3df2499c8074e4e8d5fab8f8', 'db3d51_32bf2137bdaf4d1bab15c705e2b4f3fe', 'db3d51_df51d6c57dc14a30a6b0a5785794a20f'],
    related: ['spring-cleanup-guelph', 'stone-installation-guelph', 'shrub-trimming-removal-guelph'],
    metaTitle: 'Mulch Installation in Guelph | Weed Control & Moisture Retention',
    metaDescription: 'Mulch installation in Guelph in six colours: auburn, black, cedar, shredded pine, hemlock and mocha. Beds prepped, mulch spread, edges cleaned. Free quotes.',
    materials: 'mulch',
  },
  {
    slug: 'stone-installation-guelph',
    name: 'Stone installation',
    short: 'Stone',
    group: 'beds',
    icon: 'wall',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Raised stone beds, river rock and drainage stone.',
    intro:
      'We build raised stone garden beds and lay decorative stone for drainage and pathways. Choose from wallstone and wedgestone for raised beds, or river rock, slatescape and pea stone for ground cover.',
    included: [
      'Raised wallstone or wedgestone garden beds',
      'Decorative stone ground cover',
      'Drainage stone around downspouts and foundations',
      'Base preparation so stone stays put',
    ],
    goodToKnow: [
      'A proper base matters. Stone laid straight on soil sinks and mixes in, so we prepare the ground first.',
      'Stone and mulch work well together: stone around the edges and downspouts, mulch where the plants are.',
    ],
    faqs: [
      { q: 'What stone options do you offer?', a: 'Wallstone and wedgestone for raised beds (in granite or desert grey blends), granite river rock, natural limestone river rock, slatescape and pea stone.' },
      { q: 'Can stone help with drainage?', a: 'Yes. Pea stone and river rock are good choices around downspouts and foundations where water collects.' },
    ],
    photos: ['db3d51_2958b7b850514d60b2e55e8bfa548668', 'db3d51_5e67f837c2fc422b824b8f9f58a7cec9', 'db3d51_c20fb5716bd84f1c80cc468c870a7c2d', 'db3d51_007932f7cce743a1935318af1d78a5bf'],
    related: ['mulch-installation-guelph', 'rototilling-guelph', 'spring-cleanup-guelph'],
    metaTitle: 'Stone Installation in Guelph | Garden Beds, Pathways & Drainage',
    metaDescription: 'Stone installation in Guelph: raised wallstone and wedgestone beds, river rock, slatescape and pea stone for gardens, pathways and drainage. Free quotes.',
    materials: 'stone',
  },
  {
    slug: 'tree-trimming-removal-guelph',
    name: 'Tree trimming & removal',
    short: 'Tree trimming',
    group: 'trees',
    icon: 'tree',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Trimming and removal for trees up to 15 ft.',
    intro:
      'We trim and remove trees up to 15 feet tall. That covers clearing overgrowth, cutting back branches over the roof or fence, and taking out problem trees.',
    included: [
      'Trimming and shaping of small to medium trees',
      'Dead, damaged or crossing branches removed',
      'Removal of trees up to 15 feet tall',
      'Branches and debris cleaned up and taken away',
    ],
    goodToKnow: [
      'We handle trees up to 15 feet. For larger trees, we will tell you upfront and point you to a certified arborist.',
      'Late fall and early spring, when the leaves are off, make it easier to see the tree structure and trim cleanly.',
    ],
    faqs: [
      { q: 'How big a tree can you remove?', a: 'Trees up to about 15 feet tall. Anything larger needs an arborist with climbing or bucket equipment.' },
      { q: 'Do I need a permit to remove a tree in Guelph?', a: 'Some trees on larger lots are covered by the City of Guelph private tree bylaw. Check with the City before removing a large tree. Most small ornamental trees are not affected.' },
    ],
    photos: ['db3d51_a839634549ff45d487e8254ab11e711f', 'db3d51_6082b895e9594a7bb43682c41e9b4b06', 'db3d51_0a2036455d4346649bac3699caa69966'],
    related: ['shrub-trimming-removal-guelph', 'hedge-trimming-guelph', 'fall-cleanups-guelph'],
    metaTitle: 'Tree Trimming & Removal in Guelph | Trees up to 15 ft',
    metaDescription: 'Tree trimming and removal in Guelph for trees up to 15 feet. Overgrowth cleared, problem trees removed and debris hauled away. Free, no-obligation quotes.',
  },
  {
    slug: 'shrub-trimming-removal-guelph',
    name: 'Shrub trimming & removal',
    short: 'Shrub trimming',
    group: 'trees',
    icon: 'plant',
    seasons: ['spring', 'summer', 'fall'],
    card: 'Overgrown shrubs shaped or cleared out.',
    intro:
      'If a shrub has outgrown its spot, we cut it back into shape. If you want it gone, we take it out, roots and all, and haul away the debris.',
    included: [
      'Shaping and size reduction',
      'Dead and damaged growth removed',
      'Full shrub and root removal when needed',
      'Clippings and debris taken away',
    ],
    goodToKnow: [
      'Timing depends on the plant. Spring-flowering shrubs are best trimmed right after they bloom, so you do not cut off next year\'s flowers.',
      'Removing a shrub leaves a gap. Ask about filling it with mulch, stone or new sod at the same visit.',
    ],
    faqs: [
      { q: 'Can you remove the roots too?', a: 'Yes. When a shrub comes out we remove the root ball so the bed can be replanted, mulched or sodded.' },
      { q: 'When is the best time to trim shrubs?', a: 'It depends on the shrub. Most summer-flowering shrubs are trimmed in late winter or early spring, and spring bloomers right after flowering.' },
    ],
    photos: ['db3d51_efd66db2884e4fe78c795b88792a2138', 'db3d51_2e9cd6e6a9cc444793bfc6b8da56561d', 'db3d51_6ecf8701fc334107bfa567c2cab7d1cc'],
    related: ['hedge-trimming-guelph', 'tree-trimming-removal-guelph', 'mulch-installation-guelph'],
    metaTitle: 'Shrub Trimming & Removal in Guelph | Leaf It Alone',
    metaDescription: 'Shrub trimming, shaping and removal in Guelph. Overgrown shrubs cut back or removed with roots, and all debris taken away. Free quotes.',
  },
  {
    slug: 'hedge-trimming-guelph',
    name: 'Hedge trimming',
    short: 'Hedge trimming',
    group: 'trees',
    icon: 'scissors',
    seasons: ['spring', 'summer'],
    card: 'Straight lines, clean tops, even sides.',
    intro:
      'We trim cedar and deciduous hedges, from a light touch-up to a full reshape, and leave the sides straight and the tops even.',
    included: [
      'Sides and tops trimmed straight and even',
      'Light touch-ups or full reshaping',
      'Cedar and deciduous hedges',
      'Clippings cleaned up and taken away',
    ],
    goodToKnow: [
      'Hedges trimmed slightly wider at the bottom than the top let light reach the lower branches, which keeps them full.',
      'Most hedges need one or two trims a year, usually in early summer and again in late summer.',
    ],
    faqs: [
      { q: 'How often should hedges be trimmed?', a: 'Once or twice a year for most hedges. Fast growers like privet may need a third trim.' },
      { q: 'Can you bring back an overgrown cedar hedge?', a: 'Often, yes, if it still has green growth to cut back to. Cedars do not regrow from bare brown wood, so we reshape gradually.' },
    ],
    photos: ['db3d51_2e9cd6e6a9cc444793bfc6b8da56561d', 'db3d51_083fce0f7b174aefbec05c059e6654a9', 'db3d51_59e474af3df2499c8074e4e8d5fab8f8'],
    related: ['shrub-trimming-removal-guelph', 'lawn-mowing-guelph', 'tree-trimming-removal-guelph'],
    metaTitle: 'Hedge Trimming in Guelph | Leaf It Alone',
    metaDescription: 'Hedge trimming in Guelph, from light touch-ups to full reshapes. Straight, even lines and all clippings cleaned up. Get a free quote.',
  },
  {
    slug: 'rototilling-guelph',
    name: 'Rototilling',
    short: 'Rototilling',
    group: 'beds',
    icon: 'shovel',
    seasons: ['spring', 'fall'],
    card: 'Compacted soil broken up for planting.',
    intro:
      'Rototilling breaks up compacted soil to improve drainage and root growth, and preps the ground for new sod, seed or garden beds.',
    included: [
      'Compacted soil broken up and loosened',
      'Soil prepped for sod, seed or planting',
      'Amendments like triple mix worked in on request',
      'Area raked level when finished',
    ],
    goodToKnow: [
      'Tilling works best when the soil is damp but not wet. Soggy ground clumps, and bone-dry ground turns to dust.',
      'New vegetable gardens and new sod areas both start better with tilled soil.',
    ],
    faqs: [
      { q: 'Can you till a new vegetable garden?', a: 'Yes. We can till a new or existing garden and work in triple mix or compost so it is ready to plant.' },
      { q: 'Is rototilling the same as aerating?', a: 'No. Aerating pulls small plugs from a living lawn. Rototilling turns over the whole area and is used before new sod, seed or beds.' },
    ],
    photos: ['db3d51_d236f289a4ef4057b39fa62f25d9b3dc', 'db3d51_39e29b7cd24a4021b6d5514f4319a1e7', 'db3d51_db14d941741c4cdbb6ce43e492c0454e'],
    related: ['sod-installation-guelph', 'seeding-fertilizing-guelph', 'mulch-installation-guelph'],
    metaTitle: 'Guelph Rototilling Service | Prep Your Garden for Planting',
    metaDescription: 'Rototilling in Guelph to break up compacted soil and prep for new sod, seed or garden beds. Better drainage and root growth. Free quotes.',
  },
  {
    slug: 'seeding-fertilizing-guelph',
    name: 'Seeding & fertilizing',
    short: 'Seeding & fertilizing',
    group: 'lawn',
    icon: 'grains',
    seasons: ['spring', 'fall'],
    card: 'Thin spots filled and the lawn fed.',
    intro:
      'We fill in bare spots or overseed the whole lawn with quality seed, then feed it with a fertilizer suited to the season.',
    included: [
      'Overseeding thin areas or the whole lawn',
      'Bare patches prepped and seeded',
      'Fertilizer suited to the season',
      'Watering tips for new seed',
    ],
    goodToKnow: [
      'Late summer and early fall are the best time to seed in Guelph. Warm soil and cool nights help grass seed sprout quickly.',
      'Seeding right after a spring or fall cleanup gives the seed direct contact with the soil.',
    ],
    faqs: [
      { q: 'When is the best time to overseed?', a: 'Late August to late September is ideal. Spring seeding also works, but the seedlings compete with weeds and summer heat.' },
      { q: 'How soon can I mow after seeding?', a: 'Wait until the new grass is about 8 to 10 cm tall, usually three to four weeks, then mow on a high setting.' },
    ],
    photos: ['db3d51_60094484192149479320c4d4e38f9a4e', 'db3d51_f3552fe1348f42a6b38cd21e94e824bb', 'db3d51_0f98038914374cd78a3286a2a8141971'],
    related: ['lawn-mowing-guelph', 'sod-installation-guelph', 'fall-cleanups-guelph'],
    metaTitle: 'Lawn Seeding & Fertilizing in Guelph | Leaf It Alone',
    metaDescription: 'Lawn seeding, overseeding and fertilizing in Guelph. Bare spots filled, thin lawns thickened and grass fed for strong growth. Free quotes.',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
export const servicesIn = (g: ServiceGroup) => services.filter((s) => s.group === g);

export const seasonInfo: Record<Season | 'winter', { name: string; months: string; line: string }> = {
  spring: { name: 'Spring', months: 'April to May', line: 'Clean up winter, feed the lawn and refresh the beds.' },
  summer: { name: 'Summer', months: 'June to August', line: 'Regular cuts, sharp hedges and new stone or mulch.' },
  fall: { name: 'Fall', months: 'September to November', line: 'Clear the leaves, overseed and get ready for winter.' },
  winter: { name: 'Winter', months: 'December to March', line: 'Plan next year. Book spring cleanups and projects early.' },
};

// Materials from the current mulch and stone pages.
export const mulchOptions = [
  { name: 'Auburn', note: 'Rich red-brown', swatch: ['#7a3419', '#9b4623', '#5e2812'] },
  { name: 'Black', note: 'Rich black', swatch: ['#1c1a18', '#2b2825', '#0f0e0d'] },
  { name: 'Cedar', note: 'Golden brown, greys with age', swatch: ['#b0834f', '#c89a62', '#8a643a'] },
  { name: 'Shredded pine', note: 'Double-ground, rich reddish brown', swatch: ['#6b3a22', '#83482b', '#4f2a18'] },
  { name: 'Hemlock', note: 'Copper-brown', swatch: ['#8a5530', '#a3673c', '#6b4023'] },
  { name: 'Mocha', note: 'Warm chocolate brown', swatch: ['#4a3024', '#5d3d2e', '#36221a'] },
];

export const stoneOptions = [
  { name: 'Raised wallstone garden', note: 'Rectangular wallstone in granite or desert grey blend', swatch: ['#8d8a86', '#a9a49d', '#6f6b67'] },
  { name: 'Raised wedgestone garden', note: 'Wedge-style stone in desert grey or granite blend', swatch: ['#a39b8f', '#bdb4a6', '#857d72'] },
  { name: 'Granite river rock', note: 'Granite-based Ontario stone, medium size', swatch: ['#8e8176', '#b3a79c', '#5f554e'] },
  { name: 'Slatescape', note: 'Natural grey decorative stone', swatch: ['#5f6468', '#7a8084', '#474b4e'] },
  { name: 'Natural river rock', note: 'Medium limestone river rock, smaller sizes too', swatch: ['#c9bda8', '#ddd3c1', '#a99c86'] },
  { name: 'Pea stone', note: 'Small decorative drainage stone', swatch: ['#b7a58d', '#cdbda6', '#8f7e68'] },
];
