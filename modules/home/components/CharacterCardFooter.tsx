import { showFavoriteIcon } from '@/utils/showFavoriteIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useCharacterCardFooter } from '../hooks/useCharacterCardFooter';
import { Character } from '../models';
import { Button } from './Button';

export const CharacterCardFooter = ({ character }: { character: Character }) => {
  const { animatedStyle, handlePress, isFavorite, toggleFavorite } =
    useCharacterCardFooter(character);
  return (
    <View style={styles.label}>
      <Text style={styles.text}>{character.name}</Text>

      <View style={styles.buttonsRow}>
        <Pressable onPress={toggleFavorite}>
          <Animated.View style={[animatedStyle]}>
            <Text style={styles.favoriteText}>{showFavoriteIcon(isFavorite)}</Text>
          </Animated.View>
        </Pressable>
        <Button handlePress={handlePress}>Ver détalles</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  favoriteButton: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  favoriteText: {
    fontSize: 16,
  },
});
