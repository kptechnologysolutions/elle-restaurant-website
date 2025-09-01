import Image from 'next/image';
import contentData from '@/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Elle | Elle Restaurant & Lounge - Solon, OH',
  description: 'Discover the story behind Elle Restaurant & Lounge. From our owners Jay Leitson and Izzy Schachner to our Mediterranean-inspired cuisine, learn about our commitment to honoring the feminine essence through exceptional hospitality.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-secondary-bg/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            
            {/* Left side - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-6 mx-auto lg:mx-0 w-16 h-16 flex items-center justify-center border-2 border-accent-1 rounded-full bg-accent-1/10">
                <div className="text-accent-1 text-xl">🍃</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-light text-ink mb-4">
                About <span className="text-accent-1 font-thin italic">Elle</span>
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent mx-auto lg:mx-0 mb-6"></div>
              <p className="text-xl text-muted-ink leading-relaxed max-w-lg mx-auto lg:mx-0">
                Honoring all that is maternal, womanly, and goddess-like through exceptional Mediterranean cuisine in our Bohemian sanctuary.
              </p>
            </div>

            {/* Right side - Bohemian Painting */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-80 h-80">
                {/* Ornate frame effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-warm/20 rounded-lg transform rotate-1"></div>
                <div className="absolute inset-2 bg-gradient-to-tl from-accent-warm/15 to-accent-1/15 rounded-lg transform -rotate-1"></div>
                
                {/* Main painting with proper positioning */}
                <div className="absolute inset-4 rounded-lg overflow-hidden border-4 border-accent-1/40 shadow-2xl">
                  <Image
                    src="/images/elle-bohemian-woman-art.png"
                    alt="Elle Restaurant bohemian woman artwork"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Corner ornaments */}
                <div className="absolute -top-4 -left-4 text-accent-1 text-2xl opacity-80">🌿</div>
                <div className="absolute -top-4 -right-4 text-accent-warm text-2xl opacity-80">🍇</div>
                <div className="absolute -bottom-4 -left-4 text-accent-warm text-2xl opacity-80">🫒</div>
                <div className="absolute -bottom-4 -right-4 text-accent-1 text-2xl opacity-80">🌱</div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute left-8 top-1/4 w-32 h-32 border-2 border-accent-1/30 rounded-full"></div>
          <div className="absolute right-8 top-1/3 w-28 h-28 border-2 border-accent-warm/30 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/6 text-accent-1/20 text-4xl">🍷</div>
          <div className="absolute right-1/4 top-1/6 text-accent-warm/20 text-4xl">🫒</div>
        </div>
      </section>

      {/* The Elle Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bohemian-border-ornament mx-auto mb-6"></div>
            <h2 className="text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">The Elle Story</h2>
            <p className="accent-text text-xl italic">~ Where "Her" Essence Lives ~</p>
            <div className="bohemian-divider mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bohemian-quote-box">
                <div className="bohemian-quote-marks">"</div>
                <p className="accent-text text-xl italic leading-relaxed mb-4">
                  Elle means 'her' in French. We created this space to pay homage to all that is maternal, womanly and goddess-like in each of our lives, past present and future.
                </p>
                <div className="bohemian-quote-attribution">~ Jay Leitson & Izzy Schachner, Owners</div>
              </div>
              
              <p className="text-ink leading-relaxed mt-6">
                When restaurateurs Jay Leitson and Izzy Schachner opened Elle in December 2021, they brought more than just another restaurant to Solon—they created a sanctuary. Named "Elle" meaning "her" in French, this sophisticated dining destination was conceived as a tribute to the powerful feminine influences that have shaped their lives and careers.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bohemian-frame">
                  <div className="bohemian-photo-wrapper">
                    <Image 
                      src="/images/elle2.jpg" 
                      alt="Elle Restaurant elegant dining room interior"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="bohemian-photo-overlay"></div>
                  </div>
                  <div className="bohemian-frame-corners"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visionaries */}
      <section className="py-20 bg-gradient-to-br from-accent-1/5 to-accent-warm/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bohemian-border-ornament mx-auto mb-6"></div>
            <h2 className="text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">The Visionaries</h2>
            <p className="accent-text text-xl italic">~ Seasoned Restaurateurs with a Dream ~</p>
            <div className="bohemian-divider mx-auto mt-6"></div>
          </div>

          <div className="bohemian-card p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-1/20 to-accent-warm/20 border-4 border-accent-1/30 flex items-center justify-center">
                    <div className="text-5xl">👨🏻‍🦲</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-1 rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">JAY</div>
                  </div>
                </div>
                <h3 className="text-2xl font-display text-accent-1 mb-4">Jay Leitson</h3>
                <p className="text-ink leading-relaxed">
                  Co-owner of Elle Restaurant & Lounge, Jay brings decades of hospitality expertise to Solon. Along with partner Izzy Schachner, he also owns 56 Kitchen and Birdigo restaurants, establishing a reputation for creating memorable dining experiences throughout the Cleveland area.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-warm/20 to-accent-1/20 border-4 border-accent-warm/30 flex items-center justify-center">
                    <div className="text-5xl">👨🏻‍💼</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-warm rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">IZZY</div>
                  </div>
                </div>
                <h3 className="text-2xl font-display text-accent-1 mb-4">Izzy Schachner</h3>
                <p className="text-ink leading-relaxed">
                  Co-owner and visionary, Izzy Schachner has been instrumental in transforming Solon's dining landscape. His commitment to excellence and attention to detail have made Elle a rare dining gem, bringing sophisticated cuisine to Cleveland's eastern suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Atmosphere */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-center lg:text-left mb-8">
                <div className="bohemian-border-ornament mx-auto lg:mx-0 mb-6"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">Bohemian Chic Design</h2>
                <p className="accent-text text-xl italic">~ Lush Fabrics & Sparkly Chandeliers ~</p>
                <div className="bohemian-divider mx-auto lg:mx-0 mt-6"></div>
              </div>
              
              <p className="text-ink leading-relaxed mb-6">
                Step into Elle's eclectic, bohemian and inviting dining room and bar, where lush fabrics meet sparkly chandeliers and handsome furniture creates an atmosphere both sophisticated and welcoming. The former Harvest restaurant space has been completely reimagined into a sanctuary that celebrates artistic freedom and culinary excellence.
              </p>
              
              <p className="text-ink leading-relaxed mb-6">
                Every detail has been carefully curated to create a space that feels both intimate and grand—perfect for romantic dinners, celebrations with friends, or quiet evenings at the bar. The 100-person interior flows seamlessly to a charming 30-40 seat side patio, extending the bohemian atmosphere into the Solon evening air.
              </p>
              
              <div className="bg-accent-1/5 p-6 rounded-lg border border-accent-1/20">
                <div className="text-accent-1 font-display text-lg mb-2">✨ Atmosphere Highlights</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Lush velvet fabrics</div>
                  <div>• Crystal chandeliers</div>
                  <div>• Handsome furniture</div>
                  <div>• Intimate lighting</div>
                  <div>• Bohemian art pieces</div>
                  <div>• Sophisticated bar</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="bohemian-frame">
                  <div className="bohemian-photo-wrapper">
                    <Image 
                      src="/images/elle6.jpg" 
                      alt="Elle's sophisticated bar area with elegant atmosphere"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="bohemian-photo-overlay"></div>
                  </div>
                  <div className="bohemian-frame-corners"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bohemian-floating-element">
                  <div className="text-4xl text-accent-warm animate-float">🍸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culinary Philosophy */}
      <section className="py-20 bg-secondary-bg/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bohemian-border-ornament mx-auto mb-6"></div>
            <h2 className="text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">Our Culinary Philosophy</h2>
            <p className="accent-text text-xl italic">~ Made From Scratch With Love ~</p>
            <div className="bohemian-divider mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bohemian-frame">
                  <div className="bohemian-photo-wrapper">
                    <Image 
                      src="/images/elle4.jpg" 
                      alt="Elle's exquisite culinary presentation and plating artistry"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="bohemian-photo-overlay"></div>
                  </div>
                  <div className="bohemian-frame-corners"></div>
                </div>
                
                <div className="absolute -top-6 -left-6 bohemian-floating-element">
                  <div className="text-4xl text-accent-1 animate-float">👨‍🍳</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-ink leading-relaxed mb-6">
                Under the guidance of Executive Chef Giovanni Casola and current Chef Adam Brooks, Elle's kitchen operates on a simple but profound principle: everything is made from scratch with love. Our Mediterranean-inspired cuisine features the freshest seasonal ingredients, prepared with techniques that honor traditional Italian foundations while embracing modern creativity.
              </p>
              
              <p className="text-ink leading-relaxed mb-6">
                From our signature wood-fired dishes to delicate seafood preparations, each plate tells a story of culinary passion and artistic expression. Our menu changes seasonally to showcase the best available ingredients, ensuring that every visit to Elle offers something new to discover.
              </p>
              
              <div className="bohemian-quote-box">
                <div className="bohemian-quote-marks">"</div>
                <p className="accent-text text-lg italic leading-relaxed">
                  We believe in the power of fresh ingredients to transform a simple meal into an extraordinary experience. Every dish reflects our commitment to excellence and our love for the culinary arts.
                </p>
                <div className="bohemian-quote-attribution">~ Executive Chef Giovanni Casola</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bohemian-border-ornament mx-auto mb-6"></div>
            <h2 className="text-h2 font-display text-accent-1 mb-4 bohemian-text-shadow">Our Journey</h2>
            <p className="accent-text text-xl italic">~ From Vision to Reality ~</p>
            <div className="bohemian-divider mx-auto mt-6"></div>
          </div>

          <div className="timeline space-y-12">
            <div className="bohemian-card p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🏗️</div>
                <div>
                  <h3 className="text-xl font-display text-accent-1">December 2021</h3>
                  <p className="text-sm text-muted-ink">The Beginning</p>
                </div>
              </div>
              <p className="text-ink leading-relaxed">
                Elle Restaurant & Lounge opened its doors on December 21, 2021, transforming the former Harvest restaurant space into a sophisticated French-Italian concept. Located at 33730 Bainbridge Road in Solon, Elle immediately began making its mark on Cleveland's eastern suburbs dining scene.
              </p>
            </div>
            
            <div className="bohemian-card p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">👨‍🍳</div>
                <div>
                  <h3 className="text-xl font-display text-accent-1">Early Success</h3>
                  <p className="text-sm text-muted-ink">Building Reputation</p>
                </div>
              </div>
              <p className="text-ink leading-relaxed">
                Under the original leadership of Chef Patrick Capuozzo—formerly of Parallax, Nora, and Flying Fig—Elle quickly gained recognition for its elevated approach to Mediterranean cuisine. The restaurant's commitment to fresh, made-from-scratch cooking began attracting attention from local food critics and diners alike.
              </p>
            </div>
            
            <div className="bohemian-card p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">⭐</div>
                <div>
                  <h3 className="text-xl font-display text-accent-1">Critical Acclaim</h3>
                  <p className="text-sm text-muted-ink">Recognition & Growth</p>
                </div>
              </div>
              <p className="text-ink leading-relaxed">
                Elle began earning praise from Cleveland Scene, Cleveland Jewish News, and other local publications. Described as "on its way to becoming the rare dining gem in Solon," the restaurant established itself as a sophisticated option in a suburb typically lacking upscale dining choices.
              </p>
            </div>
            
            <div className="bohemian-card p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🍽️</div>
                <div>
                  <h3 className="text-xl font-display text-accent-1">Continued Excellence</h3>
                  <p className="text-sm text-muted-ink">Present Day</p>
                </div>
              </div>
              <p className="text-ink leading-relaxed">
                Today, with Chef Adam Brooks creating new amazing dishes while honoring Elle's founding principles, the restaurant continues to evolve while maintaining its core mission: to provide exceptional Mediterranean-inspired cuisine in an atmosphere that celebrates the feminine divine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-accent-1/5 to-accent-warm/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bohemian-quote-box">
            <div className="bohemian-quote-marks">"</div>
            <h2 className="text-3xl font-display text-accent-1 mb-6">Experience Elle Today</h2>
            <p className="text-lg text-ink mb-8 max-w-2xl mx-auto">
              Join us in our Bohemian sanctuary where every detail honors the feminine essence and every dish is prepared from scratch with love. Located in the heart of Solon, we're ready to welcome you to the Elle experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contentData.business.phone}`}
                className="bg-accent-1 hover:bg-accent-warm text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Make a Reservation
              </a>
              <a
                href="/menu"
                className="border-2 border-accent-1/80 hover:border-accent-1 text-accent-1 hover:text-accent-warm px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}