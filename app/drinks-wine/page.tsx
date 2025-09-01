import Image from 'next/image';
import contentData from '@/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drinks & Wine | Elle Restaurant & Lounge',
  description: 'Explore our curated selection of signature cocktails, premium wines, and craft beers. Each drink is thoughtfully crafted to complement our Mediterranean cuisine.',
};

const cocktailSections = [
  {
    title: "Signature Cocktails",
    subtitle: "~ Liquid Poetry ~",
    items: [
      { name: "Pisco Sour", description: "Macchu pisco, lime, house-made simple, egg white, Angostura bitters", price: "15" },
      { name: "Paloma", description: "Casamigos reposado, Lillet rose, grapefruit", price: "16" },
      { name: "Elle Spritz", description: "House-made limoncello, prosecco, soda", price: "14" },
      { name: "Ellevated Espresso Martini", description: "Vodka, Frangelico, Nocino, cookie butter syrup, espresso", price: "18" },
      { name: "Division Bell", description: "Casamigos mezcal, Aperol, maraschino liqueur, lime", price: "15" },
      { name: "Old Fashioned", description: "Buffalo Trace, demerara, orange, Angostura bitters", price: "18" },
      { name: "Negroni", description: "Nolet's, Campari, sweet vermouth", price: "16" },
      { name: "Ellevated Margarita", description: "Hibiscus infused Casamigos blanco, Grand Marnier, crème de violette, lavender, lime", price: "16" }
    ]
  }
];

const wineSections = [
  {
    title: "Wine by the Glass",
    subtitle: "~ Curated Selections ~",
    items: [
      { name: "Pinot Grigio", description: "Light, crisp, citrus notes", price: "12", bottle: "45" },
      { name: "Sauvignon Blanc", description: "Loire Valley - Mineral, grass, gooseberry", price: "14", bottle: "52" },
      { name: "Chardonnay", description: "Burgundian style - Rich, oaked, vanilla", price: "15", bottle: "58" },
      { name: "Rosé", description: "Provence style - Dry, elegant, strawberry", price: "13", bottle: "48" },
      { name: "Pinot Noir", description: "Oregon - Light body, earthy, red fruit", price: "16", bottle: "62" },
      { name: "Chianti Classico", description: "Tuscany - Medium body, cherry, herbs", price: "14", bottle: "54" },
      { name: "Cabernet Sauvignon", description: "Napa Valley - Full body, dark fruit, tannins", price: "18", bottle: "72" },
      { name: "Super Tuscan", description: "Tuscany - Bold blend, blackberry, spice", price: "20", bottle: "78" }
    ]
  },
  {
    title: "Premium Bottles",
    subtitle: "~ Special Selections ~",
    items: [
      { name: "Barolo DOCG", description: "Piedmont, Italy - Complex, age-worthy, truffle notes", price: "95" },
      { name: "Chablis Premier Cru", description: "Burgundy, France - Mineral, precise, oyster shell", price: "68" },
      { name: "Châteauneuf-du-Pape", description: "Rhône Valley - Spicy, full-bodied, garrigue", price: "85" },
      { name: "Sancerre", description: "Loire Valley - Gooseberry, grass, mineral finish", price: "58" },
      { name: "Brunello di Montalcino", description: "Tuscany - Powerful, elegant, cherry, leather", price: "105" },
      { name: "Champagne Brut", description: "Traditional method, crisp, toasty, celebratory", price: "75" }
    ]
  }
];

const beerSections = [
  {
    title: "Craft Beer & More",
    subtitle: "~ Refreshing Selections ~",
    items: [
      { name: "Local IPA", description: "Ohio brewery - Hoppy, citrus, pine", price: "8" },
      { name: "Belgian Wheat", description: "Traditional - Light, creamy, coriander", price: "7" },
      { name: "Seasonal Lager", description: "Rotating selection - Crisp, clean finish", price: "7" },
      { name: "Stout", description: "Rich, creamy, coffee notes", price: "8" },
      { name: "Prosecco", description: "Italy - Sparkling, light, festive", price: "12" },
      { name: "Aperitif Selection", description: "Aperol, Campari, Lillet - Ask your server", price: "10-14" }
    ]
  }
];

