export interface Relic {
  id: string;
  name: string;
  civilization: string;
  era: string;
  type: string;
  price: number;
  description: string;
  sacredDescription: string;
  materials: string;
  craftsmanship: string;
  limitedEdition: number;
  imageUrl: string;
  rating: number;
  reviews: Review[];
  packaging: string;
  similarItems: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const relics: Relic[] = [
  {
    id: 'heir-relic-ring',
    name: 'Heir Relic Ring',
    civilization: 'Ancient Babylon',
    era: 'Babylonian',
    type: 'Jewelry',
    price: 2499,
    description: 'A mystical ring bearing the trinity sigil of the firekeepers of Babylon.',
    sacredDescription: 'This ring bears the trinity sigil of the firekeepers of Babylon, forged in the sacred flames of Marduk\'s temple. Legend speaks of its power to guide the worthy through the shadows of destiny.',
    materials: 'Forged in consecrated gold with obsidian inlays',
    craftsmanship: 'Distilled by temple hands under the seventh moon',
    limitedEdition: 108,
    imageUrl: '/relics/heir-ring.jpg',
    rating: 5,
    reviews: [
      {
        id: '1',
        author: 'Alexandria M.',
        rating: 5,
        comment: 'The craftsmanship is extraordinary. I can feel the ancient energy.',
        date: '2024-12-15'
      }
    ],
    packaging: 'Wrapped in sacred parchment with wax seal of authenticity',
    similarItems: ['pharaoh-crown', 'samurai-amulet']
  },
  {
    id: 'pharaoh-crown',
    name: 'Pharaoh\'s Crown Fragment',
    civilization: 'Ancient Egypt',
    era: 'Egyptian',
    type: 'Jewelry',
    price: 4299,
    description: 'A fragment from the crown of Ramesses, blessed by the gods of the Nile.',
    sacredDescription: 'Carved from the divine gold of Nubia, this crown fragment once adorned the head of Ramesses the Great. The hieroglyphs speak of eternal dominion over the afterlife.',
    materials: 'Forged in Nubian gold with lapis lazuli',
    craftsmanship: 'Blessed by the priests of Ra in the Valley of Kings',
    limitedEdition: 108,
    imageUrl: '/relics/pharaoh-crown.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Housed in cedar box with papyrus documentation',
    similarItems: ['heir-relic-ring', 'oracle-pendant']
  },
  {
    id: 'samurai-amulet',
    name: 'Samurai Honor Amulet',
    civilization: 'Feudal Japan',
    era: 'Japanese',
    type: 'Jewelry',
    price: 1899,
    description: 'A protective amulet worn by the legendary samurai of the Minamoto clan.',
    sacredDescription: 'This sacred amulet was blessed in the mountain shrines of Fuji and carried by the samurai warriors who defended the imperial throne. Its power lies in unwavering honor.',
    materials: 'Forged in sacred steel with jade inlay',
    craftsmanship: 'Blessed by Shinto priests under cherry blossoms',
    limitedEdition: 108,
    imageUrl: '/relics/samurai-amulet.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Wrapped in silk with bamboo scroll certification',
    similarItems: ['viking-talisman', 'heir-relic-ring']
  },
  {
    id: 'oracle-pendant',
    name: 'Oracle of Delphi Pendant',
    civilization: 'Ancient Greece',
    era: 'Greek',
    type: 'Jewelry',
    price: 3199,
    description: 'A pendant worn by the sacred Oracle, channeling divine prophecy.',
    sacredDescription: 'Worn by the Pythia herself at the Temple of Apollo, this pendant vibrates with the whispers of the gods. Its laurel design connects the wearer to divine wisdom.',
    materials: 'Forged in electrum with sacred olive wood',
    craftsmanship: 'Consecrated by the priests of Apollo at Delphi',
    limitedEdition: 108,
    imageUrl: '/relics/oracle-pendant.jpg',
    rating: 4,
    reviews: [],
    packaging: 'Enclosed in marble box with Greek inscriptions',
    similarItems: ['roman-signet', 'pharaoh-crown']
  },
  {
    id: 'roman-signet',
    name: 'Caesar\'s Signet Ring',
    civilization: 'Roman Empire',
    era: 'Roman',
    type: 'Jewelry',
    price: 3799,
    description: 'The personal signet of a Roman Caesar, symbol of imperial power.',
    sacredDescription: 'This signet ring bears the eagle of Rome and was used to seal the decrees that shaped an empire. Its weight carries the authority of the eternal city.',
    materials: 'Forged in imperial gold with carnelian seal',
    craftsmanship: 'Crafted by the finest artisans of the Roman Forum',
    limitedEdition: 108,
    imageUrl: '/relics/roman-signet.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Stored in ivory case with imperial documentation',
    similarItems: ['heir-relic-ring', 'viking-talisman']
  },
  {
    id: 'mystical-elixir',
    name: 'Elixir of Eternal Youth',
    civilization: 'Ancient India',
    era: 'Vedic',
    type: 'Fragrance',
    price: 2199,
    description: 'A sacred elixir distilled from the herbs of the Himalayan peaks.',
    sacredDescription: 'Blessed by the sages of the Himalayas, this elixir contains the essence of immortal flowers that bloom only under the full moon. Legend speaks of its power to restore vitality.',
    materials: 'Distilled from sacred lotus and himalayan herbs',
    craftsmanship: 'Blessed by Vedic priests in mountain temples',
    limitedEdition: 108,
    imageUrl: '/relics/mystical-elixir.jpg',
    rating: 4,
    reviews: [],
    packaging: 'Sealed in crystal vial with Sanskrit benedictions',
    similarItems: ['phoenix-essence', 'temple-incense']
  },
  {
    id: 'phoenix-essence',
    name: 'Phoenix Fire Essence',
    civilization: 'Ancient Persia',
    era: 'Persian',
    type: 'Fragrance',
    price: 2799,
    description: 'A rare essence captured from the flames of the legendary phoenix.',
    sacredDescription: 'This essence was gathered from the sacred fires that burn eternally in the towers of silence. It carries the power of rebirth and transformation.',
    materials: 'Distilled from phoenix tears and sacred flames',
    craftsmanship: 'Prepared by Zoroastrian fire keepers',
    limitedEdition: 108,
    imageUrl: '/relics/phoenix-essence.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Contained in obsidian vessel with fire seal',
    similarItems: ['mystical-elixir', 'temple-incense']
  },
  {
    id: 'viking-talisman',
    name: 'Thor\'s Lightning Talisman',
    civilization: 'Norse Vikings',
    era: 'Viking',
    type: 'Jewelry',
    price: 2299,
    description: 'A powerful talisman blessed by the thunder god himself.',
    sacredDescription: 'Forged in the fires of Asgard and blessed by Thor\'s hammer, this talisman channels the power of thunder and lightning. It protects warriors in battle.',
    materials: 'Forged in meteorite iron with runic inscriptions',
    craftsmanship: 'Blessed by Norse shamans under the northern lights',
    limitedEdition: 108,
    imageUrl: '/relics/viking-talisman.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Wrapped in wolf fur with runic scroll',
    similarItems: ['samurai-amulet', 'roman-signet']
  },
  {
    id: 'temple-incense',
    name: 'Sacred Temple Incense',
    civilization: 'Ancient Tibet',
    era: 'Tibetan',
    type: 'Fragrance',
    price: 1599,
    description: 'Holy incense burned in the highest monasteries of Tibet.',
    sacredDescription: 'This sacred incense was blessed by the Dalai Lama\'s predecessors and carries the prayers of a thousand monks. Its smoke connects earth to heaven.',
    materials: 'Blessed juniper and sacred herbs from Tibet',
    craftsmanship: 'Hand-rolled by Tibetan monks in mountain temples',
    limitedEdition: 108,
    imageUrl: '/relics/temple-incense.jpg',
    rating: 4,
    reviews: [],
    packaging: 'Wrapped in prayer flags with blessing scroll',
    similarItems: ['mystical-elixir', 'phoenix-essence']
  },
  {
    id: 'crystal-skull',
    name: 'Mayan Crystal Skull',
    civilization: 'Ancient Maya',
    era: 'Mayan',
    type: 'Artifact',
    price: 5499,
    description: 'A mysterious crystal skull with prophetic powers from the Maya.',
    sacredDescription: 'Carved from a single piece of quartz by Mayan priests, this skull is said to contain the wisdom of the feathered serpent. It reveals visions of the future.',
    materials: 'Carved from sacred Guatemalan crystal',
    craftsmanship: 'Shaped by Mayan astronomers and priests',
    limitedEdition: 108,
    imageUrl: '/relics/crystal-skull.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Housed in jade box with Mayan calendar',
    similarItems: ['oracle-pendant', 'pharaoh-crown']
  },
  {
    id: 'atlantean-scepter',
    name: 'Atlantean Wisdom Scepter',
    civilization: 'Lost Atlantis',
    era: 'Atlantean',
    type: 'Artifact',
    price: 6299,
    description: 'A legendary scepter from the sunken city of Atlantis.',
    sacredDescription: 'This scepter was wielded by the high priests of Atlantis before the great deluge. Its crystal core still pulses with the lost civilization\'s advanced knowledge.',
    materials: 'Forged from orichalcum with atlantean crystals',
    craftsmanship: 'Created by the master artificers of Atlantis',
    limitedEdition: 108,
    imageUrl: '/relics/atlantean-scepter.jpg',
    rating: 5,
    reviews: [],
    packaging: 'Sealed in waterproof crystal case',
    similarItems: ['crystal-skull', 'oracle-pendant']
  },
  {
    id: 'celtic-torque',
    name: 'Druidic Moon Torque',
    civilization: 'Ancient Celts',
    era: 'Celtic',
    type: 'Jewelry',
    price: 2699,
    description: 'A sacred torque worn by Celtic druids during moon ceremonies.',
    sacredDescription: 'This torque was worn by the arch-druids of Stonehenge during the sacred moon rituals. Its spiral design channels the eternal cycles of nature.',
    materials: 'Forged in sacred silver with moonstone inlays',
    craftsmanship: 'Blessed by druids under the harvest moon',
    limitedEdition: 108,
    imageUrl: '/relics/celtic-torque.jpg',
    rating: 4,
    reviews: [],
    packaging: 'Wrapped in oak leaves with Celtic blessing',
    similarItems: ['viking-talisman', 'oracle-pendant']
  }
];

export const eras = ['All Eras', 'Vedic', 'Egyptian', 'Roman', 'Greek', 'Babylonian', 'Japanese', 'Persian', 'Viking', 'Tibetan', 'Mayan', 'Atlantean', 'Celtic'];
export const types = ['All Types', 'Jewelry', 'Fragrance', 'Artifact'];