import Image from 'next/image';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="py-s-24">
      <div className="max-w-7xl mx-auto px-s-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden tile-hover"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}