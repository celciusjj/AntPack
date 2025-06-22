import React from 'react';
import { Dimensions, FlatListProps } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  data: T[];
  itemWidth: number;
  renderCard: (params: {
    item: T;
    index: number;
    scrollX: SharedValue<number>;
    itemWidth: number;
  }) => React.ReactElement;
}

export const AnimatedCarousel = <T,>({ data, renderCard, itemWidth }: Props<T>) => {
  const scrollX = useSharedValue(0);
  const SPACER_WIDTH = (SCREEN_WIDTH - itemWidth) / 2;

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth + 20}
      decelerationRate="fast"
      bounces={false}
      scrollEventThrottle={16}
      onScroll={onScroll}
      contentContainerStyle={{
        paddingHorizontal: SPACER_WIDTH,
        alignItems: 'center',
      }}
      renderItem={({ item, index }) => renderCard({ item, index, scrollX, itemWidth })}
    />
  );
};
