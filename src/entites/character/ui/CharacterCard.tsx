import { type Character } from "../model";
import { Card, CardTitle, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface Props {
  character: Character;
  onToggleFavorite: (id: Character["id"]) => void;
}

export const CharacterCard = ({ character, onToggleFavorite }: Props) => {
  return (
    <Card className="overflow-hidden relative rounded-2xl shadow-md p-0">
      <div className="relative w-full h-60">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />

        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white"
          onClick={() => onToggleFavorite(character.id)}
          title={
            character.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Star
            className={cn("h-5 w-5", character.isFavorite && "fill-yellow-300")}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <CardTitle className="mb-1 text-lg">{character.name}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {character.species} • {character.status}
        </div>
      </CardContent>
    </Card>
  );
};
