interface JoinCTAProps {
  title: string;
  blurb: string;
  button: {
    label: string;
    href: string;
  };
}

export default function JoinCTA({ title, blurb, button }: JoinCTAProps) {
  return (
    <section className="bg-accent-2 py-s-24">
      <div className="max-w-4xl mx-auto text-center px-s-6">
        <h2 className="text-h2 text-ink mb-s-6">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-ink opacity-90 mb-s-12 max-w-2xl mx-auto">
          {blurb}
        </p>
        
        <a
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block text-lg px-s-12 py-s-5"
        >
          {button.label}
        </a>
      </div>
    </section>
  );
}