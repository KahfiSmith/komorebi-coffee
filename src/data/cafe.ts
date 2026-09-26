import { CafeConfig } from "@/types/cafe";

export const cafeData: CafeConfig = {
  name: "Komorebi Coffee & Dining",
  tagline: "Good coffee. Good food. Good moments.",
  subtitle: "Savoring the quiet artistry of slow-crafted coffee and warm dining.",
  shortDescription:
    "Ruang tenang di tengah ritme kota Surabaya untuk menikmati kopi pilihan, hidangan segar, dan percakapan yang bermakna bersama orang terdekat.",
  story: {
    badge: "Filosofi Kami",
    title: "Dedikasi Pada Keheningan & Rasa Otentik",
    subheading: "Lebih dari sekadar tempat minum kopi",
    paragraphs: [
      "Komorebi terinspirasi dari keindahan cahaya matahari yang menembus celah dedaunan di pagi hari. Kami percaya bahwa secangkir kopi terbaik dinikmati dalam ruang yang memberikan ketenangan pikiran, jauh dari keriuhan dan ketergesaan.",
      "Setiap sajian kami diracik dengan penuh perhatian. Kami memilih biji kopi specialty dari perkebunan lokal Indonesia dan perkebunan mikro dunia, dipanggang dengan profil rasa yang presisi. Bersama artisan pastry yang dipanggang segar setiap pagi dan hidangan hangat dari dapur kami, kami mengundang Anda untuk melambat dan menikmati setiap detik.",
    ],
    highlights: [
      { label: "Biji Kopi Pilihan", value: "100% Specialty Arabica" },
      { label: "Pastry & Kitchen", value: "Fresh In-House Daily" },
      { label: "Ruang & Suasana", value: "Slow Living & Calm" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
        alt: "Suasana interior cafe bernuansa kayu minimalis yang hangat dan tenang",
        caption: "Interior minimalis dengan pencahayaan alami yang lembut",
      },
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
        alt: "Barista sedang menyeduh kopi manual brew menggunakan dripper keramik",
        caption: "Proses seduh lambat untuk mengekstraksi karakter rasa terbaik",
      },
    ],
  },
  contact: {
    phone: "+6285129627403",
    formattedPhone: "+62 851-2962-7403",
    whatsapp: "6285129627403",
    whatsappFormatted: "+62 851-2962-7403",
    whatsappPrefillMessage:
      "Halo Komorebi Coffee, saya ingin reservasi meja / bertanya tentang kunjungan.",
    email: "halo@komorebicafe.id",
    address: "Jl. Raya Darmo No. 42, Wonokromo",
    city: "Surabaya",
    postalCode: "60241",
    fullAddress: "Jl. Raya Darmo No. 42, Wonokromo, Surabaya, Jawa Timur 60241",
    googleMapsUrl: "https://maps.google.com/?q=Jl.+Raya+Darmo+No.+42+Surabaya",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5912440316654!2d112.73551527499997!3d-7.287299992719875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf05f63cb3d%3A0xa63d25265ecb8bc!2sJl.%20Raya%20Darmo%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid",
  },
  operatingHours: [
    { days: "Senin - Jumat", time: "07:00 - 22:00 WIB" },
    { days: "Sabtu - Minggu", time: "07:00 - 23:00 WIB" },
  ],
  socials: {
    instagram: "https://instagram.com",
    instagramHandle: "@komorebi.dining",
    tiktok: "https://tiktok.com",
  },
  menuPdfUrl: "#",
  menuCategories: [
    {
      id: "coffee",
      name: "Signature Coffee",
      description: "Racikan espresso berbasis susu dan mocktail kopi istimewa.",
    },
    {
      id: "manual-tea",
      name: "Manual Brew & Tea",
      description: "Pilihan single origin lokal dan teh artisan berdaun utuh.",
    },
    {
      id: "food",
      name: "Comfort Dining",
      description: "Hidangan hangat yang dimasak segar dari dapur kami.",
    },
    {
      id: "bakery",
      name: "Artisan Bakery",
      description: "Dipanggang setiap pagi dengan mentega berkualitas tinggi.",
    },
  ],
  menuItems: [
    {
      id: "c-1",
      name: "Komorebi Spanish Latte",
      description:
        "Double espresso ristretto dipadukan susu kental manis artisan dan fresh milk yang creamy lembut.",
      price: 38000,
      formattedPrice: "Rp 38.000",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
      category: "coffee",
      temperature: "Both",
      dietaryTags: ["Signature", "Halal"],
    },
    {
      id: "c-2",
      name: "Velvet Flat White",
      description:
        "Rasio double shot espresso seimbang dengan microfoam susu yang sangat halus dan gurih.",
      price: 36000,
      formattedPrice: "Rp 36.000",
      badge: "Barista Pick",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
      category: "coffee",
      temperature: "Hot",
      dietaryTags: ["Specialty", "Halal"],
    },
    {
      id: "c-3",
      name: "Iced Sea Salt Cloud Latte",
      description:
        "Cold brew konsentrat dengan lapisan foam krim sea salt gurih di atas susu oat organik.",
      price: 42000,
      formattedPrice: "Rp 42.000",
      badge: "Chef Special",
      image:
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
      category: "coffee",
      temperature: "Iced",
      dietaryTags: ["Dairy-Free Available", "Halal"],
    },
    {
      id: "c-4",
      name: "Classic Americano",
      description:
        "Espresso ganda dari blend Aceh Gayo dan Flores Bajawa dengan sentuhan notes cokelat dan karamel.",
      price: 30000,
      formattedPrice: "Rp 30.000",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      category: "coffee",
      temperature: "Both",
      dietaryTags: ["Sugar-Free", "Halal"],
    },
    {
      id: "m-1",
      name: "V60 Single Origin Gayo Anaerobic",
      description:
        "Metode pour over presisi menghasilkan aroma bunga melati, acidity sitrun segar, dan aftertaste manis madu.",
      price: 42000,
      formattedPrice: "Rp 42.000",
      badge: "Barista Pick",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
      category: "manual-tea",
      temperature: "Hot",
      dietaryTags: ["Single Origin", "Halal"],
    },
    {
      id: "m-2",
      name: "Kyoto Ceremonial Matcha Latte",
      description:
        "Matcha kualitas seremonial murni dari Uji, Kyoto, diaduk dengan susu segar dan sedikit pemanis alami.",
      price: 40000,
      formattedPrice: "Rp 40.000",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
      category: "manual-tea",
      temperature: "Both",
      dietaryTags: ["Imported Uji", "Halal"],
    },
    {
      id: "f-1",
      name: "Truffle Mushroom Cream Pasta",
      description:
        "Fettuccine al dente dengan saus krim jamur champignon liar, minyak truffle putih, dan keju parmesan 24 bulan.",
      price: 65000,
      formattedPrice: "Rp 65.000",
      badge: "Chef Special",
      image:
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800&auto=format&fit=crop",
      category: "food",
      dietaryTags: ["Vegetarian Friendly", "Halal"],
    },
    {
      id: "f-2",
      name: "Sourdough Smoked Beef Sando",
      description:
        "Roti sourdough bakar renyah, daging sapi asap lada hitam, keju leleh, dan rempah acar timun segar.",
      price: 58000,
      formattedPrice: "Rp 58.000",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
      category: "food",
      dietaryTags: ["House Sourdough", "Halal"],
    },
    {
      id: "b-1",
      name: "French Butter Croissant",
      description:
        "Lapisan pastry renyah keemasan bertekstur honeycomb sempurna dengan aroma pure French butter yang kaya.",
      price: 32000,
      formattedPrice: "Rp 32.000",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
      category: "bakery",
      dietaryTags: ["Fresh Daily", "Halal"],
    },
    {
      id: "b-2",
      name: "Pain au Chocolat Valrhona",
      description:
        "Croissant berongga halus dengan isian dua batang cokelat dark Valrhona Prancis yang meleleh nikmat.",
      price: 38000,
      formattedPrice: "Rp 38.000",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
      category: "bakery",
      dietaryTags: ["Valrhona Chocolate", "Halal"],
    },
  ],
  fullMenuSections: [
    {
      title: "Espresso Bar & Milk Coffee",
      description: "Ekstraksi kopi specialty dengan racikan susu segar dan pemanis alami pilihan.",
      items: [
        { name: "Espresso Solo / Doppio", description: "Double shot espresso blend Gayo & Bajawa", price: "Rp 26.000" },
        { name: "Piccolo Latte", description: "Rasio ristretto intens dengan 90ml steamed milk", price: "Rp 32.000" },
        { name: "Cappuccino", description: "Espresso, susu gurih, dan lapisan busa lembut berlimpah", price: "Rp 35.000" },
        { name: "Cafe Latte", description: "Double shot dengan steamed fresh milk yang halus", price: "Rp 35.000" },
        { name: "Komorebi Spanish Latte", description: "Signature latte dengan condensed milk artisan", price: "Rp 38.000", tag: "Signature" },
        { name: "Caramel Macchiato", description: "Espresso, vanilla bean, dan saus karamel bakar rumahan", price: "Rp 40.000" },
        { name: "Mocha Valrhona", description: "Espresso berpadu cokelat murni Valrhona 70%", price: "Rp 42.000" },
      ],
    },
    {
      title: "Slow Bar & Single Origin",
      description: "Metode seduh manual untuk eksplorasi cita rasa orisinal perkebunan kopi mikro.",
      items: [
        { name: "V60 Flores Bajawa Honey", description: "Floral jasmine, dried plum, brown sugar aftertaste", price: "Rp 38.000" },
        { name: "V60 Aceh Gayo Anaerobic", description: "Tropical fruit notes, crisp citrus, honey finish", price: "Rp 42.000", tag: "Barista Pick" },
        { name: "Aeropress Toraja Sapan", description: "Bold body, spicy clove, dark cacao sweetness", price: "Rp 38.000" },
        { name: "Japanese Iced Pour Over", description: "Seduh manual dingin langsung di atas kristal es", price: "Rp 40.000" },
        { name: "Cold Brew Reserve 24-Hour", description: "Ekstraksi dingin selama 24 jam, lembut tanpa asam tajam", price: "Rp 36.000" },
      ],
    },
    {
      title: "Artisan Tea & Refreshers",
      description: "Pilihan teh daun utuh dari pegunungan tinggi dan mocktail dingin yang menyegarkan.",
      items: [
        { name: "Kyoto Ceremonial Matcha", description: "Matcha seremonial murni dari Uji Kyoto dengan susu segar", price: "Rp 40.000", tag: "Best Seller" },
        { name: "Hojicha Roasted Tea Latte", description: "Teh hijau panggang dengan aroma nutty dan karamel alami", price: "Rp 38.000" },
        { name: "Earl Grey Lavender Blend", description: "Black tea beraroma minyak bergamot dan bunga lavender", price: "Rp 32.000" },
        { name: "Yuzu Osmanthus Sparkler", description: "Bulir jeruk yuzu Jepang, madu bunga osmanthus, dan soda", price: "Rp 38.000" },
        { name: "Berry Hibiscus Iced Tea", description: "Seduhan bunga kembang sepatu dengan sari buah beri segar", price: "Rp 35.000" },
      ],
    },
    {
      title: "Comfort Mains & Savory Dishes",
      description: "Makanan hangat yang diolah langsung dari dapur dengan bahan segar berkualitas tinggi.",
      items: [
        { name: "Truffle Mushroom Cream Pasta", description: "Fettuccine, jamur champignon liar, keju parmesan 24 bulan", price: "Rp 65.000", tag: "Chef Special" },
        { name: "Smoked Beef Sourdough Sando", description: "Daging sapi asap, cheddar melt, mustard relish, kentang renyah", price: "Rp 58.000" },
        { name: "Grilled Chicken Pesto Bowl", description: "Ayam panggang rosemary, saus pesto basil segar, nasi aromatik", price: "Rp 55.000" },
        { name: "Classic Fish & Chips", description: "Dori renyah berbalut adonan ragi, saus tartar segar buatan sendiri", price: "Rp 58.000" },
        { name: "Truffle Fries with Aioli", description: "Kentang goreng renyah dengan minyak truffle putih dan saus aioli", price: "Rp 35.000" },
      ],
    },
    {
      title: "Artisan Viennoiserie & Desserts",
      description: "Dipanggang setiap pagi hari oleh tim pastry in-house dengan mentega murni Prancis.",
      items: [
        { name: "French Butter Croissant", description: "Viennoiserie klasik berongga sempurna dengan mentega Elle & Vire", price: "Rp 32.000", tag: "Best Seller" },
        { name: "Pain au Chocolat", description: "Croissant lapis emas dengan dua batang dark chocolate Valrhona", price: "Rp 38.000" },
        { name: "Almond Frangipane Croissant", description: "Isian krim almond kaya rasa, taburan kacang almond panggang", price: "Rp 42.000" },
        { name: "Burnt Basque Cheesecake", description: "Cheesecake lumer dengan permukaan karamelisasi yang wangi", price: "Rp 45.000" },
        { name: "Classic Tiramisu al Mascarpone", description: "Ladyfinger berlumur espresso Komorebi, keju mascarpone asli", price: "Rp 48.000", tag: "Signature" },
      ],
    },
  ],
  features: [
    {
      id: "feat-1",
      title: "Specialty Grade Coffee",
      description:
        "Biji kopi pilihan yang dinilai di atas skor 84, disangrai perlahan untuk menonjolkan aroma dan cita rasa asli daerah asalnya.",
      iconName: "coffee",
    },
    {
      id: "feat-2",
      title: "Fresh Daily Bakery",
      description:
        "Roti dan viennoiserie dipanggang setiap jam 6 pagi oleh baker in-house kami menggunakan mentega Eropa pilihan.",
      iconName: "bakery",
    },
    {
      id: "feat-3",
      title: "Cozy Space & Fast Wi-Fi",
      description:
        "Koneksi internet fiber stabil hingga 100 Mbps serta stopkontak di hampir setiap meja, ramah untuk kerja mandiri maupun diskusi tim.",
      iconName: "wifi",
    },
    {
      id: "feat-4",
      title: "Area Parkir Luas & Aman",
      description:
        "Fasilitas parkir mobil dan motor yang lapang tepat di depan cafe, lengkap dengan penjagaan staf keamanan kami.",
      iconName: "parking",
    },
    {
      id: "feat-5",
      title: "Pet-Friendly Garden Patio",
      description:
        "Area teras terbuka beratap rindang yang menyambut ramah anabul peliharaan kesayangan Anda di akhir pekan santai.",
      iconName: "pet",
    },
    {
      id: "feat-6",
      title: "Zona AC & Smoking Terpisah",
      description:
        "Tata ruang terpisah dengan sistem sirkulasi udara independen agar kenyamanan seluruh pengunjung tetap terjaga prima.",
      iconName: "air",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Morning Sunlit Table",
      category: "Ambiance",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
      alt: "Meja kayu hangat dengan cahaya matahari pagi masuk melalui jendela kaca besar",
      aspect: "portrait",
    },
    {
      id: "gal-2",
      title: "Latte Art Perfection",
      category: "Coffee",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
      alt: "Cangkir keramik berisi latte art rosetta di atas meja marmer",
      aspect: "square",
    },
    {
      id: "gal-3",
      title: "Artisan Pour Over",
      category: "Coffee",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
      alt: "Penyeduhan kopi manual brew dengan ketel gooseneck",
      aspect: "portrait",
    },
    {
      id: "gal-4",
      title: "Golden Hour Terrace",
      category: "Ambiance",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      alt: "Area duduk outdoor cafe yang asri saat matahari terbenam",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      title: "Fresh Baked Croissant",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
      alt: "Croissant mentega yang mengkilap keemasan baru selesai dipanggang",
      aspect: "square",
    },
    {
      id: "gal-6",
      title: "Signature Pasta Dish",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1000&auto=format&fit=crop",
      alt: "Sajian pasta truffle di piring keramik abu-abu elegan",
      aspect: "portrait",
    },
    {
      id: "gal-7",
      title: "Quiet Corner for Reading",
      category: "Ambiance",
      image:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop",
      alt: "Sudut tenang dengan kursi berlengan dan buku untuk membaca santai",
      aspect: "landscape",
    },
    {
      id: "gal-8",
      title: "Minimalist Coffee Counter",
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1000&auto=format&fit=crop",
      alt: "Meja bar kopi marmer putih dengan mesin espresso modern",
      aspect: "square",
    },
  ],
  reviewsSummary: {
    averageRating: 4.9,
    totalReviews: 520,
    platform: "Google Reviews",
  },
  reviews: [
    {
      id: "rev-1",
      author: "Nadia Paramitha",
      rating: 5,
      date: "1 minggu lalu",
      text: "Kopinya konsisten enak, Spanish Latte-nya pas dan tidak kemanisan. Tempatnya sangat nyaman untuk fokus kerja atau ngobrol santai tanpa bising musik yang mengganggu. Pastry-nya juga luar biasa renyah.",
      source: "Google Review Terverifikasi",
    },
    {
      id: "rev-2",
      author: "Dimas Wicaksono",
      rating: 5,
      date: "3 minggu lalu",
      text: "Suasana sore di area semi-outdoor sangat tenang dan teduh. Pasta truffle-nya creamy gurih berpadu pas dengan manual brew Flores. Barista dan stafnya ramah melayani dengan tulus.",
      source: "Google Review Terverifikasi",
    },
    {
      id: "rev-3",
      author: "Reza Pratama",
      rating: 5,
      date: "1 bulan lalu",
      text: "Desain interiornya berkelas dengan banyak ruang bernapas. Pilihan biji kopi single origin selalu dirotasi setiap minggu sehingga tidak pernah bosan mencoba rasa baru.",
      source: "Google Review Terverifikasi",
    },
  ],
  seo: {
    title: "Komorebi Coffee & Dining | Specialty Coffee & Artisan Bakery Surabaya",
    description:
      "Komorebi Coffee & Dining adalah cafe specialty coffee dan artisan eatery premium di Surabaya. Nikmati kopi pilihan, roti segar, dan suasana tenang untuk bersantai atau bekerja.",
    keywords: [
      "cafe surabaya",
      "specialty coffee surabaya",
      "cafe darmo surabaya",
      "artisan bakery surabaya",
      "tempat ngopi surabaya",
      "cafe wfc surabaya",
      "komorebi coffee",
    ],
    siteUrl: "https://komorebicafe.id",
    city: "Surabaya",
    priceRange: "$$",
    coordinates: {
      latitude: -7.2873,
      longitude: 112.7355,
    },
  },
};
