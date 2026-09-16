export type Project = {
  id: string;
  title: string;
  slug?: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "dates-qatar",
    title: "Dates Qatar",
    slug: "dates-qatar",
    category: "Website",
    description: "Corporate website for Dates Doha Contracting WLL, presenting its contracting and trading services with a professional digital presence.",
    technologies: [],
    image: "https://res.cloudinary.com/demo/image/upload/qodlynq/projects/dates-qatar.jpg",
    liveUrl: "https://datesqatar.com/",
    featured: true
  },
  {
    id: "loop",
    title: "Loop",
    slug: "loop",
    category: "Web Application",
    description: "An intelligent reviewer and remuneration platform that streamlines reviewer scheduling, slot booking, automated remuneration calculations, Google Calendar synchronization, and operational tracking.",
    technologies: [],
    image: "https://res.cloudinary.com/demo/image/upload/qodlynq/projects/loop.jpg",
    liveUrl: "https://rm.mintrovia.in/",
    featured: true
  },
  {
    id: "vc-fitness",
    title: "VC Fitness",
    slug: "vc-fitness",
    category: "Web Application",
    description: "A fitness management platform designed to streamline gym operations and provide a digital experience for fitness businesses.",
    technologies: [],
    image: "https://res.cloudinary.com/demo/image/upload/qodlynq/projects/vc-fitness.jpg",
    liveUrl: "https://vcfitness.vercel.app/",
    featured: true
  },
  {
    id: "ezee-org",
    title: "Ezee Org",
    slug: "ezee-org",
    category: "Web Application",
    description: "A digital platform designed to simplify organizational operations through a centralized web experience.",
    technologies: [],
    image: "https://res.cloudinary.com/demo/image/upload/qodlynq/projects/ezee-org.jpg",
    liveUrl: "https://ezeeorg.vercel.app/",
    featured: true
  },
  {
    id: "kerala-agrimart",
    title: "Kerala AgriMart",
    slug: "kerala-agrimart",
    category: "E-commerce",
    description: "An agricultural e-commerce platform connecting customers with agricultural products through a dedicated digital marketplace.",
    technologies: [],
    image: "https://res.cloudinary.com/demo/image/upload/qodlynq/projects/kerala-agrimart.jpg",
    liveUrl: "https://ecom-agricultural.vercel.app/",
    featured: true
  }
];
