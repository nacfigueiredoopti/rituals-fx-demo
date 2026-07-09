import { useState, useEffect } from 'react'
import { useFlag } from './useFlag.js'
import { navItems, collections, bestsellers, trending, curated, categories, categoryPages } from './data.js'
import './App.css'

// Minimal path router — Netlify's SPA fallback serves index.html for every
// route, so /bath, /body and /skincare work on direct load and refresh too.
function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo(0, 0)
  }
  return [path, navigate]
}

// Rituals wordmark — original SVG for demo purposes
function RitualsLogo({ navigate }) {
  return (
    <a
      className="logo"
      href="/"
      aria-label="Rituals"
      onClick={(e) => {
        if (navigate) {
          e.preventDefault()
          navigate('/')
        }
      }}
    >
      <svg className="logo__svg" viewBox="0 0 200 36" role="img" aria-label="Rituals">
        <text
          x="0" y="28"
          fontFamily="'Garamond', 'Georgia', serif"
          fontWeight="400"
          fontSize="24"
          letterSpacing="10"
          fill="#f5f0e8"
        >
          RITUALS
        </text>
      </svg>
    </a>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function Header({ promoBanner, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(null)

  const showBanner = promoBanner?.decision?.enabled &&
    promoBanner.decision.variables?.show_banner === 'true'
  const bannerText = promoBanner?.decision?.variables?.banner_text || ''
  const bannerStyle = promoBanner?.decision?.variables?.banner_style || 'minimal'

  return (
    <>
      {showBanner && (
        <div className={`promo-banner promo-banner--${bannerStyle}`}>
          <span>{bannerText}</span>
        </div>
      )}
      <header className="header">
        <div className="header__inner">
          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

          <RitualsLogo navigate={navigate} />

          <nav className="nav" role="navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav__link ${activeNav === item.label ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveNav(item.label)
                  if (item.href.startsWith('/')) navigate(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="icon-btn" aria-label="Search"><SearchIcon /></button>
            <button className="icon-btn" aria-label="Account"><UserIcon /></button>
            <button className="icon-btn icon-btn--bag" aria-label="Shopping bag">
              <BagIcon />
              <span className="bag-count">0</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="header__mobile-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="mobile-nav__link"
                onClick={(e) => {
                  setMenuOpen(false)
                  if (item.href.startsWith('/')) {
                    e.preventDefault()
                    navigate(item.href)
                  }
                }}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}

function Hero({ heroFlag, ctaFlag }) {
  const layoutStyle = heroFlag?.decision?.variables?.layout_style || 'cinematic'
  const headline = heroFlag?.decision?.variables?.headline || 'Find Your Ritual'
  const ctaText = ctaFlag?.decision?.variables?.button_text || 'Shop Now'

  const heroImages = {
    cinematic: 'https://picsum.photos/seed/rituals-hero-cinematic/1920/1080',
    split: 'https://picsum.photos/seed/rituals-hero-split/1200/800',
    minimal: 'https://picsum.photos/seed/rituals-hero-minimal/1600/900',
  }

  if (layoutStyle === 'split') {
    return (
      <section className="hero hero--split">
        <div className="hero__split-image">
          <img src={heroImages.split} alt="Rituals collection" />
        </div>
        <div className="hero__split-content">
          <span className="hero__eyebrow">New Collection</span>
          <h1 className="hero__title hero__title--split">{headline}</h1>
          <p className="hero__sub">Discover handcrafted wellness rituals inspired by ancient Eastern traditions.</p>
          <a href="#collections" className="btn btn--primary">{ctaText}</a>
          <a href="#collections" className="btn btn--ghost">Explore All Collections</a>
        </div>
      </section>
    )
  }

  if (layoutStyle === 'minimal') {
    return (
      <section className="hero hero--minimal">
        <div className="hero__minimal-bg" style={{ backgroundImage: `url(${heroImages.minimal})` }} />
        <div className="hero__minimal-overlay" />
        <div className="hero__minimal-content">
          <span className="hero__eyebrow">The Art of Living Well</span>
          <h1 className="hero__title hero__title--minimal">{headline}</h1>
          <a href="#collections" className="btn btn--outline-light">{ctaText}</a>
        </div>
      </section>
    )
  }

  return (
    <section className="hero hero--cinematic">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImages.cinematic})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="hero__eyebrow">Inspired by Ancient Traditions</span>
        <h1 className="hero__title">{headline}</h1>
        <p className="hero__sub">Transform your everyday routine into a meaningful ritual.</p>
        <div className="hero__ctas">
          <a href="#collections" className="btn btn--primary">{ctaText}</a>
          <a href="#collections" className="btn btn--ghost-light">View All Collections</a>
        </div>
      </div>
    </section>
  )
}

// ODP: category interest signal. `action` is the standard field ODP real-time
// segments filter on (event.action) — see the audience definitions in ODP.
function trackCategoryView(category, location = 'category_grid') {
  window.zaius?.event('category_view', {
    action: category,
    category,
    location,
  })
}

function CategoryStrip({ navigate }) {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a key={cat.label} href={cat.href} className="category-card"
              onClick={(e) => {
                trackCategoryView(cat.label)
                if (cat.href.startsWith('/')) {
                  e.preventDefault()
                  navigate(cat.href)
                }
              }}>
              <div className="category-card__img-wrap">
                <img src={cat.img} alt={cat.label} className="category-card__img" />
              </div>
              <span className="category-card__label">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Category landing page — /bath, /body, /skincare. Fires the same ODP
// category_view signal as the homepage grid so both paths feed the audiences.
function CategoryPage({ slug, ctaText, navigate }) {
  const page = categoryPages[slug]

  useEffect(() => {
    if (page) trackCategoryView(page.label, 'category_page')
  }, [page])

  if (!page) return null

  return (
    <>
      <section className="category-hero">
        <div className="category-hero__bg" style={{ backgroundImage: `url(${page.heroImg})` }} />
        <div className="category-hero__overlay" />
        <div className="category-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
            <span className="breadcrumb__sep">/</span>
            <span>{page.label}</span>
          </nav>
          <span className="hero__eyebrow">{page.eyebrow}</span>
          <h1 className="hero__title category-hero__title">{page.label}</h1>
          <p className="category-hero__desc">{page.description}</p>
        </div>
      </section>

      <section className="products category-products">
        <div className="container">
          <div className="products__header">
            <h2 className="section-title">{page.label} Collection</h2>
          </div>
          <div className="products__grid products__grid--cols-3">
            {page.products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-card__img-wrap">
                  <img src={product.img} alt={product.name} className="product-card__img" />
                  <button className="product-card__quick-add">Add to Bag</button>
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">{product.category}</span>
                  <h3 className="product-card__name">{product.name}</h3>
                  <span className="product-card__price">{product.price}</span>
                  <a href="#" className="btn btn--product">{ctaText}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhilosophyStrip />
    </>
  )
}

function FeaturedCollections({ ctaText }) {
  return (
    <section className="featured-collections" id="collections">
      <div className="container">
        <h2 className="section-title">Featured Collections</h2>
        <div className="collections__grid">
          {collections.map((col) => (
            <article key={col.id} className="collection-card">
              <div className="collection-card__img-wrap">
                <img src={col.img} alt={col.name} className="collection-card__img" />
              </div>
              <div className="collection-card__body">
                <span className="collection-card__tagline">{col.tagline}</span>
                <h3 className="collection-card__name">{col.name}</h3>
                <p className="collection-card__desc">{col.description}</p>
                <a href="#" className="btn btn--secondary">{ctaText}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductGrid({ recFlag, ctaText }) {
  const algorithm = recFlag?.decision?.variables?.algorithm || 'bestsellers'
  const gridCols = parseInt(recFlag?.decision?.variables?.grid_columns || '3', 10)

  let products, sectionLabel
  if (algorithm === 'trending') {
    products = trending
    sectionLabel = 'Trending Now'
  } else if (algorithm === 'curated') {
    products = curated
    sectionLabel = 'Curated for You'
  } else {
    products = bestsellers
    sectionLabel = 'Our Bestsellers'
  }

  const variationKey = recFlag?.decision?.variationKey

  return (
    <section className="products" id="bestsellers">
      <div className="container">
        <div className="products__header">
          <h2 className="section-title">{sectionLabel}</h2>
          {variationKey && <span className="variation-badge">{variationKey}</span>}
        </div>
        <div className={`products__grid products__grid--cols-${gridCols}`}>
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__img-wrap">
                <img src={product.img} alt={product.name} className="product-card__img" />
                <button className="product-card__quick-add">Add to Bag</button>
              </div>
              <div className="product-card__body">
                <span className="product-card__category">{product.category}</span>
                <h3 className="product-card__name">{product.name}</h3>
                <span className="product-card__price">{product.price}</span>
                <a href="#" className="btn btn--product">{ctaText}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophyStrip() {
  return (
    <section className="philosophy">
      <div className="container philosophy__inner">
        <div className="philosophy__block">
          <h3 className="philosophy__heading">Ancient Traditions</h3>
          <p className="philosophy__text">Every product is inspired by centuries-old rituals from Asia, India, and beyond.</p>
        </div>
        <div className="philosophy__divider" />
        <div className="philosophy__block">
          <h3 className="philosophy__heading">Conscious Beauty</h3>
          <p className="philosophy__text">We are proud to be a Certified B Corporation, committed to people and planet.</p>
        </div>
        <div className="philosophy__divider" />
        <div className="philosophy__block">
          <h3 className="philosophy__heading">Mindful Ingredients</h3>
          <p className="philosophy__text">Natural ingredients, responsibly sourced, delivered with love.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <RitualsLogo />
          <p className="footer__tagline">The Art of Living Well</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Help</h4>
            <a href="#">FAQs</a>
            <a href="#">Track My Order</a>
            <a href="#">Returns</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#">About Rituals</a>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="footer__col">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Demo built with Optimizely Feature Experimentation</p>
      </div>
    </footer>
  )
}

function FlagStatusOverlay({ heroFlag, ctaFlag, promoFlag, recFlag }) {
  const [collapsed, setCollapsed] = useState(false)

  const flags = [
    { key: 'hero_layout', flag: heroFlag },
    { key: 'cta_label', flag: ctaFlag },
    { key: 'promo_banner', flag: promoFlag },
    { key: 'product_recommendation', flag: recFlag },
  ]

  return (
    <div className={`flag-overlay ${collapsed ? 'flag-overlay--collapsed' : ''}`}>
      <button className="flag-overlay__toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'FX' : 'Optimizely FX'}
      </button>
      {!collapsed && (
        <div className="flag-overlay__body">
          {flags.map(({ key, flag }) => (
            <div key={key} className="flag-overlay__row">
              <span className="flag-overlay__key">{key}</span>
              <span className={`flag-overlay__variation ${flag?.decision?.enabled ? 'flag-overlay__variation--on' : ''}`}>
                {flag?.ready ? (flag.decision?.variationKey || 'off') : 'loading'}
              </span>
            </div>
          ))}
          <p className="flag-overlay__hint">Changes in dashboard refresh in ~5s</p>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [path, navigate] = usePath()
  const heroFlag = useFlag('hero_layout')
  const ctaFlag = useFlag('cta_label')
  const promoFlag = useFlag('promo_banner')
  const recFlag = useFlag('product_recommendation')

  const ctaText = ctaFlag?.decision?.variables?.button_text || 'Shop Now'
  const slug = path.replace(/^\/+|\/+$/g, '')
  const isCategoryPage = Boolean(categoryPages[slug])

  return (
    <div className="app">
      <FlagStatusOverlay
        heroFlag={heroFlag}
        ctaFlag={ctaFlag}
        promoFlag={promoFlag}
        recFlag={recFlag}
      />
      <Header promoBanner={promoFlag} navigate={navigate} />
      <main>
        {isCategoryPage ? (
          <CategoryPage slug={slug} ctaText={ctaText} navigate={navigate} />
        ) : (
          <>
            <Hero heroFlag={heroFlag} ctaFlag={ctaFlag} />
            <CategoryStrip navigate={navigate} />
            <FeaturedCollections ctaText={ctaText} />
            <ProductGrid recFlag={recFlag} ctaText={ctaText} />
            <PhilosophyStrip />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
