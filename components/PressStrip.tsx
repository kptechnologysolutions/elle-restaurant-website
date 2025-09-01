import Image from 'next/image';

interface PressItem {
  logo?: string;
  logoAlt?: string;
  quote: string;
  source: string;
}

interface PressStripProps {
  items: PressItem[];
}

export default function PressStrip({ items }: PressStripProps) {
  return (
    <section className="bg-brand-bg py-s-24">
      <div className="max-w-7xl mx-auto px-s-6">
        <h2 className="text-h2 text-ink text-center mb-s-16">Featured In.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-s-8">
          {items.map((item, index) => (
            <div key={index} className="bg-subtle-ink p-s-8 text-center">
              {item.logo && (
                <div className="mb-s-4 h-16 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.logoAlt || item.source}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              )}
              
              <h3 className="font-display text-xl text-btn-text font-semibold mb-s-3">
                {item.source}
              </h3>
              
              <blockquote className="text-btn-text italic">
                "{item.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}