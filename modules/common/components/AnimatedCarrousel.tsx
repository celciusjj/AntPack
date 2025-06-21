import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_WIDTH = SCREEN_WIDTH / 2.5;
const SPACER_WIDTH = (SCREEN_WIDTH - ITEM_WIDTH) / 2;

interface Props<T> {
  data: T[];
  renderCard: (params: {
    item: T;
    index: number;
    scrollX: Animated.Value;
    itemWidth: number;
  }) => React.ReactElement;
}

export const AnimatedCarousel = <T,>({ data, renderCard }: Props<T>) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH + 20}
      decelerationRate="fast"
      bounces={false}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingHorizontal: SPACER_WIDTH,
        alignItems: "center",
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      renderItem={({ item, index }: ListRenderItemInfo<T>) =>
        renderCard({ item, index, scrollX, itemWidth: ITEM_WIDTH })
      }
    />
  );
};
