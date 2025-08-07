import {
  CheckCircle,
  Settings,
  Zap,
  Globe,
  Shield,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

// Features data with Lucide icons
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Premium Quality Materials",
    description:
      "We use only the highest quality materials to ensure durability and longevity of all our products.",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "We offer tailored kitchen equipment solutions to meet the specific needs of your business or home.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Energy Efficient",
    description:
      "Our equipment is designed to minimize energy consumption while maximizing performance.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Nationwide Service",
    description:
      "We provide installation and maintenance services across India to ensure your equipment performs optimally.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Warranty & Support",
    description:
      "All our products come with comprehensive warranty and dedicated customer support.",
    icon: Shield,
  },
  {
    id: 6,
    title: "Innovative Design",
    description:
      "We continuously innovate to bring you the latest advancements in kitchen equipment technology.",
    icon: Lightbulb,
  },
];
// Products data
export const products = [
  {
    id: 1,
    name: "Commercial Range Cookers",
    slug: "commercial-range-cookers",
    description:
      "High-performance range cookers designed for commercial kitchens with durability and efficiency in mind.",
    image: "https://elina.frappe.cloud/files/product-1.png",
    category: "commercial",
  },
  {
    id: 2,
    name: "Stainless Steel Work Tables",
    slug: "stainless-steel-work-tables",
    description:
      "Premium quality stainless steel work tables with customizable configurations for any kitchen layout.",
    image: "https://elina.frappe.cloud/files/product-2.png",
    category: "commercial",
  },
  {
    id: 3,
    name: "Ventilation Systems",
    slug: "ventilation-systems",
    description:
      "Advanced kitchen ventilation systems that ensure a clean, safe, and comfortable working environment.",
    image: "https://elina.frappe.cloud/files/product-3.png",
    category: "commercial",
  },
  {
    id: 4,
    name: "Refrigeration Units",
    slug: "refrigeration-units",
    description:
      "Energy-efficient refrigeration units designed for commercial kitchens with various capacity options.",
    image: "https://placehold.co/600x400.png",
    category: "commercial",
  },
  {
    id: 5,
    name: "Modular Kitchen Systems",
    slug: "modular-kitchen-systems",
    description:
      "Customizable modular kitchen systems for residential spaces with modern design and functionality.",
    image: "https://placehold.co/600x400.png",
    category: "residential",
  },
  {
    id: 6,
    name: "Kitchen Islands",
    slug: "kitchen-islands",
    description:
      "Versatile kitchen islands that provide additional workspace and storage for any kitchen layout.",
    image: "https://placehold.co/600x400.png",
    category: "residential",
  },
];

export const commercialProducts = [
  {
    id: 1,
    name: "Commercial Range Cookers",
    description:
      "High-performance gas and electric range cookers for professional kitchens",
    image: "https://elina.frappe.cloud/files/product-1.png",
    features: [
      "Heavy-duty construction",
      "Multiple burner configurations",
      "Easy maintenance",
    ],
  },
  {
    id: 2,
    name: "Stainless Steel Work Tables",
    description:
      "Durable work surfaces with storage options for commercial food preparation",
    image: "https://elina.frappe.cloud/files/product-2.png",
    features: [
      "Food-grade stainless steel",
      "Adjustable shelving",
      "Easy to clean",
    ],
  },
  {
    id: 3,
    name: "Commercial Dishwashers",
    description: "High-capacity dishwashing systems for restaurants and hotels",
    image: "https://elina.frappe.cloud/files/R.jpg",
    features: [
      "Fast wash cycles",
      "Energy efficient",
      "Multiple rack configurations",
    ],
  },
  {
    id: 4,
    name: "Ventilation Systems",
    description:
      "Complete kitchen ventilation solutions including hoods and exhaust systems",
    image: "https://elina.frappe.cloud/files/product-3.png",
    features: [
      "Powerful extraction",
      "Fire suppression ready",
      "Custom sizing available",
    ],
  },
  {
    id: 5,
    name: "Refrigeration Units",
    description:
      "Commercial refrigerators and freezers for food storage and display",
    image: "https://elina.frappe.cloud/files/OIP.jpg",
    features: [
      "Temperature control",
      "Energy efficient",
      "Various sizes available",
    ],
  },
  {
    id: 6,
    name: "Food Preparation Equipment",
    description: "Mixers, slicers, and other food preparation machinery",
    image: "https://elina.frappe.cloud/files/Catering-PrepEqu-FoodSlicers2.jpg",
    features: ["Heavy-duty motors", "Safety features", "Easy operation"],
  },
];

