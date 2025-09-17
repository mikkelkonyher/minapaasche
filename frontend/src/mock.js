// Mock data for Mina Paasche's portfolio
export const artistInfo = {
  name: "Mina Paasche",
  title: "Visual Artist",
  location: "Copenhagen • Denmark",
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
    description: "Interactive and immersive art experiences.",
      alt: "Interactive and immersive art experiences."
  },
  {
    id: "performances",
    name: "Performances",
    description: "Live and participatory art events.",
      alt: "Live and participatory art events."
  },
  {
    id: "Photography",
    name: "Photography",
    description: "Experimental and narrative photography.",
      alt: "Experimental and narrative video works."
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
        description: "Film still of contemporary dancer Susanne Engbo Andersen.",
          alt: "Film still of contemporary dancer Susanne Engbo Andersen"
      },
        {
            url: "/assets/Stillimage2,MinaPaasche2022,small.jpg",
            title: "",
            description: "Film still and 3D printed sculptures.",
            alt: "Film still of contemporary dancer Susanne Engbo Andersen."
        },
        {
            url: "/assets/_LMP4213.small.jpg",
            title: "",
            description: "Installation view: Room 61, KMD, Bergen.",
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
    description: "An 18-channel ambisonic sound installation immersing listeners in a precise, spatially mapped sonic environment. Recorded by the fjord and enriched with ocean drum, waterphone resonance, and layered field recordings, the 12:59-minute composition unfolds as a shifting landscape of textures and orientations. Presented in the Ambisonic Chambre at the Royal Danish Art Academy in 2022, the work invites the audience to navigate sound as space, where location becomes both a point on a map and an embodied, sensory experience.\n" +
        " \nCollaboration with Mysa, Circe, Purri and a wonderful little anonymous human I know in Trondheim. Amalia Fonfara, Thea Ellingsen Grant, Daniel Vincent Hansen, Mikkel Konyher  and Stephen McEvoy."
        ,
    coverImage: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
    images: [
      {
        url: "/assets/AmbisonicIINstallation2022red, 1 small.jpg",
        title: "",
        description: "Ambisonic space.",
          alt: "Ambisonic space"
      },
        {
            url: "/assets/AmbisonicspaceINstallperson, 2 small.jpg",
            title: "",
            description: "Installation view: The Royal Danish Art Academy, Copenhagen.",
            alt: "Installation view: The Royal Danish Art Academy, Copenhagen."
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
        description: "Corridor of light.",
          alt: "Corridor of light"
      },

        {
            url: "/assets/lifeline small 2.jpg",
            title: "",
            description: "Light, Smoke, Sound.",
            alt : "Light, Smoke, Sound"
        },
        {
            url: "/assets/lifeline small2.jpg",
            title: "",
            description: "Suomenlinna fortress by the sea.",
            alt: "Suomenlinna fortress by the sea"
        },

    ]
  },
    {
        id: "Factory Light Festival – Projection Mapping at Dikemark",
        title: "Factory Light Festival – Projection Mapping at Dikemark",
        category: "installations",
        year: "2021",
        medium: "Projection mapping",
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
                description: "Projectionmapping, video, sound and scent.",
                alt: "Projectionmapping, video, sound and scent"
            },

            {
                url: "/assets/_LMP2835,small.jpg",
                title: "",
                description: "”The bakery” at Dikemark psyciatric hospital, Asker, Norway.",
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
        description: "Filmed in Shillong, India, this video work follows three visually impaired individuals who navigate their surroundings using echolocation, seeing through sound, touch, and movement. Rather than framing blindness as a disability, the project explores it as a distinct way of experiencing the world, one that offers deeper intimacy and connection than vision alone. The film accompanies the protagonists as they become the first group of visually impaired hikers to cross Meghalaya’s Living Root Bridge, climb the region’s iconic tree huts, and traverse dense jungle. Their journey challenges cultural perceptions of sight, ability, and independence, revealing new ways of sensing and inhabiting space.\n" +
            "\n" + "The work have been shown at the \"20 Years Retrospective of Experimental Video Art Exhibition, Thai-European Friendship\", Bangkok art and culture centre, Bankok, Thailand (2023), Filmkunstskolen i Kabelvåg, Lofoten (2023), College of enginering, design, art & technology, Makerere University, Kampala, Uganda (2022), SKAP 2022, Sabanci University, Faculity of Arts and Social Sciences, Istanbul, Turkey (2022), The Art Academy in Bergen (2021) and Ars Electronica Festival in Linz, Austria (2020).\n\n" +
            "Collaboration with Maria Puenchir, Benister Kharpour, Thomas Tajo, Jones Pointing, Sonia Hage, Christopher Logan and Mikkel Koyher.",
        coverImage: "/assets/Still1 ABundleofEchoes,Mina Paasche, 2020, stillimage1, small.jpg",
        images: [
            {
                url: "/assets/Still1 ABundleofEchoes,Mina Paasche, 2020, stillimage1, small.jpg",
                title: "",
                description: "Lady Hydary park, Shillong, India.",
                alt: "Lady Hydary park, Shillong, India"
            },
            {
                url: "/assets/Dag 01 Parken & Kirken A.00_04_28_14.Still006, small.jpg",
                title: "",
                description: "Touching the bamboo trees.",
                alt: "Touching the bamboo trees"
            },

            {
                url: "/assets/Dag 01 Parken & Kirken C.00_24_08_11.Still001, small.jpg",
                title: "",
                description: "The Cathedral Catholic Church in Shillong.",
                alt: "The Cathedral Catholic Church in Shillong"
            },
        ]
    },

    {
        id: "Listening and Navigation",
        title: "Listening and Navigation",
        category: "installations",
        year: "2021",
        medium: "Film installation",
        description: "Listening and Navigation is a series consisting of different intermedia installations exploring human echolocation as both a navigational skill and an alternative way of perceiving the world. Six transducer speakers, connected through multiple amplifiers and channels, transmit vibrations through materials like wood and glass, allowing visitors to experience sound physically as well as aurally. Live field recordings follow Maria Puenchir navigating snowy forests in Trondheim using echolocation, while a drone tracks their movements from above, machine and human simultaneously finding their way through the landscape. The work invites audiences into a world where hearing becomes a form of vision, and where echoes form an existential dialogue with the environment.\n\n" +
            "The works have been shown at Khalil Sakakini Cultural Center, Ramallah, Palestine (2022), Aarhus Artspace, Aarhus, Denmark (2020), KLP, Teknobyen, Trondheim, Norway (2020), Den Frie Utstillings Bygning, Copenhagen, Denmark (2019), Galleri KIT, The Art Academy in Trondheim, Norway (2021, 2019, 2018)."+ "\n\n" +"Collaborators: Maria Puenchir, Mikkel Konyher, Trygve Waagen, Emiel Huijes, Fatuma Abdi, Joel Vide Hynsjö and Ingunn Schumann Mosand.",
        coverImage: "/assets/Dokumentasjon Århus artspace 1, small.jpg",
        images: [
            {
                url: "/assets/Dokumentasjon Århus artspace 1, small.jpg",
                title: "",
                description: " Aarhus Artspace, Aarhus, Denmark (2020).",
                alt: " Aarhus Artspace, Aarhus, Denmark (2020)"
            },
            {
                url: "/assets/DSC02703, small.jpg",
                title: "",
                description: "KLP, Teknobyen, Trondheim, Norway (2019-2020).",
                alt: "KLP, Teknobyen, Trondheim, Norway (2019-2020)"
            },

            {
                url: "/assets/Lydregn2021GalleriKITINstall,small.jpg",
                title: "",
                description: "Galleri KIT, The Art Academy in Trondheim, Norway (2021).",
                alt: "Galleri KIT, The Art Academy in Trondheim, Norway (2021)"
            },
            {
                url: "/assets/ScreenshotIwasblind,small.jpg",
                title: "",
                description: "Still from “I Was Blind Until I Met You”, 2019.",
                alt:   "Still from “I Was Blind Until I Met You”, 2019"
            },
            {
                url: "/assets/Håndmalt objekt, REDIGERT til hjemmeside.jpg",
                title: "",
                description: "Handpainted object: “For those who can see”, 2018. Photo by Mikkel Marhaug.",
                alt: "Handpainted object: “For those who can see”, 2018. Photo by Mikkel Marhaug."
            },
        ]
    },





