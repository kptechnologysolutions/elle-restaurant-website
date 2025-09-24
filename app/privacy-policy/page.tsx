import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | My Restaurant',
  description: 'Our privacy policy and commitment to protecting your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-s-24 bg-subtle-ink min-h-screen">
      <div className="max-w-4xl mx-auto px-s-6">
        
        <div className="text-center mb-s-16">
          <h1 className="text-h1 mb-s-8 text-btn-text">Privacy Policy</h1>
          <p className="text-lg text-btn-text opacity-75">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white p-s-12 prose prose-lg max-w-none">
          <h2 className="font-display text-2xl text-btn-text mb-s-6">Information We Collect</h2>
          <p className="text-btn-text mb-s-6">
            When you contact us for reservations or join our mailing list, we may collect personal information such as your name, phone number, and email address. This information is used solely to provide our services and communicate with you about your dining experience.
          </p>

          <h2 className="font-display text-2xl text-btn-text mb-s-6">How We Use Your Information</h2>
          <p className="text-btn-text mb-s-6">
            We use the information you provide to:
          </p>
          <ul className="text-btn-text mb-s-6 list-disc list-inside">
            <li>Process and confirm your reservations</li>
            <li>Send you updates about special events and menu changes (if you've opted in)</li>
            <li>Respond to your inquiries and feedback</li>
            <li>Improve our services and dining experience</li>
          </ul>

          <h2 className="font-display text-2xl text-btn-text mb-s-6">Information Sharing</h2>
          <p className="text-btn-text mb-s-6">
            We do not sell, trade, or share your personal information with third parties, except as necessary to provide our services (such as reservation management systems) or as required by law.
          </p>

          <h2 className="font-display text-2xl text-btn-text mb-s-6">Contact Us</h2>
          <p className="text-btn-text mb-s-6">
            If you have any questions about this privacy policy or how we handle your information, please contact us at:
          </p>
          <div className="text-btn-text">
            <p>Phone: <a href="tel:+1-440-656-3553" className="text-accent-1">(440) 656-3553</a></p>
            <p>Address: 27975 Old 41 Rd, Suite 104, Bonita Springs, FL 34135</p>
          </div>
        </div>

      </div>
    </div>
  );
}