export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  badge?: "Best Seller" | "Barista Pick" | "Chef Special" | "New";
  image: string;
  category: "coffee" | "manual-tea" | "food" | "bakery";
  temperature?: "Hot" | "Iced" | "Both";
  dietaryTags?: string[];
}

export interface MenuCategory {
  id: "coffee" | "manual-tea" | "food" | "bakery";
  name: string;
  description: string;
}

export interface FullMenuSection {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    price: string;
    tag?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  aspect?: "square" | "portrait" | "landscape";
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "coffee" | "bakery" | "wifi" | "parking" | "pet" | "air";
}

export interface HoursItem {
  days: string;
  time: string;
  isToday?: boolean;
}

export interface CafeConfig {
  name: string;
  tagline: string;
  subtitle: string;
  shortDescription: string;
  story: {
    badge: string;
    title: string;
    subheading: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
    images: {
      url: string;
      alt: string;
      caption: string;
    }[];
  };
  contact: {
    phone: string;
    formattedPhone: string;
    whatsapp: string;
    whatsappFormatted: string;
    whatsappPrefillMessage: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  operatingHours: HoursItem[];
  socials: {
    instagram: string;
    instagramHandle: string;
    tiktok?: string;
  };
  menuPdfUrl: string;
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  fullMenuSections: FullMenuSection[];
  features: FeatureItem[];
  gallery: GalleryItem[];
  reviewsSummary: {
    averageRating: number;
    totalReviews: number;
    platform: string;
  };
  reviews: ReviewItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    city: string;
    priceRange: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}
