import { getData, Keys, saveData } from '@/store';
import { useState } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Character } from '../models';

export const useFavoriteCharacter = (character: Character) => {
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);
  const scale = useSharedValue(1);

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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    isFavorite,
    toggleFavorite,
    animatedStyle,
  };
};
