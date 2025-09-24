import Image from 'next/image';
import contentData from '@/content.json';
import OpenTableWidget from '@/components/OpenTableWidget';
import ReservationWidget from '@/components/ReservationWidget';
import OnlineOrdering from '@/components/OnlineOrdering';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Elle Restaurant & Lounge',
  description: 'Visit Elle Restaurant & Lounge in Solon, OH. Make reservations, plan your visit, and discover our Mediterranean-inspired cuisine in an elegant Bohemian atmosphere.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elle14.jpg"
            alt="Elle Restaurant welcoming exterior view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center border-2 border-accent-1 rounded-full bg-black/30 backdrop-blur-sm">
              <div className="text-accent-1 text-2xl">✦</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-4">
              Visit <span className="text-accent-1 font-thin italic">Elle</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Located in the heart of Solon, we're ready to welcome you to our Bohemian sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="bohemian-card p-8">
              <div className="text-center mb-8">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">Get In Touch</h2>
                <p className="accent-text text-lg italic">~ We'd love to hear from you ~</p>
                <div className="bohemian-divider mx-auto mt-4"></div>
              </div>
              
              {/* Phone - Primary */}
              <div className="mb-8">
                <h3 className="font-display text-xl mb-4 text-accent-1 flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  Reservations
                </h3>
                <a 
                  href={`tel:${contentData.business.phone}`}
                  className="text-3xl font-light text-ink hover:text-accent-warm transition-colors duration-300 block mb-3 font-display"
                >
                  {contentData.business.phoneDisplay}
                </a>
                <p className="text-muted-ink leading-relaxed">
                  Call us to make a reservation or for any questions about our menu, private dining, or special events. 
                  We're here to make your Elle experience perfect.
                </p>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="font-display text-xl mb-4 text-accent-1 flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  Location
                </h3>
                <address className="not-italic text-ink leading-relaxed">
                  <div className="text-lg mb-2">{contentData.business.address.street}</div>
                  <div className="text-lg mb-2">{contentData.business.address.city}, {contentData.business.address.state} {contentData.business.address.zip}</div>
                  <div className="text-sm text-muted-ink mt-4">
                    Located in the heart of Cleveland's eastern suburbs in {contentData.business.address.neighborhood}, 
                    easily accessible with ample parking available.
                  </div>
                </address>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="font-display text-xl mb-4 text-accent-1 flex items-center">
                  <span className="text-2xl mr-3">🕐</span>
                  Hours
                </h3>
                <div className="text-ink">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-1">Tuesday - Thursday</div>
                      <div className="text-muted-ink">4:00pm - 9:00pm</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Friday</div>
                      <div className="text-muted-ink">4:00pm - 10:00pm</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Saturday</div>
                      <div className="text-muted-ink">5:00pm - 10:00pm</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Sun & Mon</div>
                      <div className="text-muted-ink">Closed</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-accent-1/5 rounded-lg border border-accent-1/20">
                    <div className="font-semibold text-accent-1 mb-2">🍷 Happy Hour</div>
                    <div className="text-sm text-ink">Tue-Thu: 4-6pm | Fri: 4-5pm</div>
                    <div className="text-xs text-muted-ink mt-1">Special prices on drinks and appetizers</div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-display text-xl mb-4 text-accent-1 flex items-center">
                  <span className="text-2xl mr-3">✉️</span>
                  Email
                </h3>
                <a 
                  href={`mailto:${contentData.marketing.email}`}
                  className="text-lg text-ink hover:text-accent-warm transition-colors duration-300 underline"
                >
                  {contentData.marketing.email}
                </a>
                <p className="text-sm text-muted-ink mt-2">
                  For general inquiries, catering, or private event planning
                </p>
              </div>
            </div>

            {/* OpenTable Reservations */}
            <div className="bohemian-card p-8">
              <div className="text-center mb-8">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">Make a Reservation</h2>
                <p className="accent-text text-lg italic">~ Reserve Your Experience ~</p>
                <div className="bohemian-divider mx-auto mt-4"></div>
              </div>
              
              <div className="flex justify-center">
                <OpenTableWidget width={320} height={650} />
              </div>
            </div>

            {/* Map and Directions */}
            <div className="bohemian-card p-8">
              <div className="text-center mb-8">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">Find Us</h2>
                <p className="accent-text text-lg italic">~ Your culinary destination awaits ~</p>
                <div className="bohemian-divider mx-auto mt-4"></div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mb-6">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.8884736895654!2d-81.44322672349758!3d41.38946957126774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f7f4d7f4b7b7%3A0x123456789!2s33730%20Bainbridge%20Rd%2C%20Solon%2C%20OH%2044139!5e0!3m2!1sen!2sus!4v1692900000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Elle Restaurant & Lounge Location"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contentData.business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern-primary group relative overflow-hidden inline-flex items-center"
                >
                  <span className="relative z-10 mr-2">Get Directions</span>
                  <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
                
                <div className="text-sm text-muted-ink">
                  <p className="mb-2">✓ Free parking available</p>
                  <p className="mb-2">✓ Easy access from I-271 and Route 422</p>
                  <p>✓ Located in the Bainbridge Commons plaza</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-to-br from-accent-1/5 to-accent-warm/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bohemian-quote-box">
            <div className="bohemian-quote-marks">"</div>
            <h2 className="text-3xl font-display text-accent-1 mb-6">Ready to Experience Elle?</h2>
            <p className="text-lg text-ink mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable evening of Mediterranean-inspired cuisine in our elegant Bohemian atmosphere. 
              Reservations recommended, especially for weekend dining.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ReservationWidget />
              <OnlineOrdering />
              <a
                href="/menu"
                className="border-2 border-accent-1/80 hover:border-accent-1 text-accent-1 hover:text-accent-warm px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-secondary-bg/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-display text-accent-1 mb-6">Stay Connected</h3>
          <p className="text-ink mb-8">Follow us for the latest updates, seasonal menus, and special events</p>
          <div className="flex justify-center">
            <a
              href={contentData.marketing.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-1 hover:bg-accent-warm text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}