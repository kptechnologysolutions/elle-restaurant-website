'use client';

import { useState } from 'react';

export default function ReservationWidget() {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <>
      {/* Reservation Button */}
      <button
        onClick={() => setShowWidget(true)}
        className="bg-accent-1 hover:bg-accent-warm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Make a Reservation
      </button>

      {/* Modal Overlay */}
      {showWidget && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-1 to-accent-warm p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-display">Reserve Your Table at Elle</h3>
                <button
                  onClick={() => setShowWidget(false)}
                  className="text-white hover:text-gray-200 text-3xl leading-none p-1"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* OpenTable Widget */}
            <div className="p-2 sm:p-4 bg-secondary-bg/20">
              <iframe
                src="https://www.opentable.com/r/elle-restaurant-and-lounge-reservations-solon?restref=1269154&lang=en-US&ot_source=Restaurant%20website"
                style={{ width: '100%', height: '400px', border: 'none' }}
                title="Elle Restaurant OpenTable Reservations"
              />
            </div>
            
            {/* Footer */}
            <div className="p-4 bg-gray-50 text-center text-sm text-muted-ink">
              <p className="mb-2">Or call us directly:</p>
              <a href="tel:+14406563553" className="text-accent-1 font-semibold hover:text-accent-warm">
                (440) 656-3553
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}