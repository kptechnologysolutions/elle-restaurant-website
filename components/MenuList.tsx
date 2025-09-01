interface MenuItem {
  name: string;
  notes: string[];
  price: string;
  tags: string[];
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MenuListProps {
  categories: MenuCategory[];
}

const DietaryBadge = ({ tag }: { tag: string }) => {
  const getTagStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'gf':
        return 'bg-accent-1 text-btn-text';
      case 'v':
        return 'bg-accent-2 text-ink';
      case 'agf':
        return 'bg-divider text-ink';
      default:
        return 'bg-divider text-ink';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold uppercase rounded ${getTagStyle(tag)}`}>
      {tag}
    </span>
  );
};

export default function MenuList({ categories }: MenuListProps) {
  return (
    <div className="max-w-4xl mx-auto px-s-6">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-s-16">
          <h2 className="text-h2 text-center mb-s-12 text-btn-text">{category.title}</h2>
          
          <div className="space-y-s-6">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border-b border-divider pb-s-4 last:border-b-0">
                <div className="flex justify-between items-start mb-s-2">
                  <h3 className="font-display text-xl text-btn-text flex-1">
                    {item.name}
                    {item.tags.length > 0 && (
                      <span className="ml-s-3">
                        {item.tags.map((tag, tagIndex) => (
                          <DietaryBadge key={tagIndex} tag={tag} />
                        ))}
                      </span>
                    )}
                  </h3>
                  <span className="text-xl font-semibold text-accent-1 ml-s-4">
                    {item.price}
                  </span>
                </div>
                
                {item.notes.length > 0 && (
                  <p className="text-btn-text opacity-75">
                    {item.notes.join(' + ')}
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