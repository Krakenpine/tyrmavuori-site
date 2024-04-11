import reconstitutionCover from "./reconstitution1.jpg";

const reconstitutionTracks = [
    "The Dark Lord has Fallen",
    "Chaos and Confusion",
    "Burning Villages",
    "Desperate March",
    "At the Gates of the Dungeon Mountain",
    "No Gods, No Masters",
    "Clans Unite!",
    "Newfound Strength",
    "Forging Mischief into Predators Guile"
  ];

  const reconstitutionStory = [
    "The Dark Lord has been defeated by the forces of Light and lands tainted by evil are being purged. Those individuals belonging to \"higher\" races are being captured, tortured, and sentenced to death or life in hard labour in mock trials, while those considered to be of the \"evil\" races are killed on sight. Orcs and trolls have formed into small warbands, destroying, killing and eating everything they come across. Goblins tried to continue living in their villages, but are forced to flee when armies of Good come with swords and torches, acting only marginally more civilized than the orcs.",

    "After millennia of slavery the goblins are confused by the situation. No one is telling them what to do, there is no army where all able-bodied are drafted and no taxes to be collected. The great arch-evils are not guiding them to a new land to be conquered. The goblins remember the old legends about the Dungeon Mountain where their forefathers dwelled. The most brave ones even whispered stories of an ancient sovereign goblin kingdom, where their kind once lived free.",
    
    "They collect their knowledge and the clan leaders send messengers to other goblin clans with crudely drawn maps that show location of the Dungeon Mountain and proposal to end quarrels between clans and meet there with truce. The goblins gather what is left of their belongings and embark on their journey.",
    "Days turn into weeks, weeks turn into months, but finally they see the gargantuan mountain towering in the horizon. The weary travelers almost cannot believe the size and intricate carvings on the gates that hide a paved road that leads into the heart of the mountain.",
    
    "Within few weeks all clans that still exist have found their way to the Dungeon Mountain and elders of the clans have their first meeting. Old grudges are buried and the clans decide that it is time for the goblins to reclaim what is rightfully theirs. Human villagers living near the mountain feel the dread of something happening near them and goblin scouts bring news that there are rumours about monsters inhabiting the ancient mountain halls.",
    
    "The goblin elders take the news as a confirmation that their plan will succeed. No more will the goblins ever do bidding for other lords, it is time to change their mischievous nature into merciless determination and predators guile."
];

interface Album {
    title: string,
    released: string,
    tracks: string[],
    story: string[],
    cover: string,
    links: Link[]
}

interface Link {
    name: string
    link: string
}

const reconstitution: Album = {
    title: "I. Reconstitution",
    released: "12.4.2024",
    tracks: reconstitutionTracks,
    story: reconstitutionStory,
    cover: reconstitutionCover,
    links: [
        { name: "Bandcamp", link: "https://tyrmavuori.bandcamp.com/album/i-reconstitution"},
        { name: "Spotify", link: "https://open.spotify.com/album/7Eg7kyZYqbT5KabBc0N7pb?si=gxb7jR_vQ4uuY43l5HrnGg"},
        { name: "Youtube", link: "https://youtu.be/MxMs7SBkTC4"}
    ]
}

export const albums: Album[] = [
    reconstitution,
    { title: "II.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "III.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "IV.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "V.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "VI.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "VII.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "VIII.", released: "", tracks: [], story: [], cover: "", links: [] },
    { title: "IX.", released: "", tracks: [], story: [], cover: "", links: [] }
]