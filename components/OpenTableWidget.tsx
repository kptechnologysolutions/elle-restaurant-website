'use client';

interface OpenTableWidgetProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function OpenTableWidget({ 
  className = "", 
  width = 300, 
  height = 600 
}: OpenTableWidgetProps) {
  return (
    <div className={`opentable-widget ${className}`}>
      <iframe
        src="https://www.opentable.com/r/elle-restaurant-and-lounge-reservations-solon?restref=1269154&lang=en-US&ot_source=Restaurant%20website"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Elle Restaurant & Lounge - OpenTable Reservations"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}