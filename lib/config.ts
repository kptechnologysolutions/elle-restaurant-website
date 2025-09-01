// Business Configuration
// Update these values with your restaurant's information

export const businessConfig = {
  // Basic Information
  businessName: "My Restaurant",
  tagline: "Fine Dining Experience",
  
  // Contact Information
  phone: "tel:+1-000-000-0000",
  phoneDisplay: "(000) 000-0000",
  
  // Address
  address: {
    street: "27975 Old 41 Rd",
    suite: "Suite 104", 
    city: "Bonita Springs",
    state: "FL",
    zip: "34135",
    neighborhood: "Downtown Bonita Springs"
  },
  
  // Hours
  hours: {
    display: ["Mon–Sun: 5pm–10pm"],
    structured: {
      monday: { open: "17:00", close: "22:00" },
      tuesday: { open: "17:00", close: "22:00" },
      wednesday: { open: "17:00", close: "22:00" },
      thursday: { open: "17:00", close: "22:00" },
      friday: { open: "17:00", close: "22:00" },
      saturday: { open: "17:00", close: "22:00" },
      sunday: { open: "17:00", close: "22:00" }
    }
  },
  
  // Online Presence
  social: {
    website: "https://example.com",
    instagram: "https://instagram.com/myrestaurant",
    facebook: "https://facebook.com/myrestaurant"
  },
  
  // Newsletter & Marketing
  mailchimpURL: "https://mailchi.mp/xxxx/xxxx",
  
  // Legal
  privacyPolicyURL: "/privacy-policy",
  
  // Credits
  designCredit: "Design by My Agency",
  
  // SEO & Schema
  cuisine: "Fine Dining",
  priceRange: "$$$",
  description: "Experience exceptional dining at My Restaurant. Fresh, seasonal cuisine with expertly crafted cocktails in an elegant atmosphere.",
  
  // PDF Menus (update with actual URLs)
  menus: {
    food: "/menu.pdf",
    cocktails: "/cocktail-menu.pdf", 
    wine: "/wine-list.pdf"
  }
};

// Image Placeholders (replace with your actual images)
export const imageConfig = {
  hero: "/images/placeholder-hero.jpg",
  menuTile: "/images/placeholder-menu.jpg", 
  drinksTile: "/images/placeholder-drinks.jpg",
  about: {
    bar1: "/images/placeholder-bar-1.jpg",
    bar2: "/images/placeholder-bar-2.jpg", 
    kitchen: "/images/placeholder-kitchen.jpg"
  },
  gallery: [
    "/images/placeholder-food-1.jpg",
    "/images/placeholder-food-2.jpg",
    "/images/placeholder-food-3.jpg",
    "/images/placeholder-food-4.jpg",
    "/images/placeholder-food-5.jpg",
    "/images/placeholder-food-6.jpg",
    "/images/placeholder-food-7.jpg",
    "/images/placeholder-food-8.jpg"
  ]
};

// Navigation Configuration
export const navConfig = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Drinks & Wine', href: '/drinks-wine' },
  { label: 'Join BOHO', href: '/join-boho' },
  { label: 'Contact Us', href: '/contact' },
];