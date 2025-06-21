import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SCREEN_WIDTH / 2.5;

export const SkeletonCard = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder borderRadius={16}>
        <SkeletonPlaceholder.Item width={ITEM_WIDTH} height={260} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: 260,
    marginHorizontal: 10,
  },
});