export const services = [
  {
    title: "Part Identification",
    description:
      "Help identifying the correct replacement part for your equipment",
    icon: "🔍",
  },
  {
    title: "Installation Support",
    description: "Technical guidance for proper installation and setup",
    icon: "🔧",
  },
  {
    title: "Warranty Coverage",
    description: "Comprehensive warranty on all genuine replacement parts",
    icon: "🛡️",
  },
  {
    title: "Express Shipping",
    description: "Fast delivery to minimize equipment downtime",
    icon: "🚚",
  },
];

export const customSolutions = [
  {
    id: 1,
    title: "Restaurant Kitchens",
    description:
      "End-to-end design and equipment for efficient, high-volume restaurant operations.",
    image: "https://elina.frappe.cloud/files/Research-Developme.png",
    process: [
      "Site Survey",
      "Menu Analysis",
      "Layout Planning",
      "Installation & Handover",
    ],
  },
  {
    id: 2,
    title: "Café & Bakery Kitchens",
    description:
      "Specialized layouts and baking equipment for cafes, bakeries, and patisseries.",
    image: "https://elina.frappe.cloud/files/Indian-themed-bakery.png",
    process: [
      "Space Assessment",
      "Equipment Selection",
      "Utility Mapping",
      "Commissioning",
    ],
  },
  {
    id: 3,
    title: "Catering Kitchens",
    description:
      "Mobile and high-capacity setups designed for off-site catering services.",
    image: "https://elina.frappe.cloud/files/bulk-cooking-kitchen.png",
    process: [
      "Requirement Analysis",
      "Custom Fabrication",
      "Mobility Planning",
      "Deployment",
    ],
  },
  {
    id: 4,
    title: "Cloud Kitchens / Ghost Kitchens",
    description:
      "Compact, delivery-optimized kitchens for virtual brands and multi-brand setups.",
    image: "https://elina.frappe.cloud/files/cloud.png",
    process: [
      "Workflow Optimization",
      "Multi-brand Integration",
      "Ventilation & Safety",
      "Setup & Launch",
    ],
  },
  {
    id: 5,
    title: "Institutional Kitchens",
    description:
      "Mass-meal production kitchens for schools, colleges, hospitals, and hostels.",
    image: "https://elina.frappe.cloud/files/inst.png",
    process: [
      "Capacity Planning",
      "Industrial Equipment Setup",
      "Hygiene Compliance",
      "Staff Training",
    ],
  },
  {
    id: 6,
    title: "Central Commissary Kitchens",
    description:
      "Large-scale centralized kitchens for multi-outlet food production and distribution.",
    image: "https://elina.frappe.cloud/files/centralcommissaryk.png",
    process: [
      "Production Flow Design",
      "Bulk Equipment Installation",
      "Cold Storage Integration",
      "Automation",
    ],
  },
  /*
  {
    id: 7,
    title: "R&D Kitchens",
    description: "Custom-built kitchens for testing, food innovation, and product development.",
    image: "https://elina.frappe.cloud/600x400.png",
    process: ["Requirement Gathering", "Specialized Equipment", "Prototype Setup", "Iteration Support"],
  },*/
];

export const customizationOptions = [
  {
    title: "Size & Dimensions",
    description: "Equipment sized to fit your exact space requirements",
    icon: "📏",
  },
  {
    title: "Material Selection",
    description: "Choose from various grades of stainless steel and finishes",
    icon: "🔧",
  },
  {
    title: "Feature Integration",
    description: "Add specific features and functionalities as needed",
    icon: "⚙️",
  },
  {
    title: "Smart Technology Integration",
    description: "Incorporate IoT, automation, and energy-efficient systems",
    icon: "📡",
  },
];


// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Executive Chef, Grand Hotel Bangalore",
    text: "The commercial kitchen equipment from Syena has transformed our kitchen operations. The quality and durability are exceptional, and their after-sales service is prompt and reliable.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Owner, Spice Route Restaurant",
    text: "We've been using Syena's equipment for over two years now, and I'm impressed with how well they've held up despite our busy kitchen. Their customized solutions perfectly fit our space constraints.",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    position: "Facility Manager, Corporate Cafeteria",
    text: "The energy efficiency of Syena's equipment has significantly reduced our operational costs. Their team was professional during installation and provided excellent training to our staff.",
  },
];

