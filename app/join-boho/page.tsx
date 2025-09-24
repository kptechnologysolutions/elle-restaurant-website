import contentData from '@/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Community | Elle Restaurant & Lounge',
  description: 'Join the Elle community for exclusive updates, special events, and early access to seasonal menus.',
};

export default function JoinBohoPage() {
  return (
    <div className="py-s-24 bg-accent-2 min-h-screen">
      <div className="max-w-4xl mx-auto px-s-6 text-center">
        <h1 className="text-h1 mb-s-12 text-ink">Join the Elle Community</h1>
        
        <p className="text-xl text-ink opacity-90 mb-s-16 max-w-2xl mx-auto">
          Become part of our growing community and enjoy exclusive perks, special access, and insider updates.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-s-8 mb-s-16">
          <div className="bg-ink bg-opacity-10 p-s-8">
            <div className="text-4xl mb-s-4">🍽️</div>
            <h3 className="font-display text-xl text-ink mb-s-4">Early Menu Access</h3>
            <p className="text-ink opacity-90">
              Be the first to discover new seasonal menu drops and limited-time offerings before they're available to the public.
            </p>
          </div>
          
          <div className="bg-ink bg-opacity-10 p-s-8">
            <div className="text-4xl mb-s-4">🎉</div>
            <h3 className="font-display text-xl text-ink mb-s-4">Exclusive Events</h3>
            <p className="text-ink opacity-90">
              Get priority invitations to wine dinners, chef tastings, and special celebrations throughout the year.
            </p>
          </div>
          
          <div className="bg-ink bg-opacity-10 p-s-8">
            <div className="text-4xl mb-s-4">🌟</div>
            <h3 className="font-display text-xl text-ink mb-s-4">Community Perks</h3>
            <p className="text-ink opacity-90">
              Enjoy special offers, seasonal favorites, and be part of a growing community of food and wine enthusiasts.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-ink bg-opacity-20 p-s-12 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl text-ink mb-s-6">Ready to Join?</h2>
          <p className="text-ink opacity-90 mb-s-8">
            Enter your email and become part of our community today. We promise no spam – just good vibes and great food updates.
          </p>
          
          <a
            href={contentData.marketing.mailchimpURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-accent-2 px-s-12 py-s-5 font-semibold uppercase tracking-wider text-lg hover:bg-accent-1 hover:text-btn-text transition-all duration-300 inline-block"
          >
            Join Our Community
          </a>
          
          <p className="text-sm text-ink opacity-75 mt-s-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}