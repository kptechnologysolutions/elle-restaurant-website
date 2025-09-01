import Image from 'next/image';
import contentData from '@/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Elle Restaurant & Lounge',
  description: 'Experience Chef Giovanni Casola\'s Mediterranean-inspired cuisine featuring the freshest seasonal ingredients, prepared from scratch with love.',
};

const menuSections = [
  {
    title: "Starters",
    subtitle: "~ Begin Your Journey ~",
    items: [
      { name: "Artisan Bread Plate", description: "Assorted Italian breads, honey butter, white bean dip", price: "6" },
      { name: "House Soup", description: "Daily selection", price: "MP" },
      { name: "Warm Olives", description: "Fennel, oregano, chili flakes", price: "8" },
      { name: "Green Goddess Hummus", description: "Lemon oil, pickled vegetable, crispy pita", price: "12" },
      { name: "Roasted Apple Brussels", description: "Roasted Ohio apples, sage, citrus honey, whipped parmesan", price: "14" },
      { name: "Mussels di Zoppa", description: "PEI mussels, linguica sausage, roasted tomato broth, fresh herbs, lemon, toasted ciabatta with pesto", price: "16" },
      { name: "Calamari Fritti", description: "Spicy cherry peppers, yuzu aioli, parsley, lemon wedge", price: "18" },
      { name: "Lamb Meatballs", description: "Za'atar ricotta, pomegranate gastrique, fresh mint", price: "15" },
      { name: "Burrata Tuscany", description: "Basil pesto, roasted red peppers, pine nuts, pomegranate balsamic, roasted tomatoes, grilled ciabatta", price: "14" },
      { name: "Beef Carpaccio", description: "Capers, shaved parmesan, lemon oil, basil, sea salt, mustard aioli", price: "16" }
    ]
  },
  {
    title: "Salads",
    subtitle: "~ Fresh & Vibrant ~",
    addOns: "Add to any salad: chicken | prosciutto | salmon",
    items: [
      { name: "Elle", description: "Local greens, cucumber, carrot, grape tomato, banana peppers, croutons, Italian vinaigrette", price: "8/14" },
      { name: "Classic Caesar", description: "Romaine, torn crouton, pecorino, Elle signature Caesar dressing", price: "8/14" },
      { name: "Grape & Pistachio", description: "Spinach, candied pistachio, purple grapes, orange segments, brie, creamy Greek vinaigrette", price: "9/15" }
    ]
  },
  {
    title: "Mains",
    subtitle: "~ The Heart of Our Kitchen ~",
    items: [
      { name: "Eggplant Lasagna", description: "Whipped ricotta, pomodoro sauce, mozzarella, fresh oregano, parmesan", price: "26", dietary: ["vegetarian"] },
      { name: "Faroe Island Salmon", description: "Pan-seared, braised farro, cauliflower velouté, sugar snap peas, olive tapenade", price: "32" },
      { name: "Lobster Oreganata", description: "Buttery garlic and herb crusted lobster tail, citrus and saffron risotto, asparagus", price: "42" },
      { name: "Bone-in Pork Chop", description: "24 hour brined 14 oz pork chop, celery mash, chili-garlic fennel, miso butter", price: "36" },
      { name: "Prime NY Strip Steak", description: "12 oz prime strip, black garlic butter, frites", price: "49" },
      { name: "Sicilian Caponata", description: "Sweet and sour eggplant, fennel, golden raisins, cannellini beans, port agrodolce, cashew ricotta, aquafaba aioli, grilled ciabatta", price: "26", dietary: ["vegan"] },
      { name: "Scallop and Lemon Gnocchi", description: "Beurre citron, fava beans, spinach, red peppers", price: "40" },
      { name: "Grilled Branzino", description: "Stuffed with fig & walnut filling, almond romesco, toasted pastina, pomegranate seeds", price: "42" },
      { name: "Chicken Caprese Sandwich", description: "Basil pesto, mozzarella, heirloom tomato, arugula, balsamic marinated chicken, toasted ciabatta, frites", price: "19" },
      { name: "Chicken Piccata", description: "Chicken breast, broccolini, roasted fingerlings, caramelized lemon, capers", price: "30" },
      { name: "Veal Bolognese", description: "Fresh pappardelle, spinach, smoked tomato, ricotta, ground local veal", price: "29" },
      { name: "Elle Burger", description: "8oz Ohio beef, house pickles, brown butter aioli, imported gouda, brioche bun, frites", price: "22" },
      { name: "Market Fish", description: "See server", price: "MP" }
    ]
  },
  {
    title: "Flatbreads",
    subtitle: "~ Wood-Fired Artistry ~",
    items: [
      { name: "Margherita", description: "Roasted tomato, burrata mozzarella, fresh basil", price: "15", dietary: ["vegetarian"] },
      { name: "Fig & Prosciutto", description: "Brie, honey balsamic, EVOO, mission figs, arugula, prosciutto", price: "16" },
      { name: "Sicilian", description: "Red sauce, capicola, prosciutto, ricotta, giardiniera, fresh basil", price: "17" }
    ]
  }
];

