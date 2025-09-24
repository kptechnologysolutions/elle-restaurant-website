import HeroBanner from '@/components/HeroBanner';
import FeatureTile from '@/components/FeatureTile';
import JoinCTA from '@/components/JoinCTA';
import PressStrip from '@/components/PressStrip';
import ImageGrid from '@/components/ImageGrid';
import ReservationWidget from '@/components/ReservationWidget';
import OnlineOrdering from '@/components/OnlineOrdering';
import contentData from '@/content.json';

const pressItems = [
  {
    source: "Cleveland.com",
    quote: "Elle's award-winning kitchen brings exceptional Mediterranean expertise to Solon's dining scene",
  },
  {
    source: "Cleveland Jewish News",
    quote: "Elle's from-scratch Mediterranean cuisine elevates Solon as a dining destination",
  },
  {
    source: "Solon Community",
    quote: "The Bohemian chic atmosphere and craft cocktails make Elle a sophisticated local gem",
  },
];

const galleryImages = contentData.images.gallery.map((src, index) => ({
  src,
  alt: `Elle Restaurant - Authentic dining experience ${index + 1}`
}));

export default function HomePage() {
  return (
    <>
      <HeroBanner
        titleLine1="Where Every Bite"
        titleLine2="Tells a Story"
        subtext="Experience our award-winning Mediterranean-inspired cuisine featuring fresh, seasonal dishes with an Italian foundation. Every dish prepared from scratch with love by our talented culinary team in our Bohemian chic atmosphere."
        primaryCTA={{
          label: "Reserve Your Table",
          href: contentData.business.phone
        }}
        bgImage={contentData.images.hero}
        bgAlt="Elle Restaurant - Bohemian woman artwork"
      />

      {/* Bohemian Artisan Creations */}
      <section className="py-s-12 md:py-s-24 bohemian-tapestry relative overflow-hidden">
        <div className="absolute inset-0 bohemian-pattern opacity-10"></div>
        <div className="absolute top-8 left-8 text-6xl text-accent-1/20 font-display rotate-12 hidden lg:block">🍇</div>
        <div className="absolute bottom-12 right-12 text-8xl text-accent-warm/15 font-display -rotate-6 hidden lg:block">🌿</div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-s-6 relative z-10">
          <div className="text-center mb-8 md:mb-s-16">
            <div className="bohemian-border-ornament mx-auto mb-4 md:mb-6"></div>
            <h2 className="text-2xl md:text-h2 font-display text-accent-1 mb-3 md:mb-4 bohemian-text-shadow">Artisan Creations</h2>
            <p className="accent-text text-lg md:text-xl italic">~ Where tradition meets wanderlust ~</p>
            <div className="bohemian-divider mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-s-10">
            <div className="bohemian-card group">
              <div className="bohemian-card-header">
                <div className="text-5xl mb-3 group-hover:animate-bounce-subtle">🧀</div>
                <div className="bohemian-ornament-small"></div>
              </div>
              <h3 className="text-h3 font-display text-accent-1 mb-4">Burrata Tuscany</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                Creamy burrata with basil pesto, roasted red peppers, pine nuts, pomegranate balsamic, and grilled ciabatta.
              </p>
              <div className="bohemian-tag">Italian Classic</div>
            </div>
            
            <div className="bohemian-card group" style={{animationDelay: '0.2s'}}>
              <div className="bohemian-card-header">
                <div className="text-5xl mb-3 group-hover:animate-bounce-subtle">🦪</div>
                <div className="bohemian-ornament-small"></div>
              </div>
              <h3 className="text-h3 font-display text-accent-1 mb-4">Mussels di Zoppa</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                PEI mussels with linguica sausage in roasted tomato broth, fresh herbs, lemon, and toasted ciabatta with pesto.
              </p>
              <div className="bohemian-tag">House Signature</div>
            </div>
            
            <div className="bohemian-card group" style={{animationDelay: '0.4s'}}>
              <div className="bohemian-card-header">
                <div className="text-5xl mb-3 group-hover:animate-bounce-subtle">🐟</div>
                <div className="bohemian-ornament-small"></div>
              </div>
              <h3 className="text-h3 font-display text-accent-1 mb-4">Grilled Branzino</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                Whole Mediterranean sea bass stuffed with fig & walnut filling, almond romesco, toasted pastina, pomegranate seeds.
              </p>
              <div className="bohemian-tag">Mediterranean</div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Elle Section */}
      <section className="py-s-16 md:py-s-32 bohemian-explorer-bg relative overflow-hidden">
        <div className="absolute inset-0 bohemian-explorer-pattern opacity-8"></div>
        <div className="absolute top-20 left-20 text-accent-1/10 text-6xl md:text-8xl font-display rotate-45 hidden xl:block">🍷</div>
        <div className="absolute bottom-16 right-16 text-accent-warm/10 text-7xl md:text-9xl font-display -rotate-12 hidden xl:block">🌿</div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-s-6 relative z-10">
          <div className="text-center mb-8 md:mb-s-24 fade-in-up">
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent-1/30 shadow-2xl">
                <img 
                  src={contentData.images.hero} 
                  alt="Elle Restaurant" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-1/20 to-transparent"></div>
              </div>
            </div>
            <span className="accent-text text-xl md:text-2xl mb-4 md:mb-6 block bohemian-script">~ Journey of the Senses ~</span>
            <h2 className="text-3xl md:text-h2 font-display mb-4 md:mb-6 bohemian-text-shadow">Discover Elle</h2>
            <div className="bohemian-journey-divider mx-auto mb-6 md:mb-8"></div>
            <p className="text-ink max-w-4xl mx-auto text-base md:text-lg leading-relaxed px-4 md:px-0">
              Experience our culinary excellence where every dish tells a story of fresh, seasonal ingredients prepared from scratch with love. Our talented culinary team creates Mediterranean-inspired dishes that honor traditional Italian foundations while embracing modern culinary innovation in our bohemian sanctuary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-s-12">
            <div className="bohemian-exploration-tile group">
              <FeatureTile
                img={contentData.images.menuTile}
                imgAlt="Elle Restaurant food dishes"
                label="Menu"
                href="/menu"
              />
              <div className="bohemian-tile-ornament mt-2">
                <span className="text-accent-1 text-xs md:text-sm italic">Culinary Adventures</span>
              </div>
            </div>
            
            <div className="bohemian-exploration-tile group" style={{animationDelay: '0.2s'}}>
              <FeatureTile
                img={contentData.images.drinksTile}
                imgAlt="Elle Restaurant craft cocktails"
                label="Drinks"
                href="/drinks-wine"
              />
              <div className="bohemian-tile-ornament mt-2">
                <span className="text-accent-1 text-xs md:text-sm italic">Liquid Poetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Excellence Section */}
      <section className="py-s-16 md:py-s-32 bohemian-story-bg relative overflow-hidden">
        <div className="absolute inset-0 bohemian-story-pattern opacity-5"></div>
        <div className="absolute top-16 right-16 text-accent-1/10 text-6xl md:text-9xl font-display rotate-12 hidden xl:block">🍃</div>
        <div className="absolute bottom-20 left-20 text-accent-warm/10 text-5xl md:text-7xl font-display -rotate-12 hidden xl:block">✨</div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-s-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-s-20 items-center">
            <div className="order-2 lg:order-1 fade-in-up">
              <div className="bohemian-story-ornament mb-6"></div>
              <span className="accent-text text-xl md:text-2xl mb-4 block bohemian-script">~ Culinary Artistry ~</span>
              <h2 className="text-3xl md:text-h2 font-display text-accent-1 mb-6 bohemian-text-shadow">Our Kitchen's Excellence</h2>
              <div className="bohemian-flourish-line mb-8"></div>
              
              <p className="text-ink mb-6 leading-relaxed text-base md:text-lg">
                Our talented culinary team brings passion and expertise to every dish, crafting innovative Mediterranean-inspired creations that honor traditional Italian foundations while embracing seasonal, local ingredients.
              </p>
              
              <div className="bohemian-quote-box mb-8">
                <div className="bohemian-quote-marks">"</div>
                <p className="accent-text text-base md:text-lg italic leading-relaxed">
                  Every dish tells a story of fresh, seasonal ingredients prepared from scratch with love. Our kitchen brings bright, vibrant flavors that celebrate the Mediterranean spirit.
                </p>
                <div className="bohemian-quote-attribution">~ Elle Kitchen Team</div>
              </div>
              
              <p className="text-muted-ink mb-8 leading-relaxed text-sm md:text-base">
                At Elle, our kitchen's commitment to excellence shines through in every plate. From our signature Portuguese mussels to our handmade pasta, each dish reflects our philosophy of honoring the maternal, womanly essence through nurturing, carefully crafted cuisine.
              </p>
              
              <div className="bohemian-signature-line">
                <div className="bohemian-flourish-left"></div>
                <span className="accent-text italic px-4 text-sm md:text-base">"Made from scratch with love"</span>
                <div className="bohemian-flourish-right"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="bohemian-frame">
                  <div className="bohemian-photo-wrapper">
                    <img 
                      src={contentData.images.about.kitchen} 
                      alt="Elle's culinary excellence"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="bohemian-photo-overlay"></div>
                  </div>
                  <div className="bohemian-frame-corners"></div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bohemian-floating-element">
                  <div className="text-3xl md:text-4xl text-accent-1 animate-float">🎨</div>
                </div>
                <div className="absolute -top-6 -right-6 bohemian-floating-element" style={{animationDelay: '1s'}}>
                  <div className="text-2xl md:text-3xl text-accent-warm animate-float">🌿</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-s-16 md:py-s-24 bg-gradient-to-br from-accent-1/10 to-accent-warm/10 relative overflow-hidden">
        <div className="absolute inset-0 bohemian-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-s-6 relative z-10 text-center">
          <div className="bohemian-border-ornament mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">Upcoming Events</h2>
          <p className="accent-text text-lg md:text-xl italic mb-8">~ Special Occasions at Elle ~</p>
          <div className="bohemian-divider mx-auto mb-12"></div>
          
          <div className="bg-secondary-bg/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-accent-1/30">
            <div className="text-5xl md:text-6xl mb-6 animate-float">🌟</div>
            <h3 className="text-2xl md:text-3xl font-display text-accent-1 mb-4">Coming Soon</h3>
            <p className="text-ink text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Stay tuned for exciting upcoming events, wine tastings, special culinary dinners, and live entertainment. 
              Follow us on social media or join our mailing list to be the first to know about our exclusive events.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contentData.marketing.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center">
                <span className="mr-2">Follow on Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Teaser */}
      <section className="py-s-12 md:py-s-24 bg-secondary-bg/30">
        <div className="max-w-4xl mx-auto px-4 md:px-s-6 text-center">
          <h2 className="text-2xl md:text-h2 font-display font-light mb-6 md:mb-8 text-accent-1">The Elle Experience</h2>
          <p className="text-base md:text-lg text-ink mb-8 md:mb-12 leading-relaxed">
            Step into Elle's Bohemian chic atmosphere created by restaurateurs Jay Leitson and Izzy Schachner. Named "Elle" meaning "her" in French, our restaurant pays homage to all that is maternal, womanly and goddess-like, featuring lush fabrics, sparkly chandeliers and handsome furniture in an eclectic and inviting space.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-s-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🕯️</div>
              <p className="text-sm accent-text">Intimate Ambiance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🍷</div>
              <p className="text-sm accent-text">Curated Wines</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎵</div>
              <p className="text-sm accent-text">Live Jazz Nights</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">💫</div>
              <p className="text-sm accent-text">Unforgettable Moments</p>
            </div>
          </div>
        </div>
      </section>

      <JoinCTA
        title="Reserve Your Table at Elle"
        blurb="Experience the sophisticated dining destination in the heart of Cleveland's eastern suburbs. From our kitchen's wood-fired creations to our craft cocktails, Elle offers a refined yet warm and welcoming atmosphere perfect for any occasion."
        button={{
          label: "Make a Reservation",
          href: contentData.business.phone
        }}
      />

      <PressStrip items={pressItems} />

      <ImageGrid images={galleryImages} />

      {/* Menu Highlights Section */}
      <section className="py-s-12 md:py-s-24 bg-gradient-to-br from-accent-1/5 to-accent-warm/5 relative overflow-hidden">
        <div className="absolute inset-0 bohemian-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-s-6 relative z-10">
          <div className="text-center mb-8 md:mb-s-16">
            <div className="bohemian-border-ornament mx-auto mb-3 md:mb-4"></div>
            <h2 className="text-2xl md:text-h2 font-display text-accent-1 mb-3 md:mb-4 bohemian-text-shadow">Tonight's Culinary Highlights</h2>
            <p className="accent-text text-lg md:text-xl italic">~ From Our Mediterranean Kitchen ~</p>
            <div className="bohemian-divider mx-auto mt-4 md:mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-s-8">
            <div className="bohemian-card group text-center">
              <div className="text-5xl mb-4 group-hover:animate-bounce-subtle">🦞</div>
              <h3 className="text-h3 font-display text-accent-1 mb-3">Lobster Oreganata</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                Buttery garlic and herb crusted lobster tail, citrus and saffron risotto, asparagus
              </p>
              <div className="flex justify-between items-center">
                <div className="bohemian-tag">Kitchen's Pride</div>
                <div className="text-accent-1 font-bold">$42</div>
              </div>
            </div>
            
            <div className="bohemian-card group text-center" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4 group-hover:animate-bounce-subtle">🥩</div>
              <h3 className="text-h3 font-display text-accent-1 mb-3">Prime NY Strip</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                12 oz prime strip with black garlic butter, served with our signature frites
              </p>
              <div className="flex justify-between items-center">
                <div className="bohemian-tag">Premium Cut</div>
                <div className="text-accent-1 font-bold">$49</div>
              </div>
            </div>
            
            <div className="bohemian-card group text-center" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl mb-4 group-hover:animate-bounce-subtle">🍸</div>
              <h3 className="text-h3 font-display text-accent-1 mb-3">Elle Spritz</h3>
              <p className="text-ink text-sm leading-relaxed mb-4">
                House-made limoncello, prosecco, and soda - our signature refreshing cocktail
              </p>
              <div className="flex justify-between items-center">
                <div className="bohemian-tag">Signature</div>
                <div className="text-accent-1 font-bold">$14</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-s-12">
            <a 
              href="/menu" 
              className="btn-modern-primary group relative overflow-hidden inline-flex items-center"
            >
              <span className="relative z-10 mr-2">View Full Menu</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-accent-1/10 to-accent-warm/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-display text-accent-1 mb-4">Ready to Experience Elle?</h2>
          <p className="text-lg text-muted-ink mb-8">Join us for an unforgettable dining experience or enjoy our cuisine from the comfort of your home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ReservationWidget />
            <OnlineOrdering />
            <a
              href="tel:+14406563553"
              className="inline-flex items-center gap-2 border-2 border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call (440) 656-3553
            </a>
          </div>
        </div>
      </section>

      {/* Floating Appetite Teaser */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-accent-1 to-accent-warm text-white p-4 rounded-2xl shadow-elegant appetizing-hover cursor-pointer max-w-xs animate-float border-2 border-accent-1/50">
          <div className="flex items-center space-x-3">
            <div className="text-2xl animate-glow-pulse">🍷</div>
            <div>
              <p className="font-bold text-sm">Happy Hour Daily!</p>
              <p className="text-xs opacity-90">Special prices on drinks & appetizers</p>
              <p className="text-xs mt-1 text-amber-200">Tue-Thu 4-6pm | Fri 4-5pm</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-red-500 rounded-full animate-bounce-subtle">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Immersive Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-1/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-warm/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-2/5 rounded-full blur-3xl animate-rotate-slow"></div>
      </div>
    </>
  );
}