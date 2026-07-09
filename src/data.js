// Rituals demo — product catalogue data
// Imagery: Unsplash (free license, hotlink-friendly), curated for the
// wellness/bath/skincare world. Images are unique within any single page;
// reuse only happens across mutually exclusive views (e.g. the bestsellers
// vs trending grids, or different routes).
const img = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`

export const IMG = {
  // heroes / atmosphere
  bathtubWindow: '1532926381893-7542290edf1d', // woman in bathtub by a window
  oilDropperDark: '1515377905703-c4788e51af15', // hands + oil dropper, dark
  hotStoneMassage: '1600334129128-685c5582fd35', // hot stone massage, flowers
  flowerBath: '1526758097130-bab247274f58', // legs in a flower bath
  backMassage: '1544161515-4ab6ce6db874', // back massage with oil
  oilPourMassage: '1552693673-1bf958298935', // oil poured on back
  spaScene: '1596178060671-7a80dc8059ea', // spa treatment scene
  // ingredients / mood
  apothecaryFlatlay: '1612817288484-6f916006741a', // oils, stones, botanicals
  oranges: '1611080626919-7cf5a9dbab5b', // sweet oranges (Mehr)
  candles: '1602523961358-f9f03dd557db', // lit candles, dark
  // products
  whiteTube: '1620916566398-39f1143ab7be', // white tube on linen
  pastelBottles: '1610705267928-1b9f2fa7f1c5', // pastel shower bottles
  amberDropper: '1608571423902-eed4a5ad8108', // amber dropper bottle
  amberVials: '1602928321679-560bb453f190', // amber glass vials
  towelCandle: '1540555700478-4be289fbecef', // towel, pump bottle, candle
  orangeTubesFruit: '1615396899839-c99c121888b0', // orange tubes + slices
  orangeTubesTulips: '1615397349754-cfa2066a298e', // orange tubes + tulips
  blackBottles: '1611930022073-b7a4ba5fcccd', // stacked black bottles
  peachFlatlay: '1585652757141-8837d676fac8', // cream skincare flatlay
  giftFlatlay: '1571875257727-256c39da42af', // products + flowers flatlay
  skincareLineup: '1629198688000-71f23e745b6e', // skincare product lineup
  groomingSet: '1601612628452-9e99ced43524', // black grooming set
  facialTreatment: '1570172619644-dfd03ed5d881', // facial treatment
  facialMask: '1616394584738-fc6e612e71b9', // face mask application
  handsCare: '1522337660859-02fbefca4702', // hands close-up
}

export const heroImages = {
  cinematic: img(IMG.bathtubWindow, 1920, 1080),
  split: img(IMG.hotStoneMassage, 1200, 800),
  minimal: img(IMG.oilDropperDark, 1600, 900),
}

export const navItems = [
  { label: 'Bath & Shower', href: '/bath' },
  { label: 'Body', href: '/body' },
  { label: 'Skincare', href: '/skincare' },
  { label: 'Home', href: '#home' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Collections', href: '#collections' },
]

export const collections = [
  {
    id: 'karma',
    name: 'The Ritual of Karma',
    tagline: 'Sacred Lotus & White Tea',
    description: 'Find inner balance with sacred lotus and white tea.',
    img: img(IMG.apothecaryFlatlay, 800, 600),
  },
  {
    id: 'jing',
    name: 'The Ritual of Jing',
    tagline: 'Chinese Herbs & Lotus Flower',
    description: 'Embrace serenity and stillness.',
    img: img(IMG.oilPourMassage, 800, 600),
  },
  {
    id: 'mehr',
    name: 'The Ritual of Mehr',
    tagline: 'Sweet Orange & Cedar Wood',
    description: 'A warm, solar energy that brings happiness.',
    img: img(IMG.oranges, 800, 600),
  },
]

// bestsellers list
export const bestsellers = [
  { id: 'p1', name: 'The Ritual of Karma Body Cream', category: 'Body', price: '€22', img: img(IMG.whiteTube, 400, 500) },
  { id: 'p2', name: 'The Ritual of Sakura Shower Foam', category: 'Bath & Shower', price: '€16', img: img(IMG.pastelBottles, 400, 500) },
  { id: 'p3', name: 'The Ritual of Namaste Glow Serum', category: 'Skincare', price: '€38', img: img(IMG.amberDropper, 400, 500) },
  { id: 'p4', name: 'The Ritual of Karma Home Perfume', category: 'Home', price: '€32', img: img(IMG.amberVials, 400, 500) },
  { id: 'p5', name: 'The Ritual of Dao Calming Candle', category: 'Home', price: '€24', img: img(IMG.towelCandle, 400, 500) },
  { id: 'p6', name: 'The Ritual of Mehr Shower Scrub', category: 'Bath & Shower', price: '€18', img: img(IMG.orangeTubesFruit, 400, 500) },
]

// trending — used by the product_recommendation variation_1
export const trending = [
  { id: 't1', name: 'The Ritual of Jing Sleep Elixir', category: 'Skincare', price: '€44', img: img(IMG.blackBottles, 400, 500) },
  { id: 't2', name: 'The Ritual of Ayurveda Body Oil', category: 'Body', price: '€28', img: img(IMG.peachFlatlay, 400, 500) },
  { id: 't3', name: 'The Ritual of Sakura Gift Set', category: 'Gifts', price: '€55', img: img(IMG.giftFlatlay, 400, 500) },
  { id: 't4', name: 'The Ritual of Karma Face Serum', category: 'Skincare', price: '€42', img: img(IMG.skincareLineup, 400, 500) },
  { id: 't5', name: 'The Ritual of Namasté Day Cream', category: 'Skincare', price: '€36', img: img(IMG.orangeTubesTulips, 400, 500) },
  { id: 't6', name: 'The Ritual of Mehr Body Wash', category: 'Bath & Shower', price: '€16', img: img(IMG.orangeTubesFruit, 400, 500) },
  { id: 't7', name: 'The Ritual of Dao Diffuser', category: 'Home', price: '€58', img: img(IMG.amberVials, 400, 500) },
  { id: 't8', name: 'The Ritual of Jing Gift Set', category: 'Gifts', price: '€65', img: img(IMG.towelCandle, 400, 500) },
]

// curated editorial — used by variation_2 (2-col layout)
export const curated = [
  { id: 'c1', name: 'The Ritual of Karma Luxury Collection', category: 'Collection', price: '€89', img: img(IMG.groomingSet, 600, 700) },
  { id: 'c2', name: 'The Ritual of Mehr Signature Set', category: 'Collection', price: '€75', img: img(IMG.orangeTubesFruit, 600, 700) },
]

export const categories = [
  { label: 'Bath & Shower', img: img(IMG.flowerBath, 600, 400), href: '/bath' },
  { label: 'Body', img: img(IMG.backMassage, 600, 400), href: '/body' },
  { label: 'Skincare', img: img(IMG.spaScene, 600, 400), href: '/skincare' },
  { label: 'Home', img: img(IMG.candles, 600, 400), href: '#home' },
]

// Category landing pages — routed at /<slug>. Visiting one fires the same ODP
// category_view signal as clicking its card, so both paths feed the audiences.
// The page hero reuses the homepage category-card image for visual continuity.
export const categoryPages = {
  bath: {
    label: 'Bath & Shower',
    eyebrow: 'The Ritual of Cleansing',
    description:
      'Turn your daily shower into a moment of mindfulness with foaming shower gels, fragrant oils and gentle scrubs inspired by ancient bathing traditions.',
    heroImg: img(IMG.flowerBath, 1600, 700),
    products: [
      { id: 'p2', name: 'The Ritual of Sakura Shower Foam', category: 'Bath & Shower', price: '€16', img: img(IMG.pastelBottles, 400, 500) },
      { id: 'p6', name: 'The Ritual of Mehr Shower Scrub', category: 'Bath & Shower', price: '€18', img: img(IMG.orangeTubesFruit, 400, 500) },
      { id: 't6', name: 'The Ritual of Mehr Body Wash', category: 'Bath & Shower', price: '€16', img: img(IMG.orangeTubesTulips, 400, 500) },
      { id: 'b1', name: 'The Ritual of Karma Shower Oil', category: 'Bath & Shower', price: '€19', img: img(IMG.amberDropper, 400, 500) },
      { id: 'b2', name: 'The Ritual of Jing Bath Foam', category: 'Bath & Shower', price: '€21', img: img(IMG.whiteTube, 400, 500) },
      { id: 'b3', name: 'The Ritual of Hammam Black Soap', category: 'Bath & Shower', price: '€14', img: img(IMG.blackBottles, 400, 500) },
    ],
  },
  body: {
    label: 'Body',
    eyebrow: 'The Ritual of Nourishment',
    description:
      'Rich creams, oils and mists that wrap your skin in comfort — a daily act of care crafted from mindfully sourced natural ingredients.',
    heroImg: img(IMG.backMassage, 1600, 700),
    products: [
      { id: 'p1', name: 'The Ritual of Karma Body Cream', category: 'Body', price: '€22', img: img(IMG.whiteTube, 400, 500) },
      { id: 't2', name: 'The Ritual of Ayurveda Body Oil', category: 'Body', price: '€28', img: img(IMG.peachFlatlay, 400, 500) },
      { id: 'bo1', name: 'The Ritual of Sakura Body Mist', category: 'Body', price: '€20', img: img(IMG.pastelBottles, 400, 500) },
      { id: 'bo2', name: 'The Ritual of Mehr Body Lotion', category: 'Body', price: '€24', img: img(IMG.orangeTubesTulips, 400, 500) },
      { id: 'bo3', name: 'The Ritual of Jing Body Butter', category: 'Body', price: '€26', img: img(IMG.towelCandle, 400, 500) },
      { id: 'bo4', name: 'The Ritual of Ayurveda Hand Balm', category: 'Body', price: '€12', img: img(IMG.handsCare, 400, 500) },
    ],
  },
  skincare: {
    label: 'Skincare',
    eyebrow: 'The Ritual of Namasté',
    description:
      'A holistic approach to natural skincare — serums, creams and elixirs that celebrate the beauty of every age.',
    heroImg: img(IMG.spaScene, 1600, 700),
    products: [
      { id: 'p3', name: 'The Ritual of Namaste Glow Serum', category: 'Skincare', price: '€38', img: img(IMG.amberDropper, 400, 500) },
      { id: 't1', name: 'The Ritual of Jing Sleep Elixir', category: 'Skincare', price: '€44', img: img(IMG.blackBottles, 400, 500) },
      { id: 't4', name: 'The Ritual of Karma Face Serum', category: 'Skincare', price: '€42', img: img(IMG.skincareLineup, 400, 500) },
      { id: 't5', name: 'The Ritual of Namasté Day Cream', category: 'Skincare', price: '€36', img: img(IMG.facialTreatment, 400, 500) },
      { id: 'sk1', name: 'The Ritual of Namasté Eye Cream', category: 'Skincare', price: '€34', img: img(IMG.facialMask, 400, 500) },
      { id: 'sk2', name: 'The Ritual of Namasté Night Balm', category: 'Skincare', price: '€40', img: img(IMG.candles, 400, 500) },
    ],
  },
}
