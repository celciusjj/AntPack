import { Character, CharacterDTO } from "../models";

export const characterAdapter = (response: CharacterDTO[]) => {
  const adapted: Character[] = response?.map((character) => {
    return {
      id: character.id,
      gender: character.gender,
      name: character.name,
      species: character.species,
      status: character.status,
      type: character.type,
      image: character.image,
      isFavorite: false,
    };
  });

  return adapted ?? [];
};
