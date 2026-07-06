"use client";

import { useState } from "react";
import { GameCard } from "@/components/GameCard";
import type { Game } from "@/lib/games";

const COLUMN_OPTIONS = [2, 3, 4] as const;
type Columns = (typeof COLUMN_OPTIONS)[number];

const GRID_COLS_CLASS: Record<Columns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

const GRID_GAP_CLASS: Record<Columns, string> = {
  2: "gap-x-8 gap-y-16",
  3: "gap-x-6 gap-y-12",
  4: "gap-x-4 gap-y-10",
};

function ColumnsToggle({ columns, onChange }: { columns: Columns; onChange: (n: Columns) => void }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-white/50">
      <span>Rows of</span>
      {COLUMN_OPTIONS.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`rounded-full border px-2.5 py-1 transition-colors ${
            columns === n
              ? "border-white bg-white text-black"
              : "border-white/20 hover:border-white/50 hover:text-white"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export function GamesGrid({ zaneyGames, otherGames }: { zaneyGames: Game[]; otherGames: Game[] }) {
  const [columns, setColumns] = useState<Columns>(2);

  return (
    <>
      <section id="works" className="px-4 py-12 sm:px-8">
        <div className="mb-8 flex items-center justify-end">
          <ColumnsToggle columns={columns} onChange={setColumns} />
        </div>
        <div className={`grid ${GRID_GAP_CLASS[columns]} ${GRID_COLS_CLASS[columns]}`}>
          {zaneyGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/15 px-4 py-12 sm:px-8">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          Other games
        </h2>
        <div className={`grid ${GRID_GAP_CLASS[columns]} ${GRID_COLS_CLASS[columns]}`}>
          {otherGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </>
  );
}
