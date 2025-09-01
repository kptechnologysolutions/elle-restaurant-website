# Restaurant Website - Next.js Template

This is a restaurant website built with Next.js and Tailwind CSS, designed to match The Bohemian restaurant's aesthetic and structure.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Customization Guide

### 1. Business Information

Edit `lib/config.ts` to update your restaurant's information:

```typescript
// Update these key values:
businessName: "Your Restaurant Name"
phone: "tel:+1-your-phone-number"
phoneDisplay: "(123) 456-7890"

// Address
address: {
  street: "Your Street Address",
  suite: "Suite/Unit Number", 
  city: "Your City",
  state: "ST",
  zip: "12345"
}

// Hours
hours: {
  display: ["Mon–Sun: 5pm–10pm"]
}

// Marketing
mailchimpURL: "https://your-mailchimp-signup-url"
```

### 2. Replace Images

Add your photos to `public/images/` and update `lib/config.ts`:

**Required Images:**
- `placeholder-hero.jpg` - Main hero background (1920x1080 recommended)
- `placeholder-menu.jpg` - Menu tile image (800x600)
- `placeholder-drinks.jpg` - Drinks tile image (800x600)
- `placeholder-bar-1.jpg` & `placeholder-bar-2.jpg` - About page bar images
- `placeholder-kitchen.jpg` - About page kitchen image
- `placeholder-food-1.jpg` through `placeholder-food-8.jpg` - Gallery images

**Image Guidelines:**
- Use high-quality, professional photos
- Optimize for web (compress images)
- Maintain consistent lighting/style
- Recommended formats: JPG for photos, PNG for logos

### 3. Update Menu Content

**Food Menu** (`app/menu/page.tsx`):
```typescript
const menuData = [
  {
    title: "Your Category",
    items: [
      {
        name: "Dish Name",
        notes: ["ingredient 1", "ingredient 2", "sauce"],
        price: "$24",
        tags: ["gf", "v"] // gf=gluten-free, v=vegetarian, agf=available gluten-free
      }
    ]
  }
]
```

**Drinks Menu** (`app/drinks-wine/page.tsx`):
```typescript
const drinksData = [
  {
    title: "Section Name", 
    items: [
      {
        name: "Cocktail Name",
        notes: "Description or tasting notes",
        price: "$15" // or glasPrice/bottlePrice for wine
      }
    ]
  }
]
```

### 4. PDF Menus

1. Add your PDF files to `public/` directory
2. Update links in `lib/config.ts`:

```typescript
menus: {
  food: "/your-menu.pdf",
  cocktails: "/your-cocktail-menu.pdf", 
  wine: "/your-wine-list.pdf"
}
```

### 5. Press/Reviews Section

Update the press quotes in `app/page.tsx`:

```typescript
const pressItems = [
  {
    source: "Publication Name",
    quote: "Your actual review quote",
  }
]
```

### 6. About Page Content

Edit `app/about/page.tsx` to customize:
- **BOHO BAR + Hospitality** section text
- **BOHEMIAN KITCHEN + CULINARY** section text

### 7. Contact Information

Update `app/contact/page.tsx` for:
- Neighborhood description
- Special instructions
- Map embed (replace placeholder with Google Maps embed code)

### 8. SEO & Meta Information

Update meta tags in each page file:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};
```

## 🎨 Design Customization

### Colors
The color scheme is defined in `tailwind.config.js` and `app/globals.css`. To change colors:

1. Update color values in `tailwind.config.js`:
```javascript
colors: {
  'brand-bg': '#000000',    // Black backgrounds
  'accent-1': '#D4AF37',    // Gold accent
  'accent-2': '#2C5530',    // Dark green
  // ... other colors
}
```

### Typography
Font choices are in `app/globals.css`:
- **Display font** (headings): Georgia serif
- **Body font**: System sans-serif

To change fonts, update the `font-family` declarations.

### Spacing
Spacing uses a consistent scale defined in `tailwind.config.js`. All spacing uses the `s-*` prefix (s-1 = 4px, s-2 = 8px, etc.).

## 📱 Mobile Responsiveness

The site is mobile-first responsive. Test on various devices and adjust breakpoints in `tailwind.config.js` if needed:

```javascript
screens: {
  'sm': '640px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px',
}
```

## 🔍 SEO Features

- **Meta tags** on every page
- **Open Graph** and Twitter cards
- **JSON-LD structured data** for search engines
- **Semantic HTML** for accessibility
- **Alt text** on all images

## ♿ Accessibility

- **Skip to content** link
- **ARIA labels** on navigation
- **Keyboard navigation** support
- **Focus indicators**
- **Color contrast** meets WCAG AA standards

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Build the static site:
```bash
npm run build
npm run start
```

## 📊 Analytics

Add Google Analytics or other tracking by updating the `layout.tsx` file with your tracking code.

## 🆘 Support

### Common Issues

**Images not loading:**
- Ensure images are in `public/images/` 
- Check file names match `lib/config.ts`
- Verify image file formats (JPG/PNG)

**Menu not displaying:**
- Check JSON syntax in menu data arrays
- Ensure all required fields are present

**Mobile menu not working:**
- Verify JavaScript is enabled
- Check for console errors in browser dev tools

### File Structure
```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page  
│   ├── drinks-wine/     # Drinks & wine page
│   ├── join-boho/       # Newsletter signup page
│   ├── menu/            # Food menu page
│   ├── privacy-policy/  # Privacy policy
│   └── page.tsx         # Homepage
├── components/          # Reusable React components
├── lib/                # Configuration and utilities
├── public/             # Static files (images, PDFs)
└── README.md           # This file
```

## 📞 Need Help?

If you need assistance customizing the website:

1. Check this README first
2. Review the configuration files
3. Test changes in development mode (`npm run dev`)
4. Verify all images and links work before going live

---

**Built with:** Next.js 14, Tailwind CSS, TypeScript
**License:** MIT