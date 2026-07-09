// Rituals demo — product catalogue data
// All imagery uses picsum.photos with stable seeds (no copyrighted assets)

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
    img: 'https://picsum.photos/seed/rituals-karma/800/600',
  },
  {
    id: 'jing',
    name: 'The Ritual of Jing',
    tagline: 'Chinese Herbs & Lotus Flower',
    description: 'Embrace serenity and stillness.',
    img: 'https://picsum.photos/seed/rituals-jing/800/600',
  },
  {
    id: 'mehr',
    name: 'The Ritual of Mehr',
    tagline: 'Sweet Orange & Cedar Wood',
    description: 'A warm, solar energy that brings happiness.',
    img: 'https://picsum.photos/seed/rituals-mehr/800/600',
  },
]

// bestsellers list
export const bestsellers = [
  { id: 'p1', name: 'The Ritual of Karma Body Cream', category: 'Body', price: '€22', img: 'https://picsum.photos/seed/rituals-p1/400/500' },
  { id: 'p2', name: 'The Ritual of Sakura Shower Foam', category: 'Bath & Shower', price: '€16', img: 'https://picsum.photos/seed/rituals-p2/400/500' },
  { id: 'p3', name: 'The Ritual of Namaste Glow Serum', category: 'Skincare', price: '€38', img: 'https://picsum.photos/seed/rituals-p3/400/500' },
  { id: 'p4', name: 'The Ritual of Karma Home Perfume', category: 'Home', price: '€32', img: 'https://picsum.photos/seed/rituals-p4/400/500' },
  { id: 'p5', name: 'The Ritual of Dao Calming Candle', category: 'Home', price: '€24', img: 'https://picsum.photos/seed/rituals-p5/400/500' },
  { id: 'p6', name: 'The Ritual of Mehr Shower Scrub', category: 'Bath & Shower', price: '€18', img: 'https://picsum.photos/seed/rituals-p6/400/500' },
]

// trending — used by the product_recommendation variation_1
export const trending = [
  { id: 't1', name: 'The Ritual of Jing Sleep Elixir', category: 'Skincare', price: '€44', img: 'https://picsum.photos/seed/rituals-t1/400/500' },
  { id: 't2', name: 'The Ritual of Ayurveda Body Oil', category: 'Body', price: '€28', img: 'https://picsum.photos/seed/rituals-t2/400/500' },
  { id: 't3', name: 'The Ritual of Sakura Gift Set', category: 'Gifts', price: '€55', img: 'https://picsum.photos/seed/rituals-t3/400/500' },
  { id: 't4', name: 'The Ritual of Karma Face Serum', category: 'Skincare', price: '€42', img: 'https://picsum.photos/seed/rituals-t4/400/500' },
  { id: 't5', name: 'The Ritual of Namasté Day Cream', category: 'Skincare', price: '€36', img: 'https://picsum.photos/seed/rituals-t5/400/500' },
  { id: 't6', name: 'The Ritual of Mehr Body Wash', category: 'Bath & Shower', price: '€16', img: 'https://picsum.photos/seed/rituals-t6/400/500' },
  { id: 't7', name: 'The Ritual of Dao Diffuser', category: 'Home', price: '€58', img: 'https://picsum.photos/seed/rituals-t7/400/500' },
  { id: 't8', name: 'The Ritual of Jing Gift Set', category: 'Gifts', price: '€65', img: 'https://picsum.photos/seed/rituals-t8/400/500' },
]

// curated editorial — used by variation_2 (2-col layout)
export const curated = [
  { id: 'c1', name: 'The Ritual of Karma Luxury Collection', category: 'Collection', price: '€89', img: 'https://picsum.photos/seed/rituals-c1/600/700' },
  { id: 'c2', name: 'The Ritual of Mehr Signature Set', category: 'Collection', price: '€75', img: 'https://picsum.photos/seed/rituals-c2/600/700' },
]

export const categories = [
  { label: 'Bath & Shower', img: 'https://picsum.photos/seed/rituals-cat1/600/400', href: '/bath' },
  { label: 'Body', img: 'https://picsum.photos/seed/rituals-cat2/600/400', href: '/body' },
  { label: 'Skincare', img: 'https://picsum.photos/seed/rituals-cat3/600/400', href: '/skincare' },
  { label: 'Home', img: 'https://picsum.photos/seed/rituals-cat4/600/400', href: '#home' },
]

