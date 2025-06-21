import React, { useRef } from 'react';
import { Animated, Dimensions, ListRenderItemInfo } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props<T> {
  data: T[];
  itemWidth: number;
  renderCard: (params: {
    item: T;
    index: number;
    scrollX: Animated.Value;
    itemWidth: number;
  }) => React.ReactElement;
}

export const AnimatedCarousel = <T,>({ data, renderCard, itemWidth }: Props<T>) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const SPACER_WIDTH = (SCREEN_WIDTH - itemWidth) / 2;

  return (
    <Animated.FlatList
      data={data as Animated.WithAnimatedObject<ArrayLike<T>> | null | undefined}
      keyExtractor={(_, i) => i.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth + 20}
      decelerationRate="fast"
      bounces={false}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingHorizontal: SPACER_WIDTH,
        alignItems: 'center',
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true,
      })}
      renderItem={({ item, index }: ListRenderItemInfo<T>) =>
        renderCard({ item, index, scrollX, itemWidth })
      }
    />
  );
};
