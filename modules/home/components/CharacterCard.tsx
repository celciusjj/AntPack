import React from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { Character } from '../models';
import { CharacterCardFooter } from './CharacterCardFooter';

type Props = {
  character: Character;
  index: number;
  scrollX: Animated.Value;
  itemWidth: number;
};

export const CharacterCard = ({ character, index, scrollX, itemWidth }: Props) => {
  const TOTAL_ITEM_WIDTH = itemWidth + 20;

  const inputRange = [
    (index - 1) * TOTAL_ITEM_WIDTH,
    index * TOTAL_ITEM_WIDTH,
    (index + 1) * TOTAL_ITEM_WIDTH,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1.2, 0.7],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.card, { width: itemWidth }]}>
      <Animated.View
        style={[
          styles.imageWrapper,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}>
        <Image source={{ uri: character.image }} style={styles.image} resizeMode="cover" />
      </Animated.View>
      <CharacterCardFooter character={character} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 260,
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'transparency',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
