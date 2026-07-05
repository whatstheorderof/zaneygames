import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="h-full transition-colors group-hover:border-amber-500/40">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-stone-50 group-hover:text-amber-300">
              {game.name}
            </CardTitle>
            {game.status === "wip" && (
              <Badge className="border-stone-600 bg-stone-900 text-stone-400">
                Coming soon
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="text-sm text-stone-400">{game.tagline}</CardContent>
      </Card>
    </a>
  );
}
