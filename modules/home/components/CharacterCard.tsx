import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Character } from '../models';
import { CharacterCardFooter } from './CharacterCardFooter';

type Props = {
  character: Character;
  index: number;
  scrollX: SharedValue<number>;
  itemWidth: number;
};

export const CharacterCard = ({ character, index, scrollX, itemWidth }: Props) => {
  const TOTAL_ITEM_WIDTH = itemWidth + 20;

  const inputRange = [
    (index - 1) * TOTAL_ITEM_WIDTH,
    index * TOTAL_ITEM_WIDTH,
    (index + 1) * TOTAL_ITEM_WIDTH,
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, inputRange, [0.7, 1.2, 0.7], Extrapolation.CLAMP);
    const opacity = interpolate(scrollX.value, inputRange, [0.3, 1, 0.3], Extrapolation.CLAMP);

    return {
      transform: [{ scale }],
      opacity,
    };
  }, [scrollX]);

  const footerAnimatedStyle = useAnimatedStyle(() => {
    const currentOffset = scrollX.value;
    const itemCenter = index * TOTAL_ITEM_WIDTH;
    const isCentered = Math.abs(currentOffset - itemCenter) < 10;

    return {
      opacity: isCentered ? 1 : 0,
      transform: [{ scale: isCentered ? 1 : 0.95 }],
    };
  }, [scrollX]);

  return (
    <View style={[styles.card, { width: itemWidth }]}>
      <Animated.View style={[styles.imageWrapper, animatedStyle]}>
        <Animated.Image source={{ uri: character.image }} style={styles.image} resizeMode="cover" />
      </Animated.View>
      <Animated.View style={footerAnimatedStyle}>
        <CharacterCardFooter character={character} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 260,
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'transparent',
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
