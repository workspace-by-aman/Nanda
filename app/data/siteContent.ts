export const navigationLinks = [
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#products", label: "Products" },
  { href: "#stores", label: "Stores" },
  { href: "#offerings", label: "Offerings" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const whyChooseReasons = [
  {
    title: "Freshness You Can Truly Taste",
    description:
      "At Nanda Fruiterers, freshness is not just a feature, it is the foundation of everything we offer. Every fruit is carefully handpicked to ensure it reaches you at the perfect stage of ripeness. From vibrant seasonal favourites to premium selections, we make sure each bite is naturally sweet, juicy, and full of life.",
  },
  {
    title: "Uncompromised Quality, Every Day",
    description:
      "We are committed to delivering only the finest produce. From sourcing to display, every step is handled with attention to detail so that you receive fruits that not only look appealing but also taste exceptional. Our focus on quality ensures a consistently premium experience for every customer.",
  },
  {
    title: "A Complete World of Freshness",
    description:
      "Nanda Fruiterers brings together a wide variety of offerings under one roof. Whether it is your daily fruit needs, refreshing cold-pressed juices, indulgent shakes, or wholesome fruit bowls, we provide a complete range designed to suit every mood and lifestyle.",
  },
  {
    title: "Crafted for Health & Taste",
    description:
      "We believe that healthy choices should never feel like a compromise. Our products are thoughtfully prepared to combine nutrition with great taste so you can enjoy every bite and sip while taking care of your well-being.",
  },
  {
    title: "Earned Trust, Built Over Time",
    description:
      "Our journey is defined by the trust of our customers. With consistent quality, honest service, and attention to detail, we have built a strong relationship with those who choose us every day. Their loyalty is a reflection of our commitment to excellence.",
  },
  {
    title: "Convenience That Fits Your Lifestyle",
    description:
      "We understand the value of your time. That is why we ensure a smooth and effortless experience, from quick in-store service to easy ordering and reliable delivery options. Freshness is always within your reach.",
  },
] as const;

export const offerings = [
  {
    title: "Fresh Daily Fruits",
    description:
      "Seasonal and premium fruit selections chosen for ripeness, taste, and visual appeal.",
  },
  {
    title: "Cold-Pressed Juices",
    description:
      "Refreshing blends prepared to deliver clean flavour and natural nourishment in every sip.",
  },
  {
    title: "Signature Shakes",
    description:
      "Indulgent, fruit-forward shakes that balance richness, freshness, and satisfaction.",
  },
  {
    title: "Wholesome Fruit Bowls",
    description:
      "Convenient bowls crafted for busy days, healthy routines, and better snacking choices.",
  },
] as const;

export const productGallery = [
  {
    title: "Seasonal Fresh Fruits",
    description:
      "Colourful seasonal selections prepared to look vibrant and taste naturally rich.",
    image: "/banner.jpg",
    objectPosition: "50% 45%",
  },
  {
    title: "Cold-Pressed Juice Range",
    description:
      "Refreshing juice options crafted to feel clean, energising, and premium.",
    image: "/banner.jpg",
    objectPosition: "center",
  },
  {
    title: "Fruit Bowls & Healthy Servings",
    description:
      "Convenient, wholesome combinations made for quick meals and smarter snacking.",
    image: "/banner.jpg",
    objectPosition: "50% 65%",
  },
] as const;

export const storeGallery = [
  {
    title: "Welcoming Retail Experience",
    description:
      "A fresh, organised environment where quality and presentation stand out instantly.",
    image: "/banner.jpg",
    objectPosition: "50% 38%",
  },
  {
    title: "Premium Display Standards",
    description:
      "Every section is arranged with care so freshness feels visible from the first glance.",
    image: "/banner.jpg",
    objectPosition: "50% 52%",
  },
] as const;

export const trustHighlights = [
  "Handpicked produce with a premium presentation",
  "Health-focused offerings without sacrificing flavour",
  "Reliable service designed around everyday convenience",
] as const;

export const stats = [
  { value: "Daily", label: "fresh arrivals curated for taste and ripeness" },
  { value: "Premium", label: "quality standards across fruits, juices, and bowls" },
  { value: "Trusted", label: "customer relationships built through consistency" },
] as const;

export const contactDetails = {
  phone: "+91 98765 43210",
  email: "support@nanda.com",
  hours: "Mon - Sun, 8:00 AM - 10:00 PM",
  locations: [
    "564-A, near Baba Deep Singh Gurudwara Chowk, Model Town Extension, Ludhiana, Punjab 141002",
    "89-A, Canal Road, South City, Ayali Khurd, Ludhiana, Punjab 142027",
  ],
} as const;
