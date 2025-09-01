interface FooterProps {
  businessName: string;
  address: string[];
  phone: string;
  hours: string[];
  privacyHref: string;
  creditText: string;
}

export default function Footer({
  businessName,
  address,
  phone,
  hours,
  privacyHref,
  creditText,
}: FooterProps) {
  return (
    <footer className="bg-brand-bg text-ink py-s-16">
      <div className="max-w-7xl mx-auto px-s-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-s-12 mb-s-8">
          {/* Business Info */}
          <div>
            <h3 className="font-display text-xl mb-s-4">{businessName}</h3>
            <address className="not-italic">
              {address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-s-4">Contact</h3>
            <a 
              href={phone}
              className="text-link hover:text-link-hover transition-colors duration-300 text-lg font-semibold"
            >
              {phone.replace('tel:', '')}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-xl mb-s-4">Hours</h3>
            {hours.map((hour, index) => (
              <div key={index}>{hour}</div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-divider pt-s-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <div className="mb-s-4 md:mb-0">
            <a 
              href={privacyHref}
              className="text-link hover:text-link-hover transition-colors duration-300 mr-s-6"
            >
              Privacy Policy
            </a>
            <span>{creditText}</span>
          </div>
          
          <div>
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}