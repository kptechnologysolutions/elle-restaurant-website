import Image from 'next/image';
import Link from 'next/link';

interface FeatureTileProps {
  img: string;
  imgAlt: string;
  label: string;
  href: string;
}

export default function FeatureTile({ img, imgAlt, label, href }: FeatureTileProps) {
  return (
    <Link 
      href={href}
      className="relative block h-96 md:h-[28rem] overflow-hidden tile-hover group shadow-soft"
    >
      {/* Background Image */}
      <Image
        src={img}
        alt={imgAlt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 overlay-elegant group-hover:opacity-75 transition-all duration-500" />
      
      {/* Decorative Frame */}
      <div className="absolute inset-4 border border-accent-1/30 group-hover:border-accent-1/50 transition-all duration-500">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-1"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent-1"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent-1"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-1"></div>
      </div>
      
      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center glass-effect px-s-10 py-s-6 group-hover:bg-secondary-bg/90 transition-all duration-500">
          <h2 className="text-h2 text-ink font-display font-light mb-2 group-hover:text-accent-1 transition-colors duration-300">
            {label}
          </h2>
          <div className="w-16 h-px bg-accent-1 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="accent-text text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {label === 'Menu' ? 'Taste the extraordinary...' : 'Sip something special...'}
          </p>
        </div>
      </div>
      
      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        <div className="w-8 h-8 border-r border-b border-accent-1 rotate-45 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}