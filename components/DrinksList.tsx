interface DrinkItem {
  name: string;
  notes?: string;
  price?: string;
  bottlePrice?: string;
  glasPrice?: string;
}

interface DrinkSection {
  title: string;
  items: DrinkItem[];
}

interface DrinksListProps {
  sections: DrinkSection[];
}

export default function DrinksList({ sections }: DrinksListProps) {
  return (
    <div className="max-w-4xl mx-auto px-s-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-s-16">
          <h2 className="text-h2 text-center mb-s-12 text-btn-text">{section.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-s-8">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border-b border-divider pb-s-4 last:border-b-0">
                <div className="flex justify-between items-start mb-s-2">
                  <h3 className="font-display text-lg text-btn-text flex-1">
                    {item.name}
                  </h3>
                  
                  <div className="ml-s-4 text-right">
                    {item.glasPrice && (
                      <div className="text-sm text-accent-1 font-semibold">
                        Glass: {item.glasPrice}
                      </div>
                    )}
                    {item.bottlePrice && (
                      <div className="text-sm text-accent-1 font-semibold">
                        Bottle: {item.bottlePrice}
                      </div>
                    )}
                    {item.price && (
                      <div className="text-lg text-accent-1 font-semibold">
                        {item.price}
                      </div>
                    )}
                  </div>
                </div>
                
                {item.notes && (
                  <p className="text-btn-text opacity-75 text-sm italic">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}