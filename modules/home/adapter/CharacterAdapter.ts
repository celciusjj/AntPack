import { getData, Keys } from "@/store";
import { Character, CharacterDTO } from "../models";

export const characterAdapter = async (response: CharacterDTO[]) => {
  const favorites = (await getData<number[]>(Keys.FAVORITE)) || [];
  const adapted: Character[] = response?.map((character) => {
    return {
      id: character.id,
      gender: character.gender,
      name: character.name,
      species: character.species,
      status: character.status,
      type: character.type,
      image: character.image,
      isFavorite: favorites.includes(character.id),
    };
  });

  return adapted ?? [];
};
