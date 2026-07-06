export type Game = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  url: string;
  status: "live" | "wip";
};

export const zaneyGames: Game[] = [
  {
    slug: "zaney-sudoku",
    name: "Zaney Sudoku",
    tagline: "Daily sudoku with a Zaney twist.",
    category: "Puzzle",
    url: "https://www.zaneysudoku.com/",
    status: "live",
  },
  {
    slug: "zaney-tarot",
    name: "Zaney Tarot",
    tagline: "Draw your daily cards.",
    category: "Divination",
    url: "https://www.zaneytarot.com/",
    status: "live",
  },
  {
    slug: "zaney-links",
    name: "Zaney Links",
    tagline: "Connect the chain, word by word.",
    category: "Word",
    url: "https://zaneylinks.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-cube",
    name: "Zaney Cube",
    tagline: "A daily cube puzzle to twist your brain.",
    category: "Puzzle",
    url: "https://zaneycube.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-word",
    name: "Zaney Word",
    tagline: "Guess the word of the day.",
    category: "Word",
    url: "https://zaneyword.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-search",
    name: "Zaney Search",
    tagline: "Daily themed word search, hidden bonus word included.",
    category: "Word",
    url: "https://zaneysearch.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-logic",
    name: "Zaney Logic",
    tagline: "A new logic deduction case to crack every day.",
    category: "Logic",
    url: "https://zaneylogic.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-strands",
    name: "Zaney Strands",
    tagline: "Trace connected letters to reveal the hidden story.",
    category: "Word",
    url: "https://zaneystrands.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-kakuro",
    name: "Zaney Kakuro",
    tagline: "Crossword meets arithmetic.",
    category: "Puzzle",
    url: "https://zaneykakuro.vercel.app/",
    status: "live",
  },
  {
    slug: "zaney-aquarium",
    name: "Zaney Aquarium",
    tagline: "A tiny pastel puzzle world — rotate, slide, flow.",
    category: "Puzzle",
    url: "https://zaneyaquarium.vercel.app/",
    status: "live",
  },
];

export const otherGames: Game[] = [
  {
    slug: "say-more",
    name: "Say More",
    tagline: "A game about saying more than you should.",
    category: "Party",
    url: "https://saymoregame.com/",
    status: "live",
  },
  {
    slug: "saz-sky-roads",
    name: "SAZ: Sky Roads The Game",
    tagline: "A neon flight through Dante's nine circles.",
    category: "Arcade",
    url: "https://sazskyroads.vercel.app/",
    status: "live",
  },
];

export const allGames: Game[] = [...zaneyGames, ...otherGames];