export default function DrinksWinePage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elle10.jpg"
            alt="Elle's elegant bar with sophisticated cocktail atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center border-2 border-accent-1 rounded-full bg-black/30 backdrop-blur-sm">
              <div className="text-accent-1 text-2xl">🍸</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-4">
              Drinks & <span className="text-accent-1 font-thin italic">Wine</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Thoughtfully crafted cocktails and curated wines that perfectly complement our Mediterranean cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="bohemian-border-ornament mx-auto mb-4"></div>
              <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">{cocktailSections[0].title}</h2>
              <p className="accent-text text-xl italic mb-4">{cocktailSections[0].subtitle}</p>
              <div className="bohemian-divider mx-auto mt-6"></div>
            </div>

            {/* Cocktail Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cocktailSections[0].items.map((item, index) => (
                <div 
                  key={item.name} 
                  className="bohemian-card group hover:shadow-lg transition-all duration-500"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-display text-accent-1 mb-2 group-hover:text-accent-warm transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-ink text-sm leading-relaxed pr-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-accent-1 font-semibold text-lg min-w-fit">
                      ${item.price}
                    </div>
                  </div>
                  <div className="bohemian-item-divider"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Wine Section */}
          {wineSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-20">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">{section.title}</h2>
                <p className="accent-text text-xl italic mb-4">{section.subtitle}</p>
                <div className="bohemian-divider mx-auto mt-6"></div>
              </div>

              {/* Wine Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className="bohemian-card group hover:shadow-lg transition-all duration-500"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-display text-accent-1 mb-2 group-hover:text-accent-warm transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-ink text-sm leading-relaxed pr-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-accent-1 font-semibold text-lg min-w-fit">
                        {item.bottle ? (
                          <div className="text-right">
                            <div className="text-sm">Glass ${item.price}</div>
                            <div>Bottle ${item.bottle}</div>
                          </div>
                        ) : (
                          `$${item.price}`
                        )}
                      </div>
                    </div>
                    <div className="bohemian-item-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Beer Section */}
          {beerSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-20">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">{section.title}</h2>
                <p className="accent-text text-xl italic mb-4">{section.subtitle}</p>
                <div className="bohemian-divider mx-auto mt-6"></div>
              </div>

              {/* Beer Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className="bohemian-card group hover:shadow-lg transition-all duration-500"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-display text-accent-1 mb-2 group-hover:text-accent-warm transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-ink text-sm leading-relaxed pr-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-accent-1 font-semibold text-lg min-w-fit">
                        ${item.price}
                      </div>
                    </div>
                    <div className="bohemian-item-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Happy Hour Section */}
          <div className="text-center py-16 bg-accent-1/5 rounded-lg mb-20">
            <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center border-2 border-accent-1/50 rounded-full bg-accent-1/5">
              <div className="text-accent-1 text-xl">🍷</div>
            </div>
            <h3 className="text-2xl font-display text-accent-1 mb-4">Happy Hour Specials</h3>
            <p className="text-ink max-w-2xl mx-auto mb-6">
              Join us Tuesday through Thursday from 4:00pm to 6:00pm for special pricing on select wines and cocktails.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
              <div className="bg-white/50 p-4 rounded">
                <div className="font-semibold text-accent-1 mb-2">Wine Bottles</div>
                <div className="text-ink">25% off select bottles</div>
              </div>
              <div className="bg-white/50 p-4 rounded">
                <div className="font-semibold text-accent-1 mb-2">Cocktails</div>
                <div className="text-ink">$2 off signature cocktails</div>
              </div>
              <div className="bg-white/50 p-4 rounded">
                <div className="font-semibold text-accent-1 mb-2">Appetizers</div>
                <div className="text-ink">$8 select appetizers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-bg/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-display text-accent-1 mb-6">Perfect Pairings Await</h2>
          <p className="text-lg text-ink mb-8">
            Let our knowledgeable staff help you find the perfect wine or cocktail to complement your dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contentData.business.phone}`}
              className="bg-accent-1 hover:bg-accent-warm text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reserve Your Table
            </a>
            <a
              href="/menu"
              className="border-2 border-accent-1/80 hover:border-accent-1 text-accent-1 hover:text-accent-warm px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              View Food Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}