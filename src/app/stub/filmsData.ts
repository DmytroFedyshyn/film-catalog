import { Film } from "../../models/film";

export const films: Film[] = [
  {
    id: 1,
    name: "Schindler's List",
    year: 1993,
    description: "The film tells the true story of the enigmatic Oskar Schindler, a Nazi party member and successful businessman who saved nearly 1,200 Jews during World War II.",
    genre: [1, 2, 3],
    actors: [1]
  },
  {
    id: 2,
    name: "The Lord of the Rings: The Two Towers",
    year: 2002,
    description: "The fellowship is broken, but the Ring of Power must be destroyed. Frodo and Sam trust Gollum to lead them to the gates of Mordor. Saruman’s massive army approaches, and the fellowship and their allies are ready to fight. The battle for Middle-earth continues.",
    genre: [4, 5, 1, 6],
    actors: [2, 12]
  },
  {
    id: 3,
    name: "WALL·E",
    year: 2008,
    description: "Robot WALL·E works diligently on the abandoned Earth, cleaning up the garbage left behind by humans who fled into space. Soon, incredible events will unfold, allowing him to make friends, journey to the stars, and even improve his former masters who have forgotten their home planet.",
    genre: [7],
    actors: []
  },
  {
    id: 4,
    name: "Gladiator",
    year: 2000,
    description: "In the great Roman Empire, there was no commander like General Maximus. His undefeated legions adored him and would follow him to the gates of hell. But betrayal left him fighting for his life as a gladiator.",
    genre: [3, 6, 1, 5],
    actors: [3]
  },
  {
    id: 5,
    name: "Treasure Island",
    year: 1988,
    description: "The schooner Hispaniola sails in search of an island where the legendary treasures of pirate Captain Flint are hidden. A mutiny brews on board, led by the one-legged John Silver, and the outlaws seem close to their goal.",
    genre: [7],
    actors: [13]
  },
  {
    id: 6,
    name: "Hacksaw Ridge",
    year: 2016,
    description: "American army medic Desmond Doss, who served during the Battle of Okinawa in World War II, refuses to kill people and becomes the first conscientious objector in U.S. history to be awarded the Medal of Honor.",
    genre: [2, 1, 3],
    actors: [4]
  },
  {
    id: 7,
    name: "Shutter Island",
    year: 2009,
    description: "Two U.S. Marshals travel to an island in Massachusetts to investigate the disappearance of a patient from a mental hospital for the criminally insane. As they investigate, they confront a web of lies, a looming storm, and a deadly revolt by the inmates.",
    genre: [9, 10, 1],
    actors: [5]
  },
  {
    id: 8,
    name: "Harry Potter and the Deathly Hallows: Part II",
    year: 2011,
    description: "In the epic final chapter, the battle between good and evil forces of the wizarding world escalates into an all-out war. Harry Potter may have to make the ultimate sacrifice in the climactic showdown with Voldemort.",
    genre: [4, 10, 5],
    actors: [6, 11]
  },
  {
    id: 9,
    name: "Saw III",
    year: 2006,
    description: "Jigsaw abducts a doctor in order to keep himself alive while he watches his new apprentice put an unlucky citizen named Jeff through a brutal test.",
    genre: [4, 10, 5],
    actors: [7]
  },
  {
    id: 10,
    name: "Back to the Future Part II",
    year: 1989,
    description: "The continuation of the fantastic adventure of an American teenager traveling through time. This time, with Doc’s upgraded time machine, Marty travels from the 80s into the future.",
    genre: [11, 5, 6, 8],
    actors: [8]
  },
  {
    id: 11,
    name: "Ratatouille",
    year: 2007,
    description: "Remy the rat possesses a unique taste and is willing to risk his life to watch his favorite cooking show or find fresh ingredients. Living among his fellow rats who don't understand his passion for cooking, Remy ends up in a fancy restaurant's kitchen and decides to make the most of his chance.",
    genre: [7],
    actors: []
  },
  {
    id: 12,
    name: "Shrek 2",
    year: 2004,
    description: "Shrek and Fiona return from their honeymoon to find a letter from Fiona’s parents inviting them to dinner, unaware that their daughter is now an ogre. Alongside Donkey, the happy couple embarks on a journey full of surprises and gains many new friends along the way.",
    genre: [7, 4, 8, 5],
    actors: []
  },
  {
    id: 13,
    name: "Monsters, Inc.",
    year: 2001,
    description: "A full-length animated film about the crises in the monster world, their lives, and what happens when a human child enters their realm, causing chaos.",
    genre: [7, 8, 4],
    actors: []
  },
  {
    id: 14,
    name: "Star Wars: Episode III – Revenge of the Sith",
    year: 2005,
    description: "The Clone Wars have raged for three years, and the Galactic Republic has become a battlefield. Jedi knights, defenders of peace and justice, struggle against the forces of darkness threatening to consume the galaxy.",
    genre: [11, 6, 4, 5],
    actors: [9, 14]
  },
  {
    id: 15,
    name: "The Taming of the Scoundrel",
    year: 1980,
    description: "A rough farmer who despises female company is quite happy with his bachelor life until a woman tries to change his views and win his heart.",
    genre: [8],
    actors: []
  },
  {
    id: 16,
    name: "Aladdin",
    year: 1992,
    description: "In the city of Agrabah, Aladdin, a charming thief with a golden heart, is unaware that he is about to embark on the greatest adventure of his life involving a powerful genie and a magical lamp.",
    genre: [7, 4, 8, 5],
    actors: []
  },
  {
    id: 17,
    name: "The Matrix",
    year: 1999,
    description: "Thomas Anderson’s life is divided between his day job as an office worker and his alter ego as Neo, a hacker who knows no bounds in the network. But his life changes when he learns the horrifying truth about reality.",
    genre: [11, 6],
    actors: []
  },
  {
    id: 18,
    name: "The Prestige",
    year: 2006,
    description: "Robert and Alfred are rival magicians whose friendship turns into bitter competition at the turn of the 19th century in London.",
    genre: [9, 11, 1, 10],
    actors: [10]
  },
  {
    id: 19,
    name: "Avengers: Infinity War",
    year: 2018,
    description: "As the Avengers and their allies continue to protect the world, a new cosmic threat emerges: Thanos. He seeks the six Infinity Stones, powerful artifacts that could change reality at will.",
    genre: [11, 6, 5],
    actors: [15]
  },
  {
    id: 20,
    name: "The King's Speech",
    year: 2010,
    description: "The Duke prepares to become King George VI of Britain, father of Queen Elizabeth II. As he struggles with a speech impediment and self-doubt, he seeks help from an unorthodox speech therapist.",
    genre: [1, 2, 3],
    actors: [10]
  },
  {
    id: 21,
    name: "Frozen",
    year: 2013,
    description: "When an ancient prophecy comes true and the kingdom is plunged into eternal winter, three heroes set out to find Elsa, whose magic has trapped the land in ice.",
    genre: [7, 8, 4, 5],
    actors: []
  }
];