// Gallery items data
export const galleryItems = [
  {
    id: 1,
    title: "Commercial Kitchen Setup",
    description: "Complete kitchen setup for a 5-star hotel in Bangalore",
    category: "commercial",
    image: "https://placehold.co/600x400.png",
  },
  {
    id: 2,
    title: "MaiMai Restaurant Kitchen",
    description: "Syena engineered and installed a state-of-the-art commercial kitchen for MaiMai (Bengaluru), empowering Chef Shamik Mondal's brigade to deliver unforgettable culinary experiences.",
    category: "commercial",
    image: "/images/gallery/maimai/maimai%20(1).jpg",
  },
  {
    id: 3,
    title: "Luxury Home Kitchen",
    description: "Custom kitchen design for a luxury residence",
    category: "renovation",
    image: "https://placehold.co/600x400.png",
  },
  {
    id: 4,
    title: "Apartment Kitchen Renovation",
    description: "Complete renovation of an apartment kitchen",
    category: "renovation",
    image: "https://placehold.co/600x400.png",
  },
  {
    id: 5,
    title: "Commercial Range Cookers",
    description: "High-performance range cookers for commercial use",
    category: "equipment",
    image: "https://elina.frappe.cloud/files/product-1.png",
  },
  {
    id: 6,
    title: "Stainless Steel Work Tables",
    description: "Custom stainless steel work tables for professional kitchens",
    category: "equipment",
    image: "https://elina.frappe.cloud/files/product-2.png",
  },
  {
    id: 7,
    title: "Hotel Buffet Setup",
    description: "Complete buffet line setup for a hotel restaurant",
    category: "commercial",
    image: "https://placehold.co/600x400.png",
  },
  {
    id: 8,
    title: "Modern Home Kitchen",
    description: "Contemporary kitchen design for a modern home",
    category: "renovation",
    image: "https://placehold.co/600x400.png",
  },
  {
    id: 9,
    title: "Ventilation Systems",
    description: "Advanced kitchen ventilation systems for commercial use",
    category: "equipment",
    image: "https://elina.frappe.cloud/files/product-3.png",
  },
  {
    id: 10,
    title: "MaiMai Restaurant Kitchen",
    description: "High-efficiency cooking line featuring advanced induction ranges and smart exhaust hoods installed at MaiMai.",
    category: "commercial",
    image: "/images/gallery/maimai/maimai%20(2).jpg",
  },
  {
    id: 11,
    title: "MaiMai Restaurant Kitchen",
    description: "Stainless-steel prep zone with integrated refrigeration and hygiene stations at MaiMai.",
    category: "commercial",
    image: "/images/gallery/maimai/maimai%20(3).jpg",
  },
];

// Update the team members data
export const teamMembers = [
  {
    id: 1,
    name: "P Jagadeesh Kumar",
    position: "Chief Executive Officer",
    bio: "P Jagadeesh Kumar is a seasoned executive with a strong background in glass and crockery trading industry. He leads Syena's vision for growth, focusing on innovation and market expansion.",
    image: "https://elina.frappe.cloud/files/Jagadeesh-Kumar.png",
  },
  {
    id: 2,
    name: "Sneha Jagadeesh",
    position: "Director",
    bio: "Sneha Jagadeesh brings extensive expertise in corporate strategy and stakeholder engagement. As Director, she focuses on driving business development and fostering key partnerships.",
    image: "https://elina.frappe.cloud/files/Sneha-Jagadeesh.png",
  },
  {
    id: 3,
    name: "Jyothish Antony",
    position: "Director",
    bio: "Jyothish brings over 15 years of leadership experience in manufacturing and corporate governance. As Director, he drives strategic direction and ensures compliance across all operations.",
    image: "https://elina.frappe.cloud/files/Jyothish-Antony.png",
  },
  {
    id: 4,
    name: "Sunit Jagadeesh",
    position: "Chief Operating Officer",
    bio: "Sunit oversees daily operations at Syena, optimizing processes and coordinating cross-functional teams to ensure timely delivery and top-quality products.",
    image: "https://elina.frappe.cloud/files/Sunit-Jagadeesh.png",
  },
];

// Add company contact information
export const companyInfo = {
  name: "Syena Kitchenconceptz Manufacturing Pvt. Ltd.",
  address: {
    line1: "Ground Floor, 108, 7th Mile Hosur Rd, Chikka Begur,",
    line2: "Industrial Layout, Garvebhavi Palya,",
    city: "Bengaluru",
    state: "Karnataka",
    zip: "560068",
    country: "India",
  },
  phone: {
    main: "+91 80 4178 4630",
    sales: "+91 98454 47744",
  },
  email: {
    info: "info@elina.so",
    sales: "sales@elina.so",
  },
  hours: {
    weekdays: "Monday - Saturday: 9:30 AM - 6:30 PM",
    weekend: "Sunday: Closed",
  },
  social: {
    facebook: "https://www.facebook.com/elina.so.official/",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/elina.soblr/",
    linkedin: "https://www.linkedin.com/company/elina-so/",
    youtube: "",
  },
};