// Performances
  {
    id: "Sindre",
    title: "Sindre",
    category: "performances",
    year: "2024",
    medium: "Audiovisual performance",
    description: "Created for the J.T. Lundbye Festival in Kalundborg, Denmark, Sindre was a cross-disciplinary performance combining live music, spoken word, and large-scale video projections. Conceived by composer and musician Jesper Balslev, the piece brought together a team of artists to celebrate Lundbye’s birthday with a site-specific concert experience. My contribution was the visual dimension: a 5 × 14 metre projection mapping that enveloped the space in shifting imagery, merging seamlessly with the music and narration to create an immersive, multi-sensory encounter.\n\n" +
        "Collaboration with Jesper Balslev, Samira Dayyani, Morten Grønvad, Lars Emil Fode, Martin Kejser, Marianne Glynstrup, Rasmus Satto and Mina Paasche. ",
    coverImage: "/assets/IMG_1354, small.jpg",
    images: [
      {
        url: "/assets/IMG_1354, small.jpg",
        title: "",
        description: "Skolen på Herredsåsen, Kalundborg, Denmark.",
          alt: "Skolen på Herredsåsen, Kalundborg, Denmark."
      },
        {
            url: "/assets/Koncert_Jesper_1.sept_(02), small.jpg",
            title: "",
            description: "Martin Kejser on Klarinette and Samira Dayyani on cello.",
            alt: "Martin Kejser on Klarinette and Samira Dayyani on cello."
        },
        {
            url: "/assets/Koncert_Jesper_1.sept_(14), small.jpg",
            title: "",
            description: "Lars Emil Foder as narrator.",
            alt: "Lars Emil Foder as narrator."
        },
        {
            url: "/assets/Koncert_Jesper_1.sept_(17), small.jpg",
            title: "",
            description: "Marianne Reimer Glynstrup on vocals.\n\nPhoto by Michael Roepstorff.",
            alt: "Marianne Reimer Glynstrup on vocals."
        },
    ]
  },

    {
        id: "how to read water",
        title: "How to Read Water",
        category: "performances",
        year: "2023",
        medium: "Interactive performance",
        description: "This collaboration have taken form as indoor and outdoor perfromances, interactive laboratories, installations, recidencies and exhibitions, and have been shown at Kunsthall Trondheim, Tråånte, Norway (2025), Rosendal Theatre, Trondheim, Norway (2024), E&G Theatre, Lofoten, Norway (2024), Mausund, Norway (2024), Fossekleiva kultursenter and Berger museum, Fossekleiva, Norway (2023), Meta.morph at Heimdal Kunstforening, Trondheim, Norway (2022), Nils Aas Kunstverksted, Inderøy (2022), Trondheim Fjord, Norway (2021) and Stillverk 1 Trondheim, Norway (2021).",
        coverImage: "/assets/_DVH9096,small.jpg",
        images: [
            {
                url: "/assets/_DVH9096,small.jpg",
                title: "",
                description: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen.",
                alt: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen."
            },

            {
                url: "/assets/-RVptHIQ, small.jpg",
                title: "",
                description: "Stillverket 1 (2021). Photo by Juliane Schütz.",
                alt: "Stillverket 1 (2021). Photo by Juliane Schütz."
            },
            {
                url: "/assets/HTRWheimdal2022,small.jpg",
                title: "",
                description: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen.",
                alt: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen."
            },
            {
                url: "/assets/_DVH9067,small.jpg",
                title: "",
                description: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen.",
                alt: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Daniel Hansen."
            },
            {
                url: "/assets/HandsportfolioHWTRjuliana.jpg",
                title: "",
                description: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Juliane Schütz.",
                alt: "Heimdal Kunstforening, Trondheim, Norway (2022). Photo by Juliane Schütz."
            },
            {
                url: "/assets/i8P4CHiQ.jpeg",
                title: "",
                description: "Stillverket 1 (2021). Photo by Juliane Schütz.",
                alt: "Stillverket 1 (2021). Photo by Juliane Schütz."
            },
            {
                url: "/assets/IMG_2827, small.jpg",
                title: "",
                description: "Kunsthall Trondheim (2025). Photo by Mina Paasche.",
                alt: "Kunsthall Trondheim (2025). Photo by Mina Paasche."
            },
        ]
    },

  {
    id: "The Old Mine – Immersive Projections",
    title: "The Old Mine – Immersive Projections",
    category: "performances",
    year: "2021",
    medium: "Site-specific performance",
    description: "In an ongoing interdisciplinary collaboration, I created a large-scale projection and textile installation for a performance inside the Old Mine at Løkken Værk, Trondheim. Two semi-transparent sails hung from the mine’s historic wire system became shifting canvases for black and white video projections, blending with the cave walls so the minerals and stone subtly altered the imagery. The visuals drawn from plants and microorganisms around Trondheim shifted from naturalistic forms to glitchy abstractions, evoking both cave paintings and shadow theatre. Candlelight and a single replica oil lamp illuminated the space, heightening the interplay between light, shadow, and imagination.\n" +
        "\n" +
        "Collaboration with Amalia Fonfara, Jan Roar Gjersvold and Mikkel Konyher.",
    coverImage: "/assets/IMG_3262, small.jpg",
    images: [
      {
        url: "/assets/IMG_3262, small.jpg",
        title: "",
        description: "The Grand Hall, The Old Mine at Løkken Værk, Trondheim (2021).",
          alt: "The Grand Hall, The Old Mine at Løkken Værk, Trondheim (2021)."
      },

        {
            url: "/assets/IMG_2229.jpg",
            title: "",
            description: "Amalie Fonfara.",
            alt: "Amalie Fonfara."
        },

        {
            url: "/assets/IMG_2454, small.jpg",
            title: "",
            description: "Mikkel Konyher\n\nPhoto by Juliane Schütz.",
            alt: "Mikkel Konyher\n\nPhoto by Juliane Schütz."

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
        "Curated by Mishi Foltyn, the piece was both a concert and an installation and an invitation to linger within a space where sound, image, and material presence existed in constant dialogue.",
    coverImage: "/assets/_A8A9816, small.jpg",
    images: [
      {
        url: "/assets/_A8A9816, small.jpg",
        title: "",
        description: "Installation view.",
          alt: "Installation view."
      },
        {
            url: "/assets/_A8A9878,small.jpg",
            title: "",
            description: "Smoke, videprojections and textiles.",
            alt: "Smoke, videprojections and textiles."
        },
        {
            url: "/assets/_A8A9939,small.jpg",
            title: "",
            description: "The audience could walk freely trough the space during the performance.",
            alt: "The audience could walk freely trough the space during the performance."
        },
    ]
  },
  {
    id: "Floating Greenhouse",
    title: "Floating Greenhouse",
    category: "performances",
    year: "2020",
    medium: "Audiovisual performance",
    description: "On the waters of Trondheimsfjord, a floating greenhouse becomes both stage and vessel. Live visuals merge with ambient electronic compositions and shamanistic ritual elements, transforming the structure into a drifting ceremonial space. The glass walls catch reflections of sky and water, while layered soundscapes ripple outward into the fjord. This hybrid of performance, installation, and ritual invites audiences to experience the fjord as a living collaborator. It´s light, movement, and acoustics are shaping the event in real time. The work blurs the boundaries between land and water, nature and architecture, technology and spirituality.\n\n" +
        "Collaboration with: Amalia Fonfara, Ambient Light and Pallas Kat.  ",
    coverImage: "/assets/083A1548,small.jpg",
    images: [
      {
        url: "/assets/083A1548,small.jpg",
        title: "",
        description: "Amalia Fonfara.",
          alt: "Amalia Fonfara."
      },
        {
            url: "/assets/083A1576,small.jpg",
            title: "",
            description: "Installation view, glass boat/floating greenhouse.",
            alt: "Installation view, glass boat/floating greenhouse."
        },
        {
            url: "/assets/083A1584,small.jpg",
            title: "",
            description: "Ambient Light.\n\nPhoto by Maiken Hauksdatter.",
            alt: "Ambient Light.\n\nPhoto by Maiken Hauksdatter."
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
        "My visuals were designed to mirror the emotional arc of Gundelach’s setlist, translating his signature melancholic falsetto and noir-inspired production into moving imagery. Layered projections and generative visuals unfolded in real time, synchronised with the live sound. Inspired by the floral motifs and shifting moods of his My Frail Body project: a visual journey through flowers. The imagery evolved from subtle, dreamlike abstractions to intense, saturated sequences, enveloping the stage and audience in an immersive atmosphere.",
    coverImage: "/assets/GundelachSentrumSceneJonathanVivaasKise.1.JPG",
    images: [
      {
        url: "/assets/GundelachSentrumSceneJonathanVivaasKise.1.JPG",
        title: "",
        description: "Sentrum Scene, Oslo, Norway.",
          alt: "Sentrum Scene, Oslo, Norway."
      },
        {
            url: "/assets/GundelachSentrumSceneJonathanVivaasKise.3.JPG",
            title: "",
            description: "Gundelach.",
            alt: "Gundelach."
        },
        {
            url: "/assets/GundelachSentrumSceneJonathanVivaasKise.4.JPG",
            title: "",
            description: "Live visuals on a floating screen.\n\nPhoto by Jonathan Vivaas Kise.",
            alt: "Live visuals on a floating screen."
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
        description: "A hypnotic fusion of science fiction, deep-sea horror, in combination with photography and experimental cinema, The Outer Edge of Each Eye dissolves the boundaries between human, animal, and machine. Haunting imagery, frozen landscapes, insect wings, the hum of hidden machinery, shifts fluidly as time stretches and contracts. Nature reclaims its power, while an unseen presence lingers just beyond perception. Filmed across landscapes and botanical sites in Norway and Denmark, the work draws viewers into a world where the familiar transforms into something otherworldly and unknown.\n" +
            " \n" +
            "Collaborations with: Mikkel Konyher, Siri Vinterly, Oscar Debbs, Nanna Klith Hougaard, Anaclara Talento, Per Stian Monsås, Lise Ulvedahl Carlsen, Ivy Rosenauer, Einar Grinde, Jan Roar Gjersvold, Phillip Göllner, Trygve Eiulf, Daniel Vincent Hansen and Sigrid Voll Bøyum.",
        coverImage: "/assets/BogWSkjermbilde 2020-11-30 kl. 16.28.52, small.jpg",
        images: [
            {
                url: "/assets/BogWSkjermbilde 2020-11-30 kl. 16.28.52, small.jpg",
                title: "",
                description: "Becoming Water.",
                alty: "Becoming Water"
            },
            {
                url: "/assets/Biene3bogw, small.jpg",
                title: "",
                description: "Interference bees.",
                alt: "Interference bees"
            },
            {
                url: "/assets/BogWUlvetimen, small1.jpg",
                title: "",
                description: "Solitude.",
                alt: "Solitude"
            },
            {
                url: "/assets/missyHummelvikBogW, small.jpg",
                title: "",
                description: "The rain.",
                alt: "The rain"
            },
            {
                url: "/assets/PelsjegerenBogW, small.jpg",
                title: "",
                description: "Small Oracle.",
                alt: "Small Oracle"
            },
            {
                url: "/assets/TodalenBogW, small.jpg",
                title: "",
                description: "Trollheimen.",
                alt: "Trollheimen"
            },
        ]
    },

    {
        id: "Born to be Free",
        title: "Born to be Free",
        category: "Photography",
        year: "2022",
        medium: "Photography",
        description: "A portrait of my friend, the activist and artist Ivy Rosenauer. Born to be Free is both an intimate depiction and a celebration of Ivy’s strength, vulnerability, and self-determination. The work reflects on identity, friendship, and the freedom to exist unapologetically.\n\n" +
            "Exhibited at Bergen Kjøtt, Bergen, Norway, 2022.",
        coverImage: "/assets/BorntoBeFree,2022,MinaPaascheLOWQ, small.jpg",
        images: [
            {
                url: "/assets/BorntoBeFree,2022,MinaPaascheLOWQ, small.jpg",
                title: "",
                description: "Ivy Rosenauer",
                alt: "Ivy Rosenauer"
            },
            {
                url: "/assets/17, small.jpg",
                title: "",
                description: "Installation view, Bergen Kjøtt.",
                alt: "Installation view, Bergen Kjøtt."
            },
        ]
    },

    {
        id: "Potraits",
        title: "Portraits",
        category: "Photography",
        year: "Ongoing",
        medium: "Photography",
        description: "Over the years, I have created a series of portraits that move between intimacy and performance. Rooted in performative photography, these works explore identity as something fluid and staged, yet deeply personal. Each portrait becomes both a document and a gesture. An encounter where the sitter’s presence, vulnerability, and strength unfold in front of the lens.",
        coverImage: "/assets/_LMP4031, small.jpg",
        images: [
            {
                url: "/assets/_LMP4031, small.jpg",
                title: "",
                description: "Mike Woodbridge, 2022.",
                alt: "Mike Woodbridge, 2022."
            },
            {
                url: "/assets/Bidrag 3. Resting Bitch Face, Mina Paasche, 2020, small.jpg",
                title: "",
                description: "Qianhui Qian, 2020.",
                alt: "Qianhui Qian, 2020."
            },
            {
                url: "/assets/_LMP7618, small.jpg",
                title: "",
                description: "Henna Nerg, 2023.",
                alt: "Henna Nerg, 2023."
            },

            {
                url: "/assets/MathiasBroe_redigert, small.jpg",
                title: "",
                description: "Mathias Broe, 2019.",
                alt: "Mathias Broe, 2019."
            },
            {
                url: "/assets/Dominique Nachi, cosmopolitan girl, 2023 small.jpg",
                title: "",
                description: "Dominique Nachi, 2023.",
                alt: "Dominique Nachi, 2023."
            },
            {
                url: "/assets/Sunday, 2022, Mina Paasche, small.jpg",
                title: "",
                description: "Frederik Lund, 2022.",
                alt: "Frederik Lund, 2022"
            },
        ]
    },

    {
        id: "Pride",
        title: "Pride 2022",
        category: "Photography",
        year: "2022",
        medium: "Photography",
        description: "Group exhibition presenting works by LGBTQIA+ artists, creating a shared space for reflection on identity, gender, and sexuality. The exhibition unfolded through visual art, events, and public engagement during Copenhagen Pride Week.\n\n" +
            "Exhibiting artist: Birk Thomassen, Bjørn Ignatius Øckenholt, Erik André Nes, Frida Rindal, Henrik Dencker, Hugo Arruda, Jerry Adder, Johan Rauhe, Kasper Knudsen Muusholm, Mina Paasche, Picturing PreP, Richard Kemp, Sonny Schneider and Ulrik Mikkelsen.\n\n" +
            "Curated by Rasmus Wegner and Mikkel Kristensen.",
        coverImage: "/assets/5821EB7E-569A-4EFC-8028-7EA45FF58F68, small.jpg",
        images: [
            {
                url: "/assets/5821EB7E-569A-4EFC-8028-7EA45FF58F68, small.jpg",
                title: "",
                description: "Installation view Pride Art Copenhagen.",
                alt: "Installation view Pride Art Copenhagen."
            },
            {
                url: "/assets/PrinsLise,2021,MinaPaascheLOWQ.jpg",
                title: "",
                description: "Model: Lise Ulvedahl Carlsen.",
                alt: "Model: Lise Ulvedahl Carlsen."
            },
        ]
    },

    {
        id: "Street view at Geiten",
        title: "Street view at Geiten",
        category: "Photography",
        year: "2020",
        medium: "Photography",
        description: "During the pandemic, Street View was reinstalled in a private apartment in Oslo, where the eight photographs transformed a living room into a temporary exhibition space. By moving the work from the gallery window to the intimacy of a home, the project explored how art can reconfigure domestic space and create new ways of sharing and experiencing visual culture when public exhibitions are restricted.\n\n" +
            "Curated by Christina Nilseng and Håkon Lillegraven.",
        coverImage: "/assets/DSC_9702.jpg",
        images: [
            {
                url: "/assets/DSC_9702.jpg",
                title: "",
                description: "Installation view, Geiten Visningsrom, 6/8 and 1/8.",
                alt: "Installation view, Geiten Visningsrom, 6/8 and 1/8."
            },
            {
                url: "/assets/DSC_9739.jpg",
                title: "",
                description: "Installation view, Geiten Visningsrom 3/8 and 2/8",
                alt: "Installation view, Geiten Visningsrom 3/8 and 2/8"
            },
            {
                url: "/assets/DSC09289, small.jpg",
                title: "",
                description: "Installation view, Geiten Visningsrom, Slide show.",
                alt: "Installation view, Geiten Visningsrom, Slide show."
            },
        ]
    },


    {
        id: "Street View",
        title: "Street View",
        category: "Photography",
        year: "2019",
        medium: "Photography",
        description: "Exhibited at Trondheim Pride, Street View unfolds as a single large-scale photograph composed of eight prints on paper, installed in a gallery window facing the street. The work bridges inside and outside, turning the exhibition space into a site of visibility and encounter, where queer presence meets the public sphere.\n\n" +
            "Gallery KITX, Trondheim.",
        coverImage: "/assets/Streetviewfullformat, small.jpg",
        images: [
            {
                url: "/assets/Streetviewfullformat, small.jpg",
                title: "",
                description: "Photo from Copenhagen Pride 2017.",
                alt: "Copenhagen Pride 2017."
            },
            {
                url: "/assets/DSC00226, small.jpg",
                title: "",
                description: "Galleri KITX, The Art Academy in Trondheim, 2019.",
                alt: "Galleri KITX, The Art Academy in Trondheim, 2019."
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