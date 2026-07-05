import { SiteHeader } from "@/components/SiteHeader";
import { GameCard } from "@/components/GameCard";
import { zaneyGames, otherGames } from "@/lib/games";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl flex-1 px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl">
            The Zaney universe of games.
          </h1>
          <p className="mt-3 max-w-2xl text-stone-400">
            Daily puzzles, quick brain-benders, and games worth bookmarking. Pick one
            and jump in — new ones show up here as they ship.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-stone-100">Zaney games</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zaneyGames.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-stone-100">Other games</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherGames.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-stone-800 px-4 py-6 text-center text-xs text-stone-600">
        zaney.games
      </footer>
    </>
  );
}
