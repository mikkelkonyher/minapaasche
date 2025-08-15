// Mock data for Mina Paasche's portfolio
export const artistInfo = {
  name: "Mina Paasche",
  title: "Visual Artist",
  location: "Copenhagen, Denmark",
  bio: "Norwegian visual artist exploring the intersection of light, form, and emotion through various mediums including painting, photography, and installation work.",
  email: "minapaasche@gmail.com",
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
    id: "Photography",
    name: "Photography",
    description: "Experimental and narrative video works"
  }
];

export const projects = [
  // Installations
  {
    id: "mother",
    title: "The Things Not Even Your Mother Can Tell You",
    category: "installations",
    year: "2023",
    medium: "Multimedia installation",
    description: "The work explores fertility, transhumanism, and botany through a cross-disciplinary collaboration merging fine art, design, contemporary dance, music, sound design, and technology. Presented as a multimedia installation, the project debuted at my Master of Fine Arts Graduation Show at Room 61, KMD, Bergen in 2023. The work have also been shown at the mini peace festival and exhibition at The Feminist House in Trondheim, 2024.",
      coverImage: "/assets/_LMP4226,small.jpg",
    images: [
      {
        url: "/assets/_LMP4226,small.jpg",
        title: "",
        description: "Film still of contemporary dancer Susanne Engbo Andersen"
      },
        {
            url: "/assets/Stillimage2,MinaPaasche2022,small.jpg",
            title: "",
            description: "Film still"
        },
        {
            url: "/assets/_LMP4213.small.jpg",
            title: "",
            description: "Room 61 KMD, Bergen"
        },



    ]
  },
  {
    id: "ambisonic-space",
    title: "62°47′60″N 11°11′24″E",
    category: "installations",
    year: "2022",
    medium: "Sound installation",
    description: "An 18-channel ambisonic sound installation immersing listeners in a precise, spatially mapped sonic environment. Recorded by the fjord and enriched with ocean drum, waterphone resonance, and layered field recordings, the 12:59-minute composition unfolds as a shifting landscape of textures and orientations. Presented in the Ambisonic Chambre at the Royal Danish Art Academy in 2022, the work invites the audience to navigate sound as space—where location becomes both a point on a map and an embodied, sensory experience.\n" +
        " \n"
        ,
    coverImage: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
    images: [
      {
        url: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
        title: "",
        description: "Installation at the Royal Danish Art Academy"
      },
        {
            url: "/assets/AmbisonicspaceINstallperson, 2 small.jpg",
            title: "",
            description: "Collaboration with Mysa, Circe, Purri and a wonderful little anonymous human I know in Trondheim. Amalia Fonfara, Thea Ellingsen Grant, Daniel Vincent Hansen, Mikkel Konyher  and Stephen McEvoy."
        },
    ]
  },

  {
    id: "lifeline",
    title: "FLASH Light Biennale – Lifeline",
    category: "installations",
    year: "2021",
    medium: "Multimedia installation",
    description: "At the FLASH Light Biennale in Suomenlinna, Helsinki, I collaborated with Nordic artists to transform a historic, chapel-like military space into an immersive light and sound installation. The work, Lifeline, used precision-shaped beams from two theatre lamps, combined with smoke and slow rhythmic fades, to create a shifting corridor of light and darkness. Accompanied by an atmospheric soundscape layered with diegetic industrial recordings, the piece invited visitors to experience altered perceptions of time and space within the fortress’s deep, resonant architecture.",
    coverImage: "/assets/Lifeline,small1.jpg",
    images: [
      {
        url: "/assets/Lifeline,small1.jpg",
        title: "",
        description: "Suomenlinna fortress by the sea"
      },

        {
            url: "/assets/lifeline small 2.jpg",
            title: "",
            description: "Light, Smoke, Sound"
        },
        {
            url: "/assets/lifeline small2.jpg",
            title: "",
            description: "Corridor of light"
        },

    ]
  },
    {
        id: "Factory Light Festival – Projection Mapping at Dikemark",
        title: "Factory Light Festival – Projection Mapping at Dikemark",
        category: "installations",
        year: "2021",
        medium: "Projection mapping installation",
        description: "As part of the Factory Light Festival’s de:LUX production in Asker, Norway, I collaborated with Nordic artists to create a site-specific projection mapping work within 48 hours. Using high-powered projectors and the historic façade of an abandoned 1905 psychiatric facility, the visuals transformed the architecture into a dynamic canvas of light, texture, and movement. The piece merged experimental visuals with sound to respond to the site’s layered history, reimagining the space through contemporary digital storytelling.\n" +
            "\n" +
            "Collaboration with Ilmari Pesonen (FI) and Anton Kaldal Ágústsson (IS)",
        coverImage: "/assets/_LMP2922,small.jpg",
        images: [
            {
                url: "/assets/_LMP2922,small.jpg",
                title: "",
                description: "Projection mapping"
            },
            {
                url: "/assets/_LMP2933,small.jpg",
                title: "",
                description: "untitled"
            },

            {
                url: "/assets/_LMP2835,small.jpg",
                title: "",
                description: "untitled"
            },
        ]
    },

    {
        id: "A bundle of echoes",
        title: "A Bundle of Echoes",
        category: "installations",
        year: "2020",
        medium: "Film installation",
        description: "Filmed in Shillong, India, this video work follows three visually impaired individuals who navigate their surroundings using echolocation—seeing through sound, touch, and movement. Rather than framing blindness as a disability, the project explores it as a distinct way of experiencing the world, one that offers deeper intimacy and connection than vision alone. The film accompanies the protagonists as they become the first group of visually impaired hikers to cross Meghalaya’s Living Root Bridge, climb the region’s iconic tree huts, and traverse dense jungle. Their journey challenges cultural perceptions of sight, ability, and independence, revealing new ways of sensing and inhabiting space.\n" +
            "\n" +
            "Collaboration with Maria Puenchir, Benister Kharpour, Thomas Tajo, Jones Pointing, Sonia Hage, Christopher Logan and Mikkel Koyher.",
        coverImage: "/assets/Still1 ABundleofEchoes,Mina Paasche, 2020, stillimage1, small.jpg",
        images: [
            {
                url: "/assets/Still1 ABundleofEchoes,Mina Paasche, 2020, stillimage1, small.jpg",
                title: "",
                description: "Lady Hydary park, Shillong, India"
            },
            {
                url: "/assets/Dag 01 Parken & Kirken A.00_04_28_14.Still006, small.jpg",
                title: "",
                description: "Touching the bamboo trees"
            },

            {
                url: "/assets/Dag 01 Parken & Kirken C.00_24_08_11.Still001, small.jpg",
                title: "",
                description: "The Cathedral Catholic Church in Shillong"
            },
        ]
    },

    {
        id: "Listening and Navigation",
        title: "Listening and Navigation",
        category: "installations",
        year: "2021",
        medium: "Film installation",
        description: "Listening and Navigation is a series consisting of different intermedia installations exploring human echolocation as both a navigational skill and an alternative way of perceiving the world. Six transducer speakers, connected through multiple amplifiers and channels, transmit vibrations through materials like wood and glass, allowing visitors to experience sound physically as well as aurally. Live field recordings follow Maria Puenchir navigating snowy forests in Trondheim using echolocation, while a drone tracks their movements from above—machine and human simultaneously finding their way through the landscape. The work invites audiences into a world where hearing becomes a form of vision, and where echoes form an existential dialogue with the environment.\n\n" +
            "Collaborators: Maria Puenchir, Mikkel Konyher, Trygve Waagen, Emiel Huijes, Fatuma Abdi, Joel Vide Hynsjö and Ingunn Schumann Mosand.",
        coverImage: "/assets/Dokumentasjon Århus artspace 1, small.jpg",
        images: [
            {
                url: "/assets/Dokumentasjon Århus artspace 1, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/DSC02703, small.jpg",
                title: "",
                description: "Untitled"
            },

            {
                url: "/assets/Lydregn2021GalleriKITINstall,small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/ScreenshotIwasblind,small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/EditedbyMina4_MikkeMarhuagGalleriKITl, small.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },





// Performances
  {
    id: "Sindre",
    title: "Sindre",
    category: "performances",
    year: "2024",
    medium: "Live performance",
    description: "Created for the J.T. Lundbye Festival in Kalundborg, Denmark, Sindre was a cross-disciplinary performance combining live music, spoken word, and large-scale video projections. Conceived by composer and musician Jesper Balslev, the piece brought together a team of artists to celebrate Lundbye’s birthday with a site-specific concert experience. My contribution was the visual dimension - a 5 × 14 metre projection mapping that enveloped the space in shifting imagery, merging seamlessly with the music and narration to create an immersive, multi-sensory encounter.\n\n" +
        "Collaboration with Jesper Balslev, Samira Dayyani, Morten Grønvad, Lars Emil Fode, Martin Kejser, Marianne Glynstrup, Rasmus Satto and Mina Paasche. ",
    coverImage: "/assets/IMG_1354, small.jpg",
    images: [
      {
        url: "/assets/IMG_1354, small.jpg",
        title: "",
        description: "Untitled"
      },
        {
            url: "/assets/Koncert_Jesper_1.sept_(02), small.jpg",
            title: "",
            description: "Untitled"
        },
        {
            url: "/assets/Koncert_Jesper_1.sept_(14), small.jpg",
            title: "",
            description: "Untitled"
        },
        {
            url: "/assets/Koncert_Jesper_1.sept_(17), small.jpg",
            title: "",
            description: "Untitled"
        },
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

    // Photography
    {
        id: "installation-3",
        title: "Forest of Light",
        category: "Photography",
        year: "2020",
        medium: "LED installation",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
        images: [
            {
                url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&h=800&fit=crop&crop=center",
                title: "LED Forest",
                description: "Immersive light experience"
            },
        ]
    },

    {
        id: "installation-3",
        title: "Forest of Light",
        category: "Photography",
        year: "2020",
        medium: "LED installation",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
        images: [
            {
                url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&h=800&fit=crop&crop=center",
                title: "LED Forest",
                description: "Immersive light experience"
            },
        ]
    },
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