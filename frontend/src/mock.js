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
    id: "installations",
    name: "Installations",
    description: "Interactive and immersive art experiences"
  },
  {
    id: "performances",
    name: "Performances",
    description: "Live and participatory art events"
  },
  {
    id: "video",
    name: "Video",
    description: "Experimental and narrative video works"
  }
];

export const projects = [
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
  },
// Performances
  {
    id: "urban-solitude",
    title: "Urban Solitude",
    category: "performances",
    year: "2024",
    medium: "Live performance",
    description: "A performance exploring loneliness and connection in Norwegian cities.",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&crop=center",
        title: "Evening Commute",
        description: "Oslo Central Station, 2024"
      }
    ]
  },
  {
    id: "performance-1",
    title: "Echoes in the Fjord",
    category: "performances",
    year: "2023",
    medium: "Site-specific performance",
    description: "A sound and movement piece performed on the shores of a Norwegian fjord.",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop&crop=center",
        title: "Fjord Echo",
        description: "Performance at sunset"
      }
    ]
  },
  {
    id: "performance-2",
    title: "Midnight Sun Ritual",
    category: "performances",
    year: "2022",
    medium: "Outdoor performance",
    description: "A ritualistic dance under the midnight sun in northern Norway.",
    coverImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=800&fit=crop&crop=center",
        title: "Midnight Dance",
        description: "Northern Norway, 2022"
      }
    ]
  },
  {
    id: "performance-3",
    title: "Silent City",
    category: "performances",
    year: "2021",
    medium: "Urban intervention",
    description: "A silent walk through Oslo exploring urban space and collective presence.",
    coverImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&h=800&fit=crop&crop=center",
        title: "Silent Walk",
        description: "Oslo, 2021"
      }
    ]
  },
  {
    id: "how to read water",
    title: "How to Read Water",
    category: "performances",
    year: "2023",
    medium: "Interactive performance",
    description: "In ‘How to read water’ dance artist Anna Thu Schmidt, musician Thea Ellingsen Grant, and visual artist/VJ Mina Paasche create a multidisciplinary performance experience and invite you into a timeless and meditative space. ‘How to read water’ takes inspiration from the relationship between the human body and the ocean. The connection one feels to the ocean is translated to a connection between performer and audience.",
    coverImage: "https://static.wixstatic.com/media/244aed_dba81118865b40ad8a00531f34864319~mv2.jpg/v1/fill/w_1188,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/244aed_dba81118865b40ad8a00531f34864319~mv2.jpg",
    images: [
      {
        url: "https://static.wixstatic.com/media/244aed_3b97cc73dc9c487fb30608870ad54a82~mv2.jpg/v1/fill/w_2726,h_1533,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/244aed_3b97cc73dc9c487fb30608870ad54a82~mv2.jpg",
        title: "anna dances",
        description: "Interactive session"
      }
    ]
  },
  {
    id: "performance-5",
    title: "Pulse",
    category: "performances",
    year: "2019",
    medium: "Dance performance",
    description: "A contemporary dance piece exploring rhythm and emotion.",
    coverImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=800&fit=crop&crop=center",
        title: "Pulse",
        description: "Dance performance, 2019"
      }
    ]
  },
  // Video
  {
    id: "abstract-forms",
    title: "Abstract Forms",
    category: "video",
    year: "2023",
    medium: "Experimental video",
    description: "Geometric abstractions inspired by Norwegian folk patterns and natural textures.",
    coverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop&crop=center",
        title: "Fractured Landscape",
        description: "Video still"
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