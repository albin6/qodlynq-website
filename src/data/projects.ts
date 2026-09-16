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
    id: "project-01",
    title: "Healthcare Analytics Platform",
    description: "A comprehensive dashboard for medical professionals to track patient outcomes and operational efficiency.",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", // Placeholder Cloudinary URL
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "project-02",
    title: "E-Commerce Experience",
    description: "A high-performance headless commerce solution optimized for conversion and speed.",
    category: "Web Application",
    technologies: ["React", "Shopify Plus", "Framer Motion"],
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "project-03",
    title: "Fintech Mobile Application",
    description: "A secure and intuitive mobile application for real-time portfolio management.",
    category: "Mobile",
    technologies: ["React Native", "PostgreSQL", "Go"],
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    liveUrl: "https://example.com"
  }
];
