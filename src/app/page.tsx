import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GamesGrid } from "@/components/GamesGrid";
import { zaneyGames, otherGames } from "@/lib/games";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-white/15 px-4 py-10 sm:px-8">
          <p className="text-sm text-white/60 sm:ml-auto sm:max-w-xl sm:text-right sm:text-base">
            A growing universe of daily puzzles and quick brain-benders. Pick a
            game and jump in — new ones show up here as they ship.
          </p>
        </section>

        <GamesGrid zaneyGames={zaneyGames} otherGames={otherGames} />

        <section id="info" className="border-t border-white/15 px-4 py-16 sm:px-8">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Info
          </h2>
          <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
            Zaney Games is home to a growing family of small, daily puzzle
            games — sudoku, tarot, word chains, cubes, and whatever&apos;s
            next. Each one lives on its own, but they all share the same
            obsession: a fast daily loop worth coming back to.
          </p>
        </section>

        <section id="contact" className="border-t border-white/15 px-4 py-16 sm:px-8">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Contact
          </h2>
          <a
            href="mailto:deathbyleisure@gmail.com"
            className="block text-3xl font-bold uppercase tracking-tight hover:text-white/70 sm:text-5xl"
          >
            deathbyleisure@gmail.com
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
