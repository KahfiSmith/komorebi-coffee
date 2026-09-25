import { cafeData } from "@/data/cafe";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": cafeData.name,
    "image": [
      cafeData.story.images[0].url,
      cafeData.story.images[1].url
    ],
    "@id": cafeData.seo.siteUrl,
    "url": cafeData.seo.siteUrl,
    "telephone": cafeData.contact.phone,
    "priceRange": cafeData.seo.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": cafeData.contact.address,
      "addressLocality": cafeData.contact.city,
      "postalCode": cafeData.contact.postalCode,
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cafeData.seo.coordinates.latitude,
      "longitude": cafeData.seo.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": [
      "Specialty Coffee",
      "Artisan Bakery",
      "Comfort Food",
      "Pasta",
      "Tea"
    ],
    "acceptsReservations": "True",
    "menu": `${cafeData.seo.siteUrl}#menu`,
    "sameAs": [
      cafeData.socials.instagram,
      cafeData.contact.googleMapsUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
