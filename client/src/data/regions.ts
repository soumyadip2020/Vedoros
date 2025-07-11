export interface Region {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  civilization: string;
  relics: string[];
}

export const regions: Region[] = [
  {
    id: 'india',
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    description: 'Ancient land of mystic temples, sacred artifacts, and spiritual treasures spanning millennia of divine heritage.',
    civilization: 'Indus Valley & Vedic',
    relics: ['Sacred Lotus Sculptures', 'Vedic Fire Altars', 'Temple Bells', 'Ancient Manuscripts']
  },
  {
    id: 'greece',
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    description: 'Birthplace of philosophy and democracy, home to legendary artifacts of gods, heroes, and ancient wisdom.',
    civilization: 'Ancient Greek',
    relics: ['Golden Laurel Wreaths', 'Amphora Vessels', 'Marble Statues', 'Oracle Tablets']
  },
  {
    id: 'egypt',
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    description: 'Land of pharaohs and pyramids, guardian of mystical treasures and secrets of the afterlife.',
    civilization: 'Ancient Egyptian',
    relics: ['Golden Scarabs', 'Canopic Jars', 'Papyrus Scrolls', 'Pharaoh Masks']
  },
  {
    id: 'japan',
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    description: 'Island nation of ancient traditions, home to samurai artifacts, sacred shrines, and spiritual treasures.',
    civilization: 'Ancient Japanese',
    relics: ['Samurai Swords', 'Shrine Bells', 'Ceramic Tea Sets', 'Jade Ornaments']
  },
  {
    id: 'rome',
    name: 'Rome',
    lat: 41.9028,
    lng: 12.4964,
    description: 'Eternal city of emperors and gladiators, keeper of imperial treasures and architectural marvels.',
    civilization: 'Roman Empire',
    relics: ['Imperial Coins', 'Gladiator Armor', 'Marble Busts', 'Legion Standards']
  }
];
