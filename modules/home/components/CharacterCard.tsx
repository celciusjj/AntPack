import React from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import { Character } from "../models";
import { CharacterCardFooter } from "./CharacterCardFooter";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SCREEN_WIDTH / 2.5;

type Props = {
  character: Character;
  index: number;
  scrollX: Animated.Value;
};

export const CharacterCard = ({ character, index, scrollX }: Props) => {
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + 20;

  const inputRange = [
    (index - 1) * TOTAL_ITEM_WIDTH,
    index * TOTAL_ITEM_WIDTH,
    (index + 1) * TOTAL_ITEM_WIDTH,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1.2, 0.7],
    extrapolate: "clamp",
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.card}>
      <Animated.View
        style={[
          styles.imageWrapper,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Image
          source={{ uri: character.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </Animated.View>
      <CharacterCardFooter character={character} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: 260,
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "flex-end",
  },
  imageWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
