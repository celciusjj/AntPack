import { getData, Keys, saveData } from '@/store';
import { router } from 'expo-router';
import { useState } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Character } from '../models';
import { useCharacterContext } from '../provider/CharacterProvider';

export const useCharacterCardFooter = (character: Character) => {
  const { setCharacter } = useCharacterContext();
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    setCharacter(character);
    router.push({
      pathname: '/[id]',
      params: { id: character.id.toString() },
    });
  };

  const toggleFavorite = async () => {
    scale.value = withSpring(1.4, { damping: 5, stiffness: 150 }, () => {
      scale.value = withSpring(1);
    });

    const stored = (await getData<number[]>(Keys.FAVORITE)) || [];
    const updated = isFavorite
      ? stored.filter((id: number) => id !== character.id)
      : [...stored, character.id];

    await saveData(Keys.FAVORITE, updated);
    setIsFavorite(!isFavorite);
  };

  return { handlePress, toggleFavorite, isFavorite, animatedStyle };
};
