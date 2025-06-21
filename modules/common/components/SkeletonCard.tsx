import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 2.2;

export const SkeletonCard = () => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: 260,
    marginHorizontal: 10,
    borderRadius: 16,
    backgroundColor: '#c6c6c6',
  },
});
