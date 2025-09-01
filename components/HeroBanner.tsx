import Image from 'next/image';

interface HeroBannerProps {
  titleLine1: string;
  titleLine2: string;
  subtext?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  bgImage: string;
  bgAlt: string;
}

export default function HeroBanner({
  titleLine1,
  titleLine2,
  subtext,
  primaryCTA,
  bgImage,
  bgAlt,
}: HeroBannerProps) {
  return (
    <section className="relative h-screen overflow-hidden modern-hero">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/elle inside.jpg"
          alt="Elle Restaurant's elegant bohemian interior with sophisticated dining atmosphere"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered content overlay box */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          {/* Semi-transparent background box */}
          <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            {/* Top Badge */}
            <div className="mb-6 fade-in-up">
              <div className="inline-flex items-center justify-center px-6 py-2 border border-accent-1/60 rounded-full bg-accent-1/10">
                <span className="text-accent-1 text-sm font-medium tracking-wider uppercase">Est. 2024 • Solon's Finest</span>
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
              <span className="block opacity-0 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>{titleLine1}</span>
              <span className="block text-accent-1 font-thin opacity-0 animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>{titleLine2}</span>
            </h1>
            
            {/* Elegant separator */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent mx-auto mb-6 opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}></div>
            
            {subtext && (
              <p className="text-lg md:text-xl mb-8 font-light leading-relaxed text-white/90 opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                {subtext}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
              <a
                href={primaryCTA.href}
                className="bg-accent-1 hover:bg-accent-warm text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {primaryCTA.label}
              </a>
              <a
                href="/menu"
                className="border-2 border-white/80 hover:border-accent-1 text-white hover:text-accent-1 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Menu
              </a>
            </div>
            
            {/* Info strip */}
            <div className="mt-8 pt-6 border-t border-white/20 opacity-0 animate-fade-in-up" style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-1 rounded-full animate-pulse"></div>
                  <span>Happy Hour: Tue-Thu 4-6pm</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-warm rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>Fresh pasta • Wine pairings</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-1 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>(440) 656-3553</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 right-8 z-10 opacity-0 animate-fade-in" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent-1/60 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}