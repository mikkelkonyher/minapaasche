// Mock data for Mina Paasche's portfolio
export const artistInfo = {
  name: "Mina Paasche",
  title: "Visual Artist",
  location: "Norway",
  bio: "Norwegian visual artist exploring the intersection of light, form, and emotion through various mediums including painting, photography, and installation work.",
  email: "contact@minapaasche.com",
  social: {
    instagram: "https://instagram.com/minapaasche",
    facebook: "https://facebook.com/minapaasche.art",
    linkedin: "https://linkedin.com/in/minapaasche"
  }
};

export const projectCategories = [
  {
    id: "paintings",
    name: "Paintings",
    description: "Oil and acrylic works exploring Nordic landscapes and abstract forms"
  },
  {
    id: "photography", 
    name: "Photography",
    description: "Capturing the essence of Norwegian nature and urban environments"
  },
  {
    id: "installations",
    name: "Installations", 
    description: "Interactive and immersive art experiences"
  }
];

export const projects = [
  // Paintings
  {
    id: "nordic-seascapes",
    title: "Nordic Seascapes",
    category: "paintings",
    year: "2024",
    medium: "Oil on canvas",
    description: "A series exploring the dramatic coastlines of western Norway through bold brushstrokes and muted color palettes.",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center",
        title: "Stormy Waters I",
        description: "Oil on canvas, 100x80cm"
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&crop=center", 
        title: "Coastal Reflections",
        description: "Oil on canvas, 120x90cm"
      },
      {
        url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop&crop=center",
        title: "Northern Light",
        description: "Oil on canvas, 80x60cm"
      }
    ]
  },
  {
    id: "abstract-forms",
    title: "Abstract Forms", 
    category: "paintings",
    year: "2023",
    medium: "Acrylic on canvas",
    description: "Geometric abstractions inspired by Norwegian folk patterns and natural textures.",
    coverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop&crop=center",
        title: "Fractured Landscape",
        description: "Acrylic on canvas, 90x70cm"
      },
      {
        url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center",
        title: "Rhythmic Patterns", 
        description: "Acrylic on canvas, 100x100cm"
      }
    ]
  },
  // Photography
  {
    id: "urban-solitude",
    title: "Urban Solitude",
    category: "photography", 
    year: "2024",
    medium: "Digital photography",
    description: "A photographic exploration of loneliness and connection in Norwegian cities.",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&crop=center",
        title: "Evening Commute",
        description: "Oslo Central Station, 2024"
      },
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop&crop=center",
        title: "Reflection in Glass",
        description: "Bergen city center, 2024"
      },
      {
        url: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=1200&h=800&fit=crop&crop=center",
        title: "Shadow and Light", 
        description: "Trondheim streets, 2024"
      }
    ]
  },
  // Installations
  {
    id: "light-spaces",
    title: "Light Spaces",
    category: "installations",
    year: "2023", 
    medium: "Mixed media installation",
    description: "An immersive installation exploring how light shapes our perception of space and time.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&crop=center",
        title: "Installation View 1",
        description: "Gallery Norsk, Oslo 2023"
      },
      {
        url: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&h=800&fit=crop&crop=center",
        title: "Detail: Light Projection",
        description: "LED and fiber optic installation"
      }
    ]
  }
];

export const testimonials = [
  {
    name: "Lars Andersen",
    role: "Gallery Director, Norsk Contemporary",
    quote: "Mina's work captures the essence of Norwegian identity through a contemporary lens."
  },
  {
    name: "Dr. Astrid Holm", 
    role: "Art Critic, Kunstkritikk",
    quote: "A powerful voice in Nordic contemporary art, bridging tradition and innovation."
  }
];