// Category landing pages — routed at /<slug>. Visiting one fires the same ODP
// category_view signal as clicking its card, so both paths feed the audiences.
export const categoryPages = {
  bath: {
    label: 'Bath & Shower',
    eyebrow: 'The Ritual of Cleansing',
    description:
      'Turn your daily shower into a moment of mindfulness with foaming shower gels, fragrant oils and gentle scrubs inspired by ancient bathing traditions.',
    heroImg: 'https://picsum.photos/seed/rituals-bath-hero/1600/700',
    products: [
      { id: 'p2', name: 'The Ritual of Sakura Shower Foam', category: 'Bath & Shower', price: '€16', img: 'https://picsum.photos/seed/rituals-p2/400/500' },
      { id: 'p6', name: 'The Ritual of Mehr Shower Scrub', category: 'Bath & Shower', price: '€18', img: 'https://picsum.photos/seed/rituals-p6/400/500' },
      { id: 't6', name: 'The Ritual of Mehr Body Wash', category: 'Bath & Shower', price: '€16', img: 'https://picsum.photos/seed/rituals-t6/400/500' },
      { id: 'b1', name: 'The Ritual of Karma Shower Oil', category: 'Bath & Shower', price: '€19', img: 'https://picsum.photos/seed/rituals-b1/400/500' },
      { id: 'b2', name: 'The Ritual of Jing Bath Foam', category: 'Bath & Shower', price: '€21', img: 'https://picsum.photos/seed/rituals-b2/400/500' },
      { id: 'b3', name: 'The Ritual of Hammam Black Soap', category: 'Bath & Shower', price: '€14', img: 'https://picsum.photos/seed/rituals-b3/400/500' },
    ],
  },
  body: {
    label: 'Body',
    eyebrow: 'The Ritual of Nourishment',
    description:
      'Rich creams, oils and mists that wrap your skin in comfort — a daily act of care crafted from mindfully sourced natural ingredients.',
    heroImg: 'https://picsum.photos/seed/rituals-body-hero/1600/700',
    products: [
      { id: 'p1', name: 'The Ritual of Karma Body Cream', category: 'Body', price: '€22', img: 'https://picsum.photos/seed/rituals-p1/400/500' },
      { id: 't2', name: 'The Ritual of Ayurveda Body Oil', category: 'Body', price: '€28', img: 'https://picsum.photos/seed/rituals-t2/400/500' },
      { id: 'bo1', name: 'The Ritual of Sakura Body Mist', category: 'Body', price: '€20', img: 'https://picsum.photos/seed/rituals-bo1/400/500' },
      { id: 'bo2', name: 'The Ritual of Mehr Body Lotion', category: 'Body', price: '€24', img: 'https://picsum.photos/seed/rituals-bo2/400/500' },
      { id: 'bo3', name: 'The Ritual of Jing Body Butter', category: 'Body', price: '€26', img: 'https://picsum.photos/seed/rituals-bo3/400/500' },
      { id: 'bo4', name: 'The Ritual of Ayurveda Hand Balm', category: 'Body', price: '€12', img: 'https://picsum.photos/seed/rituals-bo4/400/500' },
    ],
  },
  skincare: {
    label: 'Skincare',
    eyebrow: 'The Ritual of Namasté',
    description:
      'A holistic approach to natural skincare — serums, creams and elixirs that celebrate the beauty of every age.',
    heroImg: 'https://picsum.photos/seed/rituals-skincare-hero/1600/700',
    products: [
      { id: 'p3', name: 'The Ritual of Namaste Glow Serum', category: 'Skincare', price: '€38', img: 'https://picsum.photos/seed/rituals-p3/400/500' },
      { id: 't1', name: 'The Ritual of Jing Sleep Elixir', category: 'Skincare', price: '€44', img: 'https://picsum.photos/seed/rituals-t1/400/500' },
      { id: 't4', name: 'The Ritual of Karma Face Serum', category: 'Skincare', price: '€42', img: 'https://picsum.photos/seed/rituals-t4/400/500' },
      { id: 't5', name: 'The Ritual of Namasté Day Cream', category: 'Skincare', price: '€36', img: 'https://picsum.photos/seed/rituals-t5/400/500' },
      { id: 'sk1', name: 'The Ritual of Namasté Eye Cream', category: 'Skincare', price: '€34', img: 'https://picsum.photos/seed/rituals-sk1/400/500' },
      { id: 'sk2', name: 'The Ritual of Namasté Night Balm', category: 'Skincare', price: '€40', img: 'https://picsum.photos/seed/rituals-sk2/400/500' },
    ],
  },
}
