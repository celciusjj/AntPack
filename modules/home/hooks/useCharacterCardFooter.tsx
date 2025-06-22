import { router } from 'expo-router';
import { Character } from '../models';
import { useCharacterContext } from '../provider/CharacterProvider';
import { useFavoriteCharacter } from './useFavoriteCharacter';

export const useCharacterCardFooter = (character: Character) => {
  const { isFavorite, animatedStyle, toggleFavorite } = useFavoriteCharacter(character);
  const { setCharacter } = useCharacterContext();

  const handlePress = () => {
    setCharacter({ ...character, isFavorite });
    router.push({
      pathname: '/[id]',
      params: { id: character.id.toString() },
    });
  };

  return { handlePress, toggleFavorite, isFavorite, animatedStyle };
};