const beverageSections = [
  {
    title: "Signature Cocktails",
    subtitle: "~ Crafted with Care ~",
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

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elle8.jpg"
            alt="Elle Restaurant's beautiful food presentation and culinary artistry"
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
              Our <span className="text-accent-1 font-thin italic">Menu</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Mediterranean-inspired cuisine featuring the freshest seasonal ingredients, prepared from scratch with love by Executive Chef Giovanni Casola
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-20">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="bohemian-border-ornament mx-auto mb-4"></div>
                <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">{section.title}</h2>
                <p className="accent-text text-xl italic mb-4">{section.subtitle}</p>
                {section.addOns && (
                  <p className="text-sm text-muted-ink italic">{section.addOns}</p>
                )}
                <div className="bohemian-divider mx-auto mt-6"></div>
              </div>

              {/* Menu Items Grid */}
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
                        {item.dietary && (
                          <div className="flex gap-2 mt-2">
                            {item.dietary.map((diet) => (
                              <span key={diet} className="bohemian-tag text-xs">
                                {diet}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-accent-1 font-semibold text-lg min-w-fit">
                        {item.price === 'MP' ? 'MP' : `$${item.price}`}
                      </div>
                    </div>
                    <div className="bohemian-item-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Beverages Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="bohemian-border-ornament mx-auto mb-4"></div>
              <h2 className="text-h2 font-display text-accent-1 mb-3 bohemian-text-shadow">Signature Cocktails</h2>
              <p className="accent-text text-xl italic mb-4">~ Liquid Poetry ~</p>
              <div className="bohemian-divider mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {beverageSections[0].items.map((item, index) => (
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

          {/* Wine & Beer Note */}
          <div className="text-center py-16 bg-secondary-bg/30 rounded-lg mb-20">
            <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center border-2 border-accent-1/50 rounded-full bg-accent-1/5">
              <div className="text-accent-1 text-xl">🍷</div>
            </div>
            <h3 className="text-2xl font-display text-accent-1 mb-4">Wine & Beer Selection</h3>
            <p className="text-ink max-w-2xl mx-auto mb-6">
              Discover our curated selection of wines from around the world and craft beers. 
              Our knowledgeable staff will help you find the perfect pairing for your meal.
            </p>
            <div className="text-sm text-muted-ink italic">
              Full wine list and beer menu available upon request
            </div>
          </div>

          {/* Chef's Note */}
          <div className="text-center py-16 bg-gradient-to-br from-accent-1/5 to-accent-warm/5 rounded-lg mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bohemian-quote-box">
                <div className="bohemian-quote-marks">"</div>
                <p className="accent-text text-xl italic leading-relaxed mb-4">
                  Every dish is crafted with the finest seasonal ingredients, honoring traditional Mediterranean techniques while embracing creative innovation. We believe in making everything from scratch with love.
                </p>
                <div className="bohemian-quote-attribution">~ Executive Chef Giovanni Casola</div>
              </div>
            </div>
          </div>

          {/* Dietary Information */}
          <div className="text-center">
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-ink">Vegetarian</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-ink">Vegan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-ink">Gluten Free</span>
              </div>
            </div>
            <p className="text-xs text-muted-ink max-w-3xl mx-auto">
              Consuming raw or undercooked meat, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness, especially if you have certain health conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-bg/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-display text-accent-1 mb-6">Ready to Experience Elle?</h2>
          <p className="text-lg text-ink mb-8">
            Reserve your table today and embark on a culinary journey through the Mediterranean
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contentData.business.phone}`}
              className="bg-accent-1 hover:bg-accent-warm text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reserve Your Table
            </a>
            <a
              href="/"
              className="border-2 border-accent-1/80 hover:border-accent-1 text-accent-1 hover:text-accent-warm px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}