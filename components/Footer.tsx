interface FooterProps {
  businessName: string;
  address: string[];
  phone: string;
  hours: string[];
  privacyHref: string;
  creditText: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
}

export default function Footer({
  businessName,
  address,
  phone,
  hours,
  privacyHref,
  creditText,
  socialLinks,
}: FooterProps) {
  return (
    <footer className="bg-brand-bg text-ink py-8 md:py-s-16">
      <div className="max-w-7xl mx-auto px-4 md:px-s-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-s-12 mb-8 md:mb-s-8">
          {/* Business Info */}
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4 md:mb-s-4">{businessName}</h3>
            <address className="not-italic text-sm md:text-base">
              {address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4 md:mb-s-4">Contact</h3>
            <a 
              href={phone}
              className="text-link hover:text-link-hover transition-colors duration-300 text-base md:text-lg font-semibold"
            >
              {phone.replace('tel:', '')}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4 md:mb-s-4">Hours</h3>
            <div className="text-sm md:text-base">
              {hours.map((hour, index) => (
                <div key={index}>{hour}</div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          {socialLinks && (
            <div>
              <h3 className="font-display text-lg md:text-xl mb-4 md:mb-s-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.instagram && (
                  <a 
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-accent-1 transition-colors duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z"/>
                    </svg>
                  </a>
                )}
                {socialLinks.facebook && (
                  <a 
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-accent-1 transition-colors duration-300"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Links */}
        <div className="border-t border-divider pt-6 md:pt-s-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm opacity-75">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a 
              href={privacyHref}
              className="text-link hover:text-link-hover transition-colors duration-300 mr-4 md:mr-s-6"
            >
              Privacy Policy
            </a>
            <span>{creditText}</span>
          </div>
          
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}