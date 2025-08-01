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
    id: "installation-1",
    title: "Echo Chamber",
    category: "installations",
    year: "2022",
    medium: "Sound installation",
    description: "A space where echoes and ambient sounds create an immersive auditory experience.",
    coverImage: "https://static.wixstatic.com/media/244aed_173f4f1826554336a36d9120375f932b~mv2.jpg/v1/fill/w_2814,h_1583,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/244aed_173f4f1826554336a36d9120375f932b~mv2.jpg",
    images: [
      {
        url: "https://static.wixstatic.com/media/244aed_173f4f1826554336a36d9120375f932b~mv2.jpg/v1/fill/w_2814,h_1583,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/244aed_173f4f1826554336a36d9120375f932b~mv2.jpg",
        title: "Echo Chamber Interior",
        description: "Surround sound setup"
      }
    ]
  },
  {
    id: "installation-2",
    title: "Glass Horizons",
    category: "installations",
    year: "2021",
    medium: "Glass and light installation",
    description: "Refractions and reflections using glass panels and colored lights.",
    coverImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=800&fit=crop&crop=center",
        title: "Refraction Detail",
        description: "Colored glass panels"
      }
    ]
  },
  {
    id: "installation-3",
    title: "Forest of Light",
    category: "installations",
    year: "2020",
    medium: "LED installation",
    description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
    coverImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&h=800&fit=crop&crop=center",
        title: "LED Forest",
        description: "Immersive light experience"
      }
    ]
  },
  {
    id: "installation-4",
    title: "Mirror Maze",
    category: "installations",
    year: "2019",
    medium: "Mirrors and architecture",
    description: "A labyrinth of mirrors challenging perception and orientation.",
    coverImage: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f0a0?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f0a0?w=1200&h=800&fit=crop&crop=center",
        title: "Maze Entrance",
        description: "Reflective surfaces"
      }
    ]
  },
  {
    id: "installation-5",
    title: "Water Memory",
    category: "installations",
    year: "2018",
    medium: "Interactive water installation",
    description: "Visitors interact with water surfaces that respond to movement and sound.",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop&crop=center",
        title: "Water Surface",
        description: "Interactive water display"
      }
    ]
  },

  {
    id: "installation-6",
    title: "Shadow Play",
    category: "installations",
    year: "2017",
    medium: "Light and shadow installation",
    description: "An interactive space where visitors manipulate light sources to create evolving shadow patterns.",
    coverImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&h=800&fit=crop&crop=center",
        title: "Shadow Patterns",
        description: "Visitors interacting with light"
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