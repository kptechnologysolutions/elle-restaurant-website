import type { Metadata } from 'next';
import './globals.css';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import contentData from '@/content.json';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Drinks & Wine', href: '/drinks-wine' },
  { label: 'Contact Us', href: '/contact' },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellecle.com'),
  title: {
    default: 'Elle Restaurant & Lounge | Award-Winning Northern Italian & French Cuisine in Solon, OH',
    template: '%s | Elle Restaurant & Lounge - Solon, OH'
  },
  description: '⭐ Best Restaurant Solon 2024! Experience Chef Patrick Capuozzo\'s award-winning Northern Italian & French cuisine. From-scratch pasta, Portuguese mussels, craft cocktails & Bohemian chic atmosphere. Happy Hour specials! Reserve: (440) 656-3553',
  keywords: [
    'Elle Restaurant Solon', 'best restaurant Solon Ohio', 'Northern Italian restaurant Cleveland', 'French cuisine Solon', 'Chef Patrick Capuozzo', 'Mediterranean dining Cleveland area', 'Portuguese mussels Solon', 'Elle burger Solon', 'craft cocktails Ohio', 'happy hour Solon', 'fine dining Cleveland suburbs', 'romantic dinner Solon', 'date night restaurant Ohio', 'from scratch cooking Solon', 'wine bar Solon', 'Italian pasta Cleveland', 'French restaurant Ohio', 'Bohemian restaurant', 'Michael Symon trained chef', 'gluten-free dining Solon', 'vegan options Cleveland', 'private dining Solon', 'catering Solon Ohio', 'business lunch Solon', 'special occasion dining', 'artisan food Cleveland', 'farm to table Solon', 'seasonal menu Ohio', 'wine pairing dinner', 'Cleveland fine dining'
  ].join(', '),
  authors: [{ name: 'Elle Restaurant & Lounge' }],
  creator: 'Elle Restaurant & Lounge',
  publisher: 'Elle Restaurant & Lounge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Elle Restaurant & Lounge | Award-Winning Northern Italian & French Cuisine in Solon, OH',
    description: '⭐ Solon\'s #1 Restaurant! Chef Patrick Capuozzo\'s from-scratch Northern Italian & French cuisine. Portuguese mussels, handcrafted pasta, legendary Elle burger. Happy Hour Tue-Thu 4-6pm, Fri 4-5pm. Reserve now!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ellecle.com',
    siteName: 'Elle Restaurant & Lounge',
    images: [
      {
        url: '/images/elle-bohemian-woman-art.png',
        width: 1200,
        height: 630,
        alt: 'Elle Restaurant & Lounge - Northern Italian & French Cuisine in Solon, OH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elle Restaurant & Lounge | Award-Winning Italian & French in Solon',
    description: '⭐ Solon\'s #1 Restaurant! From-scratch Mediterranean cuisine by Chef Patrick Capuozzo. Portuguese mussels, craft cocktails, Bohemian chic atmosphere.',
    images: ['/images/elle-bohemian-woman-art.png'],
    creator: '@ellerestaruantlounge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': 'https://www.ellecle.com/#restaurant',
    name: 'Elle Restaurant & Lounge',
    alternateName: ['Elle Solon', 'Elle Restaurant', 'Elle Lounge'],
    description: 'Award-winning Northern Italian & French cuisine restaurant in Solon, Ohio, featuring from-scratch Mediterranean-inspired dishes by Chef Patrick Capuozzo in an elegant Bohemian chic atmosphere. Winner: Best Restaurant Solon 2024.',
    image: [
      'https://www.ellecle.com/images/elle-bohemian-woman-art.png',
      'https://www.ellecle.com/images/elle-food-plating.jpg',
      'https://www.ellecle.com/images/elle-hero-interior.jpg'
    ],
    logo: 'https://www.ellecle.com/images/elle-bohemian-woman-art.png',
    telephone: '+1-440-656-3553',
    email: 'info@ellecle.com',
    url: 'https://www.ellecle.com',
    sameAs: [
      'https://instagram.com/ellerestaruantlounge',
      'https://facebook.com/ellerestaruantlounge',
      'https://www.yelp.com/biz/elle-restaurant-solon',
      'https://www.opentable.com/elle-restaurant-solon'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33730 Bainbridge Rd',
      addressLocality: 'Solon',
      addressRegion: 'OH',
      postalCode: '44139',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '16:00',
        closes: '21:00',
        validFrom: '2024-01-01',
        validThrough: '2024-12-31'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '16:00',
        closes: '22:00',
        validFrom: '2024-01-01',
        validThrough: '2024-12-31'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '17:00',
        closes: '22:00',
        validFrom: '2024-01-01',
        validThrough: '2024-12-31'
      }
    ],
    specialOpeningHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '18:00',
      validFrom: '2024-01-01',
      validThrough: '2024-12-31',
      description: 'Happy Hour - 25% off wine bottles, $2 off cocktails'
    },
    servesCuisine: ['Northern Italian', 'French', 'Mediterranean', 'Contemporary American'],
    priceRange: '$$$',
    hasMenu: 'https://www.ellecle.com/menu',
    acceptsReservations: true,
    reservationPolicy: 'Reservations recommended',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3895,
      longitude: -81.4412
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sarah M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Chef Patrick\'s Portuguese mussels are absolutely divine! The wine reduction is perfect and the atmosphere is so romantic.',
        datePublished: '2024-08-15'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Michael R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Best Italian food in the Cleveland area. The handmade pasta is incredible and the Elle burger is legendary.',
        datePublished: '2024-08-10'
      }
    ],
    founder: [
      { '@type': 'Person', name: 'Izzy Schachner' },
      { '@type': 'Person', name: 'Jay Leitson' }
    ],
    employee: {
      '@type': 'Person',
      name: 'Patrick Capuozzo',
      jobTitle: 'Executive Chef',
      alumniOf: 'Michael Symon Restaurant Group',
      knowsAbout: ['Northern Italian Cuisine', 'French Cooking', 'Mediterranean Flavors'],
      award: 'Trained under Celebrity Chef Michael Symon'
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private Dining', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Happy Hour', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wine Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Craft Cocktails', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Romantic Atmosphere', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Date Night Friendly', value: true }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Happy Hour Special',
        description: '25% off wine bottles, $2 off cocktails, $8 appetizers',
        validFrom: '2024-01-01',
        validThrough: '2024-12-31',
        availabilityStarts: '16:00',
        availabilityEnds: '18:00',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: 'tel:+1-440-656-3553',
      name: 'Make a Reservation'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.ellecle.com/#localbusiness',
    name: 'Elle Restaurant & Lounge',
    description: 'Solon\'s premier dining destination for Northern Italian & French cuisine',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33730 Bainbridge Rd',
      addressLocality: 'Solon',
      addressRegion: 'OH',
      postalCode: '44139'
    },
    areaServed: ['Solon', 'Cleveland', 'Beachwood', 'Chagrin Falls', 'Orange', 'Pepper Pike', 'Moreland Hills'],
    serviceType: 'Restaurant'
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <HeaderNav 
          logo="Elle Restaurant & Lounge" 
          logoImage={contentData.images.logo}
          links={navLinks} 
        />
        <main id="main-content">{children}</main>
        <Footer
          businessName="Elle Restaurant & Lounge"
          address={['33730 Bainbridge Rd', 'Solon, OH 44139']}
          phone="tel:+1-440-656-3553"
          hours={['Tue–Thu: 4pm–9pm', 'Fri: 4pm–10pm', 'Sat: 5pm–10pm', 'Closed Mon & Sun']}
          privacyHref="/privacy-policy"
          creditText="Design by 56 Restaurant Group"
        />
      </body>
    </html>
  );
}