// Mock data for Mina Paasche's portfolio
export const artistInfo = {
  name: "Mina Paasche",
  title: "Visual Artist",
  location: "Copenhagen, Denmark",
  bio: "Norwegian visual artist exploring the intersection of light, form, and emotion through various mediums including painting, photography, and installation work.",
  email: "Minapaasche@gmail.com",
  social: {
    instagram: "https://www.instagram.com/minapaaschestudio/",
    facebook: "https://www.facebook.com/minapaaschestudio/",
    linkedin: "https://www.linkedin.com/in/mina-paasche/?originalSubdomain=dk"
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
    description: "The work explores fertility, transhumanism, and botany through a cross-disciplinary collaboration merging fine art, design, contemporary dance, music, sound design, and technology. Presented as a multimedia installation, the project debuted at my Master of Fine Arts Graduation Show at Room 61, KMD, Bergen in 2023. The work have also been shown at the mini peace festival and exhibition at The Feminist House in Trondheim, 2024.\n\n" +"Collaborators: Marvin the robot, Medusa the 3D printer, Susanne Engbo Andersen, Mikkel Konyher, Lydia Vermaat-Wallin, Oskar Kolliander, Mina Paasche, Ivy Rosenauer, Qianhui Qian, Lise Ulvedahl Carlsen, Mathieu Détalle, Barbora Pollakova,Tobias Normann Valentin, Dominique Nachi, Henna Nerg, Rafal Krzystof Sobczynski, Endre Oma, Courtney Coombs, Ågot & Latifah, Oda Oftung,Scott Elliot,Yaser Rahal, Anaclara Talento, Sidsel Christensen, Luz Maria Sanchez & Agniezka Polska.",
      coverImage: "/assets/_LMP4226,small.jpg",
    images: [
      {
        url: "/assets/_LMP4226,small.jpg",
        title: "",
        description: "Film still of contemporary dancer Susanne Engbo Andersen",
          alt: "Film still of contemporary dancer Susanne Engbo Andersen"
      },
        {
            url: "/assets/Stillimage2,MinaPaasche2022,small.jpg",
            title: "",
            description: "Film still and 3D printed sculptures",
            alt: "Film still of contemporary dancer Susanne Engbo Andersen"
        },
        {
            url: "/assets/_LMP4213.small.jpg",
            title: "",
            description: "nstallation view: Room 61, KMD, Bergen",
            alt: "Installation view: Room 61, KMD, Bergen"
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
        " \nCollaboration with Mysa, Circe, Purri and a wonderful little anonymous human I know in Trondheim. Amalia Fonfara, Thea Ellingsen Grant, Daniel Vincent Hansen, Mikkel Konyher  and Stephen McEvoy."
        ,
    coverImage: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
    images: [
      {
        url: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
        title: "",
        description: "Ambisonic space",
          alt: "Ambisonic space"
      },
        {
            url: "/assets/AmbisonicspaceINstallperson, 2 small.jpg",
            title: "",
            description: "Installation view: The Royal Danis Art Academy, Copenhagen.",
            alt: "Installation view: The Royal Danis Art Academy, Copenhagen."
        },
    ]
  },

  {
    id: "lifeline",
    title: "FLASH Light Biennale – Lifeline",
    category: "installations",
    year: "2021",
    medium: "Multimedia installation",
    description: "At the FLASH Light Biennale in Suomenlinna, Helsinki, I collaborated with Nordic artists to transform a historic, chapel-like military space into an immersive light and sound installation. The work, Lifeline, used precision-shaped beams from two theatre lamps, combined with smoke and slow rhythmic fades, to create a shifting corridor of light and darkness. Accompanied by an atmospheric soundscape layered with diegetic industrial recordings, the piece invited visitors to experience altered perceptions of time and space within the fortress’s deep, resonant architecture.\n\n" + "Collaboration with Vilma Vantola and Ísidór Jökull Bjarnason.",
    coverImage: "/assets/Lifeline,small1.jpg",
    images: [
      {
        url: "/assets/Lifeline,small1.jpg",
        title: "",
        description: "Corridor of light",
          alt: "Corridor of light"
      },

        {
            url: "/assets/lifeline small 2.jpg",
            title: "",
            description: "Light, Smoke, Sound",
            alt : "Light, Smoke, Sound"
        },
        {
            url: "/assets/lifeline small2.jpg",
            title: "",
            description: "Suomenlinna fortress by the sea",
            alt: "Suomenlinna fortress by the sea"
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
            "Collaboration with Ilmari Pesonen and Anton Kaldal Ágústsson.",
        coverImage: "/assets/_LMP2922,small.jpg",
        images: [
            {
                url: "/assets/_LMP2922,small.jpg",
                title: "",
                description: "Where do we grow from here?",
                alt: "Where do we grow from here?"
            },
            {
                url: "/assets/_LMP2933,small.jpg",
                title: "",
                description: "Projectionmapping, video, sound and scent",
                alt: "Projectionmapping, video, sound and scent"
            },

            {
                url: "/assets/_LMP2835,small.jpg",
                title: "",
                description: "”The bakery” at Dikemark psyciatric hospital, Asker, Norway",
                alt: "”The bakery” at Dikemark psyciatric hospital, Asker, Norway"
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
        id: "how to read water",
        title: "How to Read Water",
        category: "performances",
        year: "2023",
        medium: "Interactive performance",
        description: "In ‘How to read water’ dance artist Anna Thu Schmidt, musician Thea Ellingsen Grant, and visual artist/VJ Mina Paasche create a multidisciplinary performance experience and invite you into a timeless and meditative space. ‘How to read water’ takes inspiration from the relationship between the human body and the ocean. The connection one feels to the ocean is translated to a connection between performer and audience.",
        coverImage: "/assets/_DVH9096,small.jpg",
        images: [
            {
                url: "/assets/_DVH9096,small.jpg",
                title: "",
                description: "Interactive session"
            },

            {
                url: "/assets/-RVptHIQ, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/HTRWheimdal2022,small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/_DVH9067,small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/HandsportfolioHWTRjuliana.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/i8P4CHiQ.jpeg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/IMG_2827, small.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },

  {
    id: "The Old Mine – Immersive Projections",
    title: "The Old Mine – Immersive Projections",
    category: "performances",
    year: "2021",
    medium: "Site-specific performance",
    description: "In an ongoing interdisciplinary collaboration, I created a large-scale projection and textile installation for a performance inside the Old Mine at Løkken Værk, Trondheim. Two semi-transparent sails hung from the mine’s historic wire system became shifting canvases for black-and-white video projections, blending with the cave walls so the minerals and stone subtly altered the imagery. The visuals—drawn from plants and microorganisms around Trondheim—shifted from naturalistic forms to glitchy abstractions, evoking both cave paintings and shadow theatre. Candlelight and a single replica oil lamp illuminated the space, heightening the interplay between light, shadow, and imagination.\n" +
        "\n" +
        "Collaboration with Amalia Fonfara, Jan Roar Gjersvold and Mikkel Konyher.",
    coverImage: "/assets/IMG_3262, small.jpg",
    images: [
      {
        url: "/assets/IMG_3262, small.jpg",
        title: "",
        description: "Untitled"
      },














        {
            url: "/assets/IMG_2229.jpg",
            title: "",
            description: "Untitled"
        },

        {
            url: "/assets/IMG_2454, small.jpg",
            title: "",
            description: "Untitled"
        },


    ]
  },
  {
    id: "Myrull til min venn",
    title: "Myrull til min venn",
    category: "performances",
    year: "2020",
    medium: "Audiovisual performance",
    description: "At Mørkerommet in Rosendal Theatre, I created and performed the live visuals for Myrull til min venn, an audiovisual evening that unfolded as an immersive, multi-sensory landscape. Moving images, layered textiles, and drifting smoke merged with the live concert by Pallas Kat, transforming the theatre space into a dreamlike, shifting environment." +
        " The visuals responded to the music in real time, expanding its emotional textures into a tactile visual dimension. Subtle patterns and flowing imagery evoked the softness and fragility of myrull (cottongrass), while moments of intensity drew the audience deeper into the performance’s intimate yet otherworldly atmosphere.\n\n" +
        "Curated by Mishi Foltyn, the piece was both a concert and an installation—an invitation to linger within a space where sound, image, and material presence existed in constant dialogue.",
    coverImage: "/assets/_A8A9816, small.jpg",
    images: [
      {
        url: "/assets/_A8A9816, small.jpg",
        title: "",
        description: "Untitled"
      },
        {
            url: "/assets/_A8A9878,small.jpg",
            title: "",
            description: "Untitled"
        },
        {
            url: "/assets/_A8A9939,small.jpg",
            title: "",
            description: "Untitled"
        },
    ]
  },
  {
    id: "Floating Greenhouse",
    title: "Floating Greenhouse",
    category: "performances",
    year: "2021",
    medium: "Audiovisual performance",
    description: "On the waters of Trondheimsfjorden, a floating greenhouse becomes both stage and vessel. Live visuals merge with ambient electronic compositions and shamanistic ritual elements, transforming the structure into a drifting ceremonial space. The glass walls catch reflections of sky and water, while layered soundscapes ripple outward into the fjord. This hybrid of performance, installation, and ritual invites audiences to experience the fjord as a living collaborator—its light, movement, and acoustics shaping the event in real time. The work blurs the boundaries between land and water, nature and architecture, technology and spirituality.\n\n" +
        "Collaboration with: Amalia Fonfara, Ambient Light and Pallas Kat.  ",
    coverImage: "/assets/083A1548,small.jpg",
    images: [
      {
        url: "/assets/083A1548,small.jpg",
        title: "",
        description: "Untitled"
      },
        {
            url: "/assets/083A1576,small.jpg",
            title: "",
            description: "Untitled"
        },
        {
            url: "/assets/083A1584,small.jpg",
            title: "",
            description: "Untitled"
        },

    ]
  },

  {
    id: "Live Visuals for Gundelach – Sentrum Scene",
    title: "Live Visuals for Gundelach – Sentrum Scene",
    category: "performances",
    year: "2019",
    medium: "Audiovisual performance",
    description: "For Gundelach’s largest solo performance to date, at Sentrum Scene during Red Bull Music Festival Oslo, I created and performed the live visual scenography. The concert was conceived as a conceptual, multi-sensory experience, where music, light, and image merged into a unified narrative.\n\n" +
        "My visuals were designed to mirror the emotional arc of Gundelach’s setlist, translating his signature melancholic falsetto and noir-inspired production into moving imagery. Layered projections and generative visuals unfolded in real time, synchronised with the live sound. Inspired by the floral motifs and shifting moods of his My Frail Body project—a visual journey through flowers—the imagery evolved from subtle, dreamlike abstractions to intense, saturated sequences, enveloping the stage and audience in an immersive atmosphere.",
    coverImage: "/assets/GundelachSentrumSceneJonathanVivaasKise.1.JPG",
    images: [
      {
        url: "/assets/GundelachSentrumSceneJonathanVivaasKise.1.JPG",
        title: "",
        description: "Untitled"
      },
        {
            url: "/assets/GundelachSentrumSceneJonathanVivaasKise.3.JPG",
            title: "",
            description: "Untitled"
        },
        {
            url: "/assets/GundelachSentrumSceneJonathanVivaasKise.4.JPG",
            title: "",
            description: "Untitled"
        },
    ]
  },

    // Photography
    {
        id: "The Outer Edge Of Each Eye",
        title: "The Outer Edge Of Each Eye",
        category: "Photography",
        year: "2020, 2025",
        medium: "Photography",
        description: "A hypnotic fusion of science fiction, deep-sea horror, in combination with photography and experimental cinema, The Outer Edge of Each Eye dissolves the boundaries between human, animal, and machine. Haunting imagery—frozen landscapes, insect wings, the hum of hidden machinery—shifts fluidly as time stretches and contracts. Nature reclaims its power, while an unseen presence lingers just beyond perception. Filmed across landscapes and botanical sites in Norway and Denmark, the work draws viewers into a world where the familiar transforms into something otherworldly and unknown.\n" +
            " \n" +
            "Collaborations with: Mikkel Konyher, Siri Vinterly, Oscar Debbs, Nanna Klith Hougaard, Anaclara Talento, Per Stian Monsås, Lise Ulvedahl Carlsen, Ivu Rosenauer, Einar Grinde, Jan Roar Gjersvold, Phillip Göllner, Trygve Eiulf, Daniel Vincent Hansen and Sigrid Voll Bøyum.",
        coverImage: "/assets/BogWSkjermbilde 2020-11-30 kl. 16.28.52, small.jpg",
        images: [
            {
                url: "/assets/BogWSkjermbilde 2020-11-30 kl. 16.28.52, small.jpg",
                title: "",
                description: "untitled"
            },
            {
                url: "/assets/Biene3bogw, small.jpg",
                title: "",
                description: "untitled"
            },
            {
                url: "/assets/BogWUlvetimen, small1.jpg",
                title: "",
                description: "untitled"
            },
            {
                url: "/assets/missyHummelvikBogW, small.jpg",
                title: "",
                description: "untitled"
            },
            {
                url: "/assets/PelsjegerenBogW, small.jpg",
                title: "",
                description: "untitled"
            },
            {
                url: "/assets/TodalenBogW, small.jpg",
                title: "",
                description: "untitled"
            },
        ]
    },

    {
        id: "Born to be Free",
        title: "Born to be Free",
        category: "Photography",
        year: "2020",
        medium: "Photography",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "/assets/BorntoBeFree,2022,MinaPaascheLOWQ, small.jpg",
        images: [
            {
                url: "/assets/BorntoBeFree,2022,MinaPaascheLOWQ, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/17, small.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },

    {
        id: "Potraits",
        title: "Portraits",
        category: "Photography",
        year: "2020",
        medium: "Photography",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "/assets/_LMP4031, small.jpg",
        images: [
            {
                url: "/assets/_LMP4031, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/Bidrag 3. Resting Bitch Face, Mina Paasche, 2020, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/_LMP7618, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/_LMP7350,small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/_LMP6432, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/MathiasBroe_redigert, small.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },

    {
        id: "Pride",
        title: "Pride 2022",
        category: "Photography",
        year: "2022",
        medium: "Photography",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "/assets/5821EB7E-569A-4EFC-8028-7EA45FF58F68, small.jpg",
        images: [
            {
                url: "/assets/5821EB7E-569A-4EFC-8028-7EA45FF58F68, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/PrinsLise,2021,MinaPaascheLOWQ.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },

    {
        id: "Street view at Geiten",
        title: "Street view at Geiten",
        category: "Photography",
        year: "2020",
        medium: "Photography",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "/assets/DSC_9702.jpg",
        images: [
            {
                url: "/assets/DSC_9702.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/DSC_9739.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/DSC09289, small.jpg",
                title: "",
                description: "Untitled"
            },
        ]
    },


    {
        id: "Street View",
        title: "Street View",
        category: "Photography",
        year: "2020",
        medium: "Photography",
        description: "A walk-through forest made of vertical LED tubes simulating natural light cycles.",
        coverImage: "/assets/Streetviewfullformat, small.jpg",
        images: [
            {
                url: "/assets/Streetviewfullformat, small.jpg",
                title: "",
                description: "Untitled"
            },
            {
                url: "/assets/DSC00226, small.jpg",
                title: "",
                description: "Untitled"
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