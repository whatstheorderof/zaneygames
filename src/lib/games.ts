export type Game = {
  name: string;
  tagline: string;
  url: string;
  status: "live" | "wip";
};

export const zaneyGames: Game[] = [
  {
    name: "Zaney Sudoku",
    tagline: "Daily sudoku with a Zaney twist.",
    url: "https://www.zaneysudoku.com/",
    status: "live",
  },
  {
    name: "Zaney Tarot",
    tagline: "Draw your daily cards.",
    url: "https://www.zaneytarot.com/",
    status: "live",
  },
  {
    name: "Zaney Links",
    tagline: "Connect the chain, word by word.",
    url: "https://zaneylinks.vercel.app/",
    status: "live",
  },
  {
    name: "Zaney Cube",
    tagline: "A daily cube puzzle to twist your brain.",
    url: "https://zaneycube.vercel.app/",
    status: "live",
  },
  {
    name: "Zaney Word",
    tagline: "Guess the word of the day.",
    url: "https://zaneyword.vercel.app/",
    status: "live",
  },
];

export const otherGames: Game[] = [
  {
    name: "Say More",
    tagline: "A game about saying more than you should.",
    url: "https://saymoregame.com/",
    status: "live",
  },
];
